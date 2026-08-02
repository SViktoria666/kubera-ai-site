import Link from "next/link";
import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryMidCTA({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-mid-cta">
      <p className="eyebrow">Mid-page CTA</p>
      <h2 className="section-title">Want to map this to your business?</h2>
      <p className="lead solution-section-lead">
        We can scope the workflow around your current tools, channels, and handoff rules before anything is built.
      </p>
      <div className="solution-cta-actions">
        <Link
          className="button"
          href={solution.cta.primary.href}
          data-analytics-event="primary_cta_click"
          data-analytics-placement="industry-mid-cta"
          data-analytics-cta-id={solution.cta.primary.href}
        >
          Discuss My Project
        </Link>
      </div>
    </section>
  );
}
