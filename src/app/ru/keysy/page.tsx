import type { Metadata } from "next";
import { CasesGallery } from "@/components/sections/CasesGallery";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Демо",
  description: "",
  openGraph: {
    images: ["/assets/images/cases/case-dashboard-4ac0724.png"],
  },
};

export default function RuCasesPage() {
  return (
    <main>
      <HeroSection title="Цифровые сотрудники, которые масштабируют ваш бизнес." lead="Реальные решения. Реальный результат." />
      <section className="section section-soft">
        <div className="container">
          <CasesGallery />
        </div>
      </section>
    </main>
  );
}
