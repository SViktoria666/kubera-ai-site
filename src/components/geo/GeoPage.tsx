import Link from "next/link";
import type { ReactNode } from "react";
import type { GeoPageData } from "@/content/geo/types";
import { siteConfig } from "@/content/site";
import { getGeoCatalogItemByRoute } from "@/content/geo/catalog";
import { normalizeGeoRoute } from "@/content/geo/routes";

function cleanTitle(title: string) {
  return title.replace(/^\d+\.\s*/, "");
}

function renderTextBlocks(blocks: string[]) {
  const nodes: ReactNode[] = [];

  blocks.forEach((block, index) => {
    const value = block.trim();
    if (!value) return;

    if (/^\d+\.\s+/.test(value) || /^Scenario \d+:/i.test(value)) {
      nodes.push(
        <h3 key={`subheading-${index}`} className="geo-subheading">
          {cleanTitle(value)}
        </h3>,
      );
      return;
    }

    nodes.push(
      <p key={`paragraph-${index}`} className="geo-paragraph">
        {value}
      </p>,
    );
  });

  return nodes;
}

function buildFaqSchema(page: GeoPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function buildGeoSchemas(page: GeoPageData) {
  const canonical = `${siteConfig.url}${page.route}`;
  const organizationId = `${siteConfig.url}#organization`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.seoTitle,
      description: page.metaDescription,
      inLanguage: page.locale === "es" ? "es-ES" : "en-US",
      isPartOf: {
        "@id": organizationId,
      },
      publisher: {
        "@id": organizationId,
      },
      breadcrumb: {
        "@id": `${canonical}#breadcrumb`,
      },
      mainEntity: page.faq.length ? { "@id": `${canonical}#faq` } : undefined,
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
          name: "Locations",
          item: `${siteConfig.url}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.country,
          item: canonical,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      sameAs: siteConfig.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}

export function GeoPage({ page }: { page: GeoPageData }) {
  const canonical = `${siteConfig.url}${page.route}`;
  const languageLabel = page.locale === "es" ? "es" : "en";
  const introTitle = page.locale === "es" ? "Introducción" : "Intro";
  const introSection = page.sections.find((section) => section.title.trim().toLowerCase() === introTitle.toLowerCase());

  return (
    <main lang={languageLabel}>
      {buildGeoSchemas(page).map((schema) => (
        <script key={(schema as { "@id"?: string })["@id"] ?? `${schema["@type"]}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">GEO / AEO</p>
          <h1 className="hero-title">{page.h1}</h1>
          <p className="lead">{page.metaDescription}</p>
          <div className="geo-hero-links">
            <Link className="button" href="/">
              Home
            </Link>
            <Link
              className="button"
              href="/demo"
              data-analytics-event="secondary_cta_click"
              data-analytics-placement="geo-hero"
              data-analytics-cta-id="geo-hero-demo"
            >
              Demo
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
              data-analytics-placement="geo-hero"
              data-analytics-cta-id="geo-hero-contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container geo-stack">
          <article className="geo-panel">
            <h2 className="section-title">{introTitle}</h2>
            <div className="geo-copy">{renderTextBlocks(introSection?.blocks ?? [])}</div>
          </article>

          {page.sections
            .filter((section) => section.title.trim().toLowerCase() !== introTitle.toLowerCase())
            .map((section) => (
              <article className="geo-panel" key={section.title}>
                <h2 className="section-title">{cleanTitle(section.title)}</h2>
                <div className="geo-copy">{renderTextBlocks(section.blocks)}</div>
              </article>
            ))}

          {page.faq.length ? (
            <article className="geo-panel">
              <h2 className="section-title">FAQ</h2>
              <div className="grid geo-faq-grid">
                {page.faq.map((item) => (
                  <details className="card geo-faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <p className="muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </article>
          ) : null}

          {page.cta ? (
            <section className="geo-cta card">
              <p className="eyebrow">CTA</p>
              <h2 className="section-title">{page.cta.headline}</h2>
              <p className="lead">{page.cta.body}</p>
              <div className="geo-cta-buttons">
                <Link
                  className="button"
                  href="/demo"
                  data-analytics-event="secondary_cta_click"
                  data-analytics-placement="geo-cta"
                  data-analytics-cta-id="geo-cta-demo"
                >
                  {page.cta.primary}
                </Link>
                <Link
                  className="button"
                  href="/contacts"
                  data-analytics-event="primary_cta_click"
                  data-analytics-placement="geo-cta"
                  data-analytics-cta-id="geo-cta-contact"
                >
                  {page.cta.secondary}
                </Link>
              </div>
            </section>
          ) : null}

          <section className="geo-panel">
            <h2 className="section-title">Related markets</h2>
            <div className="grid geo-links-grid">
              <Link className="card geo-link-card" href="/locations">
                <strong>All locations</strong>
                <span className="muted">View all 18 GEO pages in one place.</span>
              </Link>
              {page.relatedRoutes.map((route) => (
                <Link className="card geo-link-card" href={normalizeGeoRoute(route)} key={route}>
                  <strong>{getGeoCatalogItemByRoute(route)?.country ?? route}</strong>
                  <span className="muted">Open this market page.</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
