export type AnalyticsRuntimeConfig = {
  enabled: boolean;
  scriptUrl: string;
  websiteId: string;
  domains: string;
  vercelEnv: "production" | "preview" | null;
};

declare global {
  interface Window {
    __kuberaAnalyticsConfig?: AnalyticsRuntimeConfig;
  }
}

export function getBrowserAnalyticsConfig() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.__kuberaAnalyticsConfig ?? null;
}
