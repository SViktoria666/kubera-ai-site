import type { WorkflowStep } from "@/content/types";

export function WorkflowSection({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="workflow-list">
      {steps.map((step, index) => (
        <article className="workflow-card" key={step.title}>
          <div className="workflow-index">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <h2>{step.title}</h2>
            <p className="muted">{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
