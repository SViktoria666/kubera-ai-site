import { NextResponse } from "next/server";
import { selectKnowledgeContext } from "@/lib/ai/knowledge-base";
import { getAssistantProvider } from "@/lib/ai/provider";
import { createAssistantSubmissionHash, markAssistantSubmissionSubmitted, releaseAssistantSubmission, reserveAssistantSubmission } from "@/lib/ai/submission-dedupe";
import { sendAssistantLeadToN8n } from "@/lib/integrations/n8n";
import { checkRateLimit } from "@/lib/rate-limit/memory";
import { getClientIp, getRequestId, safeJsonWithLimit } from "@/lib/security/request";
import type { AssistantLeadDraft, AssistantLocale, AssistantProviderContext, AssistantRequest, AssistantResponse } from "@/lib/ai/types";
import { assistantRequestSchema } from "@/lib/validation/assistant";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const ASSISTANT_MAX_BODY_BYTES = 32 * 1024;
const ASSISTANT_PROVIDER_TIMEOUT_MS = 20 * 1000;

function getKnowledgeKeywords(messages: Array<{ role: string; content: string }>) {
  const text = messages
    .filter((message) => message.role === "user")
    .map((message) => message.content)
    .join(" ");

  return Array.from(
    new Set(
      text
        .toLowerCase()
        .split(/[^a-z0-9@+.-]+/i)
        .map((word) => word.trim())
        .filter((word) => word.length >= 4)
        .slice(-16),
    ),
  );
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("assistant_provider_timeout")), timeoutMs);

    promise
      .then(resolve, reject)
      .finally(() => clearTimeout(timeout));
  });
}

function getErrorField(error: unknown, field: "name" | "message" | "status" | "code" | "type") {
  if (!error || typeof error !== "object" || !(field in error)) {
    return undefined;
  }

  const value = error[field as keyof typeof error];
  return typeof value === "string" || typeof value === "number" ? value : undefined;
}

function getProviderErrorStage(error: unknown) {
  const name = String(getErrorField(error, "name") || "");
  const message = String(getErrorField(error, "message") || "");

  if (message === "assistant_provider_timeout") {
    return "timeout";
  }

  if (name === "ZodError" || name === "SyntaxError") {
    return "validation";
  }

  if (message.includes("uses `.optional()` without `.nullable()`") || message.includes("Root schema must have type")) {
    return "schema";
  }

  if (getErrorField(error, "status") || getErrorField(error, "code") || getErrorField(error, "type")) {
    return "api";
  }

  return "api";
}

function getSafeProviderErrorMessage(error: unknown) {
  const message = String(getErrorField(error, "message") || "");

  if (!message) {
    return undefined;
  }

  return message.replace(/sk-[A-Za-z0-9_-]+/g, "[redacted]").slice(0, 240);
}

function logAssistantProviderError(error: unknown, requestId: string) {
  console.error("assistant_provider_error", {
    requestId,
    stage: getProviderErrorStage(error),
    name: getErrorField(error, "name"),
    status: getErrorField(error, "status"),
    code: getErrorField(error, "code"),
    type: getErrorField(error, "type"),
    message: getSafeProviderErrorMessage(error),
  });
}

async function getControlledAssistantResponse(request: AssistantRequest, context: AssistantProviderContext, requestId: string) {
  try {
    return await withTimeout(getAssistantProvider().respond(request, context), ASSISTANT_PROVIDER_TIMEOUT_MS);
  } catch (error) {
    logAssistantProviderError(error, requestId);
    return null;
  }
}

function jsonError(error: string, requestId: string, status: number) {
  return NextResponse.json({ ok: false, error, requestId }, { status });
}

function getLeadContact(lead: AssistantLeadDraft) {
  if (lead.email) {
    return { type: "email" as const, value: lead.email };
  }

  if (lead.telegram) {
    return { type: "telegram" as const, value: lead.telegram };
  }

  if (lead.whatsapp) {
    return { type: "whatsapp" as const, value: lead.whatsapp };
  }

  return null;
}

