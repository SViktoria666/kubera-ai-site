import type { Metadata } from "next";
import { CasesGallery } from "@/components/sections/CasesGallery";
import { HeroSection } from "@/components/sections/HeroSection";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cases",
  description: "Explore Kubera AI use case pages for customer communications, sales leads, operations, HR, finance, logistics, and other automation scenarios.",
  path: "/cases",
  locale: "en",
  image: "/assets/images/cases/case-dashboard-4ac0724.png",
});

export default function CasesPage() {
  return (
    <main>
      <HeroSection title="Digital employees that scale your business." lead="Browse 15 use case pages and open each example automation." ctaLabel="Discuss my project" ctaHref="/contacts" />
      <section className="section section-soft">
        <div className="container">
          <CasesGallery locale="en" basePath="/cases" />
        </div>
      </section>
    </main>
  );
}
