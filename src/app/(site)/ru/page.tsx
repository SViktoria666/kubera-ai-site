import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingPackages } from "@/components/sections/PricingPackages";
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
      <div className="container" style={{ marginTop: "-8px", paddingBottom: "24px" }}>
        <p className="lead" style={{ margin: 0 }}>
          Посмотрите блог с практикой автоматизации и решениями для AI-систем: <Link href="/ru/blog">Блог Kubera AI</Link>.
        </p>
      </div>
      <PricingPackages locale="ru" />
      <LossCalculator locale="ru" />
    </main>
  );
}