function buildSubmittedMessage(locale: AssistantLocale, lead: AssistantLeadDraft) {
  const name = lead.name?.trim();
  const contact = getLeadContact(lead);
  const contactLabel = contact?.type === "email" ? "email" : contact?.type === "telegram" ? "Telegram" : contact?.type === "whatsapp" ? "WhatsApp" : "contact";
  const contactValue = contact?.value ? `: ${contact.value}` : "";

  const templates: Record<AssistantLocale, (parts: { contactLabel: string; contactValue: string; name?: string }) => string> = {
    en: ({ contactLabel, contactValue, name }) =>
      `Thank you${name ? `, ${name}` : ""}, for contacting us. I have passed your request to the Kubera AI team. They will contact you via the provided ${contactLabel}${contactValue}. If you want to correct the contact or add details, just write here.`,
    ru: ({ contactLabel, contactValue, name }) =>
      `Спасибо${name ? `, ${name}` : ""}, за обращение. Я передал ваш запрос команде Kubera AI. С вами свяжутся по указанному ${contactLabel}${contactValue}. Если вы хотите исправить контакт или добавить детали - просто напишите здесь.`,
    es: ({ contactLabel, contactValue, name }) =>
      `Gracias${name ? `, ${name}` : ""}, por contactarnos. He enviado tu solicitud al equipo de Kubera AI. Se pondran en contacto contigo por ${contactLabel}${contactValue}. Si quieres corregir el contacto o anadir detalles, escribe aqui.`,
    de: ({ contactLabel, contactValue, name }) =>
      `Vielen Dank${name ? `, ${name}` : ""}, fuer Ihre Anfrage. Ich habe Ihre Anfrage an das Kubera AI Team weitergeleitet. Das Team kontaktiert Sie ueber ${contactLabel}${contactValue}. Wenn Sie den Kontakt korrigieren oder Details ergaenzen moechten, schreiben Sie einfach hier.`,
    fr: ({ contactLabel, contactValue, name }) =>
      `Merci${name ? `, ${name}` : ""} pour votre demande. J'ai transmis votre demande a l'equipe Kubera AI. Elle vous contactera via ${contactLabel}${contactValue}. Si vous voulez corriger le contact ou ajouter des details, ecrivez simplement ici.`,
    it: ({ contactLabel, contactValue, name }) =>
      `Grazie${name ? `, ${name}` : ""} per averci contattato. Ho inviato la tua richiesta al team Kubera AI. Ti contatteranno tramite ${contactLabel}${contactValue}. Se vuoi correggere il contatto o aggiungere dettagli, scrivi qui.`,
    nl: ({ contactLabel, contactValue, name }) =>
      `Dank u${name ? `, ${name}` : ""} voor uw bericht. Ik heb uw aanvraag doorgestuurd naar het Kubera AI team. Zij nemen contact met u op via ${contactLabel}${contactValue}. Wilt u het contact corrigeren of details toevoegen, schrijf dan hier.`,
    pt: ({ contactLabel, contactValue, name }) =>
      `Obrigado${name ? `, ${name}` : ""} pelo contacto. Enviei o seu pedido para a equipa Kubera AI. A equipa entrara em contacto por ${contactLabel}${contactValue}. Se quiser corrigir o contacto ou acrescentar detalhes, escreva aqui.`,
    pl: ({ contactLabel, contactValue, name }) =>
      `Dziekuje${name ? `, ${name}` : ""} za kontakt. Przekazalem zapytanie zespolowi Kubera AI. Skontaktuja sie z Panstwem przez ${contactLabel}${contactValue}. Jesli chcesz poprawic kontakt lub dodac szczegoly, napisz tutaj.`,
    et: ({ contactLabel, contactValue, name }) =>
      `Aitah${name ? `, ${name}` : ""} poordumise eest. Edastasin teie paringu Kubera AI tiimile. Nad votavad teiega uhendust kanalil ${contactLabel}${contactValue}. Kui soovite kontakti parandada voi detaile lisada, kirjutage siia.`,
    lv: ({ contactLabel, contactValue, name }) =>
      `Paldies${name ? `, ${name}` : ""} par zinojumu. Es nodevu jusu pieprasijumu Kubera AI komandai. Ar jums sazinasies caur ${contactLabel}${contactValue}. Ja velaties labot kontaktu vai pievienot detalas, rakstiet seit.`,
    lt: ({ contactLabel, contactValue, name }) =>
      `Aciu${name ? `, ${name}` : ""} uz zinute. Perdaviau jusu uzklausa Kubera AI komandai. Jie susisieks per ${contactLabel}${contactValue}. Jei norite pataisyti kontakta ar prideti detaliu, parasykite cia.`,
    fi: ({ contactLabel, contactValue, name }) =>
      `Kiitos${name ? `, ${name}` : ""} yhteydenotosta. Valitin pyyntosi Kubera AI -tiimille. He ottavat yhteytta kanavan ${contactLabel}${contactValue} kautta. Jos haluat korjata yhteystiedon tai lisata tietoja, kirjoita tahan.`,
    sv: ({ contactLabel, contactValue, name }) =>
      `Tack${name ? `, ${name}` : ""} for din forfragan. Jag har skickat den till Kubera AI-teamet. De kontaktar dig via ${contactLabel}${contactValue}. Om du vill korrigera kontaktuppgiften eller lagga till detaljer, skriv har.`,
    da: ({ contactLabel, contactValue, name }) =>
      `Tak${name ? `, ${name}` : ""} for din henvendelse. Jeg har sendt din foresporgsel til Kubera AI-teamet. De kontakter dig via ${contactLabel}${contactValue}. Hvis du vil rette kontakten eller tilfoje detaljer, saa skriv her.`,
  };

  return templates[locale]({ contactLabel, contactValue, name });
}

