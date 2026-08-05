import type { AssistantLeadDraft, AssistantLocale, AssistantMessage } from "./types";

export type AssistantSessionState = {
  sessionLocale: AssistantLocale;
  sessionPhase: "closed" | "active" | "waiting_for_response" | "collecting_contacts" | "submitting_lead" | "transient_error" | "completed";
  messages: AssistantMessage[];
  lead: AssistantLeadDraft;
  input: string;
  isLoading: boolean;
  submitted: boolean;
  errorState: { category: string; retryable: boolean; message: string } | null;
};

export function createClosedAssistantSessionState(locale: AssistantLocale = "en"): AssistantSessionState {
  return {
    sessionLocale: locale,
    sessionPhase: "closed",
    messages: [],
    lead: {},
    input: "",
    isLoading: false,
    submitted: false,
    errorState: null,
  };
}

export function createTransientAssistantSessionState(
  previous: AssistantSessionState,
  errorState: AssistantSessionState["errorState"],
): AssistantSessionState {
  return {
    ...previous,
    sessionPhase: "transient_error",
    isLoading: false,
    errorState,
  };
}
