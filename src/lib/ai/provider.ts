import { OpenAiAssistantProvider } from "@/lib/ai/openai-provider";
import type { AssistantProviderContext, AssistantRequest, AssistantResponse } from "@/lib/ai/types";

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
  { locale: "sv" as const, pattern: /\b(hej|företag|foretag|kontakt|br[aå]dskande|automatisering|tack)\b/i },
  { locale: "da" as const, pattern: /\b(hej|virksomhed|kontakt|haster|automatisering|tak)\b/i },
];

const prompts = {
  en: {
    need: "Tell me what you want to automate or improve first.",
    urgency: "What makes this important now? For example: lost leads, slow replies, manual work, or a deadline.",
    name: "What is your name?",
    company: "What company are you from?",
    country: "Which country is the business operating in?",
    contact: "What is the best contact for follow-up: email, Telegram, or WhatsApp?",
    ready: "Thanks. I have enough context and will pass this to the Kubera AI team.",
  },
  ru: {
    need: "Сначала расскажите, что вы хотите автоматизировать или улучшить.",
    urgency: "Почему это важно сейчас? Например: теряются лиды, медленные ответы, ручная работа или дедлайн.",
    name: "Как вас зовут?",
    company: "Из какой вы компании?",
    country: "В какой стране работает бизнес?",
    contact: "Как лучше связаться: email, Telegram или WhatsApp?",
    ready: "Спасибо. Контекста достаточно, передам это команде Kubera AI.",
  },
  es: {
    need: "Primero, cuéntame qué quieres automatizar o mejorar.",
    urgency: "¿Por qué es importante ahora? Por ejemplo: leads perdidos, respuestas lentas, trabajo manual o una fecha límite.",
    name: "¿Cómo te llamas?",
    company: "¿De qué empresa eres?",
    country: "¿En qué país opera el negocio?",
    contact: "¿Cuál es el mejor contacto: email, Telegram o WhatsApp?",
    ready: "Gracias. Tengo suficiente contexto y lo enviaré al equipo de Kubera AI.",
  },
};

const consultativeTopicPattern =
  /\b(ai|automation|agent|agents|openclaw|hermes|n8n|crm|saas|integration|integrations|workflow|workflows|chatbot|chatbots|mcp|business automation|автоматизац|агент|агенты|интеграц|воркфлоу|чатбот|чат-бот|ии)\b/i;

const responseTimePattern =
  /\b(how fast|how quickly|when (will|do)|response time|reply|contact me|свяж|ответ|как быстро|когда ответ|срок|сроки|cu[aá]ndo|rapido|respuesta|contacto)\b/i;

function getConsultativeResponse(locale: AssistantResponse["locale"]) {
  if (locale === "ru") {
    return "Да, такие проекты находятся в зоне компетенции Kubera AI. Для точной оценки команда уточнит детали и предложит оптимальное решение. Что именно вы хотите автоматизировать или улучшить?";
  }

  if (locale === "es") {
    return "Si, este tipo de proyectos esta dentro de la competencia de Kubera AI. Para una evaluacion precisa, el equipo aclarara los detalles y propondra la solucion optima. Que quieres automatizar o mejorar exactamente?";
  }

  return "Yes, projects like this are within Kubera AI's area of competence. For an accurate assessment, the team will clarify the details and propose the optimal solution. What exactly do you want to automate or improve?";
}

function getResponseTimeResponse(locale: AssistantResponse["locale"]) {
  if (locale === "ru") {
    return "Обычно команда Kubera AI связывается в течение нескольких часов. Если запрос срочный, мы стараемся ответить максимально быстро.";
  }

  if (locale === "es") {
    return "Normalmente el equipo de Kubera AI se pone en contacto en unas pocas horas. Si la solicitud es urgente, intentamos responder lo antes posible.";
  }

  return "The Kubera AI team usually contacts clients within a few hours. If the request is urgent, we try to respond as quickly as possible.";
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

function pickLocale(request: AssistantRequest) {
  const latestUserMessage = [...request.messages].reverse().find((message) => message.role === "user")?.content || "";
  const detected = localePatterns.find((entry) => entry.pattern.test(latestUserMessage))?.locale;
  return detected || request.context.locale || "en";
}

function getPrompts(locale: AssistantResponse["locale"]) {
  return prompts[locale as keyof typeof prompts] || prompts.en;
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

class DeterministicAssistantProvider implements SiteAssistantProvider {
  async respond(request: AssistantRequest, _context?: AssistantProviderContext): Promise<AssistantResponse> {
    const locale = pickLocale(request);
    const labels = getPrompts(locale);
    const latestUserMessage = [...request.messages].reverse().find((message) => message.role === "user")?.content.trim() || "";
    const lead = { ...(request.lead || {}) };
    const nextField = inferNextField(lead);
    const salesResponse = getSalesResponse(latestUserMessage, locale);

    if (latestUserMessage && !salesResponse) {
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
        content: salesResponse || (readyToSubmit ? labels.ready : labels[updatedNextField]),
      },
      locale,
      lead,
      readyToSubmit,
    };
  }
}

export function getAssistantProvider(): SiteAssistantProvider {
  if (process.env.OPENAI_API_KEY) {
    return new OpenAiAssistantProvider(process.env.OPENAI_API_KEY);
  }

  return new DeterministicAssistantProvider();
}
