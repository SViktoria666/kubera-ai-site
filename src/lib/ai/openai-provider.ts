import "server-only";

import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { resolveAssistantReplyLocale } from "./assistant-localization";
import { formatKnowledgeContext } from "./knowledge-base";
import {
  buildCapabilityFallbackMessage,
  classifyCapabilityQuestion,
  formatCapabilityAssessment,
  getConfirmedCapabilityEvidenceText,
  shouldUseCapabilityFallback,
} from "./assistant-intelligence";
import { openAiAssistantOutputSchema, requiredLeadFields } from "./openai-schema";
import type { SiteAssistantProvider } from "./provider";
import type { OpenAiAssistantOutput } from "./openai-schema";
import type { AssistantLeadDraft, AssistantLocale, AssistantProviderContext, AssistantRequest, AssistantResponse } from "./types";

const DEFAULT_MODEL = "gpt-5.5";

function hasContact(lead: AssistantLeadDraft) {
  return Boolean(lead.email || lead.telegram || lead.whatsapp);
}

function normalizeLead(lead: OpenAiAssistantOutput["collectedFields"]) {
  return Object.fromEntries(Object.entries(lead).filter(([, value]) => value !== null && value !== undefined && value !== ""));
}

function mergeLead(previous: AssistantLeadDraft | undefined, collected: OpenAiAssistantOutput["collectedFields"], leadScore: number): AssistantLeadDraft {
  return {
    ...(previous || {}),
    ...normalizeLead(collected),
    leadScore,
  };
}

function inferMissingFields(lead: AssistantLeadDraft) {
  return requiredLeadFields.filter((field) => {
    if (field === "contact") return !hasContact(lead);
    return !lead[field];
  });
}

function isReadyToSubmit(lead: AssistantLeadDraft) {
  return inferMissingFields(lead).length === 0;
}

function getLatestUserMessage(messages: AssistantRequest["messages"]) {
  return [...messages].reverse().find((message) => message.role === "user")?.content || "";
}

function resolveCapabilityAssessment(context: AssistantProviderContext | undefined, request: AssistantRequest | undefined, locale?: AssistantLocale) {
  return (
    context?.capabilityAssessment ||
    classifyCapabilityQuestion(getLatestUserMessage(request?.messages || []), getConfirmedCapabilityEvidenceText(), locale)
  );
}

