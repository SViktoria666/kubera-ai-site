import type { Metadata } from "next";
import { UseCaseLandingPage } from "@/components/use-cases/UseCaseLandingPage";
import { aiClientIntakeLawFirms } from "@/content/use-cases/ai-client-intake-law-firms";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = aiClientIntakeLawFirms;

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

export default function AiClientIntakeLawFirmsPage() {
  const {
    seo,
    hero,
    workflowPreview,
    whoThisIsFor,
    whatTheServiceIs,
    commonBusinessProblems,
    manualVsAiComparison,
    useCases,
    workflowSection,
    automationModules,
    implementationProcess,
    toolAndPlatformOptions,
    security,
    expectedBusinessImpact,
    whyKuberaAi,
    pricingLogic,
    midCta,
    relatedServices,
    relevantDemoCases,
    recommendedReading,
    faq,
    finalCta,
  } = aiClientIntakeLawFirms;

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
      workflowPreview={workflowPreview}
      sections={[
        { kind: "markdown", title: "Who This Is For", body: whoThisIsFor },
        { kind: "markdown", title: "What The Service Is", body: whatTheServiceIs },
        { kind: "markdown", title: "Common Business Problems", body: commonBusinessProblems },
        { kind: "markdown", title: "Manual vs Kubera AI Automation", body: manualVsAiComparison },
        { kind: "markdown", title: "Use Cases", body: useCases },
        { kind: "workflow", title: workflowSection.title, lead: workflowSection.lead, steps: workflowSection.steps },
        { kind: "markdown", title: "Automation Modules / Deliverables", body: automationModules },
        { kind: "markdown", title: "Implementation Process", body: implementationProcess },
        { kind: "markdown", title: "Tool and Platform Options", body: toolAndPlatformOptions },
        { kind: "markdown", title: "Security, Privacy and Control", body: security },
        { kind: "markdown", title: "Expected Business Impact / ROI", body: expectedBusinessImpact },
        { kind: "markdown", title: "Why Kubera AI", body: whyKuberaAi },
        { kind: "markdown", title: "Pricing Logic", body: pricingLogic },
      ]}
    />
  );
}
