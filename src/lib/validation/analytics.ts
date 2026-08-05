import { z } from "zod";
import type { JourneyAnalyticsContext, JourneyPageLanguage, JourneyPageType } from "@/lib/analytics/journey-types";
import { sanitizeText } from "@/lib/security/sanitize";

const pageTypeSchema = z.enum([
  "home",
  "services",
  "country_landing",
  "industry_solution",
  "use_case",
  "case",
  "blog",
  "pricing",
  "calculator",
  "contacts",
  "how_we_work",
  "demo",
  "other",
]);

const pageLanguageSchema = z.enum(["en", "ru", "es", "other"]);

const internalPathSchema = z.preprocess(
  (value) => sanitizeJourneyPath(value),
  z.string().min(1).max(240),
);

const textSchema = (maxLength: number) =>
  z.preprocess((value) => sanitizeText(value, maxLength), z.string().max(maxLength));

const signalsSchema = z.object({
  calculatorUsed: z.boolean().default(false),
  calculatorCompleted: z.boolean().default(false),
  assistantOpened: z.boolean().default(false),
  assistantStarted: z.boolean().default(false),
  pricingViewed: z.boolean().default(false),
  caseViewed: z.boolean().default(false),
  blogViewed: z.boolean().default(false),
  whatsappClicked: z.boolean().default(false),
  telegramClicked: z.boolean().default(false),
  emailClicked: z.boolean().default(false),
});

const utmSchema = z.object({
  source: textSchema(120).default(""),
  medium: textSchema(120).default(""),
  campaign: textSchema(120).default(""),
  term: textSchema(120).default(""),
  content: textSchema(120).default(""),
});

const geoSchema = z.object({
  country: textSchema(80).optional(),
  region: textSchema(120).optional(),
});

export const analyticsContextSchema = z
  .object({
    journeyId: textSchema(80),
    sessionStartedAt: textSchema(40),
    activeSeconds: z.number().int().min(0).max(60 * 60 * 24 * 14).default(0),
    landingPage: internalPathSchema,
    conversionPage: internalPathSchema,
    lastPage: internalPathSchema,
    currentPage: internalPathSchema.optional(),
    previousPage: internalPathSchema.optional(),
    pageViews: z.number().int().min(0).max(1000).default(0),
    uniquePages: z.array(internalPathSchema).max(24).default([]),
    pageCategoriesVisited: z.array(pageTypeSchema).max(12).default([]),
    pageLanguage: pageLanguageSchema,
    initialReferrer: textSchema(240),
    utm: utmSchema.default({}),
    signals: signalsSchema.default({}),
    geo: geoSchema.optional(),
  })
  .strict();

export type AnalyticsContextPayload = JourneyAnalyticsContext;

function sanitizeJourneyPath(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  const normalized = value.split("?")[0]?.split("#")[0]?.trim() || "";

  if (!normalized || normalized === "//") {
    return "";
  }

  if (!normalized.startsWith("/")) {
    return "";
  }

  if (normalized.includes("://") || normalized.startsWith("//")) {
    return "";
  }

  return normalized.replace(/\/+$/, "") || "/";
}

export function normalizeAnalyticsContext(value: unknown): AnalyticsContextPayload | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const parsed = analyticsContextSchema.safeParse(value);
  if (!parsed.success) {
    return undefined;
  }

  const context = parsed.data;
  return {
    ...context,
    currentPage: context.currentPage || context.conversionPage,
    previousPage: context.previousPage || context.lastPage,
    uniquePages: context.uniquePages.slice(0, 24),
    pageCategoriesVisited: context.pageCategoriesVisited.slice(0, 12) as JourneyPageType[],
    pageLanguage: context.pageLanguage as JourneyPageLanguage,
    utm: {
      source: context.utm.source || "",
      medium: context.utm.medium || "",
      campaign: context.utm.campaign || "",
      term: context.utm.term || "",
      content: context.utm.content || "",
    },
    signals: {
      calculatorUsed: context.signals.calculatorUsed === true,
      calculatorCompleted: context.signals.calculatorCompleted === true,
      assistantOpened: context.signals.assistantOpened === true,
      assistantStarted: context.signals.assistantStarted === true,
      pricingViewed: context.signals.pricingViewed === true,
      caseViewed: context.signals.caseViewed === true,
      blogViewed: context.signals.blogViewed === true,
      whatsappClicked: context.signals.whatsappClicked === true,
      telegramClicked: context.signals.telegramClicked === true,
      emailClicked: context.signals.emailClicked === true,
    },
    ...(context.geo && (context.geo.country || context.geo.region) ? { geo: context.geo } : {}),
  } as JourneyAnalyticsContext;
}
