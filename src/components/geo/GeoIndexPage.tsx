import Link from "next/link";
import { geoCatalog } from "@/content/geo/catalog";
import { siteConfig } from "@/content/site";
import { normalizeGeoRoute } from "@/content/geo/routes";

export function GeoIndexPage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">GEO / AEO</p>
          <h1 className="hero-title">AI Automation by Market</h1>
          <p className="lead">
            Explore all Kubera AI country pages. Each page uses source-of-truth content from <code>src/content/geo/</code> and is built to match the existing site system.
          </p>
          <div className="geo-hero-links">
            <Link className="button" href="/">
              Home
            </Link>
            <Link className="button" href="/services">
              Services
            </Link>
            <Link className="button" href="/locations">
              Locations
            </Link>
            <Link className="button" href="/blog">
              Blog
            </Link>
            <Link className="button" href="/contacts">
              Contact
            </Link>
            <Link className="button" href="/demo">
              Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container geo-stack">
          <article className="geo-panel">
            <h2 className="section-title">All GEO pages</h2>
            <div className="grid geo-location-grid">
              {geoCatalog.map((item) => (
                <Link className="card geo-location-card" href={normalizeGeoRoute(item.route)} key={item.route}>
                  <strong>{item.country}</strong>
                  <span className="muted">{item.locale === "es" ? "Spanish page" : "English page"}</span>
                  <span className="geo-location-path">{normalizeGeoRoute(item.route)}</span>
                </Link>
              ))}
            </div>
          </article>

          <section className="geo-cta card">
            <p className="eyebrow">Navigation</p>
            <h2 className="section-title">Connect the GEO layer to the rest of the site</h2>
            <p className="lead">
              Use this page as the index for country-specific automation pages, and keep the entry points consistent with Kubera AI&apos;s core service pages.
            </p>
            <div className="geo-cta-buttons">
              <Link className="button" href="/services">
                Services
              </Link>
              <Link className="button" href="/contacts">
                Contact
              </Link>
              <Link className="button" href="/demo">
                Demo
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
