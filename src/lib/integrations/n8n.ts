import type { ContactFormPayload } from "@/lib/validation/contact";

export type ContactLeadEnvelope = {
  source: "kubera-ai-site";
  receivedAt: string;
  lead: Omit<ContactFormPayload, "website">;
};

export function createContactLeadEnvelope(lead: ContactFormPayload): ContactLeadEnvelope {
  return {
    source: "kubera-ai-site",
    receivedAt: new Date().toISOString(),
    lead: {
      locale: lead.locale,
      name: lead.name,
      email: lead.email,
      whatsapp: lead.whatsapp,
      telegram: lead.telegram,
      company: lead.company,
      message: lead.message,
    },
  };
}

export function isN8nConfigured() {
  return Boolean(process.env.N8N_WEBHOOK_URL);
}

// Future boundary only. Do not expose N8N_WEBHOOK_URL to frontend code.
// The actual POST to n8n should be enabled only after production webhook review.
