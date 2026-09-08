"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { handleAnalyticsClick } from "@/components/analytics/analytics-click";
import {
  flushQueuedAnalyticsEvents,
  startPageContextTracking,
  trackDataAttributeEvent,
  trackFallbackLinkEvent,
  shouldTrackAnalyticsInBrowser,
} from "./analytics-bridge-core";

export function AnalyticsBridge() {
  const pathname = usePathname();
  const lastTrackedPathRef = useRef<string>("");

  useEffect(() => {
    return startPageContextTracking(pathname, lastTrackedPathRef);
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
      handleAnalyticsClick(event.target, {
        onAnalyticsEvent(eventName, analyticsElement) {
          trackDataAttributeEvent(eventName, analyticsElement);
        },
        onFallbackAnchor(anchor) {
          trackFallbackLinkEvent(anchor);
        },
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
