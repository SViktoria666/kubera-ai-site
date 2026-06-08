import type { Metadata } from "next";
import { ruWorkflow } from "@/content/ru/workflow";

export const metadata: Metadata = {
  title: "Как мы работаем",
  description: "От первого разговора до работающей системы.",
};

export default function RuHowWeWorkPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Как мы работаем</p>
        <h1>От первого разговора до работающей системы.</h1>
        <div className="grid">
          {ruWorkflow.map((step) => (
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

