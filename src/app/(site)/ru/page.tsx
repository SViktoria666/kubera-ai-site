import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingPackages } from "@/components/sections/PricingPackages";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kubera AI",
  description: "AI-Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ð·Ð°Ñ†Ð¸Ñ, Ñ†Ð¸Ñ„Ñ€Ð¾Ð²Ñ‹Ðµ ÑÐ¾Ñ‚Ñ€ÑƒÐ´Ð½Ð¸ÐºÐ¸, CRM-Ð¿Ñ€Ð¾Ñ†ÐµÑÑÑ‹ Ð¸ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð»Ð¸Ð´Ð¾Ð² Ð´Ð»Ñ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¼ Ð½ÑƒÐ¶ÐµÐ½ Ñ€Ð¾ÑÑ‚ Ð±ÐµÐ· Ñ…Ð°Ð¾ÑÐ°.",
  path: "/ru",
  locale: "ru",
});

export default function RuHomePage() {
  return (
    <main className="home-glass-wave0">
      <HeroSection
        title={"Ð¡Ð¸ÑÑ‚ÐµÐ¼Ñ‹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÑŽÑ‚.\nÐ‘Ð¸Ð·Ð½ÐµÑ, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ñ€Ð°ÑÑ‚Ñ‘Ñ‚."}
        lead="Kubera AI ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ Ñ†Ð¸Ñ„Ñ€Ð¾Ð²Ñ‹Ñ… ÑÐ¾Ñ‚Ñ€ÑƒÐ´Ð½Ð¸ÐºÐ¾Ð² Ð´Ð»Ñ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¶Ð¸Ð²ÑƒÑ‚ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ°Ð¼Ð¸ Ð¸ Ð³Ð¾Ñ‚Ð¾Ð²Ñ‹ Ðº ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐ¼Ñƒ ÑƒÑ€Ð¾Ð²Ð½ÑŽ."
        ctaLabel="ÐžÐ±ÑÑƒÐ´Ð¸Ñ‚ÑŒ Ð¼Ð¾Ð¹ Ð¿Ñ€Ð¾ÐµÐºÑ‚"
        ctaHref="/ru/kontakty"
        ctaClassName="button--glass-primary"
      />
      <div className="container" style={{ marginTop: "-8px", paddingBottom: "24px" }}>
        <p className="lead" style={{ margin: 0 }}>
          ÐŸÐ¾ÑÐ¼Ð¾Ñ‚Ñ€Ð¸Ñ‚Ðµ Ð±Ð»Ð¾Ð³ Ñ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¾Ð¹ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð¸ Ñ€ÐµÑˆÐµÐ½Ð¸ÑÐ¼Ð¸ Ð´Ð»Ñ AI-ÑÐ¸ÑÑ‚ÐµÐ¼: <Link href="/ru/blog">Ð‘Ð»Ð¾Ð³ Kubera AI</Link>.
        </p>
      </div>
      <PricingPackages locale="ru" />
      <LossCalculator locale="ru" visualMode="glass" />
    </main>
  );
}
