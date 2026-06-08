import { z } from "zod";
import { sanitizePhone, sanitizeTelegram, sanitizeText } from "@/lib/security/sanitize";

const optionalSanitized = (maxLength: number) =>
  z.preprocess((value) => {
    const sanitized = sanitizeText(value, maxLength);
    return sanitized.length ? sanitized : undefined;
  }, z.string().max(maxLength).optional());

const whatsappSchema = z
  .string()
  .max(60)
  .regex(/^\+?[0-9][0-9\s().-]{5,58}$/, "Invalid WhatsApp phone format")
  .optional();

const telegramSchema = z
  .string()
  .max(80)
  .regex(/^@?[a-zA-Z0-9_]{5,32}$/, "Invalid Telegram username format")
  .optional();

export const contactFormSchema = z.object({
  locale: z.enum(["en", "ru"]),
  name: z.preprocess((value) => sanitizeText(value, 120), z.string().min(1).max(120)),
  email: z.preprocess((value) => sanitizeText(value, 200).toLowerCase(), z.string().email().max(200)),
  whatsapp: z.preprocess((value) => {
    const sanitized = sanitizePhone(value);
    return sanitized.length ? sanitized : undefined;
  }, whatsappSchema),
  telegram: z.preprocess((value) => {
    const sanitized = sanitizeTelegram(value);
    return sanitized.length ? sanitized : undefined;
  }, telegramSchema),
  company: optionalSanitized(160),
  message: z.preprocess((value) => sanitizeText(value, 2000), z.string().min(1).max(2000)),
  website: z.preprocess((value) => sanitizeText(value, 120), z.string().max(120).optional()),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;
