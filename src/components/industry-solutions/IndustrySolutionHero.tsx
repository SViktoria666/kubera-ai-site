import Link from "next/link";
import type { IndustrySolution } from "@/content/industry-solutions";
import { IndustryArrowIcon } from "./IndustryArrowIcon";

export function IndustrySolutionHero({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-hero">
      <div className="solution-hero-copy">
        <p className="eyebrow">{solution.hero.label}</p>
        <h1 className="solution-title">{solution.hero.title}</h1>
        <p className="lead solution-lead">{solution.hero.subtitle}</p>
        <p className="solution-trustline">{solution.hero.trustLine}</p>

        <div className="solution-hero-actions">
          <Link className="button" href={solution.hero.primaryCta.href}>
            {solution.hero.primaryCta.title}
          </Link>
          <Link className="solution-secondary-link" href={solution.hero.secondaryCta.href}>
            {solution.hero.secondaryCta.title}
          </Link>
        </div>
      </div>

      <aside className="solution-hero-card">
        <div className="solution-hero-card-top">
          <span className="solution-card-kicker">Visual preview</span>
          <strong>{solution.countryLabel}</strong>
        </div>
        <div className="solution-flow-preview" aria-label="Solution architecture preview">
          {solution.hero.previewNodes.map((node, index) => (
            <div className="solution-flow-node" key={node}>
              <span>{node}</span>
              {index < solution.hero.previewNodes.length - 1 ? (
                <span className="solution-flow-arrow" aria-hidden="true">
                  <IndustryArrowIcon className="solution-arrow-icon" />
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="solution-hero-card-bottom">
          <span>{solution.industryLabel}</span>
          <span>Human-in-the-loop automation</span>
        </div>
      </aside>
    </section>
  );
}
