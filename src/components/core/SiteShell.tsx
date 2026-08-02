import { AiAssistantWidget } from "@/components/ai/AiAssistantWidget";
import { AnalyticsBridge } from "@/components/analytics/AnalyticsBridge";
import { UmamiScript } from "@/components/analytics/UmamiScript";
import { Footer } from "@/components/core/Footer";
import { Header } from "@/components/core/Header";
import { RouteTransition } from "@/components/core/RouteTransition";
import { StructuredData } from "@/components/seo/StructuredData";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const isAssistantEnabled = process.env.AI_ASSISTANT_ENABLED === "true";

  return (
    <>
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
