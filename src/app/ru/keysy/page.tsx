import type { Metadata } from "next";
import { caseAssets } from "@/content/assets";

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
        <div className="grid">
          {caseAssets.map((asset) => (
            <article className="card" key={asset.name}>
              <img src={asset.localPath} alt={asset.name} style={{ width: "100%", height: "auto", borderRadius: 8 }} />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
