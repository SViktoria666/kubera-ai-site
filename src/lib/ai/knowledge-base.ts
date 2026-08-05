import { getAllBlogPosts } from "@/content/blog";
import { caseStudies } from "@/content/cases";
import { enServices } from "@/content/en/services";
import { enWorkflow } from "@/content/en/workflow";
import { generatedGeoPages, generatedLlmsFull } from "@/content/geo/generated";
import { aiClientIntakeLawFirms } from "@/content/use-cases/ai-client-intake-law-firms";
import { aiCustomerSupportEcommerce } from "@/content/use-cases/ai-customer-support-ecommerce";
import { aiFrontDeskDentalPractices } from "@/content/use-cases/ai-front-desk-dental-practices";
import { aiReceptionistSalonsSpas } from "@/content/use-cases/ai-receptionist-salons-spas";
import { aiVoiceAgentsHomeServices } from "@/content/use-cases/ai-voice-agents-home-services";
import { n8nEcommerceAutomation } from "@/content/use-cases/n8n-ecommerce-automation";
import { realEstateLeadAutomation } from "@/content/use-cases/real-estate-lead-automation";
import { industrySolutions } from "@/content/industry-solutions";
import { siteConfig, supportedLanguages } from "@/content/site";
import { rankRelevantKnowledgePages } from "@/lib/ai/assistant-intelligence";
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

export type KnowledgeBaseContentKind = "service" | "workflow" | "geo" | "use-case" | "case-study" | "blog" | "static" | "industry-solution";

export type KnowledgeBaseContentPage = {
  kind: KnowledgeBaseContentKind;
  title: string;
  path: string;
  summary: string;
  sourceId: string;
};

export type KnowledgeBasePageRecommendation = KnowledgeBaseContentPage & {
  reason: string;
};

