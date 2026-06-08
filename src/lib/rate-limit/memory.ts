type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string) {
  const now = Date.now();
  const windowSeconds = Number(process.env.RATE_LIMIT_WINDOW_SECONDS || 60);
  const maxRequests = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 5);
  const current = buckets.get(key);

  if (!current || current.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
    return { allowed: true, remaining: maxRequests - 1, resetAt: now + windowSeconds * 1000 };
  }

  current.count += 1;
  return {
    allowed: current.count <= maxRequests,
    remaining: Math.max(0, maxRequests - current.count),
    resetAt: current.resetAt,
  };
}
