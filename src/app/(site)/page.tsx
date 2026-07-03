import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingPackages } from "@/components/sections/PricingPackages";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { createPageMetadata } from "@/content/seo";
import { getHomeFeaturedSolutionLinks, solutionHubRoute } from "@/content/internal-linking";

export const metadata: Metadata = createPageMetadata({
  title: "Kubera AI",
  description: "AI automation systems and digital workforce solutions for companies that run on processes and want growth without chaos.",
  path: "/",
  locale: "en",
});

export default function HomePage() {
  const featuredSolutionLinks = getHomeFeaturedSolutionLinks();

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
      <section className="section section-soft">
        <div className="container">
          <div className="solution-section-heading">
            <p className="eyebrow">Explore AI Automation Solutions by Industry</p>
            <h2 className="section-title">Popular commercial solution pages</h2>
            <p className="lead solution-section-lead">A small set of direct links keeps the homepage uncluttered while giving crawlers and users a clear path into the solution hub.</p>
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
              <h3>View all industry solutions</h3>
              <p className="muted">Open the hub that links to all 54 commercial solution pages.</p>
              <span className="solution-card-link">Open hub</span>
            </Link>
          </div>
        </div>
      </section>
      <PricingPackages locale="en" />
      <LossCalculator locale="en" />
    </main>
  );
}
