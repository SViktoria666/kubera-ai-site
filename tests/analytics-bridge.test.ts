// @ts-nocheck
import test from "node:test";
import assert from "node:assert/strict";

import { handleAnalyticsClick } from "../src/components/analytics/analytics-click.ts";
import {
  startPageContextTracking,
  trackDataAttributeEvent,
} from "../src/components/analytics/analytics-bridge-core.ts";
import { resetAnalyticsTrafficClassForTests } from "../src/lib/analytics/traffic.ts";

function installAnalyticsWindow(href: string, ready = true) {
  resetAnalyticsTrafficClassForTests();
  const url = new URL(href);
  const previousWindow = globalThis.window;
  const previousNavigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, "navigator");
  const trackCalls: Array<{ eventName: string; data: Record<string, unknown> }> = [];
  const replaceCalls: Array<string> = [];
  const storage = new Map<string, string>();
  const timeoutCallbacks: Array<() => void> = [];

  const mockWindow = {
    location: {
      href: url.href,
      hostname: url.hostname,
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
    },
    history: {
      state: null,
      replaceState(_state: unknown, _title: string, nextUrl: string) {
        replaceCalls.push(nextUrl);
      },
    },
    sessionStorage: {
      getItem(key: string) {
        return storage.has(key) ? storage.get(key) ?? null : null;
      },
      setItem(key: string, value: string) {
        storage.set(key, value);
      },
      removeItem(key: string) {
        storage.delete(key);
      },
    },
    doNotTrack: "0",
    setTimeout(callback: () => void) {
      timeoutCallbacks.push(callback);
      return timeoutCallbacks.length;
    },
    clearTimeout() {},
    __kuberaAnalyticsConfig: {
      enabled: true,
      scriptUrl: "https://analytics.kubera-automation.com/script.js",
      websiteId: "a866bd55-0014-4f23-8678-6a38d4208966",
      domains: "www.kubera-automation.com,kubera-automation.com",
      vercelEnv: "production",
    },
    umami: ready
      ? {
          track(eventName: string, data: Record<string, unknown>) {
            trackCalls.push({ eventName, data });
          },
        }
      : undefined,
  };

  globalThis.window = mockWindow as unknown as Window;
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    value: { doNotTrack: "0" } as Navigator,
    writable: true,
  });

  return {
    mockWindow,
    replaceCalls,
    timeoutCallbacks,
    trackCalls,
    restore() {
      globalThis.window = previousWindow;
      if (previousNavigatorDescriptor) {
        Object.defineProperty(globalThis, "navigator", previousNavigatorDescriptor);
      } else {
        delete (globalThis as { navigator?: Navigator }).navigator;
      }
      resetAnalyticsTrafficClassForTests();
    },
  };
}

test("AnalyticsBridge click path resolves nested analytics targets through the shared resolver", () => {
  const calls: Array<{ eventName: string; element: unknown }> = [];

  const analyticsElement = {
    dataset: { analyticsEvent: "primary_cta_click" },
    closest(selector: string) {
      return selector === "[data-analytics-event]" ? this : null;
    },
  };

  const nestedTarget = {
    dataset: {},
    closest(selector: string) {
      if (selector === "[data-analytics-event]") {
        return analyticsElement;
      }

      return null;
    },
  };

  const handled = handleAnalyticsClick(nestedTarget as unknown as EventTarget, {
    onAnalyticsEvent(eventName, element) {
      calls.push({ eventName, element });
    },
    onFallbackAnchor() {
      throw new Error("fallback should not run for analytics targets");
    },
  });

  assert.equal(handled, true);
  assert.deepEqual(calls, [{ eventName: "primary_cta_click", element: analyticsElement }]);
});

