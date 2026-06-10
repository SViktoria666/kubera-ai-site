import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kubera AI",
  description: "AI automation systems and digital workforce solutions for companies that run on processes and want growth without chaos.",
  path: "/",
  locale: "en",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection
        title={"Systems that work.\nBusiness that grows."}
        lead="Kubera AI builds a digital workforce for companies that run on processes and are ready for the next level."
        ctaLabel="Discuss my project"
        ctaHref="/contacts"
      />
      <LossCalculator locale="en" />
    </main>
  );
}
