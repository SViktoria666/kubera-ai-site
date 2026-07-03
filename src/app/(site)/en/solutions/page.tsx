import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/content/seo";
import { siteConfig } from "@/content/site";
import {
  getCountrySolutionBuckets,
  getSolutionHubClusters,
  getSolutionHubItems,
  solutionHubRoute,
} from "@/content/internal-linking";

export const metadata: Metadata = createPageMetadata({
  title: "AI Automation Solutions by Industry and Country",
  description:
    "Browse Kubera AI industry solution pages across European markets. Find the right commercial automation page by industry cluster or country and move deeper into the site within two clicks.",
  path: solutionHubRoute,
  locale: "en",
});

const hubClusters = getSolutionHubClusters();
const countryBuckets = getCountrySolutionBuckets();
const solutionItems = getSolutionHubItems();

function buildHubSchemas() {
  const canonical = `${siteConfig.url}${solutionHubRoute}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: "AI Automation Solutions by Industry and Country",
      description:
        "Browse Kubera AI industry solution pages across European markets. Find the right commercial automation page by industry cluster or country and move deeper into the site within two clicks.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${siteConfig.url}#website`,
      },
      publisher: {
        "@id": `${siteConfig.url}#organization`,
      },
      mainEntity: {
        "@id": `${canonical}#itemlist`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: canonical,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${canonical}#itemlist`,
      name: "Industry solution pages",
      numberOfItems: solutionItems.length,
      itemListElement: solutionItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.description,
        url: `${siteConfig.url}${item.href}`,
      })),
    },
  ];
}

export default function SolutionsHubPage() {
  return (
    <main>
      {buildHubSchemas().map((schema) => (
        <script key={(schema as { "@id"?: string })["@id"] ?? `${schema["@type"]}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Solutions hub</p>
          <h1 className="hero-title">AI Automation Solutions by Industry and Country</h1>
          <p className="lead">
            Kubera AI builds commercial automation systems for specific industries across European markets. Use this hub to move from the homepage into the right solution page in two clicks or less.
          </p>
          <div className="geo-hero-links">
            <Link className="button" href="/contacts">
              Discuss my project
            </Link>
            <Link className="button" href="/services">
              Services
            </Link>
            <Link className="button" href="/cases">
              Cases
            </Link>
            <Link className="button" href="/blog">
              Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="solution-section-heading">
            <p className="eyebrow">Popular solution clusters</p>
            <h2 className="section-title">Browse by commercial use case</h2>
            <p className="lead solution-section-lead">These clusters keep the commercial pages connected by theme instead of leaving them as isolated landing pages.</p>
          </div>

          <div className="solution-grid solution-grid--hub">
            {hubClusters.map((cluster) => (
              <article className="solution-card" key={cluster.title}>
                <h3>{cluster.title}</h3>
                <p className="muted">{cluster.description}</p>
                <div className="solution-reading-links solution-reading-links--stacked">
                  {cluster.links.map((link) => (
                    <Link className="solution-reading-link" href={link.href} key={link.href}>
                      <strong>{link.title}</strong>
                      <span>{link.description}</span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="solution-section-heading">
            <p className="eyebrow">Browse by country</p>
            <h2 className="section-title">All 18 market clusters</h2>
            <p className="lead solution-section-lead">Each country section links to the GEO page and its three commercial solution pages.</p>
          </div>

          <div className="solution-grid solution-grid--hub">
            {countryBuckets.map(({ country, geoLink, solutions }) => (
              <article className="solution-card" key={country.slug}>
                <h3>{country.country}</h3>
                <p className="muted">{country.metaDescription}</p>
                <div className="solution-reading-links solution-reading-links--stacked">
                  <Link className="solution-reading-link" href={geoLink.href}>
                    <strong>{geoLink.title}</strong>
                    <span>{geoLink.description}</span>
                  </Link>
                  {solutions.map((link) => (
                    <Link className="solution-reading-link" href={link.href} key={link.href}>
                      <strong>{link.title}</strong>
                      <span>{link.description}</span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="solution-section-heading">
            <p className="eyebrow">Supporting links</p>
            <h2 className="section-title">Keep moving through the site</h2>
          </div>

          <div className="solution-grid solution-grid--services">
            <Link className="solution-card solution-card--link" href="/services">
              <h3>Services</h3>
              <p className="muted">See the operating stack behind the commercial pages.</p>
              <span className="solution-card-link">Open services</span>
            </Link>
            <Link className="solution-card solution-card--link" href="/cases">
              <h3>Cases</h3>
              <p className="muted">Review example automation scenarios and implementation patterns.</p>
              <span className="solution-card-link">Open cases</span>
            </Link>
            <Link className="solution-card solution-card--link" href="/blog">
              <h3>Blog</h3>
              <p className="muted">Read supporting material on AI automation and workflow design.</p>
              <span className="solution-card-link">Open blog</span>
            </Link>
            <Link className="solution-card solution-card--link" href="/contacts">
              <h3>Contact</h3>
              <p className="muted">Discuss a project with the Kubera AI team.</p>
              <span className="solution-card-link">Open contacts</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
