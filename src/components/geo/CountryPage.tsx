import Link from "next/link";
import type { CountryPageContent } from "@/content/types";

export function CountryPage({ country }: { country: CountryPageContent }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: country.metaTitle,
    areaServed: country.country,
    provider: {
      "@type": "Organization",
      name: "Kubera AI",
      email: "hello@kubera-automation.com",
    },
    serviceType: "Business automation and AI workflow systems",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">GEO / AEO</p>
          <h1 className="hero-title">{country.heading}</h1>
          <p className="lead">{country.summary}</p>
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
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="services-grid">
            {country.sections.map((section) => (
              <article className="service-card" key={section.title}>
                <h2>{section.title}</h2>
                <p className="muted">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
