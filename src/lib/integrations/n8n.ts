import type { ContactFormPayload } from "@/lib/validation/contact";

export type N8nContactLeadPayload = {
  Name: string;
  Email: string;
  "messenger-id": string;
  formid: "new-vercel-site";
};

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

export function createN8nContactLeadPayload(lead: ContactFormPayload): N8nContactLeadPayload {
  return {
    Name: lead.name,
    Email: lead.email,
    "messenger-id": lead.telegram || lead.whatsapp || "",
    formid: "new-vercel-site",
  };
}

export async function sendContactLeadToN8n(lead: ContactFormPayload) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    return { ok: false as const, reason: "missing_env" as const };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createN8nContactLeadPayload(lead)),
  });

  if (!response.ok) {
    return { ok: false as const, reason: "webhook_error" as const, status: response.status };
  }

  return { ok: true as const };
}

// Server-only integration boundary. Do not expose N8N_WEBHOOK_URL to frontend code.
