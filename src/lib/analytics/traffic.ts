import { getBrowserAnalyticsConfig } from "@/lib/analytics/runtime-config";

export type AnalyticsTrafficClass = "external" | "internal" | "qa" | "preview";

type AnalyticsTrafficResolutionInput = {
  hostname?: string;
  searchParams?: URLSearchParams;
  storedTrafficClass?: string | null;
  vercelEnv?: string;
};

const trafficStorageKey = "kuberaAnalyticsTrafficClass";
const trafficMarkerKey = "analytics_traffic";
const previewHostnamePattern = /\.vercel\.app$/i;

let cachedTrafficClass: AnalyticsTrafficClass | null = null;

function hasBrowserApis() {
  return typeof window !== "undefined";
}

function isAnalyticsTrafficClass(value: string): value is AnalyticsTrafficClass {
  return value === "external" || value === "internal" || value === "qa" || value === "preview";
}

function normalizeTrafficClass(value: string | null | undefined): AnalyticsTrafficClass | null {
  if (!value) {
    return null;
  }

  const normalized = value.trim().toLowerCase();
  return isAnalyticsTrafficClass(normalized) ? normalized : null;
}

function readTrafficClassFromStorage() {
  if (!hasBrowserApis()) {
    return null;
  }

  try {
    return normalizeTrafficClass(window.sessionStorage.getItem(trafficStorageKey));
  } catch {
    return null;
  }
}

function persistTrafficClass(trafficClass: AnalyticsTrafficClass) {
  if (!hasBrowserApis()) {
    return;
  }

  if (trafficClass !== "internal" && trafficClass !== "qa") {
    return;
  }

  try {
    window.sessionStorage.setItem(trafficStorageKey, trafficClass);
  } catch {
    // Ignore storage failures. Traffic classification must not break the site.
  }
}

function stripTrafficMarkerFromUrl() {
  if (!hasBrowserApis() || typeof window.history.replaceState !== "function") {
    return;
  }

  const url = new URL(window.location.href);
  if (!url.searchParams.has(trafficMarkerKey)) {
    return;
  }

  url.searchParams.delete(trafficMarkerKey);
  window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
}

function isPreviewDeployment(hostname?: string, vercelEnv?: string) {
  return vercelEnv === "preview" || Boolean(hostname && previewHostnamePattern.test(hostname));
}

function resolveBrowserVercelEnv() {
  const browserConfig = getBrowserAnalyticsConfig();
  if (browserConfig?.vercelEnv) {
    return browserConfig.vercelEnv;
  }

  if (typeof window === "undefined") {
    return null;
  }

  return previewHostnamePattern.test(window.location.hostname) ? "preview" : "production";
}

export function resolveAnalyticsTrafficClass(input: AnalyticsTrafficResolutionInput = {}): AnalyticsTrafficClass {
  const marker = normalizeTrafficClass(input.searchParams?.get(trafficMarkerKey));
  if (marker === "internal" || marker === "qa") {
    return marker;
  }

  const stored = normalizeTrafficClass(input.storedTrafficClass);
  if (stored === "internal" || stored === "qa") {
    return stored;
  }

  if (isPreviewDeployment(input.hostname, input.vercelEnv)) {
    return "preview";
  }

  return "external";
}

export function getAnalyticsTrafficClass() {
  if (cachedTrafficClass) {
    return cachedTrafficClass;
  }

  if (!hasBrowserApis()) {
    cachedTrafficClass = "external";
    return cachedTrafficClass;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const storedTrafficClass = readTrafficClassFromStorage();
  const resolvedTrafficClass = resolveAnalyticsTrafficClass({
    hostname: window.location.hostname,
    searchParams,
    storedTrafficClass,
    vercelEnv: resolveBrowserVercelEnv() ?? undefined,
  });

  if (searchParams.has(trafficMarkerKey)) {
    stripTrafficMarkerFromUrl();
  }

  if (resolvedTrafficClass === "internal" || resolvedTrafficClass === "qa") {
    persistTrafficClass(resolvedTrafficClass);
  }

  cachedTrafficClass = resolvedTrafficClass;
  return resolvedTrafficClass;
}

export function resetAnalyticsTrafficClassForTests() {
  cachedTrafficClass = null;
}

