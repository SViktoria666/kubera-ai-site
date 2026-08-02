import Link from "next/link";
import type { CountryPageContent } from "@/content/types";
import { getCountrySolutionHubCard, getCountrySolutionLinks } from "@/content/internal-linking";

export function CountryPage({ country }: { country: CountryPageContent }) {
  const countrySlug = country.slug.replace(/-automation$/, "");
  const solutionLinks = getCountrySolutionLinks(countrySlug);
  const countryHub = getCountrySolutionHubCard(countrySlug);
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
            <Link
              className="button"
              href="/contacts"
              data-analytics-event="primary_cta_click"
              data-analytics-placement="country-hero"
              data-analytics-cta-id="country-hero-contact"
            >
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

      <section className="section section-dark">
        <div className="container">
          <div className="solution-section-heading">
            <p className="eyebrow">AI Automation Solutions in {country.country}</p>
            <h2 className="section-title">Country-specific solution pages</h2>
            <p className="lead solution-section-lead">Use these links to move from the country overview into the commercial solution pages tied to this market.</p>
          </div>

          <div className="solution-grid solution-grid--services">
            <Link className="solution-card solution-card--link" href={countryHub.href}>
              <h3>{countryHub.title}</h3>
              <p className="muted">{countryHub.description}</p>
              <span className="solution-card-link">Open GEO page</span>
            </Link>
            {solutionLinks.map((item) => (
              <Link className="solution-card solution-card--link" href={item.href} key={item.href}>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
                <span className="solution-card-link">Open solution page</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
