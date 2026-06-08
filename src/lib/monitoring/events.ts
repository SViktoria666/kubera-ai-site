export function recordContactSubmission(event: { locale: "en" | "ru"; hasWebhookConfigured: boolean }) {
  if (process.env.NODE_ENV !== "production") {
    console.info("contact_submission", event);
  }
}

