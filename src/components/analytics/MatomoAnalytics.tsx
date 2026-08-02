"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    _paq?: Array<Array<unknown>>;
  }
}

type MatomoConfig = {
  enabled: boolean;
  siteId: string;
  trackerBaseUrl: string;
  scriptUrl: string;
};

function getMatomoConfig(): MatomoConfig {
  const enabled = process.env.NEXT_PUBLIC_MATOMO_ENABLED === "true";
  const trackerBaseUrl = (process.env.NEXT_PUBLIC_MATOMO_URL || "").replace(/\/+$/, "");
  const siteId = (process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "").trim();

  return {
    enabled: enabled && Boolean(trackerBaseUrl) && Boolean(siteId),
    siteId,
    trackerBaseUrl,
    scriptUrl: trackerBaseUrl ? `${trackerBaseUrl}/matomo.js` : "",
  };
}

function ensureMatomoQueue() {
  if (typeof window === "undefined") {
    return [];
  }

  window._paq = window._paq || [];
  return window._paq;
}

function pushMatomo(...args: Array<unknown>) {
  ensureMatomoQueue().push(args);
}

function trackMatomoEvent(category: string, action: string, name?: string, value?: number) {
  if (typeof window === "undefined") {
    return;
  }

  const payload: Array<unknown> = ["trackEvent", category, action];
  if (name) {
    payload.push(name);
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    payload.push(value);
  }
  pushMatomo(...payload);
}

export function MatomoAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const config = getMatomoConfig();
  const scrollThresholdsRef = useRef<Set<number>>(new Set());
  const routedRef = useRef<string>("");

  useEffect(() => {
    if (!config.enabled || typeof document === "undefined") {
      return;
    }

    ensureMatomoQueue();
    pushMatomo("setTrackerUrl", `${config.trackerBaseUrl}/matomo.php`);
    pushMatomo("setSiteId", config.siteId);
    pushMatomo("enableLinkTracking");
    pushMatomo("enableHeartBeatTimer", 15);

    if (!document.querySelector('script[data-matomo-tracker="true"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.src = config.scriptUrl;
      script.dataset.matomoTracker = "true";
      document.head.appendChild(script);
    }
  }, [config.enabled, config.scriptUrl, config.siteId, config.trackerBaseUrl]);

  useEffect(() => {
    if (!config.enabled || typeof window === "undefined") {
      return;
    }

    scrollThresholdsRef.current = new Set();
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    if (routedRef.current === url) {
      return;
    }

    routedRef.current = url;
    pushMatomo("setCustomUrl", url);
    pushMatomo("setDocumentTitle", document.title);
    pushMatomo("trackPageView");
    pushMatomo("trackEvent", "Website", "Session Start", pathname);
  }, [config.enabled, pathname, searchParams]);

  useEffect(() => {
    if (!config.enabled || typeof window === "undefined") {
      return;
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-matomo-event]") : null;
      if (!target) {
        return;
      }

      const eventName = target.dataset.matomoEvent || "cta_click";
      const category = target.dataset.matomoCategory || "Website";
      const action = target.dataset.matomoAction || "Click";
      const label = target.dataset.matomoLabel || target.getAttribute("aria-label") || target.textContent?.trim() || undefined;
      const numericValue = target.dataset.matomoValue ? Number(target.dataset.matomoValue) : undefined;

      trackMatomoEvent(category, `${eventName}:${action}`, label, numericValue);
    };

    const onScroll = () => {
      const body = document.documentElement;
      const totalHeight = Math.max(body.scrollHeight, document.body.scrollHeight);
      const viewportHeight = window.innerHeight;
      const maxScroll = Math.max(1, totalHeight - viewportHeight);
      const progress = Math.min(100, Math.round(((window.scrollY || window.pageYOffset || 0) / maxScroll) * 100));
      const thresholds = [25, 50, 75, 100];

      for (const threshold of thresholds) {
        if (progress >= threshold && !scrollThresholdsRef.current.has(threshold)) {
          scrollThresholdsRef.current.add(threshold);
          trackMatomoEvent("Engagement", "Scroll Depth", pathname, threshold);
        }
      }
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
    };
  }, [config.enabled, pathname]);

  useEffect(() => {
    if (!config.enabled || typeof window === "undefined") {
      return;
    }

    const onPageHide = () => {
      pushMatomo("trackEvent", "Website", "Session End", pathname);
    };

    window.addEventListener("pagehide", onPageHide);
    return () => window.removeEventListener("pagehide", onPageHide);
  }, [config.enabled, pathname]);

  return null;
}

export { trackMatomoEvent };
