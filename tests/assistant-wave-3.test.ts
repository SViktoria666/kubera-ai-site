// @ts-nocheck
import test from "node:test";
import assert from "node:assert/strict";

import {
  buildCapabilityFallbackMessage,
  buildStructuredConversationMemory,
  classifyCapabilityQuestion,
  formatCapabilityAssessment,
  getConfirmedCapabilityEvidenceText,
  rankRelevantKnowledgePages,
  shouldUseCapabilityFallback,
} from "../src/lib/ai/assistant-intelligence";
import {
  buildSubmittedAssistantMessage,
  detectAssistantLocaleFromMessages,
  detectAssistantLocaleFromText,
  getAssistantPromptCopy,
  getAssistantUiCopy,
  getCapabilityLocalization,
  normalizeAssistantLocale,
  resolveAssistantReplyLocale,
} from "../src/lib/ai/assistant-localization";
import { createClosedAssistantSessionState, createTransientAssistantSessionState } from "../src/lib/ai/assistant-session";
import { DeterministicAssistantProvider } from "../src/lib/ai/provider";
import { selectKnowledgeContext, formatKnowledgeContext } from "../src/lib/ai/knowledge-base";
import {
  createAssistantSubmissionHash,
  markAssistantSubmissionSubmitted,
  releaseAssistantSubmission,
  reserveAssistantSubmission,
} from "../src/lib/ai/submission-dedupe";
import type { AssistantLeadDraft, AssistantMessage } from "../src/lib/ai/types";

function makeMessages(count: number): AssistantMessage[] {
  return Array.from({ length: count }, (_, index) =>
    index % 2 === 0
      ? { role: "user" as const, content: `User turn ${index + 1} with a specific business detail about automation and follow-up.` }
      : { role: "assistant" as const, content: `Assistant turn ${index + 1} with a concise helpful response.` },
  );
}

test("locale detection recognizes all supported languages and preserves short ambiguous messages", () => {
  const samples: Array<[string, string]> = [
    ["en", "Hello, I need help with automation and lead follow-up."],
    ["ru", "Здравствуйте, нужна автоматизация лидов и CRM."],
    ["es", "Hola, necesito automatización de WhatsApp para mi negocio."],
    ["de", "Hallo, ich brauche Automatisierung für mein Unternehmen."],
    ["fr", "Bonjour, je veux automatiser mon entreprise."],
    ["it", "Ciao, ho bisogno di automazione per la mia azienda."],
    ["nl", "Kunt u alstublieft een offerte sturen?"],
    ["pt", "Olá, preciso de automação para minha empresa."],
    ["pl", "Cześć, potrzebuję automatyzacji dla firmy."],
    ["et", "Tere, vajan automatiseerimist oma ettevõttele."],
    ["fi", "Hei, tarvitsen automaatiota yritykselleni."],
    ["sv", "Hej, jag behöver automatisering för mitt företag."],
    ["da", "Hej, jeg har brug for automatisering til min virksomhed."],
    ["uk", "Привіт, мені потрібна автоматизація для компанії."],
  ];

  for (const [locale, text] of samples) {
    assert.equal(detectAssistantLocaleFromText(text, "en"), locale);
  }

  assert.equal(detectAssistantLocaleFromText("OK", "de"), "de");
  assert.equal(detectAssistantLocaleFromText("email", "fr"), "fr");
  assert.equal(detectAssistantLocaleFromMessages([{ role: "user", content: "Bonjour, je veux automatiser mon entreprise." }], "es"), "fr");
  assert.equal(detectAssistantLocaleFromText("user@example.com", "pl"), "pl");
  assert.equal(detectAssistantLocaleFromText("https://kubera-automation.com/services", "it"), "it");
  assert.equal(detectAssistantLocaleFromText("+372 5384 1877", "sv"), "sv");
  assert.equal(detectAssistantLocaleFromMessages([{ role: "user", content: "Kannst du bitte auf Deutsch antworten?" }], "en"), "de");
  assert.equal(
    detectAssistantLocaleFromMessages(
      [
        { role: "user", content: "Hola, necesito automatización de WhatsApp." },
        { role: "assistant", content: "Claro." },
        { role: "user", content: "Can you switch to English now?" },
      ],
      "es",
    ),
    "en",
  );
  assert.equal(normalizeAssistantLocale("de-DE", "en"), "de");
});

