import { createRequire } from "module";
import { getAssistantPromptCopy, getConsultativeResponse as getLocalizedConsultativeResponse, getResponseTimeResponse as getLocalizedResponseTimeResponse, resolveAssistantReplyLocale } from "./assistant-localization";
import { buildCapabilityFallbackMessage, classifyCapabilityQuestion, getConfirmedCapabilityEvidenceText, shouldUseCapabilityFallback } from "./assistant-intelligence";
import type { AssistantProviderContext, AssistantRequest, AssistantResponse } from "./types";

export interface SiteAssistantProvider {
  respond(request: AssistantRequest, context?: AssistantProviderContext): Promise<AssistantResponse>;
}

export class AssistantNotConfiguredError extends Error {
  constructor() {
    super("AI assistant provider is not configured.");
  }
}

const localePatterns = [
  { locale: "ru" as const, pattern: /[А-Яа-яЁё]/ },
  { locale: "es" as const, pattern: /\b(hola|necesito|empresa|contacto|automatizaci[oó]n|urgente|gracias)\b/i },
  { locale: "de" as const, pattern: /\b(hallo|ich brauche|unternehmen|kontakt|dringend|automatisierung|danke)\b/i },
  { locale: "fr" as const, pattern: /\b(bonjour|besoin|entreprise|contact|urgent|automatisation|merci)\b/i },
  { locale: "it" as const, pattern: /\b(ciao|buongiorno|bisogno|azienda|contatto|urgente|automazione|grazie)\b/i },
  { locale: "pt" as const, pattern: /\b(ol[aá]|preciso|empresa|contato|urgente|automa[cç][aã]o|obrigado)\b/i },
  { locale: "pl" as const, pattern: /\b(cze[sś][cć]|potrzeb|firma|kontakt|pilne|automatyzacja|dziekuje|dziękuję)\b/i },
  { locale: "nl" as const, pattern: /\b(hallo|bedrijf|contact|dringend|automatisering|bedankt)\b/i },
  { locale: "et" as const, pattern: /\b(tere|ettev[õo]te|kontakt|kiire|automatiseerimine|ait[aä]h)\b/i },
  { locale: "lv" as const, pattern: /\b(sveiki|uzņēmums|kontakts|steidzami|automatizācija|paldies)\b/i },
  { locale: "lt" as const, pattern: /\b(sveiki|įmonė|imone|kontaktas|skubu|automatizavimas|ačiū|aciu)\b/i },
  { locale: "fi" as const, pattern: /\b(hei|yritys|yhteystieto|kiire|automaatio|kiitos)\b/i },
  { locale: "sv" as const, pattern: /\b(hej|företag|foretag|kontakt|brådskande|automatisering|tack)\b/i },
  { locale: "da" as const, pattern: /\b(hej|virksomhed|kontakt|haster|automatisering|tak)\b/i },
];

const prompts = {
  en: {
    need: "Tell me what you want to automate or improve, and I'll help.",
    urgency: "How soon do you want to start? For example: this week, this month, or just exploring.",
    name: "What is your name?",
    company: "Which company are you with?",
    country: "Which country does the business operate in?",
    contact: "What is the best way to follow up: email, Telegram, or WhatsApp?",
    ready: "Thanks. I have enough context and will pass this on to the Kubera AI team.",
  },
  ru: {
    need: "Привет! Я Kubera AI Assistant. Расскажите, что вы хотите автоматизировать или улучшить, и я помогу подобрать лучший вариант.",
    urgency: "Почему это важно сейчас? Например: теряются лиды, медленные ответы, ручная работа или дедлайн.",
    name: "Как вас зовут?",
    company: "Из какой вы компании?",
    country: "В какой стране работает бизнес?",
    contact: "Как лучше связаться: email, Telegram или WhatsApp?",
    ready: "Спасибо. Контекста достаточно, передам это команде Kubera AI.",
  },
  es: {
    need: "Hola, soy Kubera AI Assistant. Cuéntame qué te gustaría automatizar o mejorar y te ayudaré a encontrar la mejor opción.",
    urgency: "¿Por qué es importante ahora? Por ejemplo: leads perdidos, respuestas lentas, trabajo manual o una fecha límite.",
    name: "¿Cómo te llamas?",
    company: "¿De qué empresa eres?",
    country: "¿En qué país opera el negocio?",
    contact: "¿Cuál es el mejor contacto: email, Telegram o WhatsApp?",
    ready: "Gracias. Tengo suficiente contexto y lo enviaré al equipo de Kubera AI.",
  },
};

