import type { Metadata } from "next";
import { CasesGallery } from "@/components/sections/CasesGallery";
import { HeroSection } from "@/components/sections/HeroSection";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Demo",
  description: "View Kubera AI demo screens and case examples for digital workforce systems, lead processing, CRM workflows, and automation dashboards.",
  path: "/cases",
  locale: "en",
  image: "/assets/images/cases/case-dashboard-4ac0724.png",
});

export default function CasesPage() {
  return (
    <main>
      <HeroSection title="Digital employees that scale your business." lead="Real solutions. Real results." />
      <section className="section section-soft">
        <div className="container">
          <CasesGallery />
        </div>
      </section>
    </main>
  );
}
