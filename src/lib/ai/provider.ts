import type { AssistantRequest, AssistantResponse } from "@/lib/ai/types";

export interface SiteAssistantProvider {
  respond(request: AssistantRequest): Promise<AssistantResponse>;
}

export class AssistantNotConfiguredError extends Error {
  constructor() {
    super("AI assistant provider is not configured.");
  }
}

export function getAssistantProvider(): SiteAssistantProvider {
  throw new AssistantNotConfiguredError();
}
