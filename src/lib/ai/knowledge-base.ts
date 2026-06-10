import "server-only";

import { enServices } from "@/content/en/services";
import { enWorkflow } from "@/content/en/workflow";
import { generatedGeoPages, generatedLlmsFull } from "@/content/geo/generated";
import { siteConfig, supportedLanguages } from "@/content/site";
import type { AssistantLocale } from "@/lib/ai/types";

export type KnowledgeBaseSource = {
  id: string;
  title: string;
  path: string;
};

export type KnowledgeBaseCompany = {
  name: string;
  legalName: string;
  url: string;
  positioning: string;
  contacts: {
    email: string;
    phone: string;
    telegram: string;
    telegramUrl: string;
    whatsappUrl: string;
  };
  languages: Record<string, string>;
};

export type KnowledgeBaseService = {
  title: string;
  description: string;
  planned: boolean;
  sourceId: string;
};

export type KnowledgeBaseWorkflowStep = {
  title: string;
  description: string;
  sourceId: string;
};

export type KnowledgeBaseGeoPage = {
  country: string;
  locale: "en" | "es";
  route: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  sections: Array<{
    title: string;
    blocks: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    headline: string;
    body: string;
    primary: string;
    secondary: string;
  } | null;
  relatedRoutes: string[];
  sourceId: string;
};

export type KnowledgeBase = {
  version: "mvp-1";
  generatedAt: string;
  company: KnowledgeBaseCompany;
  services: KnowledgeBaseService[];
  workflow: KnowledgeBaseWorkflowStep[];
  geoPages: KnowledgeBaseGeoPage[];
  llmsFull: string;
  sources: KnowledgeBaseSource[];
};

export type KnowledgeBaseSelectionInput = {
  page: string;
  locale?: AssistantLocale;
  country?: string;
  keywords?: string[];
};

export type SelectedKnowledgeContext = {
  company: KnowledgeBaseCompany;
  services: KnowledgeBaseService[];
  workflow: KnowledgeBaseWorkflowStep[];
  geoPages: KnowledgeBaseGeoPage[];
  llmsFullExcerpt: string;
  sources: KnowledgeBaseSource[];
  selection: {
    page: string;
    locale?: AssistantLocale;
    country?: string;
    keywords: string[];
    matchedBy: Array<"page" | "locale" | "country" | "keywords" | "global">;
  };
};

let cachedKnowledgeBase: KnowledgeBase | null = null;

