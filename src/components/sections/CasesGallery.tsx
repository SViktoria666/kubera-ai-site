import { caseAssets } from "@/content/assets";

export function CasesGallery() {
  return (
    <div className="cases-grid">
      {caseAssets.map((asset) => (
        <article className="case-card" key={asset.name}>
          <img src={asset.localPath} alt={asset.name} />
        </article>
      ))}
    </div>
  );
}
