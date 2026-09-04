import { AiAssistantWidget } from "@/components/ai/AiAssistantWidget";
import { AnalyticsBridge } from "@/components/analytics/AnalyticsBridge";
import { UmamiScript } from "@/components/analytics/UmamiScript";
import { Footer } from "@/components/core/Footer";
import { Header } from "@/components/core/Header";
import { RouteTransition } from "@/components/core/RouteTransition";
import { StructuredData } from "@/components/seo/StructuredData";
import { getAnalyticsDomains, getUmamiScriptUrl, getUmamiWebsiteId, isAnalyticsEnabled } from "@/lib/analytics";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const isAssistantEnabled = process.env.AI_ASSISTANT_ENABLED === "true";
  const analyticsConfig = {
    enabled: isAnalyticsEnabled(),
    scriptUrl: getUmamiScriptUrl(),
    websiteId: getUmamiWebsiteId(),
    domains: getAnalyticsDomains(),
    vercelEnv: process.env.VERCEL_ENV === "preview" ? "preview" : "production",
  } as const;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__kuberaAnalyticsConfig = ${JSON.stringify(analyticsConfig)};`,
        }}
      />
      <UmamiScript />
      <StructuredData />
      <Header />
      <RouteTransition>{children}</RouteTransition>
      <Footer />
      <AiAssistantWidget enabled={isAssistantEnabled} />
      <AnalyticsBridge />
    </>
  );
}
