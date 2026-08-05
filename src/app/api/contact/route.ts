import { NextResponse } from "next/server";
import {
  createContactLeadEnvelope,
  createN8nContactLeadPayload,
  isN8nConfigured,
  sendContactLeadToN8n,
} from "@/lib/integrations/n8n";
import { buildJourneySummary, buildTelegramJourneySummary } from "@/lib/analytics/summary";
import {
  recordContactDeliveryFailure,
  recordContactRateLimit,
  recordContactRejection,
  recordContactSubmission,
} from "@/lib/monitoring/events";
import { getClientIp, getRequestId, getSafeGeoMetadata, getUserAgent, safeJsonWithLimit } from "@/lib/security/request";
import { checkRateLimit } from "@/lib/rate-limit/memory";
import { assessContactRequest } from "@/lib/security/bot-protection";
import { contactFormSchema } from "@/lib/validation/contact";
import { normalizeAnalyticsContext } from "@/lib/validation/analytics";

const CONTACT_MAX_BODY_BYTES = 48 * 1024;

export async function POST(request: Request) {
  const requestId = getRequestId(request);
  const ip = getClientIp(request);
  const userAgent = getUserAgent(request);
  const rateLimit = checkRateLimit(`contact:${ip}`);

  if (!rateLimit.allowed) {
    recordContactRateLimit({ requestId, ip, resetAt: rateLimit.resetAt });
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  const payload = await safeJsonWithLimit(request, CONTACT_MAX_BODY_BYTES);
  if (!payload.ok) {
    return NextResponse.json({ ok: false, error: "Invalid form payload" }, { status: payload.reason === "too_large" ? 413 : 400 });
  }

  const payloadBody = payload.data;
  const parsed = contactFormSchema.safeParse(payloadBody);

  if (!parsed.success) {
    recordContactRejection({ requestId, reason: "validation", ip, userAgent });
    return NextResponse.json({ ok: false, error: "Invalid form payload" }, { status: 400 });
  }

  const botAssessment = assessContactRequest({
    honeypot: parsed.data.website,
    userAgent,
    contentLength: request.headers.get("content-length"),
  });

  if (!botAssessment.allowed) {
    recordContactRejection({ requestId, reason: botAssessment.reason || "bot_protection", ip, userAgent });
    return NextResponse.json({ ok: true });
  }

  const rawAnalyticsContext = parsed.data.analyticsContext;
  const analyticsContext = normalizeAnalyticsContext(rawAnalyticsContext);
  const geoMetadata = getSafeGeoMetadata(request);
  const safeAnalyticsContext =
    analyticsContext && geoMetadata
      ? {
          ...analyticsContext,
          geo: {
            ...(analyticsContext.geo || {}),
            ...geoMetadata,
          },
        }
      : analyticsContext || undefined;
  const analyticsSummary = safeAnalyticsContext ? buildJourneySummary(safeAnalyticsContext) : undefined;
  const analyticsTelegramSummary = safeAnalyticsContext ? buildTelegramJourneySummary(safeAnalyticsContext) : undefined;
  const analyticsWarning = rawAnalyticsContext && !safeAnalyticsContext ? "invalid" : !rawAnalyticsContext ? "missing" : null;

  if (analyticsWarning) {
    console.warn("analytics_context_warning", {
      requestId,
      warning: analyticsWarning,
      page: parsed.data.page,
    });
  }

  const leadEnvelope = createContactLeadEnvelope(
    safeAnalyticsContext
      ? { ...parsed.data, analyticsContext: safeAnalyticsContext, analyticsSummary, analyticsTelegramSummary }
      : parsed.data,
    parsed.data.page,
  );
  const outgoingPayload = createN8nContactLeadPayload(
    safeAnalyticsContext
      ? { ...parsed.data, analyticsContext: safeAnalyticsContext, analyticsSummary, analyticsTelegramSummary }
      : parsed.data,
    parsed.data.page,
  );

  console.info("contact_payload_debug", {
    requestId,
    payloadKeys: Object.keys(outgoingPayload).sort(),
    hasCompany: Boolean(outgoingPayload.company),
    hasMessage: Boolean(outgoingPayload.message),
    hasPage: Boolean(outgoingPayload.page),
    hasLocale: Boolean(outgoingPayload.locale),
  });

  recordContactSubmission({
    requestId,
    locale: parsed.data.locale,
    hasN8nWebhookConfigured: isN8nConfigured(),
    hasTelegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
    hasAnalyticsContext: Boolean(safeAnalyticsContext),
    hasCompany: Boolean(leadEnvelope.lead.company),
    hasWhatsapp: Boolean(leadEnvelope.lead.whatsapp),
    hasTelegram: Boolean(leadEnvelope.lead.telegram),
  });

  try {
    const delivery = await sendContactLeadToN8n(
      safeAnalyticsContext
        ? { ...parsed.data, analyticsContext: safeAnalyticsContext, analyticsSummary, analyticsTelegramSummary }
        : parsed.data,
      parsed.data.page,
    );

    if (!delivery.ok) {
      recordContactDeliveryFailure({
        requestId,
        reason: delivery.reason,
        status: delivery.reason === "webhook_error" ? delivery.status : undefined,
      });

      const status = delivery.reason === "missing_env" ? 503 : 502;
      return NextResponse.json({ ok: false, error: "Contact delivery is temporarily unavailable", requestId }, { status });
    }
  } catch {
    recordContactDeliveryFailure({ requestId, reason: "unexpected_error" });
    return NextResponse.json({ ok: false, error: "Contact delivery is temporarily unavailable", requestId }, { status: 502 });
  }

  return NextResponse.json({ ok: true, requestId });
}
