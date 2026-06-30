import Link from "next/link";
import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryFinalCTA({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-final-cta">
      <p className="eyebrow">{solution.cta.label}</p>
      <h2 className="section-title">{solution.cta.title}</h2>
      <p className="lead solution-section-lead">{solution.cta.body}</p>
      <div className="solution-cta-actions">
        <Link className="button" href={solution.cta.primary.href}>
          {solution.cta.primary.title}
        </Link>
        <Link className="solution-secondary-link" href={solution.cta.secondary.href}>
          {solution.cta.secondary.title}
        </Link>
      </div>
    </section>
  );
}

