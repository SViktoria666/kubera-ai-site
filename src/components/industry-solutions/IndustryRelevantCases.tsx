import Link from "next/link";
import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryRelevantCases({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Relevant demo cases</p>
        <h2 className="section-title">Closest-fit examples in the existing site</h2>
      </div>

      <div className="solution-grid solution-grid--cases">
        {solution.cases.map((item) => (
          <Link className="solution-card solution-card--link solution-card--case" href={item.href} key={item.title}>
            <h3>{item.title}</h3>
            <p className="muted">{item.description}</p>
            <span className="solution-card-link">Open case →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

