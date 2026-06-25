import type { Metadata } from "next";
import { CasesGallery } from "@/components/sections/CasesGallery";
import { HeroSection } from "@/components/sections/HeroSection";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Кейсы",
  description: "Кейсы Kubera AI: примеры цифровых сотрудников, автоматизации лидов, CRM-процессов и рабочих панелей автоматизации.",
  path: "/ru/keysy",
  locale: "ru",
  image: "/assets/images/cases/case-dashboard-4ac0724.png",
});

export default function RuCasesPage() {
  return (
    <main>
      <HeroSection
        title="Цифровые сотрудники, которые масштабируют ваш бизнес."
        lead="Откройте 15 страниц с примерами автоматизации и кейс-архитектурой."
        ctaLabel="Обсудить проект"
        ctaHref="/ru/kontakty"
      />
      <section className="section section-soft">
        <div className="container">
          <CasesGallery locale="ru" basePath="/ru/keysy" />
        </div>
      </section>
    </main>
  );
}
