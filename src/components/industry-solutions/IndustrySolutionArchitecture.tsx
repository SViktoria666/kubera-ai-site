import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustrySolutionArchitecture({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Recommended architecture</p>
        <h2 className="section-title">How the workflow fits together</h2>
        <p className="lead solution-section-lead">{solution.architecture.description}</p>
      </div>

      <div className="solution-architecture">
        <ol className="solution-architecture-flow">
          {solution.architecture.flow.map((step, index) => (
            <li className="solution-architecture-step" key={step}>
              <span className="solution-architecture-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="solution-architecture-step-label">{step}</span>
              {index < solution.architecture.flow.length - 1 ? <span className="solution-architecture-connector" aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>

        <div className="solution-architecture-notes">
          {solution.architecture.notes.map((note) => (
            <div className="solution-note" key={note}>
              {note}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
