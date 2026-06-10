import "server-only";

import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { formatKnowledgeContext } from "@/lib/ai/knowledge-base";
import { openAiAssistantOutputSchema, requiredLeadFields } from "@/lib/ai/openai-schema";
import type { SiteAssistantProvider } from "@/lib/ai/provider";
import type { OpenAiAssistantOutput } from "@/lib/ai/openai-schema";
import type { AssistantLeadDraft, AssistantProviderContext, AssistantRequest, AssistantResponse } from "@/lib/ai/types";

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

function buildSystemPrompt(context: AssistantProviderContext | undefined) {
  const knowledgeContext = context?.knowledgeContext ? formatKnowledgeContext(context.knowledgeContext) : "No route-specific knowledge context was provided.";

  return [
    "You are Kubera AI Assistant for kubera-automation.com.",
    "Answer in the user's detected language. Keep replies concise, useful, and sales-assistant appropriate.",
    "Use only the provided Knowledge Base for factual claims about Kubera AI. If a fact is missing, say the Kubera AI team can clarify it.",
    "Your MVP qualification flow is strict: need -> urgency -> name -> company -> country -> contact.",
    "Do not ask for contact information until need, urgency, name, company, and country are known.",
    "The contact field is satisfied by one of: email, Telegram, or WhatsApp.",
    "Ask only one main qualification question at a time unless the user already gave multiple details.",
    "If submissionCompleted is true, continue the conversation and help with corrections or extra details, but do not say that a new lead submission will be sent.",
    "Never invent pricing, timelines, guarantees, customers, or integrations that are not in the Knowledge Base.",
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
    const response = await this.client.responses.create({
      model: this.model,
      instructions: buildSystemPrompt(context),
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

    return {
      message: {
        role: "assistant",
        content: output.assistantMessage,
      },
      locale: output.detectedLanguage,
      lead,
      readyToSubmit,
    };
  }
}
