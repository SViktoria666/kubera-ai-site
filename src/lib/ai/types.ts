export type AssistantLocale = "en" | "ru" | "es" | "de" | "fr" | "it" | "nl" | "pt" | "pl" | "et" | "lv" | "lt" | "fi" | "sv" | "da";

export type AssistantContext = {
  locale?: AssistantLocale;
  currentPath: string;
  country?: string;
  visitorIntent?: "services" | "pricing" | "contact" | "support" | "unknown";
  conversationMemory?: AssistantConversationMemory;
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

export type AssistantConversationStage =
  | "discovery"
  | "problem_clarification"
  | "solution_recommendation"
  | "fit_confirmation"
  | "contact_invitation"
  | "contact_collection"
  | "submission"
  | "completion";

export type AssistantStructuredMemory = {
  language?: AssistantLocale;
  customerName?: string;
  companyName?: string;
  country?: string;
  cityOrRegion?: string;
  industry?: string;
  businessType?: string;
  companySize?: string;
  currentTools?: string[];
  currentProblem?: string;
  businessGoal?: string;
  requestedServices?: string[];
  discussedPages?: string[];
  budget?: string;
  timeline?: string;
  urgency?: string;
  decisionRole?: string;
  confirmedEmail?: string;
  confirmedPhone?: string;
  confirmedWhatsApp?: string;
  confirmedTelegram?: string;
  preferredContactMethod?: string;
  objections?: string[];
  questionsAlreadyAnswered: string[];
  informationStillNeeded: string[];
  currentConversationStage: AssistantConversationStage;
  lastConfirmedIntent?: string;
  inferredFacts?: Record<string, string | string[]>;
};

export type AssistantConversationMemory = {
  summary: string;
  turnCount: number;
  locale?: AssistantLocale;
  structured?: AssistantStructuredMemory;
};

export type AssistantCapabilityAssessmentStatus = "CONFIRMED_CAPABILITY" | "RELATED_BUT_UNCONFIRMED" | "REQUIRES_TECHNICAL_ASSESSMENT" | "OUT_OF_SCOPE_OR_UNKNOWN";

export type AssistantCapabilityAssessment = {
  status: AssistantCapabilityAssessmentStatus;
  topic?: string;
  evidence: string[];
  guidance: string;
  followUpQuestion?: string;
};

export type AssistantRequest = {
  context: AssistantContext;
  messages: AssistantMessage[];
  lead?: AssistantLeadDraft;
  submissionCompleted?: boolean;
  analyticsContext?: import("@/lib/analytics/journey-types").JourneyAnalyticsContext;
  analyticsSummary?: string;
  analyticsTelegramSummary?: string;
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
  conversationMemory?: AssistantConversationMemory;
  latestUserMessage?: string;
  capabilityAssessment?: AssistantCapabilityAssessment;
};
