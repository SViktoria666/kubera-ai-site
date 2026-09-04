type AnalyticsEventHandler = (eventName: string, element: HTMLElement) => void;
type AnalyticsFallbackHandler = (anchor: HTMLAnchorElement) => void;

type AnalyticsClickHandlers = {
  onAnalyticsEvent: AnalyticsEventHandler;
  onFallbackAnchor: AnalyticsFallbackHandler;
};

function hasClosestAndDataset(value: unknown): value is HTMLElement {
  return (
    Boolean(value) &&
    typeof value === "object" &&
    typeof (value as { closest?: unknown }).closest === "function" &&
    "dataset" in (value as object)
  );
}

export function resolveAnalyticsClickTarget(target: EventTarget | null): HTMLElement | null {
  if (hasClosestAndDataset(target)) {
    return target;
  }

  if (target && typeof target === "object") {
    const parentElement = (target as { parentElement?: unknown }).parentElement;
    if (hasClosestAndDataset(parentElement)) {
      return parentElement;
    }
  }

  return null;
}

export function handleAnalyticsClick(target: EventTarget | null, handlers: AnalyticsClickHandlers) {
  const resolvedTarget = resolveAnalyticsClickTarget(target);
  if (!resolvedTarget) {
    return false;
  }

  const analyticsElement = resolvedTarget.closest<HTMLElement>("[data-analytics-event]");
  if (analyticsElement) {
    const eventName = analyticsElement.dataset.analyticsEvent;
    if (eventName) {
      handlers.onAnalyticsEvent(eventName, analyticsElement);
    }
    return true;
  }

  const anchor = resolvedTarget.closest<HTMLAnchorElement>("a[href]");
  if (anchor) {
    handlers.onFallbackAnchor(anchor);
    return true;
  }

  return false;
}
