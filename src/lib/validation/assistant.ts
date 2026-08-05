import { z } from "zod";
import { analyticsContextSchema, type AnalyticsContextPayload } from "@/lib/validation/analytics";
import { sanitizePhone, sanitizeTelegram, sanitizeText } from "@/lib/security/sanitize";

export const assistantLocaleSchema = z.enum(["en", "ru", "es", "de", "fr", "it", "nl", "pt", "pl", "et", "lv", "lt", "fi", "sv", "da"]);

const assistantMessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.preprocess((value) => sanitizeText(value, 2000), z.string().min(1).max(2000)),
});

export const assistantLeadSchema = z.object({
  name: z.preprocess((value) => sanitizeText(value, 120) || undefined, z.string().max(120).optional()),
  company: z.preprocess((value) => sanitizeText(value, 160) || undefined, z.string().max(160).optional()),
  email: z.preprocess((value) => sanitizeText(value, 200).toLowerCase() || undefined, z.string().email().max(200).optional()),
  telegram: z.preprocess((value) => sanitizeTelegram(value) || undefined, z.string().max(80).optional()),
  whatsapp: z.preprocess((value) => sanitizePhone(value) || undefined, z.string().max(60).optional()),
  need: z.preprocess((value) => sanitizeText(value, 2000) || undefined, z.string().max(2000).optional()),
  urgency: z.preprocess((value) => sanitizeText(value, 240) || undefined, z.string().max(240).optional()),
  country: z.preprocess((value) => sanitizeText(value, 120) || undefined, z.string().max(120).optional()),
  leadScore: z.number().min(0).max(100).optional(),
});

const assistantConversationMemorySchema = z.object({
  summary: z.preprocess((value) => sanitizeText(value, 4000), z.string().min(1).max(4000)),
  turnCount: z.number().int().min(0).max(1000),
  locale: assistantLocaleSchema.optional(),
});

export const assistantRequestSchema = z.object({
  context: z.object({
    locale: assistantLocaleSchema.optional(),
    currentPath: z.preprocess((value) => sanitizeText(value, 240), z.string().min(1).max(240)),
    country: z.preprocess((value) => sanitizeText(value, 120) || undefined, z.string().max(120).optional()),
    visitorIntent: z.enum(["services", "pricing", "contact", "support", "unknown"]).optional(),
    conversationMemory: assistantConversationMemorySchema.optional(),
  }),
  messages: z.array(assistantMessageSchema).min(1).max(20),
  lead: assistantLeadSchema.optional(),
  submissionCompleted: z.boolean().optional(),
  analyticsContext: analyticsContextSchema.optional(),
  analyticsSummary: z.preprocess((value) => sanitizeText(value, 6000), z.string().max(6000).optional()),
  analyticsTelegramSummary: z.preprocess((value) => sanitizeText(value, 1200), z.string().max(1200).optional()),
});

export type AssistantValidatedRequest = z.infer<typeof assistantRequestSchema>;
export type AssistantAnalyticsContext = AnalyticsContextPayload;
