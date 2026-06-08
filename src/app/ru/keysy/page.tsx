import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кейсы",
  description: "Демо и кейсы Kubera AI.",
};

export default function RuCasesPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Кейсы</p>
        <h1>Цифровые сотрудники, которые масштабируют ваш бизнес.</h1>
        <p className="lead">Кейсы и демо будут перенесены на следующем этапе визуального клонирования.</p>
      </div>
    </main>
  );
}