test("trackDataAttributeEvent emits CTA metadata exactly once", () => {
  const scope = installAnalyticsWindow("https://www.kubera-automation.com/services?analytics_traffic=qa");

  try {
    const analyticsElement = {
      dataset: {
        analyticsEvent: "primary_cta_click",
        analyticsPlacement: "header",
        analyticsCtaId: "header-contact",
      },
      closest(selector: string) {
        return selector === "[data-analytics-event]" ? this : null;
      },
    };

    trackDataAttributeEvent("primary_cta_click", analyticsElement as unknown as HTMLElement);

    assert.equal(scope.trackCalls.length, 1);
    assert.deepEqual(scope.trackCalls[0], {
      eventName: "primary_cta_click",
      data: {
        page_path: "/services",
        page_language: "en",
        page_type: "services",
        page_family: "services",
        traffic_class: "qa",
        placement: "header",
        cta_id: "header-contact",
      },
    });

    assert.deepEqual(scope.replaceCalls, ["/services"]);
    assert.equal(scope.mockWindow.sessionStorage.getItem("kuberaAnalyticsTrafficClass"), "qa");
  } finally {
    scope.restore();
  }
});

test("page_context emits once when Umami is ready before mount and suppresses same-path rerenders", () => {
  const scope = installAnalyticsWindow("https://www.kubera-automation.com/");

  try {
    const lastTrackedPathRef = { current: "" };
    const cleanup = startPageContextTracking("/", lastTrackedPathRef);

    assert.equal(scope.trackCalls.filter((call) => call.eventName === "page_context").length, 1);
    assert.equal(scope.trackCalls.length, 1);

    cleanup();

    startPageContextTracking("/", lastTrackedPathRef);
    assert.equal(scope.trackCalls.filter((call) => call.eventName === "page_context").length, 1);
  } finally {
    scope.restore();
  }
});

test("page_context waits for delayed Umami readiness and emits once when ready", () => {
  const scope = installAnalyticsWindow("https://www.kubera-automation.com/", false);

  try {
    const lastTrackedPathRef = { current: "" };
    const cleanup = startPageContextTracking("/", lastTrackedPathRef);

    assert.equal(scope.trackCalls.length, 0);
    assert.equal(scope.timeoutCallbacks.length, 1);

    scope.mockWindow.umami = {
      track(eventName: string, data: Record<string, unknown>) {
        scope.trackCalls.push({ eventName, data });
      },
    };

    scope.timeoutCallbacks.shift()?.();

    assert.equal(scope.trackCalls.filter((call) => call.eventName === "page_context").length, 1);
    assert.equal(scope.trackCalls.length, 1);

    cleanup();
  } finally {
    scope.restore();
  }
});

test("page_context emits again for navigation to a new path", () => {
  const scope = installAnalyticsWindow("https://www.kubera-automation.com/");

  try {
    const lastTrackedPathRef = { current: "" };

    startPageContextTracking("/", lastTrackedPathRef);
    startPageContextTracking("/services", lastTrackedPathRef);

    assert.equal(scope.trackCalls.filter((call) => call.eventName === "page_context").length, 2);
    assert.equal(scope.trackCalls.filter((call) => call.eventName === "service_page_viewed").length, 1);
  } finally {
    scope.restore();
  }
});

test("AnalyticsBridge click path ignores targets outside analytics and malformed analytics nodes", () => {
  const outsideCalls: Array<{ eventName: string; element: unknown }> = [];

  const outsideTarget = {
    dataset: {},
    closest(selector: string) {
      return selector === "a[href]" ? null : null;
    },
  };

  const handledOutside = handleAnalyticsClick(outsideTarget as unknown as EventTarget, {
    onAnalyticsEvent(eventName, element) {
      outsideCalls.push({ eventName, element });
    },
    onFallbackAnchor() {
      throw new Error("fallback should not run for outside targets");
    },
  });

  assert.equal(handledOutside, false);
  assert.equal(outsideCalls.length, 0);

  const malformedCalls: Array<{ eventName: string; element: unknown }> = [];
  const malformedTarget = {
    dataset: {},
    closest(selector: string) {
      return selector === "[data-analytics-event]" ? this : null;
    },
  };

  const handledMalformed = handleAnalyticsClick(malformedTarget as unknown as EventTarget, {
    onAnalyticsEvent(eventName, element) {
      malformedCalls.push({ eventName, element });
    },
    onFallbackAnchor() {
      throw new Error("fallback should not run for malformed analytics nodes");
    },
  });

  assert.equal(handledMalformed, true);
  assert.equal(malformedCalls.length, 0);
});
