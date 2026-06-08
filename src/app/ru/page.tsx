import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
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
        title={"Системы, которые работают.\nБизнес, который растёт."}
        lead="Kubera AI строит цифровых сотрудников для компаний, которые живут процессами и готовы к следующему уровню."
        ctaLabel="Обсудить мой проект"
        ctaHref="/ru/kontakty"
      />
      <LossCalculator locale="ru" />
    </main>
  );
}
