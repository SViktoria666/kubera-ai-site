import { z } from "zod";

export const contactFormSchema = z.object({
  locale: z.enum(["en", "ru"]),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  messengerType: z.enum(["telegram", "whatsapp"]),
  messengerId: z.string().trim().min(1).max(120),
  message: z.string().trim().max(2000).optional().nullable(),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;

