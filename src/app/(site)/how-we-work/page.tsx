import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { enWorkflow } from "@/content/en/workflow";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "How It Works",
  description: "See how Kubera AI moves from diagnosis and solution architecture to automation development, launch, testing, and ongoing support.",
  path: "/how-we-work",
  locale: "en",
});

export default function HowWeWorkPage() {
  return (
    <main>
      <HeroSection title="From first conversation to a working system — 2–5 weeks" ctaLabel="Discuss my project" ctaHref="/contacts" />
      <section className="section section-soft">
        <div className="container">
          <WorkflowSection steps={enWorkflow} />
        </div>
      </section>
      <LossCalculator locale="en" />
    </main>
  );
}
