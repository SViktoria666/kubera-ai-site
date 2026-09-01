// @ts-nocheck
import test from "node:test";
import assert from "node:assert/strict";

import { handleAnalyticsClick, resolveAnalyticsClickTarget } from "../src/components/analytics/analytics-click.ts";

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
