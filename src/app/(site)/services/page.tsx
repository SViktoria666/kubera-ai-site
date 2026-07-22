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
              <p className="eyebrow">Commercial service pages</p>
              <h2 className="section-title">Web design by market</h2>
              <p className="lead solution-section-lead">See the country-specific commercial service pages in the new controlled format.</p>
            </div>

            <div className="solution-grid solution-grid--services">
              <Link className="solution-card solution-card--link" href="/services/portugal/landing-page-design">
                <h3>Landing Page Design for Businesses in Portugal</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Portugal.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/spain/landing-page-design">
                <h3>Landing Page Design for Businesses in Spain</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Spain.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/germany/landing-page-design">
                <h3>Landing Page Design for Businesses in Germany</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Germany.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/france/landing-page-design">
                <h3>Landing Page Design for Businesses in France</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving France.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/netherlands/landing-page-design">
                <h3>Landing Page Design for Businesses in the Netherlands</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving the Netherlands.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
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
