import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryProblemSection({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Common pressure points</p>
        <h2 className="section-title">Where {solution.industryLabel.toLowerCase()} workflows usually slow down</h2>
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
        <p className="eyebrow">Manual vs AI</p>
        <h2 className="section-title">Manual Process vs AI Automation</h2>
      </div>

      <div className="solution-comparison">
        <div className="solution-comparison-head" aria-hidden="true">
          <span>Business Process</span>
          <span>Without Automation</span>
          <span>With AI Automation</span>
          <span>Business Impact</span>
        </div>

        <div className="solution-comparison-body">
          {solution.problemSolution.map((item) => (
            <article className="solution-comparison-row" key={item.problem}>
              <div className="solution-comparison-cell">
                <span className="solution-comparison-cell-label">Business Process</span>
                <p>{item.problem}</p>
              </div>
              <div className="solution-comparison-cell">
                <span className="solution-comparison-cell-label">Without Automation</span>
                <p>{item.problem}</p>
              </div>
              <div className="solution-comparison-cell">
                <span className="solution-comparison-cell-label">With AI Automation</span>
                <p>{item.automation}</p>
              </div>
              <div className="solution-comparison-cell">
                <span className="solution-comparison-cell-label">Business Impact</span>
                <p>{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
