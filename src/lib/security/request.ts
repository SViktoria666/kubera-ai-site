import { sanitizeText } from "@/lib/security/sanitize";

export async function safeJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export async function safeJsonWithLimit(request: Request, maxBytes: number): Promise<{ ok: true; data: unknown } | { ok: false; reason: "too_large" | "invalid_json" }> {
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (contentLength > maxBytes) {
    return { ok: false, reason: "too_large" };
  }

  try {
    const text = await request.text();
    const size = new TextEncoder().encode(text).byteLength;

    if (size > maxBytes) {
      return { ok: false, reason: "too_large" };
    }

    return { ok: true, data: JSON.parse(text) };
  } catch {
    return { ok: false, reason: "invalid_json" };
  }
}

export function getUserAgent(request: Request): string {
  return request.headers.get("user-agent") || "unknown";
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

export function getRequestId(request: Request): string {
  return request.headers.get("x-vercel-id") || crypto.randomUUID();
}

export function getSafeGeoMetadata(request: Request) {
  const country = sanitizeText(request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || "", 80);
  const region = sanitizeText(
    request.headers.get("x-vercel-ip-country-region") || request.headers.get("x-vercel-ip-country-region-name") || request.headers.get("cf-region") || "",
    120,
  );

  if (!country && !region) {
    return undefined;
  }

  return {
    ...(country ? { country } : {}),
    ...(region ? { region } : {}),
  };
}
