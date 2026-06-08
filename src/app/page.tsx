import type { Metadata } from "next";
import { AiAssistantSlot } from "@/components/ai/AiAssistantSlot";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { enServices } from "@/content/en/services";

export const metadata: Metadata = {
  title: "Kubera AI",
  description: "Living Systems. Smart Automation.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection
        title="Systems that work. Business that grows."
        lead="Kubera AI builds a digital workforce for companies that run on processes — and are ready for the next level. Automation without losing control. Growth without chaos."
        ctaLabel="Discuss my project"
        ctaHref="/contacts"
      />
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2 className="section-title">Digital workforce tailored to your business.</h2>
          <p className="lead">Choose your direction — we'll build the system</p>
          <ServicesGrid services={enServices.slice(0, 6)} />
        </div>
      </section>
      <LossCalculator locale="en" />
      <AiAssistantSlot />
    </main>
  );
}
