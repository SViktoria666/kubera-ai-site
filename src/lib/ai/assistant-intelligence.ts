import type { AssistantConversationMemory, AssistantContext, AssistantLeadDraft, AssistantLocale, AssistantMessage } from "./types";
import { getCapabilityLocalization } from "./assistant-localization";

export type AssistantConversationStage =
  | "discovery"
  | "problem_clarification"
  | "solution_recommendation"
  | "fit_confirmation"
  | "contact_invitation"
  | "contact_collection"
  | "submission"
  | "completion";

export type StructuredAssistantMemory = {
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

export type CapabilityAssessmentStatus = "CONFIRMED_CAPABILITY" | "RELATED_BUT_UNCONFIRMED" | "REQUIRES_TECHNICAL_ASSESSMENT" | "OUT_OF_SCOPE_OR_UNKNOWN";

export type CapabilityAssessment = {
  status: CapabilityAssessmentStatus;
  topic?: string;
  evidence: string[];
  guidance: string;
  followUpQuestion?: string;
};

export type KnowledgePageLike = {
  kind: string;
  path: string;
  summary: string;
  title: string;
};

export type KnowledgeQuickAnswer = {
  category: "service" | "pricing" | "delivery" | "security" | "contact" | "integration" | "faq";
  question: string;
  answer: string;
  path?: string;
};

type ConfirmedCapabilityDefinition = {
  label: string;
  aliases: string[];
  summary: string;
};

const CONFIRMED_CAPABILITIES: ConfirmedCapabilityDefinition[] = [
  {
    label: "AI assistant",
    aliases: [
      "ai assistant",
      "website ai assistant",
      "assistant",
      "assistent",
      "ki assistant",
      "ki-assistent",
      "ai assistent",
      "assistant ia",
      "asistente de ia",
      "asistente ia",
      "asystent ai",
      "assistent ia",
      "ассистент ии",
      "ии ассистент",
      "ai помощник",
    ],
    summary: "Kubera AI positions website and business AI assistants as a core offer.",
  },
  {
    label: "Customer communication automation",
    aliases: [
      "customer communication automation",
      "customer communications",
      "communications automation",
      "kommunikationsautomatis",
      "automatisation communication",
      "automazione comunic",
      "automatisering communic",
      "automatizacion de comunicaciones",
      "automatizacia komunikac",
      "автоматизация коммуникаций",
    ],
    summary: "Kubera AI supports automation for customer communication flows.",
  },
  {
    label: "Lead generation automation",
    aliases: [
      "lead generation automation",
      "lead automation",
      "lead generation",
      "lead gen",
      "lead gener",
      "generacion de leads",
      "generation de leads",
      "leadgenerering",
      "leadgeneratie",
      "liidide gener",
      "automatizacion de leads",
      "автоматизация лидогенерации",
      "автоматизация лидов",
    ],
    summary: "Kubera AI supports lead capture, qualification, and follow-up automation.",
  },
  {
    label: "CRM automation",
    aliases: [
      "crm automation",
      "crm autom",
      "crm",
      "crm automatis",
      "automatizacion crm",
      "automatisation crm",
      "automazione crm",
      "crm automatisering",
      "crm automatisatie",
      "автоматизация crm",
    ],
    summary: "Kubera AI supports CRM-connected automation flows.",
  },
  {
    label: "WhatsApp automation",
    aliases: [
      "whatsapp automation",
      "whatsapp autom",
      "whatsapp",
      "whatsapp automatis",
      "automatisation whatsapp",
      "automazione whatsapp",
      "whatsapp automatisering",
      "whatsapp automatisatie",
      "automatizacion whatsapp",
      "автоматизация whatsapp",
    ],
    summary: "Kubera AI supports WhatsApp-based automation and lead handling.",
  },
  {
    label: "Telegram automation",
    aliases: [
      "telegram automation",
      "telegram autom",
      "telegram",
      "telegram automatis",
      "automatizacion telegram",
      "автоматизация telegram",
    ],
    summary: "Kubera AI supports Telegram-based automation and notifications.",
  },
  {
    label: "Email automation",
    aliases: [
      "email automation",
      "email autom",
      "email",
      "e-mail",
      "automatisation email",
      "automazione email",
      "email automatisering",
      "automatizacion de email",
      "автоматизация email",
    ],
    summary: "Kubera AI supports email-based automation and follow-up flows.",
  },
  {
    label: "Voice AI",
    aliases: [
      "voice ai",
      "voice agents",
      "ai voice",
      "voz ia",
      "voice",
      "spracher",
      "voix ia",
      "voce ia",
      "hlasova ia",
      "голосовой ии",
      "голосовые агенты",
    ],
    summary: "Kubera AI supports voice AI and call-handling automation use cases.",
  },
  {
    label: "Internal workflow automation",
    aliases: [
      "internal workflow automation",
      "workflow automation",
      "workflow autom",
      "business process automation",
      "process automation",
      "n8n automation",
      "n8n",
      "automatizacion de procesos",
      "automatisation des processus",
      "automazione dei processi",
      "automatisering proces",
      "автоматизация рабочих процессов",
      "автоматизация процессов",
      "автоматизация n8n",
    ],
    summary: "Kubera AI supports internal workflow automation and orchestration.",
  },
  {
    label: "Custom AI automation solutions",
    aliases: [
      "custom ai automation solutions",
      "custom ai automation",
      "bespoke ai automation",
      "custom automation",
      "soluciones de automatizacion ia",
      "solution d automatisation ia",
      "soluzioni di automazione ia",
      "ki autom",
      "kaasgeschneiderte ki",
      "кастомные решения по ии-автоматизации",
    ],
    summary: "Kubera AI supports bespoke AI automation engagements.",
  },
];

function normalize(value: string) {
  return value
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compactText(value: string, maxLength = 140) {
  const cleaned = value.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  return `${cleaned.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

function compactList(values: Array<string | undefined>) {
  return values.filter((value): value is string => Boolean(value && value.trim().length)).map((value) => value.trim());
}

function normalizeCapabilityText(value: string) {
  return value
    .normalize("NFKC")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s/-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesCapabilityAlias(question: string, alias: string) {
  const normalizedQuestion = normalizeCapabilityText(question);
  const normalizedAlias = normalizeCapabilityText(alias);

  if (!normalizedQuestion || !normalizedAlias) {
    return false;
  }

  if (normalizedQuestion === normalizedAlias || normalizedQuestion.includes(` ${normalizedAlias} `)) {
    return true;
  }

  const pattern = new RegExp(`(^|\\s|/)${escapeRegExp(normalizedAlias).replace(/\s+/g, "\\s+")}(?=\\s|/|$)`, "iu");
  return pattern.test(normalizedQuestion);
}

export function getConfirmedCapabilityEvidenceText() {
  return CONFIRMED_CAPABILITIES.map((capability) => `${capability.label}: ${capability.summary}`).join("\n");
}

function hasContact(lead: AssistantLeadDraft) {
  return Boolean(lead.email || lead.telegram || lead.whatsapp);
}

function getPreferredContactMethod(lead: AssistantLeadDraft) {
  if (lead.email) return "email";
  if (lead.telegram) return "telegram";
  if (lead.whatsapp) return "whatsapp";
  return undefined;
}

function getRequiredMissingFields(lead: AssistantLeadDraft) {
  const missing = [] as string[];
  if (!lead.need) missing.push("need");
  if (!lead.urgency) missing.push("urgency");
  if (!lead.name) missing.push("name");
  if (!lead.company) missing.push("company");
  if (!lead.country) missing.push("country");
  if (!hasContact(lead)) missing.push("contact");
  return missing;
}

function inferStage(lead: AssistantLeadDraft, submitted: boolean, hasContactData: boolean): AssistantConversationStage {
  if (submitted) {
    return "submission";
  }

  const missing = getRequiredMissingFields(lead);

  if (hasContactData) {
    return "contact_collection";
  }

  if (!lead.need) {
    return "discovery";
  }

  if (missing.includes("name") || missing.includes("company") || missing.includes("country")) {
    return "problem_clarification";
  }

  if (missing.includes("contact")) {
    return "contact_invitation";
  }

  if (lead.need && lead.urgency && lead.name && lead.company && lead.country && hasContactData) {
    return "completion";
  }

  return "solution_recommendation";
}

function extractCapabilityMatch(question: string) {
  return CONFIRMED_CAPABILITIES.find((capability) => capability.aliases.some((alias) => matchesCapabilityAlias(question, alias)));
}

function extractUsefulTopics(messages: AssistantMessage[]) {
  const text = messages
    .filter((message) => message.role === "user")
    .map((message) => message.content)
    .join(" ")
    .toLowerCase();

  const topics: string[] = [];
  const topicMap: Array<[string, RegExp]> = [
    ["whatsapp", /\bwhatsapp\b/i],
    ["telegram", /\btelegram\b/i],
    ["email", /\bemail\b/i],
    ["pricing", /\bpricing\b/i],
    ["lead generation", /\blead generation\b/i],
    ["crm", /\bcrm\b/i],
    ["support", /\bsupport\b/i],
    ["automation", /\bautomation\b/i],
    ["booking", /\bbooking\b/i],
    ["lead follow-up", /\bfollow[-\s]?up\b/i],
  ];

  for (const [label, pattern] of topicMap) {
    if (pattern.test(text)) {
      topics.push(label);
    }
  }

  return topics;
}

export function buildStructuredConversationMemory(
  messages: AssistantMessage[],
  lead: AssistantLeadDraft | undefined,
  context: Pick<AssistantContext, "currentPath" | "country" | "locale" | "visitorIntent">,
  submitted = false,
): AssistantConversationMemory {
  const safeLead = lead || {};
  const answeredFields = compactList([
    safeLead.need ? "need" : undefined,
    safeLead.urgency ? "urgency" : undefined,
    safeLead.name ? "name" : undefined,
    safeLead.company ? "company" : undefined,
    safeLead.country ? "country" : undefined,
    hasContact(safeLead) ? "contact" : undefined,
    safeLead.email ? "email" : undefined,
    safeLead.telegram ? "telegram" : undefined,
    safeLead.whatsapp ? "whatsapp" : undefined,
  ]);

  const informationStillNeeded = getRequiredMissingFields(safeLead);
  const currentConversationStage = inferStage(safeLead, submitted, Boolean(safeLead.email || safeLead.telegram || safeLead.whatsapp));
  const requestedServices = extractUsefulTopics(messages);
  const recentPages = compactList([context.currentPath]);

  const structured: StructuredAssistantMemory = {
    language: context.locale,
    customerName: safeLead.name?.trim(),
    companyName: safeLead.company?.trim(),
    country: safeLead.country?.trim() || context.country?.trim(),
    currentProblem: safeLead.need?.trim(),
    urgency: safeLead.urgency?.trim(),
    requestedServices,
    discussedPages: recentPages,
    confirmedEmail: safeLead.email?.trim().toLowerCase(),
    confirmedPhone: undefined,
    confirmedWhatsApp: safeLead.whatsapp?.trim(),
    confirmedTelegram: safeLead.telegram?.trim(),
    preferredContactMethod: getPreferredContactMethod(safeLead),
    questionsAlreadyAnswered: answeredFields,
    informationStillNeeded,
    currentConversationStage,
    lastConfirmedIntent: context.visitorIntent,
    inferredFacts: {},
  };

  const summaryParts = [
    `Page: ${context.currentPath}`,
    context.locale ? `Language: ${context.locale}` : null,
    context.country ? `Country: ${context.country}` : null,
    context.visitorIntent ? `Intent: ${context.visitorIntent}` : null,
    safeLead.name ? `Customer name: ${compactText(safeLead.name, 120)}` : null,
    safeLead.company ? `Company: ${compactText(safeLead.company, 160)}` : null,
    safeLead.country ? `Lead country: ${compactText(safeLead.country, 120)}` : null,
    safeLead.need ? `Need: ${compactText(safeLead.need, 200)}` : null,
    safeLead.urgency ? `Urgency: ${compactText(safeLead.urgency, 160)}` : null,
    `Contact channels: ${safeLead.email || safeLead.telegram || safeLead.whatsapp ? [safeLead.email ? "email" : null, safeLead.telegram ? "Telegram" : null, safeLead.whatsapp ? "WhatsApp" : null].filter(Boolean).join(", ") : "not yet provided"}`,
    `Answered fields: ${answeredFields.length ? answeredFields.join(", ") : "none"}`,
    `Still needed: ${informationStillNeeded.length ? informationStillNeeded.join(", ") : "none"}`,
    `Stage: ${currentConversationStage}`,
    requestedServices.length ? `Topics: ${requestedServices.join(", ")}` : null,
    `Recent conversation:\n${messages
      .slice(-10)
      .map((message) => `${message.role === "user" ? "User" : "Assistant"}: ${compactText(message.content, 180)}`)
      .join("\n") || "No prior conversation yet."}`,
  ].filter(Boolean);

  return {
    summary: summaryParts.join("\n"),
    turnCount: messages.length,
    locale: context.locale,
    structured,
  };
}

function knownCapabilityMatches(question: string, _knowledgeText: string) {
  return Boolean(extractCapabilityMatch(question));
}

function looksLikeTechnicalAssessmentRequest(question: string) {
  const q = normalizeCapabilityText(question);
  return /\b(integrat(?:e|ion|ed|ing|ions?)|integriert|integrier|connect|connecter|conectar|verbind|verbinden|koppeln|koppel|polaczyc|polaczy|ligar|link|work with|support|can you|do you|does kubera|sap|oracle|netsuite|workday|servicenow|dynamics|api|oauth|security|crm|erp|system|integracion|integrar|conexion|compatibl|soporte|puede|puedes|seguridad|sistema|интеграц|подключ|совместим|безопасн|система)\b/ui.test(q);
}

function extractTopic(question: string) {
  const q = normalizeCapabilityText(question);
  if (/\boracle\b/.test(q) && /\b(business|suite|ebs|e business)\b/.test(q)) {
    return "ORACLE E-BUSINESS SUITE";
  }
  if (/\b(microsoft)\b/.test(q) && /\b(dynamics)\b/.test(q)) {
    return "MICROSOFT DYNAMICS";
  }
  if (/\bnetsuite\b/.test(q)) {
    return "NETSUITE";
  }
  if (/\b(workday)\b/.test(q)) {
    return "WORKDAY";
  }
  if (/\b(servicenow)\b/.test(q)) {
    return "SERVICENOW";
  }
  const match = q.match(/\b(sap(?: s ?4hana)?|salesforce|hubspot|pipedrive|n8n|whatsapp|telegram|openclaw|hermes|crm|erp|api|booking|calendar)\b/ui);
  return match?.[1]?.toUpperCase();
}

function scoreKnowledgePage(input: Pick<AssistantContext, "currentPath" | "country" | "locale"> & { keywords?: string[] }, page: KnowledgePageLike) {
  let score = 0;
  const normalizedPage = normalize(input.currentPath);
  const normalizedCountry = normalize(input.country || "");
  const normalizedKeywords = (input.keywords || []).map(normalize).filter(Boolean);
  const searchText = normalize([page.title, page.path, page.summary, page.kind].join(" "));

  if (normalize(page.path) === normalizedPage) score += 100;
  if (normalizedCountry && searchText.includes(normalizedCountry)) score += 18;

  for (const keyword of normalizedKeywords) {
    if (!keyword) continue;
    if (searchText.includes(keyword)) {
      score += 12;
      continue;
    }

    if (normalize(page.path).includes(keyword)) {
      score += 8;
    }
  }

  if (score > 0 && input.locale) score += 3;

  return score;
}

export function rankRelevantKnowledgePages<T extends KnowledgePageLike>(
  input: Pick<AssistantContext, "currentPath" | "country" | "locale"> & { keywords?: string[] },
  items: T[],
  limit = 2,
) {
  const scored = items
    .map((item, index) => ({ item, index, score: scoreKnowledgePage(input, item) }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || left.index - right.index);

  const ranked = scored.slice(0, limit).map(({ item, score }) => ({
    ...item,
    reason: score >= 100 ? "Exact route match" : score >= 30 ? "Strong topical match" : "Related source",
  }));

  if (ranked.length) {
    return ranked;
  }

  const fallbackPaths = ["/services", "/how-we-work", "/contacts", "/cases", "/blog", "/use-cases"];
  return fallbackPaths
    .map((path) => items.find((item) => item.path === path))
    .filter((item): item is T => Boolean(item))
    .slice(0, limit)
    .map((item) => ({
      ...item,
      reason: "General reference",
    }));
}

function localizedAssessmentPhrases(locale?: AssistantLocale) {
  return getCapabilityLocalization(locale);
}

function buildLocalizedCapabilityMessage(locale?: AssistantLocale) {
  return getCapabilityLocalization(locale);
}

export function classifyCapabilityQuestion(question: string, knowledgeText: string, locale?: AssistantLocale): CapabilityAssessment {
  const phrases = localizedAssessmentPhrases(locale);
  const topic = extractTopic(question);

  if (!question.trim()) {
    return {
      status: "OUT_OF_SCOPE_OR_UNKNOWN",
      topic,
      evidence: [],
      guidance: phrases.followUp,
    };
  }

  const confirmedMatch = knownCapabilityMatches(question, knowledgeText);
  const asksForIntegration = looksLikeTechnicalAssessmentRequest(question);

  if (confirmedMatch) {
    return {
      status: "CONFIRMED_CAPABILITY",
      topic,
      evidence: [compactText(question, 120)],
      guidance: phrases.confirmed,
    };
  }

  if (asksForIntegration) {
    const localized = buildLocalizedCapabilityMessage(locale);
    return {
      status: topic ? "RELATED_BUT_UNCONFIRMED" : "REQUIRES_TECHNICAL_ASSESSMENT",
      topic,
      evidence: [compactText(question, 120)],
      guidance: `${localized.mayBePossible} ${localized.needReview}`,
      followUpQuestion: localized.followUpQuestion,
    };
  }

  return {
    status: "OUT_OF_SCOPE_OR_UNKNOWN",
    topic,
    evidence: [compactText(question, 120)],
    guidance: phrases.followUp,
  };
}

export function formatCapabilityAssessment(assessment: CapabilityAssessment, locale?: AssistantLocale) {
  const phrases = localizedAssessmentPhrases(locale);

  return [
    `Capability status: ${assessment.status}`,
    assessment.topic ? `Topic: ${assessment.topic}` : null,
    assessment.evidence.length ? `Evidence: ${assessment.evidence.join(" | ")}` : null,
    `Guidance: ${assessment.guidance}`,
    assessment.followUpQuestion ? `Follow-up question: ${assessment.followUpQuestion}` : null,
    assessment.status === "CONFIRMED_CAPABILITY"
      ? "Only state a capability as confirmed when the knowledge base or page evidence explicitly supports it."
      : `${phrases.assessment}: keep the response cautious and avoid claiming confirmed delivery or compatibility.`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function shouldUseCapabilityFallback(question: string, assessment: CapabilityAssessment) {
  return assessment.status !== "CONFIRMED_CAPABILITY" && looksLikeTechnicalAssessmentRequest(question);
}

export function buildCapabilityFallbackMessage(locale: AssistantLocale | undefined, assessment: CapabilityAssessment) {
  const localized = buildLocalizedCapabilityMessage(locale);

  return assessment.followUpQuestion
    ? `${localized.mayBePossible} ${localized.needReview} ${assessment.followUpQuestion}`
    : `${localized.mayBePossible} ${localized.needReview}`;
}
