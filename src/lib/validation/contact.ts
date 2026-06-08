import { z } from "zod";
import { sanitizePhone, sanitizeTelegram, sanitizeText } from "@/lib/security/sanitize";

const optionalSanitized = (maxLength: number) =>
  z.preprocess((value) => {
    const sanitized = sanitizeText(value, maxLength);
    return sanitized.length ? sanitized : undefined;
  }, z.string().max(maxLength).optional());

export const contactFormSchema = z.object({
  locale: z.enum(["en", "ru"]),
  name: z.preprocess((value) => sanitizeText(value, 120), z.string().min(1).max(120)),
  email: z.preprocess((value) => sanitizeText(value, 200).toLowerCase(), z.string().email().max(200)),
  whatsapp: z.preprocess((value) => {
    const sanitized = sanitizePhone(value);
    return sanitized.length ? sanitized : undefined;
  }, z.string().max(60).optional()),
  telegram: z.preprocess((value) => {
    const sanitized = sanitizeTelegram(value);
    return sanitized.length ? sanitized : undefined;
  }, z.string().max(80).optional()),
  company: optionalSanitized(160),
  message: optionalSanitized(2000),
  website: z.preprocess((value) => sanitizeText(value, 120), z.string().max(120).optional()),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;
