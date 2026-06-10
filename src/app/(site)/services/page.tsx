import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { enServices } from "@/content/en/services";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description: "Explore Kubera AI services for customer communications, lead automation, CRM integration, internal processes, HR, content, finance, ecommerce, and more.",
  path: "/services",
  locale: "en",
});

export default function ServicesPage() {
  return (
    <main>
      <HeroSection title="Digital workforce tailored to your business." lead="Choose your direction — we'll build the system" ctaLabel="Discuss my project" ctaHref="/contacts" />
      <section className="section section-soft">
        <div className="container">
          <ServicesGrid services={enServices} />
        </div>
      </section>
      <LossCalculator locale="en" />
    </main>
  );
}
