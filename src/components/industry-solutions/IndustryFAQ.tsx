import type { IndustrySolution } from "@/content/industry-solutions";

export function IndustryFAQ({ solution }: { solution: IndustrySolution }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Questions teams usually ask before starting</h2>
      </div>

      <div className="solution-faq-grid">
        {solution.faq.map((item) => (
          <details className="solution-faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p className="muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