test("reply locale resolver keeps explicit language switches ahead of stale memory", () => {
  const staleSpanishMemory = {
    locale: "es" as const,
    structured: {
      language: "es" as const,
    },
  };

  assert.equal(
    resolveAssistantReplyLocale({
      latestUserMessage: "Can you switch to English now?",
      requestLocale: "es",
      conversationMemory: staleSpanishMemory,
      pageLocale: "es",
    }),
    "en",
  );

  assert.equal(
    resolveAssistantReplyLocale({
      latestUserMessage: "OK",
      requestLocale: "de",
      conversationMemory: {
        locale: "de",
        structured: {
          language: "de",
        },
      },
      pageLocale: "en",
    }),
    "de",
  );
});

test("structured memory keeps confirmed facts and language across long conversations", () => {
  const messages = makeMessages(30);
  const lead: AssistantLeadDraft = {
    name: "Anna Kowalska",
    company: "DentalFlow",
    email: "anna@example.com",
    country: "France",
    need: "Appointment automation and reminders",
    urgency: "Soon",
  };

  const memory = buildStructuredConversationMemory(messages, lead, {
    currentPath: "/services",
    country: "Germany",
    locale: "de",
    visitorIntent: "services",
  });

  assert.equal(memory.turnCount, 30);
  assert.equal(memory.structured?.language, "de");
  assert.equal(memory.structured?.customerName, "Anna Kowalska");
  assert.equal(memory.structured?.companyName, "DentalFlow");
  assert.equal(memory.structured?.country, "France");
  assert.equal(memory.structured?.currentConversationStage, "contact_collection");
  assert.ok(memory.structured?.questionsAlreadyAnswered.includes("name"));
  assert.ok(memory.structured?.questionsAlreadyAnswered.includes("company"));
  assert.ok(memory.structured?.questionsAlreadyAnswered.includes("country"));
  assert.ok(memory.structured?.questionsAlreadyAnswered.includes("contact"));
  assert.ok(memory.structured?.questionsAlreadyAnswered.includes("email"));
  assert.equal(new Set(memory.structured?.questionsAlreadyAnswered).size, memory.structured?.questionsAlreadyAnswered.length);
  assert.ok(!memory.structured?.informationStillNeeded.includes("contact"));
  assert.ok(memory.summary.includes("Language: de"));
  assert.ok(memory.summary.includes("Anna Kowalska"));
});

test("knowledge selection includes industry solutions and approved FAQ boundaries without exceeding recommendation limits", () => {
  const context = selectKnowledgeContext({
    page: "/services",
    country: "Germany",
    locale: "de",
    keywords: ["whatsapp", "automation", "lead"],
  });

  const items = [
    { kind: "service", title: "Services", path: "/services", summary: "Service hub" },
    { kind: "case-study", title: "Sales Leads", path: "/cases/sales-leads", summary: "Lead generation case study" },
    { kind: "blog", title: "How to choose first AI automation project", path: "/blog/how-to-choose-first-ai-automation-project", summary: "Blog article" },
    { kind: "use-case", title: "AI Customer Support", path: "/use-cases/ai-customer-support-ecommerce", summary: "Use case" },
  ];

  const ranked = rankRelevantKnowledgePages(
    { currentPath: "/services", country: "Spain", locale: "es", keywords: ["whatsapp", "automation", "lead"] },
    items,
    2,
  );

  assert.ok(ranked.length <= 2);
  assert.equal(new Set(ranked.map((item) => item.path)).size, ranked.length);
  assert.ok(ranked.every((item) => items.some((candidate) => candidate.path === item.path)));
  assert.ok(context.recommendedPages.length <= 2);
  assert.equal(new Set(context.recommendedPages.map((item) => item.path)).size, context.recommendedPages.length);
  assert.ok(context.llmsFullExcerpt.length <= 2200);
  assert.ok(context.quickAnswers.length <= 10);
  assert.ok(context.quickAnswers.every((item) => !item.path || item.path.startsWith("/")));
  assert.ok(formatKnowledgeContext(context).includes("Approved FAQ and boundaries"));
});

