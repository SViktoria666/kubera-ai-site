import type { AssistantConversationMemory, AssistantContext, AssistantLeadDraft, AssistantMessage } from "./types";
import { buildStructuredConversationMemory } from "./assistant-intelligence";

export function buildAssistantConversationMemory(
  messages: AssistantMessage[],
  lead: AssistantLeadDraft | undefined,
  context: Pick<AssistantContext, "currentPath" | "country" | "locale" | "visitorIntent">,
  submitted = false,
): AssistantConversationMemory {
  return buildStructuredConversationMemory(messages, lead, context, submitted);
}
