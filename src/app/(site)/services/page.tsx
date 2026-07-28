import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { enServices } from "@/content/en/services";
import { buildSolutionLinks, getServicesFeaturedUseCaseLinks, solutionHubRoute } from "@/content/internal-linking";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Automation Services | CRM, Lead and Workflow Automation | Kubera AI",
  description: "Explore Kubera AI services for customer communications, lead automation, CRM integration, internal processes, and commercial automation across priority European markets.",
  path: "/services",
  locale: "en",
});

export default function ServicesPage() {
  const featuredSolutionLinks = buildSolutionLinks([
    "/en/solutions/germany/dental-automation",
    "/en/solutions/cyprus/real-estate-automation",
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/sweden/saas-startup-automation",
    "/en/solutions/estonia/saas-startup-automation",
    "/en/solutions/lithuania/e-commerce-automation",
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
              <Link className="solution-card solution-card--link" href="/services/ireland/landing-page-design">
                <h3>Landing Page Design for Businesses in Ireland</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Ireland.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/belgium/landing-page-design">
                <h3>Landing Page Design for Businesses in Belgium</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Belgium.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/italy/landing-page-design">
                <h3>Landing Page Design for Businesses in Italy</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Italy.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/switzerland/landing-page-design">
                <h3>Landing Page Design for Businesses in Switzerland</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Switzerland.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/austria/landing-page-design">
                <h3>Landing Page Design for Businesses in Austria</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Austria.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/denmark/landing-page-design">
                <h3>Landing Page Design for Businesses in Denmark</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Denmark.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/sweden/landing-page-design">
                <h3>Landing Page Design for Businesses in Sweden</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Sweden.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/finland/landing-page-design">
                <h3>Landing Page Design for Businesses in Finland</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Finland.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/poland/landing-page-design">
                <h3>Landing Page Design for Businesses in Poland</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Poland.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/estonia/landing-page-design">
                <h3>Landing Page Design for Businesses in Estonia</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Estonia.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/australia/landing-page-design">
                <h3>Landing Page Design for Businesses in Australia</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Australia.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/united-states/landing-page-design">
                <h3>Landing Page Design for Businesses in the United States</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving the United States.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/canada/landing-page-design">
                <h3>Landing Page Design for Businesses in Canada</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Canada.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/cyprus/landing-page-design">
                <h3>Landing Page Design for Businesses in Cyprus</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Cyprus.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/latvia/landing-page-design">
                <h3>Landing Page Design for Businesses in Latvia</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Latvia.
                </p>
                <span className="solution-card-link">Open page</span>
              </Link>
              <Link className="solution-card solution-card--link" href="/services/lithuania/landing-page-design">
                <h3>Landing Page Design for Businesses in Lithuania</h3>
                <p className="muted">
                  Commercial landing page, website design, and redesign scope for businesses serving Lithuania.
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
