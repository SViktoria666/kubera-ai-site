// @ts-nocheck
import test from "node:test";
import assert from "node:assert/strict";

import { getPageContext, getAnalyticsDomains } from "../src/lib/analytics.ts";
import {
  getAnalyticsTrafficClass,
  resetAnalyticsTrafficClassForTests,
  resolveAnalyticsTrafficClass,
} from "../src/lib/analytics/traffic.ts";

function installMockWindow(href: string) {
  const url = new URL(href);
  const storage = new Map<string, string>();
  const replaceCalls: Array<{ nextUrl: string }> = [];
  const previousWindow = globalThis.window;

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
        replaceCalls.push({ nextUrl });
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
  };

  globalThis.window = mockWindow as unknown as Window;

  return {
    mockWindow,
    replaceCalls,
    restore() {
      globalThis.window = previousWindow;
    },
  };
}

test("default production visitor resolves to external and preserves page-family metadata", () => {
  const trafficClass = resolveAnalyticsTrafficClass({
    hostname: "www.kubera-automation.com",
    vercelEnv: "production",
  });

  const context = getPageContext("/services");

  assert.equal(trafficClass, "external");
  assert.equal(context.traffic_class, "external");
  assert.equal(context.page_family, context.page_type);
  assert.equal(context.page_family, "services");
});

test("qa and internal markers resolve correctly and are removed from the visible url", () => {
  const previousEnv = process.env.VERCEL_ENV;
  process.env.VERCEL_ENV = "production";
  resetAnalyticsTrafficClassForTests();

  try {
    const qaWindow = installMockWindow("https://www.kubera-automation.com/services?analytics_traffic=qa&utm_source=test#top");
    const qaTrafficClass = getAnalyticsTrafficClass();

    assert.equal(qaTrafficClass, "qa");
    assert.equal(qaWindow.mockWindow.sessionStorage.getItem("kuberaAnalyticsTrafficClass"), "qa");
    assert.deepEqual(qaWindow.replaceCalls, [{ nextUrl: "/services?utm_source=test#top" }]);
    qaWindow.restore();

    resetAnalyticsTrafficClassForTests();
    const internalWindow = installMockWindow("https://www.kubera-automation.com/services?analytics_traffic=internal");
    const internalTrafficClass = getAnalyticsTrafficClass();

    assert.equal(internalTrafficClass, "internal");
    assert.equal(internalWindow.mockWindow.sessionStorage.getItem("kuberaAnalyticsTrafficClass"), "internal");
    assert.deepEqual(internalWindow.replaceCalls, [{ nextUrl: "/services" }]);
    internalWindow.restore();
  } finally {
    process.env.VERCEL_ENV = previousEnv;
    resetAnalyticsTrafficClassForTests();
  }
});

test("preview deployment resolves to preview", () => {
  assert.equal(
    resolveAnalyticsTrafficClass({
      hostname: "kubera-ai-site-git-analytics-preview.vercel.app",
      vercelEnv: "preview",
    }),
    "preview",
  );
});

test("unknown marker falls back to external and does not require secrets", () => {
  const trafficClass = resolveAnalyticsTrafficClass({
    hostname: "www.kubera-automation.com",
    searchParams: new URLSearchParams("analytics_traffic=not-a-class&email=jane@example.com"),
    vercelEnv: "production",
  });

  assert.equal(trafficClass, "external");
});

test("analytics payload context stays pii-free", () => {
  const context = getPageContext("/contacts");

  assert.equal(context.traffic_class, "external");
  assert.equal(context.page_family, "contacts");
  assert.ok(!Object.hasOwn(context, "name"));
  assert.ok(!Object.hasOwn(context, "email"));
  assert.ok(!Object.hasOwn(context, "phone"));
  assert.ok(!Object.hasOwn(context, "message"));
});

test("preview domains are added only for preview builds", () => {
  const previousEnv = process.env.VERCEL_ENV;
  const previousUrl = process.env.VERCEL_URL;

  try {
    process.env.VERCEL_ENV = "preview";
    process.env.VERCEL_URL = "kubera-ai-site-git-analytics-preview.vercel.app";

    const previewDomains = getAnalyticsDomains();
    assert.ok(previewDomains.includes("kubera-ai-site-git-analytics-preview.vercel.app"));
  } finally {
    process.env.VERCEL_ENV = previousEnv;
    process.env.VERCEL_URL = previousUrl;
  }
});
