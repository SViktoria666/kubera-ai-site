import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/content/site";
import type { ServicePageContent } from "@/content/service-pages/types";

function SchemaScripts({ content }: { content: ServicePageContent }) {
  const canonical = content.canonical;
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: content.seoTitle,
    description: content.metaDescription,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    mainEntity: content.faq.length ? { "@id": `${canonical}#faq` } : undefined,
  };

  const breadcrumb = {
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
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.h1,
        item: canonical,
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: content.h1,
    url: canonical,
    description: content.metaDescription,
    areaServed: content.areaServed ?? "Portugal",
    serviceType: "Landing page design, business website design, and website redesign",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

function Section({ id, title, children, lead }: { id?: string; title: string; children: ReactNode; lead?: string }) {
  return (
    <section className="solution-section" id={id}>
      <div className="solution-section-heading">
        <h2 className="section-title">{title}</h2>
        {lead ? <p className="lead solution-section-lead">{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function CommercialServicePage({ content }: { content: ServicePageContent }) {
  const hasHeroVisual = Boolean(content.hero.imageSrc);

  return (
    <main className="solutions-page" lang="en">
      <SchemaScripts content={content} />

      <section className="solution-shell">
        <div className="container solution-container">
          <section className={`solution-hero${hasHeroVisual ? " solution-hero--with-visual" : ""}`}>
            <div className="solution-hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <p
                style={{
                  margin: 0,
                  color: "var(--color-text)",
                  fontSize: "clamp(1.2rem, 2vw, 1.65rem)",
                  lineHeight: 1.3,
                  fontWeight: 800,
                  maxWidth: "44rem",
                }}
              >
                {content.hero.headline}
              </p>
              <h1 className="solution-title">{content.h1}</h1>
              <p className="lead solution-lead">{content.hero.subheadline}</p>
              <p className="solution-trustline">{content.hero.trustStrip}</p>
              <div className="solution-hero-actions">
                <Link className="button" href={content.hero.primaryCtaHref}>
                  {content.hero.primaryCta}
                </Link>
                <Link className="solution-secondary-link" href={content.hero.secondaryCtaHref}>
                  {content.hero.secondaryCta}
                </Link>
              </div>
            </div>

            {content.hero.imageSrc ? (
              <div className="solution-hero-visual">
                <div className="solution-hero-visual-frame">
                  <Image
                    className="solution-hero-visual-image"
                    src={content.hero.imageSrc}
                    alt={content.hero.imageAlt ?? ""}
                    fill
                    priority
                    sizes="(max-width: 1024px) 0vw, 42vw"
                  />
                </div>
              </div>
            ) : null}
          </section>

          <Section title="The Problem">
            <div className="solution-grid" style={{ gap: "14px" }}>
              {content.problem.paragraphs.map((paragraph) => (
                <p className="solution-explainer-text" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Section>

          <Section title="What You Get" lead={content.whatYouGet.intro}>
            <div className="solution-grid solution-grid--services">
              {content.whatYouGet.items.map((item) => (
                <article className="solution-card solution-card--glass" key={item}>
                  <p className="solution-explainer-text">{item}</p>
                </article>
              ))}
            </div>
            <p className="solution-explainer-text">{content.whatYouGet.closing}</p>
          </Section>

          <Section title="Working with Kubera AI" lead={content.workingWithKuberaAi.intro}>
            <div className="solution-grid" style={{ gap: "14px" }}>
              {content.workingWithKuberaAi.paragraphs.map((paragraph) => (
                <article className="solution-card solution-card--module" key={paragraph}>
                  <p className="solution-explainer-text" style={{ margin: 0 }}>
                    {paragraph}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Key Benefits">
            <div className="solution-grid solution-grid--results">
              {content.keyBenefits.items.map((item) => (
                <article className="solution-card solution-card--result" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="How We Work" lead={content.howWeWork.intro}>
            <ol className="workflow-list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {content.howWeWork.steps.map((step, index) => (
                <li className="workflow-card" key={step.title}>
                  <div className="workflow-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p className="muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="packages" title="Packages & Pricing">
            <div className="pricing-packages-grid">
              {content.packages.items.map((item, index) => {
                const featured = index === 0;

                return (
                  <article className={`pricing-card${featured ? " pricing-card--featured" : ""}`} key={item.name}>
                    <div className="pricing-card-head">
                      <div className="pricing-card-topline">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="pricing-price">{item.price}</div>
                    </div>
                    <ul className="pricing-features">
                      {item.includes.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
            {content.packages.note ? <p className="pricing-note muted">{content.packages.note}</p> : null}
          </Section>

          <Section title="What's Not Included">
            <p className="solution-explainer-text">{content.whatsNotIncluded.paragraph}</p>
          </Section>

          <Section title="FAQ">
            <div className="solution-faq-grid">
              {content.faq.map((item) => (
                <details className="solution-faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <div className="solution-faq-content">
                    <div className="solution-faq-content-inner">
                      <p className="muted">{item.answer}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </Section>

          <section className="solution-final-cta">
            <h2 className="section-title">{content.finalCta.headline}</h2>
            <p className="lead solution-section-lead">{content.finalCta.subtext}</p>
            <div className="solution-cta-actions">
              <Link className="button" href={content.finalCta.primaryHref}>
                {content.finalCta.primaryButton}
              </Link>
              <Link className="solution-secondary-link" href={content.finalCta.secondaryHref}>
                {content.finalCta.secondaryLink}
              </Link>
            </div>
          </section>

          <section className="solution-section">
            <p className="solution-trustline">{content.footerTrustBlock}</p>
          </section>
        </div>
      </section>
    </main>
  );
}
