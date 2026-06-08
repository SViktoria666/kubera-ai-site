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
    <main className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <p className="eyebrow">GEO / AEO</p>
        <h1>{country.heading}</h1>
        <p className="lead">{country.summary}</p>
        <div className="grid">
          {country.sections.map((section) => (
            <article className="card" key={section.title}>
              <h2>{section.title}</h2>
              <p className="muted">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

