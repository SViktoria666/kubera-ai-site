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
        kind: "workflow";
        lead: string;
        steps: WorkflowStep[];
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
  workflowPreview?: {
    bottomLabels: [string, string];
    kicker: string;
    outcomeDetail: string;
    outcomeLabel: string;
    outcomeTitle: string;
    steps: string[];
    title: string;
  };
  workflowSection?: {
    lead: string;
    steps: WorkflowStep[];
    title: string;
  };
};

type WorkflowStep = {
  title: string;
  description?: string;
  branches?: WorkflowBranch[];
};

type WorkflowBranch = {
  label: string;
  steps: WorkflowStep[];
};

const defaultWorkflowSteps: WorkflowStep[] = [
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

const defaultWorkflowPreview = {
  kicker: "Recommended flow",
  title: "Home services calls",
  steps: ["Incoming call", "Telephony platform", "AI voice agent", "n8n workflow", "CRM / calendar"],
  outcomeDetail: "Human-in-the-loop automation",
  outcomeLabel: "Outcome block",
  outcomeTitle: "Human-in-the-loop automation",
  bottomLabels: ["Clear handoff rules", "Visible routing and outcome blocks"] as [string, string],
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

function renderWorkflowSteps(steps: WorkflowStep[], startIndex: { current: number }, isBranch = false): ReactNode[] {
  return steps.flatMap((step, index) => {
    const stepNumber = String(startIndex.current++).padStart(2, "0");

    const nodes: ReactNode[] = [
      <div className="workflow-step-wrap" key={`${step.title}-${stepNumber}`}>
        <article className={`card workflow-step-card${isBranch ? " workflow-step-card--branch" : ""}`}>
          <span className="workflow-step-index">{stepNumber}</span>
          <div className="workflow-step-copy">
            <h3>{step.title}</h3>
            {step.description ? <p className="muted">{step.description}</p> : null}
          </div>
        </article>

        {step.branches ? (
          <div className="workflow-branch-panel">
            <div className="workflow-branch-fork" aria-hidden="true">
              <span />
              <span />
            </div>
            <div className="workflow-branch-grid">
              {step.branches.map((branch) => (
                <div className="workflow-branch-column" key={`${step.title}-${branch.label}`}>
                  <span className="workflow-branch-label">{branch.label}</span>
                  <div className="workflow-branch-stack">
                    {renderWorkflowSteps(branch.steps, startIndex, true)}
                  </div>
                </div>
              ))}
            </div>
            {index < steps.length - 1 ? <div className="workflow-connector workflow-connector--merge" aria-hidden="true" /> : null}
          </div>
        ) : null}

        {!step.branches && index < steps.length - 1 ? <div className="workflow-connector" aria-hidden="true" /> : null}
      </div>,
    ];

    return nodes;
  });
}

function WorkflowSection({ title, lead, steps }: { title: string; lead: string; steps: WorkflowStep[] }) {
  const stepIndex = { current: 1 };

  return (
    <Section title={title} lead={lead}>
      <div className="workflow-steps">
        {renderWorkflowSteps(steps, stepIndex)}
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

function WorkflowPreview({
  kicker,
  title,
  steps,
  outcomeLabel,
  outcomeDetail,
  outcomeTitle,
  bottomLabels,
}: {
  bottomLabels: [string, string];
  kicker: string;
  outcomeDetail: string;
  outcomeLabel: string;
  outcomeTitle: string;
  steps: string[];
  title: string;
}) {
  return (
    <aside className="solution-hero-card solution-hero-card--workflow">
      <div className="solution-hero-card-top">
        <span className="solution-card-kicker">{kicker}</span>
        <strong>{title}</strong>
      </div>
      <div className="workflow-preview" aria-label="Use case workflow preview">
        <div className="workflow-preview-rail" aria-hidden="true" />
        <div className="workflow-preview-steps">
          {steps.map((step) => (
            <div className="workflow-preview-step" key={step}>
              {step}
            </div>
          ))}
        </div>
        <div className="workflow-preview-outcome-block">
          <span className="solution-card-kicker">{outcomeLabel}</span>
          <div className="workflow-preview-outcome">
            <div className="workflow-preview-step workflow-preview-step--outcome">{outcomeTitle}</div>
            <p className="muted" style={{ margin: 0, overflowWrap: "anywhere" }}>
              {outcomeDetail}
            </p>
          </div>
        </div>
      </div>
      <div className="solution-hero-card-bottom">
        <span>{bottomLabels[0]}</span>
        <span>{bottomLabels[1]}</span>
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
  workflowPreview = defaultWorkflowPreview,
  workflowSection = {
    title: "Target Workflow",
    lead: "The exact architecture is adapted during discovery based on the client's existing phone system, CRM, and service structure.",
    steps: defaultWorkflowSteps,
  },
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

            <WorkflowPreview {...workflowPreview} />
          </section>

          {sections.map((section) =>
            section.kind === "markdown" ? (
              <MarkdownSection key={section.title} title={section.title} body={section.body} />
            ) : section.kind === "workflow" ? (
              <WorkflowSection key={section.title} title={section.title} lead={section.lead} steps={section.steps} />
            ) : (
              section.title === "Target Workflow" ? <WorkflowSection key={section.title} {...workflowSection} /> : <PreSection key={section.title} title={section.title} bodyLines={section.bodyLines} />
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
