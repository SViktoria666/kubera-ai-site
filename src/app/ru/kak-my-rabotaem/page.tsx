import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ruWorkflow } from "@/content/ru/workflow";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Как мы работаем",
  description: "Как Kubera AI проходит путь от диагностики и архитектуры решения до разработки, запуска, проверки и сопровождения автоматизации.",
  path: "/ru/kak-my-rabotaem",
  locale: "ru",
});

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
