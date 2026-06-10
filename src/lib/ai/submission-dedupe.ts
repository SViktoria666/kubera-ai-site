import "server-only";

import { createHash } from "node:crypto";
import type { AssistantLeadDraft } from "@/lib/ai/types";

type SubmissionStatus = "pending" | "submitted";

type SubmissionRecord = {
  status: SubmissionStatus;
  expiresAt: number;
};

const submissions = new Map<string, SubmissionRecord>();
const DEFAULT_TTL_MS = 30 * 60 * 1000;

function normalize(value: unknown) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function pruneExpired(now = Date.now()) {
  for (const [key, record] of submissions.entries()) {
    if (record.expiresAt <= now) {
      submissions.delete(key);
    }
  }
}

export function createAssistantSubmissionHash(lead: AssistantLeadDraft) {
  const stablePayload = {
    company: normalize(lead.company),
    contact: normalize(lead.email || lead.telegram || lead.whatsapp),
    country: normalize(lead.country),
    name: normalize(lead.name),
    need: normalize(lead.need),
    urgency: normalize(lead.urgency),
  };

  return createHash("sha256").update(JSON.stringify(stablePayload)).digest("hex");
}

export function reserveAssistantSubmission(hash: string, ttlMs = DEFAULT_TTL_MS) {
  const now = Date.now();
  pruneExpired(now);

  const existing = submissions.get(hash);
  if (existing && existing.expiresAt > now) {
    return { reserved: false as const, status: existing.status };
  }

  submissions.set(hash, { status: "pending", expiresAt: now + ttlMs });
  return { reserved: true as const };
}

export function markAssistantSubmissionSubmitted(hash: string, ttlMs = DEFAULT_TTL_MS) {
  submissions.set(hash, { status: "submitted", expiresAt: Date.now() + ttlMs });
}

export function releaseAssistantSubmission(hash: string) {
  const existing = submissions.get(hash);
  if (existing?.status === "pending") {
    submissions.delete(hash);
  }
}
