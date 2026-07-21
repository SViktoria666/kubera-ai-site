import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { enServices } from "@/content/en/services";
import { buildSolutionLinks, getServicesFeaturedUseCaseLinks, solutionHubRoute } from "@/content/internal-linking";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description: "Explore Kubera AI services for customer communications, lead automation, CRM integration, internal processes, HR, content, finance, ecommerce, and more.",
  path: "/services",
  locale: "en",
});

export default function ServicesPage() {
  const featuredSolutionLinks = buildSolutionLinks([
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/germany/dental-automation",
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/switzerland/luxury-hotel-automation",
    "/en/solutions/poland/e-commerce-automation",
    "/en/solutions/cyprus/real-estate-automation",
  ]);
  const featuredUseCaseLinks = getServicesFeaturedUseCaseLinks();

  return (
    <main>
      <HeroSection title="Digital workforce tailored to your business." lead="Choose your direction â€” we'll build the system" ctaLabel="Discuss my project" ctaHref="/contacts" />
      <section className="section section-soft">
        <div className="container">
          <ServicesGrid services={enServices} />
        </div>
      </section>
      <section className="section section-dark" id="portugal">
        <div className="container">
          <div className="solution-section-heading">
            <p className="eyebrow">Website design services</p>
            <h2 className="section-title">Portugal commercial pages</h2>
            <p className="lead solution-section-lead">
              The first live page in this commercial series is ready. The two sibling pages below are part of the same structure and will link through once they are published.
            </p>
          </div>

          <div className="solution-grid solution-grid--services">
            <Link className="solution-card solution-card--link" href="/services/portugal/landing-page-design">
              <h3>Landing Page Design</h3>
              <p className="muted">Live service page for Portugal, built for Google Ads and fast conversion.</p>
              <span className="solution-card-link">Open page</span>
            </Link>
            <article className="solution-card service-related-card" aria-disabled="true">
              <h3>Business Website Design</h3>
              <p className="muted">Planned for the same Portugal cluster, with a multi-page business site structure.</p>
            </article>
            <article className="solution-card service-related-card" aria-disabled="true">
              <h3>Website Redesign</h3>
              <p className="muted">Planned for the same Portugal cluster, for improving an existing website.</p>
            </article>
          </div>
        </div>
      </section>
      <LossCalculator locale="en" />
      <section className="section section-soft home-solution-nav">
        <div className="container">
          <div className="home-solution-nav-card">
            <div className="solution-section-heading">
              <p className="eyebrow">Automation use cases</p>
              <h2 className="section-title">See how these services are applied in real businesses</h2>
              <p className="lead solution-section-lead">
                Browse the current use-case pages for compact examples of how Kubera AI applies these services in practice.
              </p>
            </div>

            <div className="home-solution-nav-grid">
              {featuredUseCaseLinks.map((item) => (
                <Link className="home-solution-nav-link" href={item.href} key={item.href}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft home-solution-nav">
        <div className="container">
          <div className="home-solution-nav-card">
            <div className="solution-section-heading">
              <p className="eyebrow">Industry-specific automation examples</p>
              <h2 className="section-title">See how these services apply in real markets</h2>
              <p className="lead solution-section-lead">
                See how Kubera AI applies these services across specific industries and countries.
              </p>
            </div>

            <div className="home-solution-nav-grid">
              {featuredSolutionLinks.map((item) => (
                <Link className="home-solution-nav-link" href={item.href} key={item.href}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>

            <div className="home-solution-nav-actions">
              <Link className="button home-solution-nav-button" href={solutionHubRoute}>
                View all industry solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
