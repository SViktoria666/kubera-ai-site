"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { handleAnalyticsClick } from "@/components/analytics/analytics-click";
import {
  buildCurrentPageContext,
  getPageContext,
  flushQueuedAnalyticsEvents,
  recordJourneyPageContext,
  shouldTrackAnalyticsInBrowser,
  trackUmamiEvent,
  type AnalyticsEventName,
} from "@/lib/analytics";

function trackPageContext(pathname: string) {
  const context = getPageContext(pathname);
  trackUmamiEvent("page_context", context);

  if (context.page_type === "blog" && context.article_slug) {
    trackUmamiEvent("blog_article_opened", context);
  }

  if (context.page_type === "case" && context.case_slug) {
    trackUmamiEvent("case_opened", context);
  }

  if (context.page_type === "services") {
    trackUmamiEvent("service_page_viewed", context);
  }

  if (context.page_type === "country_landing") {
    trackUmamiEvent("country_landing_viewed", context);
  }

  if (context.page_type === "industry_solution") {
    trackUmamiEvent("industry_solution_viewed", context);
  }
}

function schedulePageContext(pathname: string, isCancelled: () => boolean, attempt = 0) {
  if (typeof window === "undefined" || !shouldTrackAnalyticsInBrowser()) {
    return;
  }

  if (isCancelled()) {
    return;
  }

  if (window.umami && typeof window.umami.track === "function") {
    trackPageContext(pathname);
    return;
  }

  if (attempt >= 25) {
    return;
  }

  window.setTimeout(() => {
    schedulePageContext(pathname, isCancelled, attempt + 1);
  }, 200);
}

function getEventPropertiesFromElement(element: HTMLElement) {
  const pageContext = buildCurrentPageContext();

  return {
    page_path: pageContext.page_path,
    page_language: pageContext.page_language,
    page_type: pageContext.page_type,
    country_market: pageContext.country_market,
    service_slug: pageContext.service_slug,
    article_slug: pageContext.article_slug,
    case_slug: pageContext.case_slug,
    placement: element.dataset.analyticsPlacement,
    cta_id: element.dataset.analyticsCtaId,
    cta_label_key: element.dataset.analyticsCtaLabelKey,
    form_id: element.dataset.analyticsFormId,
    calculator_id: element.dataset.analyticsCalculatorId,
    completion_state: element.dataset.analyticsCompletionState,
    destination_domain: element.dataset.analyticsDestinationDomain,
    contact_method: element.dataset.analyticsContactMethod,
    submission_completed: element.dataset.analyticsSubmissionCompleted === "true" ? true : undefined,
  };
}

function trackDataAttributeEvent(eventName: string, element: HTMLElement) {
  const baseProperties = getEventPropertiesFromElement(element);
  const extraEvents = element.dataset.analyticsExtraEvents
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item) => item !== eventName) ?? [];

  trackUmamiEvent(eventName as AnalyticsEventName, baseProperties);

  for (const extraEvent of extraEvents) {
    trackUmamiEvent(extraEvent as AnalyticsEventName, baseProperties);
  }
}

function trackFallbackLinkEvent(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") || "";
  if (!href || href.startsWith("#")) {
    return;
  }

  const lowerHref = href.toLowerCase();
  const pageContext = buildCurrentPageContext();

  if (lowerHref.startsWith("mailto:")) {
    trackUmamiEvent("email_click", {
      ...pageContext,
      placement: anchor.dataset.analyticsPlacement || "unknown",
    });
    return;
  }

  if (lowerHref.startsWith("tel:")) {
    trackUmamiEvent("phone_click", {
      ...pageContext,
      placement: anchor.dataset.analyticsPlacement || "unknown",
    });
    return;
  }

  if (lowerHref.includes("wa.me") || lowerHref.startsWith("whatsapp:")) {
    trackUmamiEvent("whatsapp_click", {
      ...pageContext,
      placement: anchor.dataset.analyticsPlacement || "unknown",
    });
    return;
  }

  if (lowerHref.includes("telegram.me") || lowerHref.includes("t.me") || lowerHref.startsWith("tg:")) {
    trackUmamiEvent("telegram_click", {
      ...pageContext,
      placement: anchor.dataset.analyticsPlacement || "unknown",
    });
    return;
  }

  if (/^[a-z][a-z0-9+.-]*:/.test(lowerHref)) {
    return;
  }

  const currentHostname = window.location.hostname;
  const resolved = new URL(anchor.href, window.location.href);

  if (!resolved.hostname || resolved.hostname === currentHostname) {
    return;
  }

  trackUmamiEvent("external_link_click", {
    ...pageContext,
    destination_domain: resolved.hostname,
    placement: anchor.dataset.analyticsPlacement || "unknown",
  });
}

export function AnalyticsBridge() {
  const pathname = usePathname();
  const lastTrackedPathRef = useRef<string>("");

  useEffect(() => {
    if (!shouldTrackAnalyticsInBrowser()) {
      return;
    }

    const normalizedPath = pathname || "/";
    let cancelled = false;

    if (normalizedPath === lastTrackedPathRef.current) {
      return;
    }

    lastTrackedPathRef.current = normalizedPath;
    recordJourneyPageContext(getPageContext(normalizedPath));
    schedulePageContext(normalizedPath, () => cancelled);

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  useEffect(() => {
    if (!shouldTrackAnalyticsInBrowser()) {
      return;
    }

    let attempts = 0;
    const intervalId = window.setInterval(() => {
      attempts += 1;
      flushQueuedAnalyticsEvents();

      if (attempts >= 25 || (window.umami && typeof window.umami.track === "function" && (window.__kuberaAnalyticsQueue?.length || 0) === 0)) {
        window.clearInterval(intervalId);
      }
    }, 200);

    const handleClick = (event: MouseEvent) => {
      const handled = handleAnalyticsClick(event.target, {
        onAnalyticsEvent: trackDataAttributeEvent,
        onFallbackAnchor: trackFallbackLinkEvent,
      });

      if (handled) {
        return;
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
