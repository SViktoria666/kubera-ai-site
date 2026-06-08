import { NextResponse } from "next/server";
import { recordContactSubmission } from "@/lib/monitoring/events";
import { getClientIp, safeJson } from "@/lib/security/request";
import { checkRateLimit } from "@/lib/rate-limit/memory";
import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`contact:${ip}`);

  if (!rateLimit.allowed) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  const payload = await safeJson(request);
  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid form payload" }, { status: 400 });
  }

  recordContactSubmission({
    locale: parsed.data.locale,
    hasWebhookConfigured: Boolean(process.env.N8N_CONTACT_WEBHOOK_URL),
  });

  // Future integration boundary:
  // server-only API route -> n8n webhook/email/CRM.
  // Never expose webhook URLs or API keys to browser code.
  return NextResponse.json({ ok: true });
}

