import Link from "next/link";
import type { ReactNode } from "react";
import type { UseCaseFaqItem, UseCaseLinkCard } from "@/content/use-cases/ai-voice-agents-home-services";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { siteConfig } from "@/content/site";

type UseCaseLandingPageProps = {
  canonical: string;
  description: string;
  faq: UseCaseFaqItem[];
  finalCta: {
    body: string;
    primaryHref: string;
    primaryLabel: string;
    title: string;
  };
  hero: {
    ctaHref: string;
    ctaLabel: string;
    lead: string;
    secondaryCtaLabel: string;
    title: string;
    trustLine: string;
  };
  midCta: {
    body: string;
    eyebrow: string;
    primaryHref: string;
    primaryLabel: string;
    title: string;
  };
  relatedServices: UseCaseLinkCard[];
  relevantDemoCases: UseCaseLinkCard[];
  recommendedReading: UseCaseLinkCard[];
  sections: Array<
    | {
        body: string;
        kind: "markdown";
        title: string;
      }
    | {
        bodyLines: string[];
        kind: "pre";
        title: string;
      }
  >;
  seoTitle: string;
  h1: string;
  ogTitle: string;
  ogDescription: string;
};

function SchemaScripts({ canonical, description, faq, title }: Pick<UseCaseLandingPageProps, "canonical" | "description" | "faq"> & { title: string }) {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    mainEntity: faq.length ? { "@id": `${canonical}#faq` } : undefined,
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
        name: title,
        item: canonical,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: faq.map((item) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

function Section({ title, lead, children }: { title: string; children: ReactNode; lead?: string }) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <h2 className="section-title">{title}</h2>
        {lead ? <p className="lead solution-section-lead">{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}

function MarkdownSection({ title, body }: { title: string; body: string }) {
  return (
    <Section title={title}>
      <article className="card blog-article-body" style={{ minWidth: 0 }}>
        <div style={{ maxWidth: "100%", minWidth: 0, overflowX: "auto" }}>
          <MarkdownRenderer content={body} />
        </div>
      </article>
    </Section>
  );
}

function PreSection({ title, bodyLines }: { title: string; bodyLines: string[] }) {
  return (
    <Section title={title}>
      <article className="card blog-article-body" style={{ minWidth: 0 }}>
        <pre
          style={{
            margin: 0,
            whiteSpace: "pre-wrap",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            fontFamily: "inherit",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {bodyLines.join("\n")}
        </pre>
      </article>
    </Section>
  );
}

function LinkGridSection({ title, links, lead }: { title: string; links: UseCaseLinkCard[]; lead?: string }) {
  return (
    <Section title={title} lead={lead}>
      <div className="solution-grid solution-grid--services">
        {links.map((item) => (
          <Link className="solution-card solution-card--link" href={item.href} key={`${item.title}-${item.href}`}>
            <h3>{item.title}</h3>
            <p className="muted">{item.description}</p>
            <span className="solution-card-link">Open page</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function FaqSection({ items }: { items: UseCaseFaqItem[] }) {
  return (
    <Section title="FAQ" lead="Questions teams usually ask before starting">
      <div className="solution-faq-grid">
        {items.map((item) => (
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
  );
}

function CtaPanel({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
}) {
  return (
    <section className="solution-final-cta">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="lead solution-section-lead">{body}</p>
      <div className="solution-cta-actions">
        <Link className="button" href={primaryHref}>
          {primaryLabel}
        </Link>
      </div>
    </section>
  );
}

export function UseCaseLandingPage({
  canonical,
  description,
  faq,
  finalCta,
  hero,
  midCta,
  relatedServices,
  relevantDemoCases,
  recommendedReading,
  sections,
  seoTitle,
  h1,
  ogTitle,
  ogDescription,
}: UseCaseLandingPageProps) {
  const workflowPreview = [
    "Incoming call",
    "Telephony platform",
    "AI voice agent",
    "n8n workflow",
    "CRM / calendar",
  ];

  return (
    <main className="solutions-page use-case-page" lang="en">
      <SchemaScripts canonical={canonical} description={description} faq={faq} title={h1} />

      <section className="solution-shell">
        <div className="container solution-container">
          <section className="solution-hero">
            <div className="solution-hero-copy">
              <p className="eyebrow">International use case landing page</p>
              <h1 className="solution-title">{hero.title}</h1>
              <p className="lead solution-lead">{hero.lead}</p>
              <p className="solution-trustline">{hero.trustLine}</p>
              <div className="solution-hero-actions">
                <Link className="button" href={hero.ctaHref}>
                  {hero.ctaLabel}
                </Link>
                <Link className="solution-secondary-link" href="/contacts">
                  {hero.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <aside className="solution-hero-card">
              <div className="solution-hero-card-top">
                <span className="solution-card-kicker">Recommended flow</span>
                <strong>Home services calls</strong>
              </div>
              <div className="solution-flow-preview" aria-label="Use case workflow preview">
                {workflowPreview.map((node, index) => (
                  <div className="solution-flow-node" key={node}>
                    <span>{node}</span>
                    {index < workflowPreview.length - 1 ? <span className="solution-flow-arrow" aria-hidden="true">-&gt;</span> : null}
                  </div>
                ))}
              </div>
              <div className="solution-hero-card-bottom">
                <span>Human-in-the-loop automation</span>
                <span>Call handling and booking</span>
              </div>
            </aside>
          </section>

          {sections.map((section) =>
            section.kind === "markdown" ? (
              <MarkdownSection key={section.title} title={section.title} body={section.body} />
            ) : (
              <PreSection key={section.title} title={section.title} bodyLines={section.bodyLines} />
            ),
          )}

          <section className="solution-section">
            <CtaPanel eyebrow={midCta.eyebrow} title={midCta.title} body={midCta.body} primaryHref={midCta.primaryHref} primaryLabel={midCta.primaryLabel} />
          </section>

          <LinkGridSection
            title="Related Services"
            lead="Use the existing service catalogue to see how this use case fits into Kubera AI's broader service architecture."
            links={relatedServices}
          />

          <LinkGridSection title="Relevant Demo Cases" links={relevantDemoCases} />

          <LinkGridSection title="Recommended Reading" links={recommendedReading} />

          <FaqSection items={faq} />

          <CtaPanel eyebrow="Final CTA" title={finalCta.title} body={finalCta.body} primaryHref={finalCta.primaryHref} primaryLabel={finalCta.primaryLabel} />
        </div>
      </section>
    </main>
  );
}
