import Link from "next/link";
import type { IndustrySolution } from "@/content/industry-solutions";
import { getCountrySolutionHubCard, getSolutionRelatedLinks, solutionHubRoute } from "@/content/internal-linking";

export function IndustryInternalLinks({ solution }: { solution: IndustrySolution }) {
  const relatedLinks = getSolutionRelatedLinks(solution);
  const countryHub = getCountrySolutionHubCard(solution.country);

  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Related solutions</p>
        <h2 className="section-title">Explore more AI automation in {solution.countryLabel}</h2>
        <p className="lead solution-section-lead">
          These links keep the page connected to the country cluster, the broader solution hub, and the rest of the commercial site.
        </p>
      </div>

      <div className="solution-grid solution-grid--services">
        <Link className="solution-card solution-card--link" href={countryHub.href}>
          <h3>{countryHub.title}</h3>
          <p className="muted">{countryHub.description}</p>
          <span className="solution-card-link">Open country hub</span>
        </Link>
        <Link className="solution-card solution-card--link" href={solutionHubRoute}>
          <h3>All industry solutions</h3>
          <p className="muted">Browse the full internal hub of all 54 commercial solution pages.</p>
          <span className="solution-card-link">Open hub</span>
        </Link>
        <Link className="solution-card solution-card--link" href="/services">
          <h3>Kubera AI services</h3>
          <p className="muted">Review the underlying service stack behind these workflows.</p>
          <span className="solution-card-link">Open services</span>
        </Link>
        <Link className="solution-card solution-card--link" href="/contacts">
          <h3>Contact Kubera AI</h3>
          <p className="muted">Start a project discussion with the team.</p>
          <span className="solution-card-link">Open contacts</span>
        </Link>
      </div>

      <div className="solution-reading" style={{ marginTop: "24px" }}>
        <p className="solution-reading-label">Related solution pages</p>
        <div className="solution-reading-links">
          {relatedLinks.map((item) => (
            <Link className="solution-reading-link" href={item.href} key={item.href}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