test("confirmed capabilities stay confirmed in supported languages", () => {
  const confirmedCases = [
    ["en", "Can Kubera AI build a WhatsApp AI assistant?"],
    ["de", "Kann Kubera AI CRM automatisieren?"],
    ["fr", "Kubera AI peut-il créer un assistant IA ?"],
    ["pl", "Czy Kubera AI może zrobić automatyzację CRM?"],
    ["uk", "Чи може Kubera AI створити AI assistant?"],
  ] as const;

  for (const [locale, question] of confirmedCases) {
    const assessment = classifyCapabilityQuestion(question, getConfirmedCapabilityEvidenceText(), locale);
    assert.equal(assessment.status, "CONFIRMED_CAPABILITY");
    assert.ok(assessment.guidance.length > 0);
    assert.ok(!shouldUseCapabilityFallback(question, assessment));
  }
});

test("unconfirmed integrations remain cautious across supported languages", () => {
  const cases = [
    ["en", "Can Kubera AI integrate directly with SAP?"],
    ["ru", "Интеграция с SAP возможна?"],
    ["es", "¿Se puede integrar SAP?"],
    ["de", "Kann Kubera AI direkt mit Oracle E-Business Suite integriert werden?"],
    ["fr", "Pouvez-vous connecter Workday ?"],
    ["pl", "Czy Kubera AI może połączyć się z NetSuite?"],
    ["uk", "Чи може Kubera AI підключитися до ServiceNow?"],
    ["ru", "Можно ли подключить выдуманную ERP-систему ZetaOne?"],
    ["nl", "Kan Kubera AI met een onbekend ERP-systeem verbinden?"],
  ] as const;

  for (const [locale, question] of cases) {
    const assessment = classifyCapabilityQuestion(question, getConfirmedCapabilityEvidenceText(), locale);
    assert.notEqual(assessment.status, "CONFIRMED_CAPABILITY");
    assert.ok(shouldUseCapabilityFallback(question, assessment));
    const localized = getCapabilityLocalization(locale);
    const fallbackMessage = buildCapabilityFallbackMessage(locale, assessment);
    assert.ok(fallbackMessage.includes(localized.mayBePossible));
    assert.ok(fallbackMessage.includes(localized.needReview));
  }
});

test("deterministic fallback and helper copy stay aligned for confirmed and unconfirmed questions", async () => {
  const provider = new DeterministicAssistantProvider();

  const sapResponse = await provider.respond({
    context: { currentPath: "/", locale: "en" },
    messages: [{ role: "user", content: "Can Kubera AI integrate directly with SAP?" }],
  });

  const ruOracleResponse = await provider.respond({
    context: { currentPath: "/", locale: "ru" },
    messages: [{ role: "user", content: "Можно ли подключиться к Oracle E-Business Suite?" }],
  });

  const esSapResponse = await provider.respond({
    context: { currentPath: "/", locale: "es" },
    messages: [{ role: "user", content: "¿Se puede integrar SAP?" }],
  });

  const confirmedResponse = await provider.respond({
    context: { currentPath: "/", locale: "de" },
    messages: [{ role: "user", content: "Kann Kubera AI eine WhatsApp-Automatisierung bauen?" }],
  });

  assert.ok(sapResponse.message.content.toLowerCase().includes("technical assessment"));
  assert.ok(ruOracleResponse.message.content.includes(getCapabilityLocalization("ru").needReview));
  assert.ok(esSapResponse.message.content.includes(getCapabilityLocalization("es").needReview));
  assert.ok(confirmedResponse.message.content.toLowerCase().includes("kubera ai"));
  assert.ok(!confirmedResponse.message.content.toLowerCase().includes("technical assessment"));

  assert.ok(getAssistantUiCopy("de").welcome.length > 0);
  assert.ok(getAssistantPromptCopy("uk").need.length > 0);
  assert.ok(getCapabilityLocalization("fr").needReview.length > 0);
  assert.ok(buildSubmittedAssistantMessage("pl", { name: "Ala", email: "ala@example.com" }).includes("Kubera AI"));
});

