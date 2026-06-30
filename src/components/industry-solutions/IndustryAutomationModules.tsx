import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryAutomationModules({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">Automation modules</p>
        <h2 className="section-title">Modular building blocks for the system</h2>
      </div>

      <div className="solution-grid solution-grid--modules">
        {solution.modules.map((module) => (
          <article className="solution-card solution-card--module" key={module.title}>
            <h3>{module.title}</h3>
            <p className="muted">{module.description}</p>
            <ul className="solution-list">
              {module.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

