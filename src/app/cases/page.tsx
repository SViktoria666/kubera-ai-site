import type { Metadata } from "next";
import { caseAssets } from "@/content/assets";

export const metadata: Metadata = {
  title: "Cases",
  description: "Kubera AI demo and case study architecture placeholder.",
};

export default function CasesPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Cases</p>
        <h1>Digital employees that scale your business.</h1>
        <p className="lead">Case studies and demos will be migrated in the visual clone phase.</p>
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
