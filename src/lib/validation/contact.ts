import { z } from "zod";
import { analyticsContextSchema, type AnalyticsContextPayload } from "@/lib/validation/analytics";
import { sanitizePhone, sanitizeTelegram, sanitizeText } from "@/lib/security/sanitize";

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
  page: z.preprocess((value) => sanitizeText(value, 200), z.string().min(1).max(200)),
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
  company: z.preprocess((value) => sanitizeText(value, 160), z.string().min(1).max(160)),
  message: z.preprocess((value) => sanitizeText(value, 2000), z.string().min(1).max(2000)),
  website: z.preprocess((value) => sanitizeText(value, 120), z.string().max(120).optional()),
  analyticsContext: analyticsContextSchema.optional(),
  analyticsSummary: z.preprocess((value) => sanitizeText(value, 6000), z.string().max(6000).optional()),
  analyticsTelegramSummary: z.preprocess((value) => sanitizeText(value, 1200), z.string().max(1200).optional()),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;
export type ContactAnalyticsContext = AnalyticsContextPayload;
