import type { Metadata } from "next";
import { CasesGallery } from "@/components/sections/CasesGallery";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Demo",
  description: "",
  openGraph: {
    images: ["/assets/images/cases/case-dashboard-4ac0724.png"],
  },
};

export default function CasesPage() {
  return (
    <main>
      <HeroSection title="Digital employees that scale your business." lead="Real solutions. Real results." />
      <section className="section section-soft">
        <div className="container">
          <CasesGallery />
        </div>
      </section>
    </main>
  );
}