function buildSystemPrompt(context: AssistantProviderContext | undefined, request?: AssistantRequest) {
  const activeLocale = resolveAssistantReplyLocale({
    latestUserMessage: getLatestUserMessage(request?.messages || []),
    requestLocale: request?.context.locale,
    conversationMemory: context?.conversationMemory || null,
  });
  const knowledgeContext = context?.knowledgeContext ? formatKnowledgeContext(context.knowledgeContext) : "No route-specific knowledge context was provided.";
  const conversationMemory = context?.conversationMemory?.summary || "No conversation memory was provided.";
  const capabilityAssessment = resolveCapabilityAssessment(context, request, activeLocale);
  const capabilityText = formatCapabilityAssessment(capabilityAssessment, activeLocale);
  const structuredMemory = context?.conversationMemory?.structured;
  const structuredMemoryText = structuredMemory
    ? JSON.stringify(structuredMemory, null, 2)
    : "No structured memory was provided.";

  return [
    "You are Kubera AI Assistant for www.kubera-automation.com.",
    "Answer in the user's detected language. Keep replies concise, useful, warm, and sales-assistant appropriate.",
    "Use the provided Knowledge Base as the primary source of truth for Kubera AI facts, pages, services, examples, and recommendations. If a fact is missing, say the Kubera AI team can clarify it.",
    "Use the currentLeadDraft, structured memory, conversationMemory, and messages as persistent conversation memory. Never ask again for information that is already present in them.",
    "If conversationMemory summarizes earlier questions and answers, treat it as part of the active conversation so the assistant does not reset context when the conversation becomes long.",
    "Before asking any question, check the structured memory for fields already confirmed or already answered. Do not ask again for name, company, country, industry, business problem, email, phone, WhatsApp, Telegram, or preferred contact method unless the previous value is missing, invalid, ambiguous, or explicitly corrected.",
    "If the user asks how quickly Kubera AI will contact them, when the team will reply, or response timing, say that the team usually contacts clients within a few hours and tries to respond as quickly as possible for urgent requests. Do not say that response timing is not specified in the Knowledge Base.",
    "Your MVP qualification flow is strict: need -> urgency -> name -> company -> country -> contact.",
    "Do not ask for contact information until need, urgency, name, company, and country are known. The contact field is satisfied by one of: email, Telegram, or WhatsApp.",
    "Ask only one main qualification question at a time unless the user already gave multiple details.",
    "If the question is about fit or examples, lead with a use case or case study. If it is about process, lead with how-we-work. If it is about a country or market, lead with the matching GEO page. If it is about starting a project, lead with contacts.",
    "When you recommend pages, give one best-match recommendation first and at most one secondary recommendation. Explain briefly why each page is relevant. Do not repeat the same recommendation unless the topic changed.",
    "Avoid generic chatbot phrasing. Speak like a Kubera AI business consultant who knows the site content and can point the user to the right page next.",
    "Keep the conversation natural and consultative. Acknowledge details already given and move to the next missing item instead of repeating questions.",
    "If submissionCompleted is true, continue the conversation and help with corrections or extra details, but do not say that a new lead submission will be sent.",
    "Never invent pricing, timelines, guarantees, customers, integrations, technical compatibility, or delivery commitments that are not confirmed in the Knowledge Base or structured capability assessment.",
    "Capability honesty rule: if a capability is not explicitly confirmed by the Knowledge Base or the structured capability assessment says it is unconfirmed, do not answer with a plain yes and do not state it as already supported. Answer that it may be possible in principle but requires a technical assessment of the specific systems, APIs, workflow, and security requirements. Use a cautious, consultative tone and ask only the minimum useful follow-up question.",
    "If the user asks about SAP, ERP, CRM, or another integration that is not confirmed in the Knowledge Base, do not say Kubera AI definitely supports it. Say that it may be possible, but exact scope must be reviewed with the customer’s environment and workflow.",
    "Use the capability assessment below as an internal guardrail. Follow its guidance and do not expose the labels to the user.",
    "",
    "Capability Assessment:",
    capabilityText,
    "",
    "Structured Memory:",
    structuredMemoryText,
    "",
    "Conversation Memory:",
    conversationMemory,
    "Return only the structured output requested by the schema.",
    "",
    "Knowledge Base:",
    knowledgeContext,
  ].join("\n");
}

function buildUserPayload(request: AssistantRequest) {
  return JSON.stringify(
    {
      pageContext: request.context,
      currentLeadDraft: request.lead || {},
      submissionCompleted: request.submissionCompleted === true,
      requiredFlow: requiredLeadFields,
      messages: request.messages,
      conversationMemory: request.context.conversationMemory || null,
    },
    null,
    2,
  );
}

function parseOutput(text: string) {
  const json = JSON.parse(text);
  return openAiAssistantOutputSchema.parse(json);
}

export class OpenAiAssistantProvider implements SiteAssistantProvider {
  private readonly client: OpenAI;
  private readonly model: string;

  constructor(apiKey: string, model = process.env.OPENAI_MODEL || DEFAULT_MODEL) {
    this.client = new OpenAI({ apiKey });
    this.model = model;
  }

  async respond(request: AssistantRequest, context?: AssistantProviderContext): Promise<AssistantResponse> {
    const activeLocale = resolveAssistantReplyLocale({
      latestUserMessage: getLatestUserMessage(request.messages),
      requestLocale: request.context.locale,
      conversationMemory: context?.conversationMemory || null,
    });
    const response = await this.client.responses.create({
      model: this.model,
      instructions: buildSystemPrompt(context, request),
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: buildUserPayload(request),
            },
          ],
        },
      ],
      reasoning: { effort: "low" },
      store: false,
      text: {
        format: zodTextFormat(openAiAssistantOutputSchema, "kubera_ai_assistant_output"),
        verbosity: "low",
      },
    });

    const output = parseOutput(response.output_text);
    const lead = mergeLead(request.lead, output.collectedFields, output.leadScore);
    const readyToSubmit = output.readyToSubmit && isReadyToSubmit(lead);
    const capabilityAssessment = resolveCapabilityAssessment(context, request, activeLocale);
    const useCapabilityFallback = shouldUseCapabilityFallback(getLatestUserMessage(request.messages), capabilityAssessment);
    const assistantMessage = useCapabilityFallback
      ? buildCapabilityFallbackMessage(activeLocale, capabilityAssessment)
      : output.assistantMessage;

    return {
      message: {
        role: "assistant",
        content: assistantMessage,
      },
      locale: activeLocale,
      lead,
      readyToSubmit,
    };
  }
}
