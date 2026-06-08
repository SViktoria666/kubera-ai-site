import type { Metadata } from "next";
import { AiAssistantSlot } from "@/components/ai/AiAssistantSlot";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ruServices } from "@/content/ru/services";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kubera AI",
  description: "AI-автоматизация, цифровые сотрудники, CRM-процессы и обработка лидов для компаний, которым нужен рост без хаоса.",
  path: "/ru",
  locale: "ru",
});

export default function RuHomePage() {
  return (
    <main>
      <HeroSection
        title="Системы, которые работают. Бизнес, который растет."
        lead="Kubera AI строит цифровых сотрудников для компаний, которые живут процессами и готовы к следующему уровню."
        ctaLabel="Обсудить мой проект"
        ctaHref="/ru/kontakty"
      />
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Услуги</p>
          <h2 className="section-title">Цифровые сотрудники под задачи вашего бизнеса.</h2>
          <p className="lead">Выберите направление — мы построим систему</p>
          <ServicesGrid services={ruServices.slice(0, 6)} />
        </div>
      </section>
      <LossCalculator locale="ru" />
      <AiAssistantSlot />
    </main>
  );
}