export type KnowledgeBaseQuickAnswer = {
  category: "service" | "pricing" | "delivery" | "security" | "contact" | "integration" | "faq";
  question: string;
  answer: string;
  path?: string;
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
  version: "wave-3";
  generatedAt: string;
  company: KnowledgeBaseCompany;
  services: KnowledgeBaseService[];
  workflow: KnowledgeBaseWorkflowStep[];
  geoPages: KnowledgeBaseGeoPage[];
  industrySolutions: KnowledgeBaseContentPage[];
  useCases: KnowledgeBaseContentPage[];
  caseStudies: KnowledgeBaseContentPage[];
  blogPosts: KnowledgeBaseContentPage[];
  staticPages: KnowledgeBaseContentPage[];
  quickAnswers: KnowledgeBaseQuickAnswer[];
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
  industrySolutions: KnowledgeBaseContentPage[];
  useCases: KnowledgeBaseContentPage[];
  caseStudies: KnowledgeBaseContentPage[];
  blogPosts: KnowledgeBaseContentPage[];
  staticPages: KnowledgeBaseContentPage[];
  quickAnswers: KnowledgeBaseQuickAnswer[];
  recommendedPages: KnowledgeBasePageRecommendation[];
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

function compactText(value: string, maxLength = 240) {
  const normalized = value.replace(/\s+/g, " ").replace(/\s+([,.;:!?])/g, "$1").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

function canonicalPath(url: string) {
  try {
    return new URL(url).pathname;
  } catch {
    return normalizePath(url);
  }
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

function scoreContentPage(page: KnowledgeBaseContentPage, input: KnowledgeBaseSelectionInput) {
  let score = 0;
  const normalizedPage = normalizePath(input.page);
  const normalizedCountry = normalize(input.country || "");
  const normalizedKeywords = (input.keywords || []).map(normalize).filter(Boolean);
  const searchText = normalize([page.title, page.path, page.summary, page.kind].join(" "));

  if (normalizePath(page.path) === normalizedPage) score += 100;
  if (normalizedCountry && searchText.includes(normalizedCountry)) score += 18;

  for (const keyword of normalizedKeywords) {
    if (!keyword) continue;
    if (searchText.includes(keyword)) {
      score += 12;
      continue;
    }

    if (normalize(page.path).includes(keyword)) {
      score += 8;
    }
  }

  if (score > 0 && input.locale) score += 3;

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

function getUseCaseSummaries(): KnowledgeBaseContentPage[] {
  const useCases = [
    aiClientIntakeLawFirms,
    aiCustomerSupportEcommerce,
    aiFrontDeskDentalPractices,
    aiReceptionistSalonsSpas,
    aiVoiceAgentsHomeServices,
    n8nEcommerceAutomation,
    realEstateLeadAutomation,
  ];

  return useCases.map((entry) => ({
    kind: "use-case",
    title: entry.seo.h1 || entry.hero.title,
    path: canonicalPath(entry.seo.canonical),
    summary: compactText(`${entry.hero.lead} ${entry.whatTheServiceIs}`, 260),
    sourceId: "use-cases",
  }));
}

function getCaseStudySummaries(): KnowledgeBaseContentPage[] {
  return caseStudies.map((caseStudy) => {
    const localized = caseStudy.localized?.en;
    const intro = localized?.intro || caseStudy.short || caseStudy.solution;
    return {
      kind: "case-study",
      title: localized?.title || caseStudy.title,
      path: `/cases/${caseStudy.slug}`,
      summary: compactText(`${intro} ${localized?.conclusion || caseStudy.solution}`, 260),
      sourceId: "cases",
    };
  });
}

function getIndustrySolutionSummaries(): KnowledgeBaseContentPage[] {
  return industrySolutions.map((solution) => ({
    kind: "industry-solution",
    title: solution.hero.title || solution.seo.title,
    path: solution.url,
    summary: compactText(
      `${solution.hero.subtitle} ${solution.architecture.description} ${solution.cta.body || ""}`,
      260,
    ),
    sourceId: "industry-solutions",
  }));
}

function getBlogPostSummaries(): KnowledgeBaseContentPage[] {
  return getAllBlogPosts().map((post) => ({
    kind: "blog",
    title: post.frontmatter.title,
    path: post.url,
    summary: compactText(post.excerpt || post.frontmatter.description, 240),
    sourceId: "blog",
  }));
}

function getQuickAnswers(): KnowledgeBaseQuickAnswer[] {
  return [
    {
      category: "service",
      question: "What can Kubera AI automate?",
      answer:
        "Kubera AI focuses on AI assistants, customer communication automation, lead generation automation, CRM automation, WhatsApp automation, Telegram automation, email automation, voice AI, internal workflow automation, and custom AI automation solutions.",
      path: "/services",
    },
    {
      category: "pricing",
      question: "How much does automation cost?",
      answer:
        "The site shows example project entry points starting from €1,800 and ongoing maintenance from €350/month. Final pricing depends on scope, channels, integrations, and support needs after discovery.",
      path: "/services",
    },
    {
      category: "delivery",
      question: "How long does implementation take?",
      answer:
        "The how-we-work page describes diagnosis on Day 1-2, solution architecture on Day 2-3, development and setup in 1-3 weeks, launch and testing in 2-3 days, and ongoing support afterwards. Exact timing depends on scope.",
      path: "/how-we-work",
    },
    {
      category: "security",
      question: "Is my data secure?",
      answer:
        "The site emphasizes implementation with professional automation tools, clear workflow ownership, and systems that keep data with the client rather than on consumer SaaS platforms. Security details still depend on the specific project scope and integrations.",
      path: "/how-we-work",
    },
    {
      category: "contact",
      question: "How can I contact Kubera AI?",
      answer:
        "The site provides email, Telegram, WhatsApp, and a contact form. The contacts page is the best place to start if you want a direct consultation.",
      path: "/contacts",
    },
    {
      category: "integration",
      question: "Can Kubera AI work with my CRM, WhatsApp, or n8n workflow?",
      answer:
        "Yes, those are core website-backed capabilities. For vendor-specific ERP or enterprise systems, the assistant should say the exact feasibility needs a technical assessment of the APIs, authentication, workflow, and security requirements.",
      path: "/services",
    },
    {
      category: "faq",
      question: "Do I need technical knowledge?",
      answer:
        "No. Kubera AI starts with diagnosis, then proposes the solution architecture, builds the workflow, launches it, and supports it afterwards. The team still needs your business context and the systems you use today.",
      path: "/how-we-work",
    },
    {
      category: "faq",
      question: "What happens after launch?",
      answer:
        "The website says the work does not stop at launch: Kubera AI provides testing, handover, documentation, monitoring, fixes, and ongoing support as the business grows.",
      path: "/how-we-work",
    },
    {
      category: "faq",
      question: "What if I do not know what to automate?",
      answer:
        "Start with the problems the business feels most: lost leads, slow replies, repetitive support, manual processing, or unclear follow-up. The assistant can then point to a matching use case, case study, or service page.",
      path: "/services",
    },
    {
      category: "integration",
      question: "Can you integrate with a vendor-specific ERP system?",
      answer:
        "That may be technically possible, but the site does not confirm every vendor-specific ERP. The right next step is a technical assessment of the system, available APIs, authentication method, and workflow requirements.",
      path: "/contacts",
    },
  ];
}

function getStaticPageSummaries(): KnowledgeBaseContentPage[] {
  return [
    {
      kind: "static",
      title: "Home",
      path: "/",
      summary: compactText(`${siteConfig.description} Homepage overview and pricing entry point for the main services and consultation flow.`, 240),
      sourceId: "static-pages",
    },
    {
      kind: "static",
      title: "Services",
      path: "/services",
      summary: compactText(
        "Primary service hub covering customer communications, sales and leads, internal processes, HR, marketing, finance, e-commerce, education, real estate, hospitality, transport, beauty, medical, and auto automation.",
        240,
      ),
      sourceId: "static-pages",
    },
    {
      kind: "static",
      title: "How We Work",
      path: "/how-we-work",
      summary: compactText("Diagnosis, solution architecture, development and setup, launch and testing, plus ongoing support.", 240),
      sourceId: "static-pages",
    },
    {
      kind: "static",
      title: "Cases",
      path: "/cases",
      summary: compactText("Case study index with outcome-driven examples across industries and workflows.", 240),
      sourceId: "static-pages",
    },
    {
      kind: "static",
      title: "Blog",
      path: "/blog",
      summary: compactText("Articles about AI automation, workflows, CRM, lead generation, and operational systems.", 240),
      sourceId: "static-pages",
    },
    {
      kind: "static",
      title: "Contacts",
      path: "/contacts",
      summary: compactText("Contact page with email, Telegram, WhatsApp, and inquiry form.", 240),
      sourceId: "static-pages",
    },
    {
      kind: "static",
      title: "Use Cases",
      path: "/use-cases",
      summary: compactText("Use case hub covering law firms, e-commerce, dental, salons, home services, real estate, and n8n automation.", 240),
      sourceId: "static-pages",
    },
  ];
}

function chooseTopRecommendations(input: KnowledgeBaseSelectionInput, items: KnowledgeBaseContentPage[], limit = 2) {
  return rankRelevantKnowledgePages({ currentPath: input.page, country: input.country, locale: input.locale, keywords: input.keywords }, items, limit);
}

export function buildKnowledgeBase(): KnowledgeBase {
  if (cachedKnowledgeBase) {
    return cachedKnowledgeBase;
  }

  const sources: KnowledgeBaseSource[] = [
    { id: "site", title: "Kubera AI site configuration", path: "src/content/site.ts" },
    { id: "services-en", title: "English services catalog", path: "src/content/en/services.ts" },
    { id: "workflow-en", title: "English how-we-work process", path: "src/content/en/workflow.ts" },
    { id: "industry-solutions", title: "Industry solution library", path: "src/content/industry-solutions/*.ts" },
    { id: "use-cases", title: "Use-case library", path: "src/content/use-cases/*.ts" },
    { id: "cases", title: "Case study library", path: "src/content/cases.ts" },
    { id: "blog", title: "Blog posts", path: "content/blog/*.md" },
    { id: "static-pages", title: "Core website pages", path: "src/app/(site)/*" },
    { id: "geo", title: "GEO markdown pages", path: "src/content/geo/*.md" },
    { id: "llms-full", title: "LLMs full site context", path: "public/llms-full.txt" },
    { id: "quick-answers", title: "Approved assistant FAQ and boundaries", path: "src/lib/ai/knowledge-base.ts" },
  ];

  cachedKnowledgeBase = {
    version: "wave-3",
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
    industrySolutions: getIndustrySolutionSummaries(),
    useCases: getUseCaseSummaries(),
    caseStudies: getCaseStudySummaries(),
    blogPosts: getBlogPostSummaries(),
    staticPages: getStaticPageSummaries(),
    quickAnswers: getQuickAnswers(),
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

  const useCases = knowledgeBase.useCases;
  const caseStudies = knowledgeBase.caseStudies;
  const industrySolutions = knowledgeBase.industrySolutions;
  const blogPosts = knowledgeBase.blogPosts;
  const staticPages = knowledgeBase.staticPages;
  const quickAnswers = knowledgeBase.quickAnswers;
  const recommendedPages = chooseTopRecommendations(input, [...useCases, ...caseStudies, ...industrySolutions, ...blogPosts, ...staticPages], 2);

  const sourceIds = new Set(["site", "services-en", "workflow-en", "llms-full"]);
  if (selectedPages.size) sourceIds.add("geo");
  if (industrySolutions.length) sourceIds.add("industry-solutions");
  if (useCases.length) sourceIds.add("use-cases");
  if (caseStudies.length) sourceIds.add("cases");
  if (blogPosts.length) sourceIds.add("blog");
  if (staticPages.length) sourceIds.add("static-pages");
  if (quickAnswers.length) sourceIds.add("quick-answers");

  return {
    company: knowledgeBase.company,
    services: knowledgeBase.services,
    workflow: knowledgeBase.workflow,
    geoPages: Array.from(selectedPages.values()).map(compactGeoPage),
    industrySolutions,
    useCases,
    caseStudies,
    blogPosts,
    staticPages,
    quickAnswers,
    recommendedPages,
    llmsFullExcerpt: knowledgeBase.llmsFull.slice(0, 2200),
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

  const industryText = context.industrySolutions.length
    ? `Industry solutions:\n${context.industrySolutions
        .slice(0, 8)
        .map((page) => `- ${page.title} (${page.path}) - ${page.summary}`)
        .join("\n")}`
    : "";

  const quickAnswersText = context.quickAnswers.length
    ? `Approved FAQ and boundaries:\n${context.quickAnswers
        .slice(0, 10)
        .map((item) => `- ${item.question}: ${item.answer}${item.path ? ` [${item.path}]` : ""}`)
        .join("\n")}`
    : "";

  const recommendedText = context.recommendedPages.length
    ? `Recommended pages:\n${context.recommendedPages.map((page) => `- ${page.title} (${page.path}) [${page.kind}] - ${page.reason}`).join("\n")}`
    : "";

  return [
    `Company: ${context.company.name}`,
    `Positioning: ${context.company.positioning}`,
    `Contacts: ${context.company.contacts.email}, ${context.company.contacts.telegram}, ${context.company.contacts.whatsappUrl}`,
    "Services:",
    context.services.map((service) => `- ${service.title}: ${service.description}`).join("\n"),
    "Process:",
    context.workflow.map((step) => `- ${step.title}: ${step.description}`).join("\n"),
    industryText,
    quickAnswersText,
    geoText ? `GEO context:\n${geoText}` : "",
    recommendedText,
    context.llmsFullExcerpt ? `General context excerpt:\n${context.llmsFullExcerpt}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
}
