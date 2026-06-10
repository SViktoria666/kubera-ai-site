import { NextResponse } from "next/server";
import { selectKnowledgeContext } from "@/lib/ai/knowledge-base";
import { getAssistantProvider } from "@/lib/ai/provider";
import { createAssistantSubmissionHash, markAssistantSubmissionSubmitted, releaseAssistantSubmission, reserveAssistantSubmission } from "@/lib/ai/submission-dedupe";
import { sendAssistantLeadToN8n } from "@/lib/integrations/n8n";
import { checkRateLimit } from "@/lib/rate-limit/memory";
import { getClientIp, getRequestId, safeJsonWithLimit } from "@/lib/security/request";
import type { AssistantProviderContext, AssistantRequest, AssistantResponse } from "@/lib/ai/types";
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

    let submitted = false;
    let duplicateSubmission = false;

    if (assistantResponse.readyToSubmit) {
      const submissionHash = createAssistantSubmissionHash(assistantResponse.lead);
      const reservation = reserveAssistantSubmission(submissionHash);

      if (!reservation.reserved) {
        duplicateSubmission = true;
        submitted = true;
        return NextResponse.json({ ok: true, requestId, ...assistantResponse, submitted, duplicateSubmission });
      }

      const delivery = await sendAssistantLeadToN8n(assistantResponse.lead);

      if (!delivery.ok) {
        releaseAssistantSubmission(submissionHash);
        const status = delivery.reason === "missing_env" ? 503 : 502;
        return jsonError("Lead delivery is temporarily unavailable", requestId, status);
      }

      markAssistantSubmissionSubmitted(submissionHash);
      submitted = true;
    }

    return NextResponse.json({ ok: true, requestId, ...assistantResponse, submitted, duplicateSubmission });
  } catch {
    return jsonError("Assistant is temporarily unavailable", requestId, 503);
  }
}

export function GET(request: Request) {
  return jsonError("Method not allowed", getRequestId(request), 405);
}
