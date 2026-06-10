export type AssistantLocale = "en" | "ru" | "es" | "de" | "fr" | "it" | "nl" | "pt" | "pl" | "et" | "lv" | "lt" | "fi" | "sv" | "da";

export type AssistantContext = {
  locale?: AssistantLocale;
  currentPath: string;
  country?: string;
  visitorIntent?: "services" | "pricing" | "contact" | "support" | "unknown";
};

export type AssistantMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type AssistantLeadDraft = {
  name?: string;
  company?: string;
  email?: string;
  telegram?: string;
  whatsapp?: string;
  need?: string;
  urgency?: string;
  country?: string;
  leadScore?: number;
};

export type AssistantRequest = {
  context: AssistantContext;
  messages: AssistantMessage[];
  lead?: AssistantLeadDraft;
};

export type AssistantResponse = {
  message: AssistantMessage;
  locale: AssistantLocale;
  lead: AssistantLeadDraft;
  readyToSubmit: boolean;
  submitted?: boolean;
};

export type AssistantProviderContext = {
  knowledgeContext?: import("@/lib/ai/knowledge-base").SelectedKnowledgeContext;
};
