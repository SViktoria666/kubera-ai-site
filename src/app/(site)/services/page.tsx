import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { enServices } from "@/content/en/services";
import { getServicesFeaturedSolutionLinks, solutionHubRoute } from "@/content/internal-linking";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description: "Explore Kubera AI services for customer communications, lead automation, CRM integration, internal processes, HR, content, finance, ecommerce, and more.",
  path: "/services",
  locale: "en",
});

export default function ServicesPage() {
  const featuredSolutionLinks = getServicesFeaturedSolutionLinks();

  return (
    <main>
      <HeroSection title="Digital workforce tailored to your business." lead="Choose your direction â€” we'll build the system" ctaLabel="Discuss my project" ctaHref="/contacts" />
      <section className="section section-soft">
        <div className="container">
          <ServicesGrid services={enServices} />
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <div className="solution-section-heading">
            <p className="eyebrow">Popular industry solutions</p>
            <h2 className="section-title">Selected solution pages</h2>
            <p className="lead solution-section-lead">A curated set of commercial pages gives the service hub a direct path into the solution architecture.</p>
          </div>

          <div className="solution-grid solution-grid--services">
            {featuredSolutionLinks.map((item) => (
              <Link className="solution-card solution-card--link" href={item.href} key={item.href}>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
                <span className="solution-card-link">Open solution page</span>
              </Link>
            ))}
            <Link className="solution-card solution-card--link" href={solutionHubRoute}>
              <h3>View all solutions</h3>
              <p className="muted">Open the full solution hub with all 54 commercial pages.</p>
              <span className="solution-card-link">Open hub</span>
            </Link>
          </div>
        </div>
      </section>
      <LossCalculator locale="en" />
    </main>
  );
}
