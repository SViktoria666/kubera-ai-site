import { NextResponse } from "next/server";
import { selectKnowledgeContext } from "@/lib/ai/knowledge-base";
import { getAssistantProvider } from "@/lib/ai/provider";
import { createAssistantSubmissionHash, markAssistantSubmissionSubmitted, releaseAssistantSubmission, reserveAssistantSubmission } from "@/lib/ai/submission-dedupe";
import { sendAssistantLeadToN8n } from "@/lib/integrations/n8n";
import { checkRateLimit } from "@/lib/rate-limit/memory";
import { getClientIp, getRequestId, safeJsonWithLimit } from "@/lib/security/request";
import type { AssistantProviderContext, AssistantRequest, AssistantResponse } from "@/lib/ai/types";
import { assistantRequestSchema } from "@/lib/validation/assistant";

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

async function getControlledAssistantResponse(request: AssistantRequest, context: AssistantProviderContext) {
  try {
    return await withTimeout(getAssistantProvider().respond(request, context), ASSISTANT_PROVIDER_TIMEOUT_MS);
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const requestId = getRequestId(request);

  if (process.env.AI_ASSISTANT_ENABLED !== "true") {
    return NextResponse.json({ ok: false, error: "AI assistant is disabled", requestId }, { status: 404 });
  }

  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`assistant:${ip}`);

  if (!rateLimit.allowed) {
    return NextResponse.json({ ok: false, error: "Too many requests", requestId }, { status: 429 });
  }

  const payload = await safeJsonWithLimit(request, ASSISTANT_MAX_BODY_BYTES);

  if (!payload.ok) {
    const status = payload.reason === "too_large" ? 413 : 400;
    const error = payload.reason === "too_large" ? "Assistant payload is too large" : "Invalid assistant payload";
    return NextResponse.json({ ok: false, error, requestId }, { status });
  }

  const parsed = assistantRequestSchema.safeParse(payload.data);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid assistant payload", requestId }, { status: 400 });
  }

  const knowledgeContext = selectKnowledgeContext({
    page: parsed.data.context.currentPath,
    locale: parsed.data.context.locale,
    country: parsed.data.context.country,
    keywords: getKnowledgeKeywords(parsed.data.messages),
  });
  const assistantResponse = await getControlledAssistantResponse(parsed.data, { knowledgeContext });

  if (!assistantResponse) {
    return NextResponse.json({ ok: false, error: "Assistant is temporarily unavailable", requestId }, { status: 503 });
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
      return NextResponse.json({ ok: false, error: "Lead delivery is temporarily unavailable", requestId }, { status });
    }

    markAssistantSubmissionSubmitted(submissionHash);
    submitted = true;
  }

  return NextResponse.json({ ok: true, requestId, ...assistantResponse, submitted, duplicateSubmission });
}
