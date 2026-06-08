export async function safeJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return null;
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
