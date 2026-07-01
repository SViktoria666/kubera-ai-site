import Link from "next/link";
import type { IndustrySolution } from "@/content/industry-solutions";
import { IndustryArrowIcon } from "./IndustryArrowIcon";

export function IndustryRecommendedServices({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Service alignment</p>
        <h2 className="section-title">Recommended Kubera AI Stack</h2>
        <p className="lead solution-section-lead">Each service below has a role in the architecture shown above.</p>
      </div>

      <div className="solution-grid solution-grid--services">
        {solution.services.map((service) => (
          <Link className="solution-card solution-card--link" href={service.href} key={service.title}>
            <h3>{service.title}</h3>
            <p className="muted">{service.description}</p>
            <span className="solution-card-link">
              Open service hub <IndustryArrowIcon className="solution-arrow-icon" />
            </span>
          </Link>
        ))}
      </div>

      <div className="solution-reading">
        <p className="solution-reading-label">Recommended Reading</p>
        <div className="solution-reading-links">
          {solution.reading.map((item) => (
            <Link className="solution-reading-link" href={item.href} key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
