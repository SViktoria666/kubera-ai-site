export type BotAssessment = {
  allowed: boolean;
  reason?: "honeypot" | "missing_user_agent" | "payload_too_large";
};

export function assessContactRequest(input: { honeypot?: string | null; userAgent: string; contentLength?: string | null }): BotAssessment {
  if (input.honeypot && input.honeypot.trim().length > 0) {
    return { allowed: false, reason: "honeypot" };
  }

  if (!input.userAgent || input.userAgent === "unknown") {
    return { allowed: false, reason: "missing_user_agent" };
  }

  const length = Number(input.contentLength || 0);
  if (Number.isFinite(length) && length > 12_000) {
    return { allowed: false, reason: "payload_too_large" };
  }

  return { allowed: true };
}
