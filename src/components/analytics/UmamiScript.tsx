import Script from "next/script";
import { getAnalyticsDomains, getUmamiScriptUrl, getUmamiWebsiteId, isAnalyticsEnabled } from "@/lib/analytics";

export function UmamiScript() {
  if (!isAnalyticsEnabled()) {
    return null;
  }

  const scriptUrl = getUmamiScriptUrl();
  const websiteId = getUmamiWebsiteId();

  if (!scriptUrl || !websiteId) {
    return null;
  }

  return (
    <Script
      id="kubera-umami-tracker"
      strategy="afterInteractive"
      src={scriptUrl}
      data-website-id={websiteId}
      data-do-not-track="true"
      data-exclude-hash="true"
      data-domains={getAnalyticsDomains()}
    />
  );
}