function withSubmittedMessage(response: AssistantResponse): AssistantResponse {
  return {
    ...response,
    message: {
      role: "assistant",
      content: buildSubmittedMessage(response.locale, response.lead),
    },
  };
}

export async function POST(request: Request) {
  const requestId = getRequestId(request);

  try {
    if (process.env.AI_ASSISTANT_ENABLED !== "true") {
      return jsonError("AI assistant is disabled", requestId, 404);
    }

    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`assistant:${ip}`);

    if (!rateLimit.allowed) {
      return jsonError("Too many requests", requestId, 429);
    }

    const payload = await safeJsonWithLimit(request, ASSISTANT_MAX_BODY_BYTES);

    if (!payload.ok) {
      const status = payload.reason === "too_large" ? 413 : 400;
      const error = payload.reason === "too_large" ? "Assistant payload is too large" : "Invalid assistant payload";
      return jsonError(error, requestId, status);
    }

    const parsed = assistantRequestSchema.safeParse(payload.data);

    if (!parsed.success) {
      return jsonError("Invalid assistant payload", requestId, 400);
    }

    const knowledgeContext = selectKnowledgeContext({
      page: parsed.data.context.currentPath,
      locale: parsed.data.context.locale,
      country: parsed.data.context.country,
      keywords: getKnowledgeKeywords(parsed.data.messages),
    });
    const assistantResponse = await getControlledAssistantResponse(parsed.data, { knowledgeContext }, requestId);

    if (!assistantResponse) {
      return jsonError("Assistant is temporarily unavailable", requestId, 503);
    }

    let submitted = parsed.data.submissionCompleted === true;
    let duplicateSubmission = false;

    if (assistantResponse.readyToSubmit && !submitted) {
      const submissionHash = createAssistantSubmissionHash(assistantResponse.lead);
      const reservation = reserveAssistantSubmission(submissionHash);

      if (!reservation.reserved) {
        duplicateSubmission = true;
        submitted = true;
        return NextResponse.json({ ok: true, requestId, ...withSubmittedMessage(assistantResponse), submitted, duplicateSubmission });
      }

      const delivery = await sendAssistantLeadToN8n(assistantResponse.lead);

      if (!delivery.ok) {
        releaseAssistantSubmission(submissionHash);
        const status = delivery.reason === "missing_env" ? 503 : 502;
        return jsonError("Lead delivery is temporarily unavailable", requestId, status);
      }

      markAssistantSubmissionSubmitted(submissionHash);
      submitted = true;
      return NextResponse.json({ ok: true, requestId, ...withSubmittedMessage(assistantResponse), submitted, duplicateSubmission });
    }

    return NextResponse.json({ ok: true, requestId, ...assistantResponse, submitted, duplicateSubmission });
  } catch {
    return jsonError("Assistant is temporarily unavailable", requestId, 503);
  }
}

export function GET(request: Request) {
  return jsonError("Method not allowed", getRequestId(request), 405);
}
