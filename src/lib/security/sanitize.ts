export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function sanitizePhone(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[^\d+\s().-]/g, "").replace(/\s+/g, " ").trim().slice(0, 60);
}

export function sanitizeTelegram(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[^a-zA-Z0-9_@./:-]/g, "").trim().slice(0, 80);
}
