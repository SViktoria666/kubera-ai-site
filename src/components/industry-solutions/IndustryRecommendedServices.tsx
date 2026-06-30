import Link from "next/link";
import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryRecommendedServices({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Recommended services</p>
        <h2 className="section-title">Use the existing service hub to scope the work</h2>
      </div>

      <div className="solution-grid solution-grid--services">
        {solution.services.map((service) => (
          <Link className="solution-card solution-card--link" href={service.href} key={service.title}>
            <h3>{service.title}</h3>
            <p className="muted">{service.description}</p>
            <span className="solution-card-link">Open service hub →</span>
          </Link>
        ))}
      </div>

      <div className="solution-reading">
        <p className="solution-reading-label">Further reading</p>
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

