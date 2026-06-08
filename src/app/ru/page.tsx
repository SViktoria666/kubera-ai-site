import type { Metadata } from "next";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ruServices } from "@/content/ru/services";

export const metadata: Metadata = {
  title: "Kubera AI",
  description: "Системы, которые работают. Бизнес, который растет.",
};

export default function RuHomePage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Living Systems. Smart Automation.</p>
        <h1 className="hero-title">Системы, которые работают. Бизнес, который растет.</h1>
        <p className="lead">Архитектурная заготовка русской главной страницы для будущего переноса контента.</p>
        <a className="button" href="/ru/kontakty">Обсудить мой проект</a>
        <div style={{ height: 48 }} />
        <ServicesGrid services={ruServices.slice(0, 6)} />
      </div>
    </main>
  );
}

