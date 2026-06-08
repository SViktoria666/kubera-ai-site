import type { Metadata } from "next";
import { enWorkflow } from "@/content/en/workflow";

export const metadata: Metadata = {
  title: "How We Work",
  description: "From first conversation to a working automation system.",
};

export default function HowWeWorkPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">How we work</p>
        <h1>From first conversation to a working system.</h1>
        <div className="grid">
          {enWorkflow.map((step) => (
            <article className="card" key={step.title}>
              <h2>{step.title}</h2>
              <p className="muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

