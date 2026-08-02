export type AnalyticsPageLanguage = "en" | "ru" | "es" | "other";

export type AnalyticsPageType =
  | "home"
  | "services"
  | "country_landing"
  | "industry_solution"
  | "use_case"
  | "case"
  | "blog"
  | "pricing"
  | "calculator"
  | "contacts"
  | "how_we_work"
  | "demo"
  | "other";

export type AnalyticsEventName =
  | "page_context"
  | "primary_cta_click"
  | "secondary_cta_click"
  | "pricing_viewed"
  | "pricing_package_clicked"
  | "pricing_cta_clicked"
  | "calculator_viewed"
  | "calculator_started"
  | "calculator_completed"
  | "calculator_result_cta_clicked"
  | "ai_assistant_opened"
  | "ai_assistant_closed"
  | "ai_assistant_started"
  | "ai_assistant_message_sent"
  | "ai_assistant_contact_step_started"
  | "ai_assistant_submitted"
  | "assistant_error"
  | "assistant_retry_clicked"
  | "assistant_retry_success"
  | "assistant_contact_collection_started"
  | "assistant_contact_collection_resumed"
  | "assistant_closed_with_active_conversation"
  | "contact_form_opened"
  | "contact_form_started"
  | "contact_form_submitted"
  | "contact_form_success"
  | "contact_form_error"
  | "email_click"
  | "telegram_click"
  | "whatsapp_click"
  | "phone_click"
  | "external_link_click"
  | "blog_article_opened"
  | "case_opened"
  | "service_page_viewed"
  | "country_landing_viewed"
  | "industry_solution_viewed";

export type AnalyticsValue = string | number | boolean;
export type AnalyticsProperties = Record<string, AnalyticsValue | null | undefined>;

export type PageContext = {
  page_path: string;
  page_language: AnalyticsPageLanguage;
  page_type: AnalyticsPageType;
  country_market?: string;
  service_slug?: string;
  article_slug?: string;
  case_slug?: string;
};

declare global {
  interface Window {
    umami?: {
      track: (event?: string | Record<string, unknown>, data?: Record<string, unknown>) => void;
      identify?: (...args: unknown[]) => void;
    };
    __kuberaAnalyticsQueue?: Array<{ eventName: AnalyticsEventName; properties: AnalyticsProperties }>;
  }
}

const productionDomains = new Set(["www.kubera-automation.com", "kubera-automation.com"]);
const fallbackUmamiScriptUrl = "https://analytics.kubera-automation.com/script.js";
const fallbackUmamiWebsiteId = "a866bd55-0014-4f23-8678-6a38d4208966";
const nonLanguageRootSegments = new Set([
  "blog",
  "cases",
  "contacts",
  "demo",
  "how-we-work",
  "locations",
  "services",
  "use-cases",
  "en",
  "ru",
  "es",
]);

export function isAnalyticsEnabled() {
  const scriptUrl = getUmamiScriptUrl();
  const websiteId = getUmamiWebsiteId();

  return (
    process.env.NODE_ENV === "production" &&
    process.env.VERCEL_ENV === "production" &&
    Boolean(scriptUrl) &&
    Boolean(websiteId)
  );
}

export function getUmamiScriptUrl() {
  return process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL?.trim() || fallbackUmamiScriptUrl;
}

export function getUmamiWebsiteId() {
  return process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim() || fallbackUmamiWebsiteId;
}

export function getAnalyticsDomains() {
  return Array.from(productionDomains).join(",");
}

export function normalizePathname(pathname: string) {
  const cleanPath = pathname.split("?")[0]?.split("#")[0] || "/";

  if (cleanPath === "/") {
    return "/";
  }

  return cleanPath.replace(/\/+$/, "");
}

export function getPageLanguage(pathname: string): AnalyticsPageLanguage {
  const normalized = normalizePathname(pathname);

  if (normalized === "/ru" || normalized.startsWith("/ru/")) {
    return "ru";
  }

  if (normalized === "/es" || normalized.startsWith("/es/")) {
    return "es";
  }

  return "en";
}

function getPathSegments(pathname: string) {
  return normalizePathname(pathname)
    .split("/")
    .filter(Boolean);
}

function extractCountryMarket(segment: string | undefined) {
  if (!segment) {
    return undefined;
  }

  const cleaned = segment
    .replace(/^ai-automation-/, "")
    .replace(/-automation$/, "")
    .trim();

  return cleaned || undefined;
}

function isCountryLandingPath(pathname: string) {
  const normalized = normalizePathname(pathname);
  const segments = getPathSegments(normalized);

  if (!segments.length) {
    return false;
  }

  if (segments[0] === "services" && segments.length >= 3) {
    return true;
  }

  if (segments[0] === "en" && segments.length >= 2 && segments[1].endsWith("-automation")) {
    return true;
  }

  if (segments[0] === "ai-automation" || normalized.startsWith("/ai-automation-")) {
    return true;
  }

  if (segments.length === 1 && !nonLanguageRootSegments.has(segments[0])) {
    return true;
  }

  return false;
}

