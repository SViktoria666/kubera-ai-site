// @ts-nocheck
import test from "node:test";
import assert from "node:assert/strict";

import {
  handleAnalyticsClick,
  resolveAnalyticsClickTarget,
} from "../src/components/analytics/analytics-click.ts";
import { trackDataAttributeEvent } from "../src/components/analytics/AnalyticsBridge.tsx";

function installMockWindow() {
  const previousWindow = globalThis.window;
  const storage = new Map<string, string>();
  const mockWindow = {
    location: {
      href: "https://www.kubera-automation.com/services",
      hostname: "www.kubera-automation.com",
      pathname: "/services",
      search: "",
      hash: "",
    },
    history: {
      state: null,
      replaceState() {},
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
    __kuberaAnalyticsConfig: {
      enabled: true,
      scriptUrl: "https://analytics.kubera-automation.com/script.js",
      websiteId: "a866bd55-0014-4f23-8678-6a38d4208966",
      domains: "www.kubera-automation.com,kubera-automation.com",
      vercelEnv: "production" as const,
    },
    umami: {
      track() {},
    },
  };

  globalThis.window = mockWindow as unknown as Window;

  return {
    mockWindow,
    restore() {
      globalThis.window = previousWindow;
    },
  };
}

test("resolves a text-node click target to its parent analytics element", () => {
  let closestCalls = 0;
  const analyticsElement = {
    dataset: { analyticsEvent: "primary_cta_click" },
    closest(selector: string) {
      closestCalls += 1;
      return selector === "[data-analytics-event]" ? this : null;
    },
  };

  const textNodeTarget = {
    parentElement: analyticsElement,
  };

  const resolvedTarget = resolveAnalyticsClickTarget(textNodeTarget as unknown as EventTarget);

  assert.equal(resolvedTarget, analyticsElement);
  assert.equal(closestCalls, 0);
});

test("handles nested text-node analytics clicks without dropping the event", () => {
  const calls: Array<{ eventName: string; element: unknown }> = [];
  const analyticsElement = {
    dataset: { analyticsEvent: "secondary_cta_click" },
    closest(selector: string) {
      return selector === "[data-analytics-event]" ? this : null;
    },
  };

  const textNodeTarget = {
    parentElement: analyticsElement,
  };

  const handled = handleAnalyticsClick(textNodeTarget as unknown as EventTarget, {
    onAnalyticsEvent(eventName, element) {
      calls.push({ eventName, element });
    },
    onFallbackAnchor() {
      throw new Error("fallback handler should not run for analytics elements");
    },
  });

  assert.equal(handled, true);
  assert.deepEqual(calls, [{ eventName: "secondary_cta_click", element: analyticsElement }]);
});

test("ignores orphaned text nodes", () => {
  const handled = handleAnalyticsClick({ parentElement: null } as unknown as EventTarget, {
    onAnalyticsEvent() {
      throw new Error("analytics handler should not run for orphaned text nodes");
    },
    onFallbackAnchor() {
      throw new Error("fallback handler should not run for orphaned text nodes");
    },
  });

  assert.equal(handled, false);
  assert.equal(resolveAnalyticsClickTarget({ parentElement: null } as unknown as EventTarget), null);
});

test("cta click emit path tracks the delegated custom event", () => {
  const browserWindow = installMockWindow();
  const calls: Array<{ eventName: string; properties: Record<string, unknown> }> = [];
  const previousUmami = browserWindow.mockWindow.umami;

  browserWindow.mockWindow.umami = {
    track(eventName?: string | Record<string, unknown>, properties?: Record<string, unknown>) {
      calls.push({
        eventName: String(eventName),
        properties: properties ?? {},
      });
    },
  };

  const analyticsElement = {
    dataset: {
      analyticsEvent: "primary_cta_click",
      analyticsPlacement: "hero",
      analyticsCtaId: "book-discovery-call",
    },
    closest(selector: string) {
      return selector === "[data-analytics-event]" ? this : null;
    },
  };

  try {
    trackDataAttributeEvent("primary_cta_click", analyticsElement as unknown as HTMLElement);

    assert.deepEqual(calls, [
      {
        eventName: "primary_cta_click",
        properties: {
          page_path: "/services",
          page_language: "en",
          page_type: "services",
          page_family: "services",
          traffic_class: "external",
          placement: "hero",
          cta_id: "book-discovery-call",
        },
      },
    ]);
  } finally {
    browserWindow.mockWindow.umami = previousUmami;
    browserWindow.restore();
  }
});
