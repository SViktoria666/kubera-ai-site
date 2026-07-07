import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingPackages } from "@/components/sections/PricingPackages";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { createPageMetadata } from "@/content/seo";
import { buildSolutionLinks, solutionHubRoute } from "@/content/internal-linking";

export const metadata: Metadata = createPageMetadata({
  title: "Kubera AI",
  description: "AI automation systems and digital workforce solutions for companies that run on processes and want growth without chaos.",
  path: "/",
  locale: "en",
});

export default function HomePage() {
  const featuredSolutionLinks = buildSolutionLinks([
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/germany/dental-automation",
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/ireland/recruitment-automation",
    "/en/solutions/switzerland/luxury-hotel-automation",
    "/en/solutions/poland/e-commerce-automation",
  ]);

  return (
    <main>
      <HeroSection
        title={"Systems that work.\nBusiness that grows."}
        lead="Kubera AI builds a digital workforce for companies that run on processes and are ready for the next level."
        ctaLabel="Discuss my project"
        ctaHref="/contacts"
      />
      <div className="container" style={{ marginTop: "-8px", paddingBottom: "24px" }}>
        <p className="lead" style={{ margin: 0 }}>
          Explore the blog for practical automation guidance and AI system decisions: <Link href="/blog">Kubera AI Blog</Link>.
        </p>
      </div>
      <PricingPackages locale="en" />
      <LossCalculator locale="en" />
      <section className="section section-soft home-solution-nav">
        <div className="container">
          <div className="home-solution-nav-card">
            <div className="solution-section-heading">
              <p className="eyebrow">Featured solution pages</p>
              <h2 className="section-title">Explore AI automation solutions</h2>
              <p className="lead solution-section-lead">
                Browse country-specific automation pages for hotels, real estate, recruitment, e-commerce, SaaS, clinics, and more.
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
                View all AI Automation Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