export function getPageContext(pathname: string): PageContext {
  const normalized = normalizePathname(pathname);
  const segments = getPathSegments(normalized);
  const pageLanguage = getPageLanguage(normalized);

  if (normalized === "/" || normalized === "/ru" || normalized === "/es") {
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "home",
    };
  }

  if (normalized === "/contacts" || normalized.startsWith("/contacts/") || normalized === "/ru/kontakty" || normalized.startsWith("/ru/kontakty/")) {
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "contacts",
    };
  }

  if (normalized === "/how-we-work" || normalized.startsWith("/how-we-work/") || normalized === "/ru/kak-my-rabotaem" || normalized.startsWith("/ru/kak-my-rabotaem/")) {
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "how_we_work",
    };
  }

  if (normalized === "/demo" || normalized.startsWith("/demo/") || normalized === "/ru/demo" || normalized.startsWith("/ru/demo/")) {
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "demo",
    };
  }

  if (normalized === "/blog" || normalized.startsWith("/blog/") || normalized === "/ru/blog" || normalized.startsWith("/ru/blog/")) {
    const articleSlug = segments.length > 1 ? segments.at(-1) : undefined;
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "blog",
      ...(articleSlug ? { article_slug: articleSlug } : {}),
    };
  }

  if (normalized === "/cases" || normalized.startsWith("/cases/") || normalized === "/ru/keysy" || normalized.startsWith("/ru/keysy/")) {
    const caseSlug = segments.length > 1 ? segments.at(-1) : undefined;
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "case",
      ...(caseSlug ? { case_slug: caseSlug } : {}),
    };
  }

  if (normalized === "/use-cases" || normalized.startsWith("/use-cases/")) {
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "use_case",
      ...(segments.length > 1 ? { case_slug: segments.at(-1) } : {}),
    };
  }

  if (normalized === "/services" || normalized === "/ru/uslugi") {
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "services",
    };
  }

  if (normalized.startsWith("/services/") && segments.length >= 3) {
    const countryMarket = extractCountryMarket(segments[1]);
    const serviceSlug = segments[2];

    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "country_landing",
      ...(countryMarket ? { country_market: countryMarket } : {}),
      ...(serviceSlug ? { service_slug: serviceSlug } : {}),
    };
  }

  if (normalized.startsWith("/en/solutions/") && segments.length >= 4) {
    const countryMarket = extractCountryMarket(segments[2]);
    const serviceSlug = segments[3];

    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "industry_solution",
      ...(countryMarket ? { country_market: countryMarket } : {}),
      ...(serviceSlug ? { service_slug: serviceSlug } : {}),
    };
  }

  if (isCountryLandingPath(normalized)) {
    const segment = segments.at(-1);
    const countryMarket = extractCountryMarket(segment);

    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "country_landing",
      ...(countryMarket ? { country_market: countryMarket } : {}),
    };
  }

  if (normalized.startsWith("/en/")) {
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "other",
    };
  }

  if (normalized === "/pricing") {
    return {
      page_path: normalized,
      page_language: pageLanguage,
      page_type: "pricing",
    };
  }

  return {
    page_path: normalized,
    page_language: pageLanguage,
    page_type: "other",
  };
}

export function sanitizeAnalyticsProperties(properties: AnalyticsProperties = {}) {
  return Object.fromEntries(
    Object.entries(properties)
      .filter(([, value]) => value !== undefined && value !== null && value !== "")
      .map(([key, value]) => {
        if (typeof value === "string") {
          return [key, value.slice(0, 120)];
        }

        return [key, value];
      }),
  );
}

export function trackUmamiEvent(eventName: AnalyticsEventName, properties: AnalyticsProperties = {}) {
  if (!isAnalyticsEnabled() || typeof window === "undefined") {
    return false;
  }

  const tracker = window.umami;
  if (!tracker || typeof tracker.track !== "function") {
    window.__kuberaAnalyticsQueue = window.__kuberaAnalyticsQueue || [];
    window.__kuberaAnalyticsQueue.push({
      eventName,
      properties: sanitizeAnalyticsProperties(properties),
    });
    return false;
  }

  tracker.track(eventName, sanitizeAnalyticsProperties(properties));
  return true;
}

export function flushQueuedAnalyticsEvents() {
  if (!isAnalyticsEnabled() || typeof window === "undefined") {
    return 0;
  }

  const tracker = window.umami;
  const queue = window.__kuberaAnalyticsQueue || [];

  if (!tracker || typeof tracker.track !== "function" || queue.length === 0) {
    return 0;
  }

  let flushed = 0;
  while (queue.length > 0) {
    const entry = queue.shift();
    if (!entry) {
      continue;
    }

    tracker.track(entry.eventName, sanitizeAnalyticsProperties(entry.properties));
    flushed += 1;
  }

  return flushed;
}

export function shouldTrackAnalyticsInBrowser() {
  if (!isAnalyticsEnabled()) {
    return false;
  }

  if (typeof navigator === "undefined") {
    return false;
  }

  if (navigator.doNotTrack === "1" || (window as Window & { doNotTrack?: string }).doNotTrack === "1") {
    return false;
  }

  return true;
}

export function buildCurrentPageContext() {
  if (typeof window === "undefined") {
    return getPageContext("/");
  }

  return getPageContext(window.location.pathname);
}