test("capability fallback follows the switched active language instead of stale memory", async () => {
  const provider = new DeterministicAssistantProvider();
  const staleSpanishMemory = {
    summary: "Spanish conversation about automation.",
    turnCount: 24,
    locale: "es" as const,
    structured: {
      language: "es" as const,
      country: "Spain",
      currentConversationStage: "solution_recommendation" as const,
      questionsAlreadyAnswered: ["country", "need"],
      informationStillNeeded: ["contact"],
    },
  };

  const englishSwitchResponse = await provider.respond({
    context: {
      currentPath: "/services",
      locale: "en",
      conversationMemory: staleSpanishMemory,
    },
    messages: [
      { role: "assistant", content: "Claro, puedo ayudar." },
      { role: "user", content: "We are in Spain, but can you switch to English now and tell me if SAP integration is possible?" },
    ],
  });

  const germanSwitchResponse = await provider.respond({
    context: {
      currentPath: "/services",
      locale: "de",
      conversationMemory: {
        ...staleSpanishMemory,
        locale: "de",
        structured: {
          ...staleSpanishMemory.structured,
          language: "de" as const,
        },
      },
    },
    messages: [
      { role: "assistant", content: "Claro, puedo ayudar." },
      { role: "user", content: "Kannst du bitte auf Deutsch antworten und mir sagen, ob SAP möglich ist?" },
    ],
  });

  assert.equal(englishSwitchResponse.locale, "en");
  assert.ok(englishSwitchResponse.message.content.includes("technical assessment"));
  assert.ok(englishSwitchResponse.message.content.includes("What system are you using"));
  assert.equal(germanSwitchResponse.locale, "de");
  assert.ok(germanSwitchResponse.message.content.toLowerCase().includes("technische pruefung"));
  assert.ok(germanSwitchResponse.message.content.includes("Welches System"));
});

test("contact collection stays in the active language", () => {
  const germanCopy = getAssistantPromptCopy("de");
  const ukrainianCopy = getAssistantPromptCopy("uk");
  const germanSubmission = buildSubmittedAssistantMessage("de", { name: "Anna", email: "anna@example.com" });
  const ukrainianSubmission = buildSubmittedAssistantMessage("uk", { name: "Oleh", telegram: "@oleh" });

  assert.ok(germanCopy.contact.includes("E-Mail"));
  assert.ok(germanCopy.ready.includes("Kubera AI"));
  assert.ok(ukrainianCopy.contact.includes("Telegram"));
  assert.ok(germanSubmission.includes("Vielen Dank"));
  assert.ok(ukrainianSubmission.includes("Дякуємо"));
});

test("duplicate submission behavior stays bounded", () => {
  const lead: AssistantLeadDraft = {
    name: "Marta Nowak",
    company: "Clinic One",
    email: "marta.nowak@example.com",
    country: "Poland",
    need: "Appointment automation and reminders",
    urgency: "Soon",
  };

  const hash = createAssistantSubmissionHash(lead);
  const firstReservation = reserveAssistantSubmission(hash);
  const duplicateReservation = reserveAssistantSubmission(hash);

  assert.equal(firstReservation.reserved, true);
  assert.equal(duplicateReservation.reserved, false);
  assert.equal(duplicateReservation.status, "pending");

  releaseAssistantSubmission(hash);
  const secondReservation = reserveAssistantSubmission(hash);
  assert.equal(secondReservation.reserved, true);

  markAssistantSubmissionSubmitted(hash);
  const submittedReservation = reserveAssistantSubmission(hash);
  assert.equal(submittedReservation.reserved, false);
  assert.equal(submittedReservation.status, "submitted");
});

test("close clears memory and transient errors preserve the active conversation", () => {
  const openState = {
    ...createClosedAssistantSessionState("en"),
    sessionPhase: "active" as const,
    messages: [{ role: "user", content: "We need lead automation for our clinic." }],
    lead: { name: "Maya", company: "Clinic Co", email: "maya@example.com" },
    input: "Can you help?",
    submitted: true,
  };

  const transient = createTransientAssistantSessionState(openState, {
    category: "server",
    retryable: true,
    message: "Temporary assistant error",
  });
  const closed = createClosedAssistantSessionState("en");

  assert.deepEqual(transient.messages, openState.messages);
  assert.deepEqual(transient.lead, openState.lead);
  assert.equal(transient.submitted, true);
  assert.equal(transient.sessionPhase, "transient_error");
  assert.equal(transient.errorState?.retryable, true);

  assert.deepEqual(closed.messages, []);
  assert.deepEqual(closed.lead, {});
  assert.equal(closed.submitted, false);
  assert.equal(closed.sessionPhase, "closed");
  assert.equal(closed.errorState, null);
});
