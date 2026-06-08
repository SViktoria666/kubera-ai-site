import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { enServices } from "@/content/en/services";

export const metadata: Metadata = {
  title: "Services",
  description: "",
};

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
