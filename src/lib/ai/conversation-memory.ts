import type { AssistantConversationMemory, AssistantContext, AssistantLeadDraft, AssistantMessage } from "@/lib/ai/types";

function compactText(value: string, maxLength = 120) {
  const cleaned = value.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  return `${cleaned.slice(0, Math.max(0, maxLength - 1)).trim()}…`;
}

function formatContactChannels(lead: AssistantLeadDraft) {
  const channels: string[] = [];

  if (lead.email) channels.push("email");
  if (lead.telegram) channels.push("Telegram");
  if (lead.whatsapp) channels.push("WhatsApp");

  return channels.length ? channels.join(", ") : "not yet provided";
}

function formatRecentConversation(messages: AssistantMessage[]) {
  const recentMessages = messages.slice(-8);

  if (!recentMessages.length) {
    return "No prior conversation yet.";
  }

  return recentMessages
    .map((message) => `${message.role === "user" ? "User" : "Assistant"}: ${compactText(message.content, 180)}`)
    .join("\n");
}

export function buildAssistantConversationMemory(
  messages: AssistantMessage[],
  lead: AssistantLeadDraft | undefined,
  context: Pick<AssistantContext, "currentPath" | "country" | "locale" | "visitorIntent">,
): AssistantConversationMemory {
  const summaryParts = [
    `Page: ${context.currentPath}`,
    context.locale ? `Language: ${context.locale}` : null,
    context.country ? `Country: ${context.country}` : null,
    context.visitorIntent ? `Intent: ${context.visitorIntent}` : null,
    lead?.company ? `Company: ${lead.company}` : null,
    lead?.country ? `Lead country: ${lead.country}` : null,
    lead?.need ? `Need: ${compactText(lead.need, 200)}` : null,
    lead?.urgency ? `Urgency: ${compactText(lead.urgency, 160)}` : null,
    `Contact channels: ${formatContactChannels(lead || {})}`,
    `Recent conversation:\n${formatRecentConversation(messages)}`,
  ].filter(Boolean);

  return {
    summary: summaryParts.join("\n"),
    turnCount: messages.length,
    locale: context.locale,
  };
}
