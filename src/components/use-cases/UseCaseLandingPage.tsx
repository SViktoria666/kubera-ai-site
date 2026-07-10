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

type WorkflowStep = {
  title: string;
  description?: string;
};

const workflowSteps: WorkflowStep[] = [
  { title: "Incoming call" },
  { title: "Telephony platform" },
  { title: "AI voice agent" },
  { title: "n8n workflow layer" },
  { title: "Validation and business rules", description: "service type, urgency, service area" },
  { title: "Classification", description: "routine, time-sensitive, follow-up" },
  { title: "CRM / field-service system update", description: "where supported" },
  { title: "Calendar / booking update", description: "where supported" },
  { title: "Human approval or escalation", description: "safety-related transfer, incomplete data" },
  { title: "Customer confirmation and internal notification", description: "SMS/email, where permitted" },
  { title: "Logging, alerts and reporting" },
];

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

function WorkflowSection() {
  return (
    <Section title="Target Workflow" lead="The exact architecture is adapted during discovery based on the client's existing phone system, CRM, and service structure.">
      <div className="workflow-steps">
        {workflowSteps.map((step, index) => (
          <div className="workflow-step-wrap" key={step.title}>
            <article className="card workflow-step-card">
              <span className="workflow-step-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="workflow-step-copy">
                <h3>{step.title}</h3>
                {step.description ? <p className="muted">{step.description}</p> : null}
              </div>
            </article>
            {index < workflowSteps.length - 1 ? <div className="workflow-connector" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
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

function WorkflowPreview() {
  return (
    <aside className="solution-hero-card solution-hero-card--workflow">
      <div className="solution-hero-card-top">
        <span className="solution-card-kicker">Recommended flow</span>
        <strong>Home services calls</strong>
      </div>
      <div className="workflow-preview" aria-label="Use case workflow preview">
        <div className="workflow-preview-rail" aria-hidden="true" />
        <div className="workflow-preview-steps">
          <div className="workflow-preview-step">Incoming call</div>
          <div className="workflow-preview-step">Telephony platform</div>
          <div className="workflow-preview-step">AI voice agent</div>
          <div className="workflow-preview-step">n8n workflow</div>
          <div className="workflow-preview-step">CRM / calendar</div>
        </div>
        <div className="workflow-preview-outcome-block">
          <span className="solution-card-kicker">Outcome block</span>
          <div className="workflow-preview-outcome">
            <div className="workflow-preview-step workflow-preview-step--outcome">Human-in-the-loop automation</div>
            <div className="workflow-preview-step workflow-preview-step--outcome">Call handling and booking</div>
          </div>
        </div>
      </div>
      <div className="solution-hero-card-bottom">
        <span>Clear handoff rules</span>
        <span>Visible routing and outcome blocks</span>
      </div>
    </aside>
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

            <WorkflowPreview />
          </section>

          {sections.map((section) =>
            section.kind === "markdown" ? (
              <MarkdownSection key={section.title} title={section.title} body={section.body} />
            ) : (
              section.title === "Target Workflow" ? (
                <WorkflowSection key={section.title} />
              ) : (
                <PreSection key={section.title} title={section.title} bodyLines={section.bodyLines} />
              )
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
