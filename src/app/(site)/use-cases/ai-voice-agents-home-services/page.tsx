import type { Metadata } from "next";
import { aiVoiceAgentsHomeServices } from "@/content/use-cases/ai-voice-agents-home-services";
import { UseCaseLandingPage } from "@/components/use-cases/UseCaseLandingPage";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = aiVoiceAgentsHomeServices;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: seo.canonical,
      siteName: "Kubera AI",
      type: "website",
      locale: "en_US",
      images: [{ url: "/assets/images/cases/case-dashboard-4ac0724.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: ["/assets/images/cases/case-dashboard-4ac0724.png"],
    },
  };
}

export default function AiVoiceAgentsHomeServicesPage() {
  const { seo, hero, whoThisIsFor, whatTheServiceIs, commonBusinessProblems, manualVsAiComparison, useCases, targetWorkflow, automationModules, implementationProcess, toolAndPlatformOptions, security, expectedBusinessImpact, whyKuberaAi, pricingLogic, midCta, relatedServices, relevantDemoCases, recommendedReading, faq, finalCta } =
    aiVoiceAgentsHomeServices;

  return (
    <UseCaseLandingPage
      canonical={seo.canonical}
      description={seo.description}
      faq={faq}
      finalCta={finalCta}
      hero={hero}
      midCta={midCta}
      relatedServices={relatedServices}
      relevantDemoCases={relevantDemoCases}
      recommendedReading={recommendedReading}
      seoTitle={seo.title}
      h1={seo.h1}
      ogTitle={seo.ogTitle}
      ogDescription={seo.ogDescription}
      sections={[
        { kind: "markdown", title: "Who This Is For", body: whoThisIsFor },
        { kind: "markdown", title: "What The Service Is", body: whatTheServiceIs },
        { kind: "markdown", title: "Common Business Problems", body: commonBusinessProblems },
        { kind: "markdown", title: "Manual vs Kubera AI Automation", body: manualVsAiComparison },
        { kind: "markdown", title: "Use Cases", body: useCases },
        { kind: "pre", title: "Target Workflow", bodyLines: targetWorkflow },
        { kind: "markdown", title: "Automation Modules", body: automationModules },
        { kind: "markdown", title: "Implementation Process", body: implementationProcess },
        { kind: "markdown", title: "Tool & Platform Options", body: toolAndPlatformOptions },
        { kind: "markdown", title: "Security", body: security },
        { kind: "markdown", title: "Expected Business Impact", body: expectedBusinessImpact },
        { kind: "markdown", title: "Why Kubera AI", body: whyKuberaAi },
        { kind: "markdown", title: "Pricing Logic", body: pricingLogic },
      ]}
    />
  );
}
