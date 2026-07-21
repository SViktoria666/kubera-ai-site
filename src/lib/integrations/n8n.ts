import type { ContactFormPayload } from "@/lib/validation/contact";
import type { AssistantLeadDraft } from "@/lib/ai/types";

export type N8nContactLeadPayload = {
  Name: string;
  Email: string;
  company: string;
  message: string;
  locale: "en" | "ru";
  source: "kubera-ai-site";
  page: string;
  formId: "new-vercel-site";
  createdAt: string;
  whatsapp: string;
  telegram: string;
  messenger: string;
  "messenger-id": string;
  formid: "new-vercel-site";
};

export type ContactLeadEnvelope = {
  source: "kubera-ai-site";
  page: string;
  formId: "new-vercel-site";
  createdAt: string;
  lead: Omit<ContactFormPayload, "website">;
};

export function createContactLeadEnvelope(lead: ContactFormPayload, page: string): ContactLeadEnvelope {
  return {
    source: "kubera-ai-site",
    page,
    formId: "new-vercel-site",
    createdAt: new Date().toISOString(),
    lead: {
      locale: lead.locale,
      page: lead.page,
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

export function createN8nContactLeadPayload(lead: ContactFormPayload, page = ""): N8nContactLeadPayload {
  const messenger = lead.telegram || lead.whatsapp || "";

  return {
    Name: lead.name,
    Email: lead.email,
    company: lead.company,
    message: lead.message,
    locale: lead.locale,
    source: "kubera-ai-site",
    page,
    formId: "new-vercel-site",
    createdAt: new Date().toISOString(),
    whatsapp: lead.whatsapp || "",
    telegram: lead.telegram || "",
    messenger,
    "messenger-id": messenger,
    formid: "new-vercel-site",
  };
}

export async function sendContactLeadToN8n(lead: ContactFormPayload, page = "") {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    return { ok: false as const, reason: "missing_env" as const };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createN8nContactLeadPayload(lead, page)),
  });

  if (!response.ok) {
    return { ok: false as const, reason: "webhook_error" as const, status: response.status };
  }

  return { ok: true as const };
}

export type N8nAssistantLeadPayload = {
  createdAt: string;
  name: string;
  email: string;
  telegram: string;
  whatsapp: string;
  company: string;
  need: string;
  urgency: string;
  country: string;
  leadScore: number;
};

export function isAssistantN8nConfigured() {
  return Boolean(process.env.N8N_AI_LEAD_ASSISTANT_WEBHOOK_URL);
}

export function createN8nAssistantLeadPayload(lead: AssistantLeadDraft): N8nAssistantLeadPayload {
  return {
    createdAt: new Date().toISOString(),
    name: lead.name || "",
    email: lead.email || "",
    telegram: lead.telegram || "",
    whatsapp: lead.whatsapp || "",
    company: lead.company || "",
    need: lead.need || "",
    urgency: lead.urgency || "",
    country: lead.country || "",
    leadScore: lead.leadScore ?? 0,
  };
}

export async function sendAssistantLeadToN8n(lead: AssistantLeadDraft) {
  const webhookUrl = process.env.N8N_AI_LEAD_ASSISTANT_WEBHOOK_URL;

  if (!webhookUrl) {
    return { ok: false as const, reason: "missing_env" as const };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createN8nAssistantLeadPayload(lead)),
  });

  if (!response.ok) {
    return { ok: false as const, reason: "webhook_error" as const, status: response.status };
  }

  return { ok: true as const };
}

// Server-only integration boundary. Do not expose N8N_WEBHOOK_URL to frontend code.
