import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ruWorkflow } from "@/content/ru/workflow";

export const metadata: Metadata = {
  title: "Как мы работаем",
  description: "",
};

export default function RuHowWeWorkPage() {
  return (
    <main>
      <HeroSection title="От первого разговора до работающей системы — 2–5 недель" ctaLabel="Обсудить мой проект" ctaHref="/ru/kontakty" />
      <section className="section section-soft">
        <div className="container">
          <WorkflowSection steps={ruWorkflow} />
        </div>
      </section>
      <LossCalculator locale="ru" />
    </main>
  );
}
