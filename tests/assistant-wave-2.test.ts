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
} from "../src/lib/ai/assistant-intelligence.ts";
import { createClosedAssistantSessionState, createTransientAssistantSessionState } from "../src/lib/ai/assistant-session.ts";
import { DeterministicAssistantProvider } from "../src/lib/ai/provider.ts";
import type { AssistantLeadDraft, AssistantMessage } from "../src/lib/ai/types.ts";

function makeMessages(count: number): AssistantMessage[] {
  return Array.from({ length: count }, (_, index) =>
    index % 2 === 0
      ? { role: "user" as const, content: `User turn ${index + 1} with a specific business detail about automation and follow-up.` }
      : { role: "assistant" as const, content: `Assistant turn ${index + 1} with a concise helpful response.` },
  );
}

test("structured memory preserves confirmed facts across long conversations", () => {
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
    locale: "en",
    visitorIntent: "services",
  });

  assert.equal(memory.turnCount, 30);
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
  assert.ok(memory.summary.includes("Recent conversation:"));
  assert.ok(memory.summary.includes("Anna Kowalska"));
});

test("unknown integrations stay cautious and require assessment", () => {
  const assessment = classifyCapabilityQuestion(
    "Do you integrate with SAP S/4HANA?",
    "Kubera AI helps with AI automation, lead generation, CRM workflows, customer communications, and consultation.",
    "en",
  );

  assert.notEqual(assessment.status, "CONFIRMED_CAPABILITY");
  assert.ok(assessment.guidance.toLowerCase().includes("technical"));
  assert.equal(formatCapabilityAssessment(assessment, "en").includes("technical assessment"), true);
});

test("vendor mentions in general knowledge do not become proof of capability", () => {
  const capabilityEvidence = getConfirmedCapabilityEvidenceText();

  assert.ok(!/\\bsap\\b/i.test(capabilityEvidence));
  assert.ok(!/\\boracle\\b/i.test(capabilityEvidence));

  const assessment = classifyCapabilityQuestion(
    "Can Kubera AI integrate directly with SAP?",
    "A general article mentions SAP, Oracle, and other ERP vendors, but that is not proof of delivery capability.",
    "en",
  );

  assert.notEqual(assessment.status, "CONFIRMED_CAPABILITY");
  assert.equal(shouldUseCapabilityFallback("Can Kubera AI integrate directly with SAP?", assessment), true);
  assert.ok(buildCapabilityFallbackMessage("en", assessment).toLowerCase().includes("technical assessment"));
});

test("confirmed capabilities are only marked confirmed when evidence is present", () => {
  const assessment = classifyCapabilityQuestion(
    "Can Kubera AI build WhatsApp automation?",
    "Kubera AI supports WhatsApp lead routing, Telegram notifications, and CRM follow-up.",
    "en",
  );

  assert.equal(assessment.status, "CONFIRMED_CAPABILITY");
  assert.ok(assessment.guidance.length > 0);
});

test("language guardrails remain separated", () => {
  const ruAssessment = formatCapabilityAssessment(
    classifyCapabilityQuestion("Интеграция с SAP возможна?", "Kubera AI помогает с автоматизацией, CRM и коммуникациями.", "ru"),
    "ru",
  );
  const esAssessment = formatCapabilityAssessment(
    classifyCapabilityQuestion("¿Se puede integrar SAP?", "Kubera AI ayuda con automatización, CRM y comunicaciones.", "es"),
    "es",
  );

  assert.ok(ruAssessment.includes("Требуется"));
  assert.ok(esAssessment.includes("Requiere"));
  assert.ok(esAssessment.toLowerCase().includes("tecnica"));
});

test("deterministic fallback uses the same honesty guard", async () => {
  const provider = new DeterministicAssistantProvider();

  const sapResponse = await provider.respond({
    context: { currentPath: "/", locale: "en" },
    messages: [{ role: "user", content: "Can Kubera AI integrate directly with SAP?" }],
  });

  const ruSapResponse = await provider.respond({
    context: { currentPath: "/", locale: "ru" },
    messages: [{ role: "user", content: "Интеграция с SAP возможна?" }],
  });

  const esSapResponse = await provider.respond({
    context: { currentPath: "/", locale: "es" },
    messages: [{ role: "user", content: "¿Se puede integrar SAP?" }],
  });

  const confirmedResponse = await provider.respond({
    context: { currentPath: "/", locale: "en" },
    messages: [{ role: "user", content: "Can Kubera AI build a WhatsApp AI assistant?" }],
  });

  assert.ok(sapResponse.message.content.toLowerCase().includes("technical assessment"));
  assert.ok(ruSapResponse.message.content.toLowerCase().includes("техничес"));
  assert.ok(esSapResponse.message.content.toLowerCase().includes("revisar") || esSapResponse.message.content.toLowerCase().includes("sistema"));
  assert.ok(confirmedResponse.message.content.toLowerCase().includes("competence"));
});

test("page recommendations stay bounded and only return known pages", () => {
  const items = [
    { kind: "service", title: "Services", path: "/services", summary: "Service hub" },
    { kind: "case-study", title: "Sales Leads", path: "/cases/sales-leads", summary: "Lead generation case study" },
    { kind: "blog", title: "How to choose first AI automation project", path: "/blog/how-to-choose-first-ai-automation-project", summary: "Blog article" },
    { kind: "use-case", title: "AI Customer Support", path: "/use-cases/ai-customer-support-ecommerce", summary: "Use case" },
  ];

  const ranked = rankRelevantKnowledgePages(
    { currentPath: "/services", country: "Germany", locale: "en", keywords: ["automation", "lead"] },
    items,
    2,
  );

  assert.ok(ranked.length <= 2);
  assert.equal(new Set(ranked.map((item) => item.path)).size, ranked.length);
  assert.ok(ranked.every((item) => items.some((candidate) => candidate.path === item.path)));
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
