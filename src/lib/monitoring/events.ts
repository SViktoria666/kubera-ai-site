export function recordContactSubmission(event: {
  requestId: string;
  locale: "en" | "ru";
  hasN8nWebhookConfigured: boolean;
  hasTelegramConfigured: boolean;
  hasAnalyticsContext: boolean;
  hasCompany: boolean;
  hasWhatsapp: boolean;
  hasTelegram: boolean;
}) {
  if (process.env.NODE_ENV !== "production") {
    console.info("contact_submission", event);
  }
}

export function recordContactRejection(event: { requestId: string; reason: string; ip: string; userAgent: string }) {
  if (process.env.NODE_ENV !== "production") {
    console.warn("contact_rejected", event);
  }
}

export function recordContactRateLimit(event: { requestId: string; ip: string; resetAt: number }) {
  if (process.env.NODE_ENV !== "production") {
    console.warn("contact_rate_limited", event);
  }
}

export function recordContactDeliveryFailure(event: {
  requestId: string;
  reason: "missing_env" | "webhook_error" | "unexpected_error";
  status?: number;
}) {
  console.error("contact_delivery_failed", event);
}
