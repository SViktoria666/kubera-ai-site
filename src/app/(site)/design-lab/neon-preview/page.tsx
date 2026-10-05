import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kubera Neon Wave 1 Preview",
  robots: { index: false, follow: false, nocache: true },
};

const previews = [
  ["Home reference", "/design-lab/neon-preview/home", "Owner-reviewed Home geometry and approved atmosphere."],
  ["Commercial / industry", "/design-lab/neon-preview/commercial", "Real IndustrySolutionTemplate with Germany WhatsApp data."],
  ["GEO / regional", "/design-lab/neon-preview/geo", "Real GeoPage architecture for Germany automation."],
  ["Contacts / forms", "/design-lab/neon-preview/contacts", "Real contact form and conversion surface."],
] as const;

export default function NeonPreviewIndexPage() {
  return (
    <main className="neon-preview neon-preview-index">
      <section className="neon-preview-index__hero">
        <div className="container">
          <p className="eyebrow">Protected preview · Wave 1</p>
          <h1 className="hero-title">Kubera Neon across real page families.</h1>
          <p className="lead">The links below reuse production component and template architecture while keeping the normal public routes unchanged.</p>
          <div className="neon-preview-index__grid">
            {previews.map(([label, href, description]) => (
              <Link className="card neon-preview-index__link" href={href} key={href}>
                <span>{label}</span>
                <strong>{href}</strong>
                <small>{description}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
