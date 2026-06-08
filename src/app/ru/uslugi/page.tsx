import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ruServices } from "@/content/ru/services";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Услуги",
  description: "Услуги Kubera AI: коммуникации с клиентами, автоматизация лидов, CRM, внутренние процессы, HR, контент, финансы, ecommerce и логистика.",
  path: "/ru/uslugi",
  locale: "ru",
});

export default function RuServicesPage() {
  return (
    <main>
      <HeroSection title="Цифровые сотрудники под задачи вашего бизнеса." lead="Выберите направление — мы построим систему" ctaLabel="Обсудить мой проект" ctaHref="/ru/kontakty" />
      <section className="section section-soft">
        <div className="container">
          <ServicesGrid services={ruServices} />
        </div>
      </section>
      <LossCalculator locale="ru" />
    </main>
  );
}
