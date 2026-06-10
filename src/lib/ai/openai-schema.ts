import { z } from "zod";
import { assistantLocaleSchema } from "@/lib/validation/assistant";

export const assistantMissingFieldSchema = z.enum(["need", "urgency", "name", "company", "country", "contact"]);

export const openAiAssistantOutputSchema = z.object({
  assistantMessage: z.string().min(1).max(1200),
  detectedLanguage: assistantLocaleSchema,
  collectedFields: z
    .object({
      name: z.string().max(120).nullable(),
      company: z.string().max(160).nullable(),
      email: z.string().email().max(200).nullable(),
      telegram: z.string().max(120).nullable(),
      whatsapp: z.string().max(120).nullable(),
      need: z.string().max(1200).nullable(),
      urgency: z.string().max(400).nullable(),
      country: z.string().max(120).nullable(),
    })
    .strict(),
  missingFields: z.array(assistantMissingFieldSchema),
  readyToSubmit: z.boolean(),
  leadScore: z.number().int().min(0).max(100),
});

export type OpenAiAssistantOutput = z.infer<typeof openAiAssistantOutputSchema>;

export const requiredLeadFields = ["need", "urgency", "name", "company", "country", "contact"] as const;
