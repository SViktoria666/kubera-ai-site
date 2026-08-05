"use client";

import { getPageContext, normalizePathname, type PageContext } from "@/lib/analytics";
import type { JourneyAnalyticsContext, JourneyGeo, JourneyPageLanguage, JourneyPageType, JourneySignals, JourneyUtm } from "@/lib/analytics/journey-types";

const STORAGE_KEY = "kuberaJourneyContext";
const PAGE_HISTORY_LIMIT = 24;
const CATEGORY_LIMIT = 12;

type JourneyState = JourneyAnalyticsContext & {
  sessionStartedMs: number;
  visibleSinceMs: number | null;
  lastPersistedAt: string;
};

let journeyState: JourneyState | null = null;
let trackingStarted = false;
let visibilityCleanup: (() => void) | null = null;

function hasBrowserApis() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function createJourneyId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `journey-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function safeSessionStorage() {
  if (!hasBrowserApis()) {
    return null;
  }

  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function normalizeJourneyPath(value: string | undefined | null) {
  if (!value) {
    return "";
  }

  const normalized = normalizePathname(value);

  if (!normalized.startsWith("/")) {
    return "";
  }

  if (normalized.includes("://") || normalized.startsWith("//")) {
    return "";
  }

  return normalized;
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/<[^>]*>/g, "").replace(/[\u0000-\u001f\u007f]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanReferrer(value: string) {
  const raw = cleanText(value, 240);

  if (!raw) {
    return "direct";
  }

  if (/^(javascript|data|vbscript):/i.test(raw)) {
    return "direct";
  }

  try {
    const referrerUrl = new URL(raw, window.location.origin);
    const sameOrigin = referrerUrl.origin === window.location.origin;
    const path = normalizeJourneyPath(referrerUrl.pathname) || "/";
    const output = sameOrigin ? path : `${referrerUrl.hostname}${path === "/" ? "" : path}`;
    return output || "direct";
  } catch {
    return raw.slice(0, 240);
  }
}

function defaultSignals(): JourneySignals {
  return {
    calculatorUsed: false,
    calculatorCompleted: false,
    assistantOpened: false,
    assistantStarted: false,
    pricingViewed: false,
    caseViewed: false,
    blogViewed: false,
    whatsappClicked: false,
    telegramClicked: false,
    emailClicked: false,
  };
}

function defaultUtm(): JourneyUtm {
  return {
    source: "",
    medium: "",
    campaign: "",
    term: "",
    content: "",
  };
}

function defaultState(): JourneyState {
  const sessionStartedAt = new Date().toISOString();
  const sessionStartedMs = Date.now();
  const currentPage = hasBrowserApis() ? normalizeJourneyPath(window.location.pathname) || "/" : "/";
  const referrer = hasBrowserApis() ? cleanReferrer(document.referrer) : "direct";

  return {
    journeyId: createJourneyId(),
    sessionStartedAt,
    sessionStartedMs,
    activeSeconds: 0,
    landingPage: currentPage,
    conversionPage: currentPage,
    lastPage: currentPage,
    currentPage,
    previousPage: currentPage,
    pageViews: 0,
    uniquePages: [],
    pageCategoriesVisited: [],
    pageLanguage: "en",
    initialReferrer: referrer,
    utm: defaultUtm(),
    signals: defaultSignals(),
    geo: {},
    visibleSinceMs: hasBrowserApis() && document.visibilityState !== "hidden" ? sessionStartedMs : null,
    lastPersistedAt: sessionStartedAt,
  };
}

function isJourneyPageType(value: unknown): value is JourneyPageType {
  return typeof value === "string" && [
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
  ].includes(value);
}

function isJourneyPageLanguage(value: unknown): value is JourneyPageLanguage {
  return typeof value === "string" && ["en", "ru", "es", "other"].includes(value);
}

function sanitizePageList(values: unknown, limit = PAGE_HISTORY_LIMIT) {
  if (!Array.isArray(values)) {
    return [];
  }

  const seen = new Set<string>();
  const result: string[] = [];

  for (const value of values) {
    const path = normalizeJourneyPath(typeof value === "string" ? value : "");
    if (!path || seen.has(path)) {
      continue;
    }

    seen.add(path);
    result.push(path);
    if (result.length >= limit) {
      break;
    }
  }

  return result;
}

function sanitizeCategoryList(values: unknown) {
  if (!Array.isArray(values)) {
    return [];
  }

  const seen = new Set<JourneyPageType>();
  const result: JourneyPageType[] = [];

  for (const value of values) {
    if (!isJourneyPageType(value) || seen.has(value)) {
      continue;
    }

    seen.add(value);
    result.push(value);
    if (result.length >= CATEGORY_LIMIT) {
      break;
    }
  }

  return result;
}

function sanitizeSignals(value: unknown): JourneySignals {
  const signals = defaultSignals();
  if (!value || typeof value !== "object") {
    return signals;
  }

  const source = value as Partial<JourneySignals>;
  for (const key of Object.keys(signals) as Array<keyof JourneySignals>) {
    signals[key] = source[key] === true;
  }

  return signals;
}

function sanitizeUtm(value: unknown): JourneyUtm {
  const utm = defaultUtm();
  if (!value || typeof value !== "object") {
    return utm;
  }

  const source = value as Partial<JourneyUtm>;
  utm.source = cleanText(source.source, 120);
  utm.medium = cleanText(source.medium, 120);
  utm.campaign = cleanText(source.campaign, 120);
  utm.term = cleanText(source.term, 120);
  utm.content = cleanText(source.content, 120);
  return utm;
}

function sanitizeGeo(value: unknown): JourneyGeo | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const source = value as JourneyGeo;
  const country = cleanText(source.country, 80);
  const region = cleanText(source.region, 120);

  if (!country && !region) {
    return undefined;
  }

  return {
    ...(country ? { country } : {}),
    ...(region ? { region } : {}),
  };
}

function sanitizeState(value: unknown): JourneyState | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const source = value as Partial<JourneyState>;
  const createdAt = cleanText(source.sessionStartedAt, 40);
  const sessionStartedMs = Number(source.sessionStartedMs);
  const activeSeconds = Number(source.activeSeconds);
  const pageViews = Number(source.pageViews);

  if (!createdAt || !Number.isFinite(sessionStartedMs) || !Number.isFinite(activeSeconds) || !Number.isFinite(pageViews)) {
    return null;
  }

  const currentPage = normalizeJourneyPath(source.currentPage || "");
  const previousPage = normalizeJourneyPath(source.previousPage || "");
  const landingPage = normalizeJourneyPath(source.landingPage || "") || "/";
  const conversionPage = normalizeJourneyPath(source.conversionPage || "") || currentPage || landingPage;
  const lastPage = normalizeJourneyPath(source.lastPage || "") || previousPage || currentPage || landingPage;
  const uniquePages = sanitizePageList(source.uniquePages);
  const pageCategoriesVisited = sanitizeCategoryList(source.pageCategoriesVisited);

  return {
    journeyId: cleanText(source.journeyId, 80) || createJourneyId(),
    sessionStartedAt: createdAt,
    sessionStartedMs,
    activeSeconds: Math.max(0, Math.min(activeSeconds, 60 * 60 * 24 * 14)),
    landingPage,
    conversionPage,
    lastPage,
    currentPage: currentPage || landingPage,
    previousPage: previousPage || landingPage,
    pageViews: Math.max(0, Math.min(Math.round(pageViews), 1000)),
    uniquePages,
    pageCategoriesVisited,
    pageLanguage: isJourneyPageLanguage(source.pageLanguage) ? source.pageLanguage : "en",
    initialReferrer: cleanText(source.initialReferrer, 240) || "direct",
    utm: sanitizeUtm(source.utm),
    signals: sanitizeSignals(source.signals),
    geo: sanitizeGeo(source.geo),
    visibleSinceMs: Number.isFinite(Number(source.visibleSinceMs)) ? Number(source.visibleSinceMs) : null,
    lastPersistedAt: cleanText(source.lastPersistedAt, 40) || createdAt,
  };
}

function persistState() {
  if (!journeyState) {
    return;
  }

  const storage = safeSessionStorage();
  if (!storage) {
    return;
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(journeyState));
    journeyState.lastPersistedAt = new Date().toISOString();
  } catch {
    // Ignore storage failures. Journey capture must never break the site.
  }
}

function syncActiveSeconds(forceStop = false) {
  if (!journeyState || !hasBrowserApis()) {
    return;
  }

  const now = Date.now();
  if (journeyState.visibleSinceMs === null) {
    return;
  }

  const deltaMs = Math.max(0, now - journeyState.visibleSinceMs);
  journeyState.activeSeconds = Math.min(60 * 60 * 24 * 14, journeyState.activeSeconds + deltaMs / 1000);
  journeyState.visibleSinceMs = forceStop || document.visibilityState === "hidden" ? null : now;
  persistState();
}

function ensureJourneyState() {
  if (!hasBrowserApis()) {
    return null;
  }

  if (journeyState) {
    return journeyState;
  }

  const storage = safeSessionStorage();
  if (storage) {
    try {
      const raw = storage.getItem(STORAGE_KEY);
      const parsed = raw ? sanitizeState(JSON.parse(raw)) : null;
      if (parsed) {
        journeyState = {
          ...parsed,
          sessionStartedMs: parsed.sessionStartedMs,
          visibleSinceMs: parsed.visibleSinceMs,
        };
        return journeyState;
      }
    } catch {
      // Ignore malformed storage. A fresh session is safer than breaking analytics.
    }
  }

  journeyState = defaultState();
  persistState();
  return journeyState;
}

function attachLifecycleListeners() {
  if (!hasBrowserApis() || trackingStarted) {
    return;
  }

  trackingStarted = true;

  const handleVisibilityChange = () => {
    if (!journeyState) {
      return;
    }

    syncActiveSeconds(document.visibilityState === "hidden");

    if (document.visibilityState !== "hidden" && journeyState.visibleSinceMs === null) {
      journeyState.visibleSinceMs = Date.now();
      persistState();
    }
  };

  const handlePageHide = () => {
    syncActiveSeconds(true);
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", handlePageHide);
  window.addEventListener("beforeunload", handlePageHide);

  visibilityCleanup = () => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("pagehide", handlePageHide);
    window.removeEventListener("beforeunload", handlePageHide);
    trackingStarted = false;
  };
}

function appendUnique<T>(values: T[], value: T, limit: number) {
  const next = values.slice();
  if (!next.includes(value)) {
    next.push(value);
  }

  return next.slice(-limit);
}

export function ensureJourneyTracking() {
  const state = ensureJourneyState();
  attachLifecycleListeners();

  if (state && hasBrowserApis() && state.visibleSinceMs === null && document.visibilityState !== "hidden") {
    state.visibleSinceMs = Date.now();
    persistState();
  }

  return state;
}

export function stopJourneyTracking() {
  syncActiveSeconds(true);
  visibilityCleanup?.();
  visibilityCleanup = null;
}

export function recordJourneyPageContext(pageContext: PageContext) {
  const state = ensureJourneyTracking();
  if (!state) {
    return null;
  }

  const pagePath = normalizeJourneyPath(pageContext.page_path);
  if (!pagePath) {
    return state;
  }

  syncActiveSeconds();

  if (state.pageViews === 0) {
    state.landingPage = pagePath;
    state.previousPage = pagePath;
    state.lastPage = pagePath;
  } else if (pagePath !== state.currentPage) {
    state.previousPage = state.currentPage;
    state.lastPage = state.currentPage || state.lastPage || state.landingPage;
  } else {
    persistState();
    return state;
  }

  state.currentPage = pagePath;
  state.pageViews = Math.min(1000, state.pageViews + 1);
  state.uniquePages = sanitizePageList([...state.uniquePages, pagePath]);
  state.pageCategoriesVisited = appendUnique(state.pageCategoriesVisited, pageContext.page_type, CATEGORY_LIMIT);
  state.pageLanguage = pageContext.page_language;

  if (pageContext.page_type === "pricing") {
    state.signals.pricingViewed = true;
  }

  if (pageContext.page_type === "case") {
    state.signals.caseViewed = true;
  }

  if (pageContext.page_type === "blog") {
    state.signals.blogViewed = true;
  }

  if (pageContext.page_type === "calculator") {
    state.signals.calculatorUsed = true;
  }

  if (hasBrowserApis() && document.visibilityState !== "hidden" && state.visibleSinceMs === null) {
    state.visibleSinceMs = Date.now();
  }

  persistState();
  return state;
}

export function recordJourneyEvent(eventName: string, properties: Record<string, unknown> = {}) {
  const state = ensureJourneyTracking();
  if (!state) {
    return null;
  }

  switch (eventName) {
    case "pricing_viewed":
      state.signals.pricingViewed = true;
      break;
    case "calculator_viewed":
    case "calculator_started":
      state.signals.calculatorUsed = true;
      break;
    case "calculator_completed":
    case "calculator_result_cta_clicked":
      state.signals.calculatorUsed = true;
      state.signals.calculatorCompleted = true;
      break;
    case "ai_assistant_opened":
      state.signals.assistantOpened = true;
      break;
    case "ai_assistant_started":
    case "ai_assistant_message_sent":
      state.signals.assistantStarted = true;
      break;
    case "email_click":
      state.signals.emailClicked = true;
      break;
    case "telegram_click":
      state.signals.telegramClicked = true;
      break;
    case "whatsapp_click":
      state.signals.whatsappClicked = true;
      break;
    case "blog_article_opened":
      state.signals.blogViewed = true;
      break;
    case "case_opened":
      state.signals.caseViewed = true;
      break;
    case "service_page_viewed":
      state.pageCategoriesVisited = appendUnique(state.pageCategoriesVisited, "services", CATEGORY_LIMIT);
      break;
    case "country_landing_viewed":
      state.pageCategoriesVisited = appendUnique(state.pageCategoriesVisited, "country_landing", CATEGORY_LIMIT);
      break;
    case "industry_solution_viewed":
      state.pageCategoriesVisited = appendUnique(state.pageCategoriesVisited, "industry_solution", CATEGORY_LIMIT);
      break;
    default:
      break;
  }

  if (properties.page_type && isJourneyPageType(properties.page_type)) {
    state.pageCategoriesVisited = appendUnique(state.pageCategoriesVisited, properties.page_type, CATEGORY_LIMIT);
  }

  persistState();
  return state;
}

export function buildJourneyAnalyticsContext(overrides: {
  conversionPage?: string;
  geo?: JourneyGeo;
} = {}): JourneyAnalyticsContext | null {
  const state = ensureJourneyTracking();
  if (!state) {
    return null;
  }

  syncActiveSeconds();

  const conversionPage = normalizeJourneyPath(overrides.conversionPage) || state.currentPage || state.landingPage || "/";
  const lastPage = state.lastPage || state.previousPage || state.currentPage || state.landingPage || conversionPage;
  const uniquePages = sanitizePageList(state.uniquePages);
  const pageCategoriesVisited = sanitizeCategoryList(state.pageCategoriesVisited);
  const geo = overrides.geo || state.geo;

  const context: JourneyAnalyticsContext = {
    journeyId: state.journeyId,
    sessionStartedAt: state.sessionStartedAt,
    activeSeconds: Math.max(0, Math.round(state.activeSeconds)),
    landingPage: state.landingPage || conversionPage,
    conversionPage,
    lastPage,
    currentPage: state.currentPage || conversionPage,
    previousPage: state.previousPage || state.currentPage || conversionPage,
    pageViews: Math.max(0, Math.round(state.pageViews)),
    uniquePages,
    pageCategoriesVisited,
    pageLanguage: state.pageLanguage,
    initialReferrer: state.initialReferrer,
    utm: {
      source: state.utm.source || "",
      medium: state.utm.medium || "",
      campaign: state.utm.campaign || "",
      term: state.utm.term || "",
      content: state.utm.content || "",
    },
    signals: state.signals,
    ...(geo && (geo.country || geo.region) ? { geo } : {}),
  };

  return context as JourneyAnalyticsContext;
}

export function getCurrentJourneyState() {
  const state = ensureJourneyTracking();
  if (!state) {
    return null;
  }

  return state;
}
