import Image from "next/image";
import { caseAssets } from "@/content/assets";

export function CasesGallery() {
  return (
    <div className="cases-grid">
      {caseAssets.map((asset) => (
        <article className="case-card" key={asset.name}>
          <Image src={asset.localPath} alt={asset.name} width={1254} height={1254} sizes="(max-width: 720px) calc(100vw - 32px), 50vw" />
        </article>
      ))}
    </div>
  );
}
