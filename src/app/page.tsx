import type { Metadata } from "next";
import { AiAssistantSlot } from "@/components/ai/AiAssistantSlot";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { enServices } from "@/content/en/services";

export const metadata: Metadata = {
  title: "Kubera AI",
  description: "Systems that work. Business that grows.",
};

export default function HomePage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Living Systems. Smart Automation.</p>
          <h1 className="hero-title">Systems that work. Business that grows.</h1>
          <p className="lead">
            Kubera AI builds digital workforce systems for companies that run on processes and are ready for the next level.
          </p>
          <a className="button" href="/contacts">Discuss my project</a>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Services layer</p>
          <h2>Digital workforce tailored to your business.</h2>
          <ServicesGrid services={enServices.slice(0, 6)} />
        </div>
      </section>
      <AiAssistantSlot />
    </main>
  );
}

