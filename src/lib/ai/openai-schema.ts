import { z } from "zod";
import { assistantLocaleSchema } from "@/lib/validation/assistant";

export const assistantMissingFieldSchema = z.enum(["need", "urgency", "name", "company", "country", "contact"]);

export const openAiAssistantOutputSchema = z.object({
  assistantMessage: z.string().min(1).max(1200),
  detectedLanguage: assistantLocaleSchema,
  collectedFields: z
    .object({
      name: z.string().max(120).optional(),
      company: z.string().max(160).optional(),
      email: z.string().email().max(200).optional(),
      telegram: z.string().max(80).optional(),
      whatsapp: z.string().max(60).optional(),
      need: z.string().max(2000).optional(),
      urgency: z.string().max(240).optional(),
      country: z.string().max(120).optional(),
    })
    .strict(),
  missingFields: z.array(assistantMissingFieldSchema),
  readyToSubmit: z.boolean(),
  leadScore: z.number().int().min(0).max(100),
});

export type OpenAiAssistantOutput = z.infer<typeof openAiAssistantOutputSchema>;

export const requiredLeadFields = ["need", "urgency", "name", "company", "country", "contact"] as const;
