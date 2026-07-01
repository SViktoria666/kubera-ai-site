import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryBusinessResults({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Business results</p>
        <h2 className="section-title">Operational gains to aim for</h2>
      </div>

      <div className="solution-grid solution-grid--results">
        {solution.results.map((result) => (
          <article className="solution-card solution-card--result" key={result.title}>
            <h3>{result.title}</h3>
            <p className="muted">{result.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