function normalize(value: string) {
  return value
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizePath(value: string) {
  const pathOnly = value.split("?")[0]?.split("#")[0] || "/";
  return pathOnly.endsWith("/") && pathOnly !== "/" ? pathOnly.slice(0, -1) : pathOnly;
}

function sourceById(sources: KnowledgeBaseSource[], id: string) {
  return sources.find((source) => source.id === id);
}

function toSearchText(page: KnowledgeBaseGeoPage) {
  return normalize(
    [
      page.country,
      page.route,
      page.seoTitle,
      page.metaDescription,
      page.h1,
      ...page.sections.flatMap((section) => [section.title, ...section.blocks]),
      ...page.faq.flatMap((item) => [item.question, item.answer]),
    ].join(" "),
  );
}

function scoreGeoPage(page: KnowledgeBaseGeoPage, input: KnowledgeBaseSelectionInput) {
  let score = 0;
  const normalizedPage = normalizePath(input.page);
  const normalizedCountry = normalize(input.country || "");
  const normalizedKeywords = (input.keywords || []).map(normalize).filter(Boolean);
  const searchText = toSearchText(page);

  if (normalizePath(page.route) === normalizedPage) score += 100;
  if (normalizedCountry && normalize(page.country) === normalizedCountry) score += 70;

  for (const keyword of normalizedKeywords) {
    if (!keyword) continue;
    if (normalize(page.country) === keyword || normalize(page.route).includes(keyword)) {
      score += 40;
      continue;
    }
    if (searchText.includes(keyword)) score += 8;
  }

  if (score > 0 && input.locale && page.locale === input.locale) score += 5;

  return score;
}

function compactGeoPage(page: KnowledgeBaseGeoPage): KnowledgeBaseGeoPage {
  return {
    ...page,
    sections: page.sections.slice(0, 8).map((section) => ({
      title: section.title,
      blocks: section.blocks.slice(0, 4),
    })),
    faq: page.faq.slice(0, 8),
  };
}

export function buildKnowledgeBase(): KnowledgeBase {
  if (cachedKnowledgeBase) {
    return cachedKnowledgeBase;
  }

  const sources: KnowledgeBaseSource[] = [
    { id: "site", title: "Kubera AI site configuration", path: "src/content/site.ts" },
    { id: "services-en", title: "English services catalog", path: "src/content/en/services.ts" },
    { id: "workflow-en", title: "English how-we-work process", path: "src/content/en/workflow.ts" },
    { id: "geo", title: "GEO markdown pages", path: "src/content/geo/*.md" },
    { id: "llms-full", title: "LLMs full site context", path: "public/llms-full.txt" },
  ];

  cachedKnowledgeBase = {
    version: "mvp-1",
    generatedAt: new Date().toISOString(),
    company: {
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      positioning: siteConfig.description,
      contacts: {
        email: siteConfig.email,
        phone: siteConfig.phone,
        telegram: siteConfig.telegram,
        telegramUrl: siteConfig.telegramUrl,
        whatsappUrl: siteConfig.whatsappUrl,
      },
      languages: supportedLanguages,
    },
    services: enServices.map((service) => ({
      title: service.title,
      description: service.description,
      planned: Boolean(service.planned),
      sourceId: "services-en",
    })),
    workflow: enWorkflow.map((step) => ({
      title: step.title,
      description: step.description,
      sourceId: "workflow-en",
    })),
    geoPages: generatedGeoPages.map((page) => ({
      country: page.country,
      locale: page.locale,
      route: page.route,
      seoTitle: page.seoTitle,
      metaDescription: page.metaDescription,
      h1: page.h1,
      sections: page.sections,
      faq: page.faq,
      cta: page.cta,
      relatedRoutes: page.relatedRoutes,
      sourceId: "geo",
    })),
    llmsFull: generatedLlmsFull,
    sources,
  };

  return cachedKnowledgeBase;
}

export function selectKnowledgeContext(input: KnowledgeBaseSelectionInput): SelectedKnowledgeContext {
  const knowledgeBase = buildKnowledgeBase();
  const normalizedPage = normalizePath(input.page);
  const explicitPage = knowledgeBase.geoPages.find((page) => normalizePath(page.route) === normalizedPage) ?? null;
  const scoredPages = knowledgeBase.geoPages
    .map((page) => ({ page, score: scoreGeoPage(page, input) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const selectedPages = new Map<string, KnowledgeBaseGeoPage>();

  if (explicitPage) {
    const page = knowledgeBase.geoPages.find((candidate) => candidate.route === explicitPage.route);
    if (page) selectedPages.set(page.route, page);
  }

  for (const entry of scoredPages.slice(0, 3)) {
    selectedPages.set(entry.page.route, entry.page);
  }

  const matchedBy = new Set<SelectedKnowledgeContext["selection"]["matchedBy"][number]>();
  if (explicitPage) matchedBy.add("page");
  if (input.country) matchedBy.add("country");
  if (input.locale) matchedBy.add("locale");
  if (input.keywords?.length) matchedBy.add("keywords");
  if (!selectedPages.size) matchedBy.add("global");

  const sourceIds = new Set(["site", "services-en", "workflow-en", "llms-full"]);
  if (selectedPages.size) sourceIds.add("geo");

  return {
    company: knowledgeBase.company,
    services: knowledgeBase.services,
    workflow: knowledgeBase.workflow,
    geoPages: Array.from(selectedPages.values()).map(compactGeoPage),
    llmsFullExcerpt: knowledgeBase.llmsFull.slice(0, 2500),
    sources: knowledgeBase.sources.filter((source) => sourceIds.has(source.id) && sourceById(knowledgeBase.sources, source.id)),
    selection: {
      page: normalizedPage,
      locale: input.locale,
      country: input.country,
      keywords: input.keywords || [],
      matchedBy: Array.from(matchedBy),
    },
  };
}

export function formatKnowledgeContext(context: SelectedKnowledgeContext) {
  const geoText = context.geoPages
    .map((page) => {
      const sections = page.sections.map((section) => `- ${section.title}: ${section.blocks.join(" ")}`).join("\n");
      const faq = page.faq.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n");
      return [`Country: ${page.country}`, `Route: ${page.route}`, `H1: ${page.h1}`, sections, faq].filter(Boolean).join("\n");
    })
    .join("\n\n");

  return [
    `Company: ${context.company.name}`,
    `Positioning: ${context.company.positioning}`,
    `Contacts: ${context.company.contacts.email}, ${context.company.contacts.telegram}, ${context.company.contacts.whatsappUrl}`,
    "Services:",
    context.services.map((service) => `- ${service.title}: ${service.description}`).join("\n"),
    "Process:",
    context.workflow.map((step) => `- ${step.title}: ${step.description}`).join("\n"),
    geoText ? `GEO context:\n${geoText}` : "",
    context.llmsFullExcerpt ? `General context excerpt:\n${context.llmsFullExcerpt}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
}
