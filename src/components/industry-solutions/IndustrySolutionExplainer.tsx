import type { IndustrySolution } from "@/content/industry-solutions";

function takeSentence(text: string, sentenceCount = 1) {
  const parts = text.match(/[^.!?]+[.!?]?/g) ?? [];

  return parts
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, sentenceCount)
    .join(" ");
}

export function IndustrySolutionExplainer({ solution }: { solution: IndustrySolution }) {
  const paragraphs = [
    takeSentence(solution.hero.subtitle) || solution.hero.subtitle,
    takeSentence(solution.architecture.description) || solution.architecture.description,
    solution.results.slice(0, 2).map((item) => item.description).join(" "),
  ].filter(Boolean);

  return (
    <section className="solution-section solution-explainer">
      <div className="solution-section-heading">
        <p className="eyebrow">What is {solution.industryLabel}?</p>
        <h2 className="section-title">A concise explanation for buyers and AI search</h2>
      </div>

      <div className="solution-explainer-grid">
        <div className="solution-explainer-copy">
          {paragraphs.map((paragraph, index) => (
            <p className="solution-explainer-text" key={`${index}-${paragraph}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="solution-explainer-card">
          <p className="solution-card-kicker">What it connects</p>
          <ul className="solution-list solution-explainer-points">
            {solution.hero.previewNodes.slice(0, 4).map((node) => (
              <li key={node}>{node}</li>
            ))}
          </ul>
          <p className="muted solution-explainer-note">{solution.architecture.notes[0]}</p>
        </aside>
      </div>
    </section>
  );
}
