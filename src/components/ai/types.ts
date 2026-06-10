import type { AssistantLeadDraft, AssistantLocale, AssistantMessage } from "@/lib/ai/types";

export type AiAssistantWidgetProps = {
  enabled?: boolean;
};

export type AiAssistantApiResponse = {
  ok: boolean;
  message?: AssistantMessage;
  locale?: AssistantLocale;
  lead?: AssistantLeadDraft;
  readyToSubmit?: boolean;
  submitted?: boolean;
  error?: string;
};
