import type { AssistantLocale } from "@/lib/ai/types";

export type AiAssistantWidgetProps = {
  locale: AssistantLocale;
  currentPath: string;
  enabled?: boolean;
};
