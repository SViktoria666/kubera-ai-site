import { NextResponse } from "next/server";
import { createContactLeadEnvelope, isN8nConfigured } from "@/lib/integrations/n8n";
import { recordContactRateLimit, recordContactRejection, recordContactSubmission } from "@/lib/monitoring/events";
import { getClientIp, getRequestId, getUserAgent, safeJson } from "@/lib/security/request";
import { checkRateLimit } from "@/lib/rate-limit/memory";
import { assessContactRequest } from "@/lib/security/bot-protection";
import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const requestId = getRequestId(request);
  const ip = getClientIp(request);
  const userAgent = getUserAgent(request);
  const rateLimit = checkRateLimit(`contact:${ip}`);

  if (!rateLimit.allowed) {
    recordContactRateLimit({ requestId, ip, resetAt: rateLimit.resetAt });
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  const payload = await safeJson(request);
  const parsed = contactFormSchema.safeParse(payload);

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

  const leadEnvelope = createContactLeadEnvelope(parsed.data);

  recordContactSubmission({
    requestId,
    locale: parsed.data.locale,
    hasN8nWebhookConfigured: isN8nConfigured(),
    hasTelegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
    hasCompany: Boolean(leadEnvelope.lead.company),
    hasWhatsapp: Boolean(leadEnvelope.lead.whatsapp),
    hasTelegram: Boolean(leadEnvelope.lead.telegram),
  });

  // Future integration boundary:
  // server-only API route -> n8n webhook/email/CRM/Telegram.
  // Never expose webhook URLs or API keys to browser code.
  return NextResponse.json({ ok: true, requestId });
}
