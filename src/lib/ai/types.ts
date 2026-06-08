export type AssistantLocale = "en" | "ru";

export type AssistantContext = {
  locale: AssistantLocale;
  currentPath: string;
  visitorIntent?: "services" | "pricing" | "contact" | "support" | "unknown";
};

export type AssistantMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type AssistantRequest = {
  context: AssistantContext;
  messages: AssistantMessage[];
};

export type AssistantResponse = {
  message: AssistantMessage;
  handoff?: {
    type: "contact_form" | "telegram" | "whatsapp";
    label: string;
    href: string;
  };
};
