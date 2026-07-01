import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryProblemSection({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Common pressure points</p>
        <h2 className="section-title">Where WhatsApp operations usually slow down</h2>
      </div>

      <div className="solution-grid solution-grid--problems">
        {solution.problems.map((problem) => (
          <article className="solution-card solution-card--glass" key={problem.title}>
            <h3>{problem.title}</h3>
            <p className="muted">{problem.description}</p>
          </article>
        ))}
      </div>

      <div className="solution-section-heading solution-section-heading--spaced">
        <p className="eyebrow">Target workflow</p>
        <h2 className="section-title">What the system should handle automatically</h2>
      </div>

      <div className="solution-matrix">
        {solution.problemSolution.map((item) => (
          <article className="solution-matrix-card" key={item.problem}>
            <span className="solution-matrix-label">Problem</span>
            <p>{item.problem}</p>
            <span className="solution-matrix-label">Automation</span>
            <p>{item.automation}</p>
            <span className="solution-matrix-label">Result</span>
            <p>{item.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
