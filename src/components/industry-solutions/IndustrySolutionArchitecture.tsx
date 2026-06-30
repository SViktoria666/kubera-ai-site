import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustrySolutionArchitecture({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Recommended architecture</p>
        <h2 className="section-title">{solution.architecture.title}</h2>
        <p className="lead solution-section-lead">{solution.architecture.description}</p>
      </div>

      <div className="solution-architecture">
        <div className="solution-architecture-flow">
          {solution.architecture.flow.map((step, index) => (
            <div className="solution-architecture-step" key={step}>
              <span>{step}</span>
              {index < solution.architecture.flow.length - 1 ? <span className="solution-architecture-arrow">→</span> : null}
            </div>
          ))}
        </div>

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