const consultativeTopicPattern =
  /\b(ai|ia|ia|automatiz|automatis|automation|automazione|automatisering|automatisering|automatizacij|agent|agents|openclaw|hermes|n8n|crm|saas|integration|integrations|integrazione|integratie|integra[cç][aã]o|workflow|workflows|flux|flusso|proces|procesos|process|chatbot|chatbots|mcp|business automation|assistant|asistente|asistent|asystent|assistent|assistanten|ассистент|помощник|voice ai|voz ia|voice|голосовой ии|автоматизац|automatizac|agente|агент|агенты|интеграц|integraz|workfl[oó]w|воркфлоу|чатбот|чат-бот|чатботы|chatboti|iau|ii)\b/i;

const responseTimePattern =
  /\b(how fast|how quickly|when (will|do)|response time|reply|contact me|свяж|ответ|как быстро|когда ответ|срок|сроки|cu[aá]ndo|rapido|respuesta|contacto|wann|schnell|delai|délai|tempo|timing|tempo di risposta|hoe snel|wanneer|kiek greitai|kuo greitai|jak szybko|kuig|aeg)\b/i;

function getConsultativeResponse(locale: AssistantResponse["locale"]) {
  return getLocalizedConsultativeResponse(locale);
}

function getResponseTimeResponse(locale: AssistantResponse["locale"]) {
  return getLocalizedResponseTimeResponse(locale);
}

function getSalesResponse(text: string, locale: AssistantResponse["locale"]) {
  if (responseTimePattern.test(text)) {
    return getResponseTimeResponse(locale);
  }

  if (consultativeTopicPattern.test(text)) {
    return getConsultativeResponse(locale);
  }

  return null;
}

function getPrompts(locale: AssistantResponse["locale"]) {
  return getAssistantPromptCopy(locale);
}

function hasContact(lead: AssistantRequest["lead"]) {
  return Boolean(lead?.email || lead?.telegram || lead?.whatsapp);
}

function extractContact(text: string) {
  const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
  const telegram = text.match(/@[a-zA-Z0-9_]{5,32}/)?.[0];
  const phone = text.match(/\+?[0-9][0-9\s().-]{5,58}/)?.[0]?.trim();
  return { email, telegram, whatsapp: phone };
}

function inferNextField(lead: AssistantRequest["lead"]) {
  if (!lead?.need) return "need";
  if (!lead.urgency) return "urgency";
  if (!lead.name) return "name";
  if (!lead.company) return "company";
  if (!lead.country) return "country";
  if (!hasContact(lead)) return "contact";
  return "ready";
}

function scoreLead(lead: AssistantRequest["lead"]) {
  let score = 35;
  if (lead?.need) score += 20;
  if (lead?.urgency) score += 15;
  if (lead?.company) score += 10;
  if (lead?.country) score += 5;
  if (hasContact(lead)) score += 15;
  return Math.min(100, score);
}

export class DeterministicAssistantProvider implements SiteAssistantProvider {
  async respond(request: AssistantRequest, _context?: AssistantProviderContext): Promise<AssistantResponse> {
    const locale = resolveAssistantReplyLocale({
      latestUserMessage: [...request.messages].reverse().find((message) => message.role === "user")?.content || "",
      requestLocale: request.context.locale,
      conversationMemory: request.context.conversationMemory,
    });
    const labels = getPrompts(locale);
    const latestUserMessage = [...request.messages].reverse().find((message) => message.role === "user")?.content.trim() || "";
    const lead = { ...(request.lead || {}) };
    const nextField = inferNextField(lead);
    const capabilityAssessment = classifyCapabilityQuestion(latestUserMessage, getConfirmedCapabilityEvidenceText(), locale);
    const useCapabilityFallback = shouldUseCapabilityFallback(latestUserMessage, capabilityAssessment);
    const salesResponse = useCapabilityFallback ? null : getSalesResponse(latestUserMessage, locale);

    if (latestUserMessage && !salesResponse && !useCapabilityFallback) {
      if (nextField === "contact") {
        Object.assign(lead, Object.fromEntries(Object.entries(extractContact(latestUserMessage)).filter(([, value]) => value)));
      } else if (nextField !== "ready") {
        lead[nextField] = latestUserMessage;
      }
    }

    if (!lead.country && request.context.country) {
      lead.country = request.context.country;
    }

    lead.leadScore = scoreLead(lead);
    const updatedNextField = inferNextField(lead);
    const readyToSubmit = updatedNextField === "ready";

    return {
      message: {
        role: "assistant",
        content: useCapabilityFallback
          ? buildCapabilityFallbackMessage(locale, capabilityAssessment)
          : salesResponse || (readyToSubmit ? labels.ready : labels[updatedNextField]),
      },
      locale,
      lead,
      readyToSubmit,
    };
  }
}

export function getAssistantProvider(): SiteAssistantProvider {
  if (process.env.OPENAI_API_KEY) {
    const require = createRequire(import.meta.url);
    const { OpenAiAssistantProvider } = require("./openai-provider");
    return new OpenAiAssistantProvider(process.env.OPENAI_API_KEY);
  }

  return new DeterministicAssistantProvider();
}
