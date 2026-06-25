import Image from "next/image";
import Link from "next/link";
import type { CaseLocale, CaseStudy } from "@/content/cases";
import { getCasePageContent } from "@/content/cases";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
  locale?: CaseLocale;
};

type ContentCardProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  bullets?: string[];
  content?: string;
  preformatted?: boolean;
};

function ContentCard({ eyebrow, title, intro, bullets, content, preformatted = false }: ContentCardProps) {
  return (
    <article className="card">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title" style={{ marginBottom: "12px" }}>
        {title}
      </h2>
      {intro ? (
        <p className="muted" style={{ lineHeight: 1.7, marginTop: 0 }}>
          {intro}
        </p>
      ) : null}
      {content ? (
        preformatted ? (
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              color: "var(--color-muted)",
              lineHeight: 1.7,
              fontFamily: "inherit",
            }}
          >
            {content}
          </pre>
        ) : (
          <p className="muted" style={{ lineHeight: 1.7, marginTop: 0 }}>
            {content}
          </p>
        )
      ) : null}
      {bullets?.length ? (
        <ul style={{ margin: "14px 0 0", paddingLeft: "20px", color: "var(--color-muted)", lineHeight: 1.7 }}>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function LegacyCaseStudyPage({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">{caseStudy.label}</p>
          <h1 className="hero-title">{caseStudy.title}</h1>
          <p className="muted" style={{ margin: "18px 0 10px", fontSize: "1rem", letterSpacing: "0.02em" }}>
            {caseStudy.category}
          </p>
          <p className="lead">{caseStudy.short}</p>
          <Link className="button" href="/contacts">
            Discuss this automation
          </Link>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid">
          <article className="card">
            <p className="eyebrow">Starting point</p>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              Typical business situation
            </h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              {caseStudy.startingPoint}
            </p>
          </article>
          <article className="case-card">
            <Image
              src={caseStudy.imagePath}
              alt={caseStudy.imageAlt}
              width={1254}
              height={1254}
              sizes="(max-width: 720px) calc(100vw - 32px), 50vw"
            />
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid">
          <article className="card">
            <p className="eyebrow">Problem</p>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              What needs to be fixed
            </h2>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--color-muted)", lineHeight: 1.7 }}>
              {caseStudy.problem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <p className="eyebrow">Solution</p>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              What Kubera AI builds
            </h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              {caseStudy.solution}
            </p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid">
          <article className="card">
            <p className="eyebrow">Workflow</p>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              Step-by-step automation
            </h2>
            <ol style={{ margin: 0, paddingLeft: "20px", color: "var(--color-muted)", lineHeight: 1.7 }}>
              {caseStudy.workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
          <article className="card">
            <p className="eyebrow">Tools / Stack</p>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              Possible components
            </h2>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--color-muted)", lineHeight: 1.7 }}>
              {caseStudy.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid">
          <article className="card">
            <p className="eyebrow">Expected outcome</p>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              Honest operational result
            </h2>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--color-muted)", lineHeight: 1.7 }}>
              {caseStudy.expectedOutcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card" style={{ display: "grid", alignContent: "start", gap: "14px" }}>
            <p className="eyebrow">CTA</p>
            <h2 className="section-title" style={{ marginBottom: "0" }}>
              Discuss this automation
            </h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              If this workflow matches your business, we can map the actual systems, triggers, owners, and follow-up logic before building anything.
            </p>
            <Link className="button" href="/contacts">
              Discuss this automation
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

function DetailedCaseStudyPage({ caseStudy, locale }: CaseStudyPageProps) {
  const content = getCasePageContent(caseStudy, locale ?? "en");

  if (!content) {
    return (
      <main>
        <LegacyCaseStudyPage caseStudy={caseStudy} />
      </main>
    );
  }

  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">{content.label}</p>
          <h1 className="hero-title">{content.heroTitle}</h1>
          <p className="muted" style={{ margin: "18px 0 10px", fontSize: "1rem", letterSpacing: "0.02em" }}>
            {content.category}
          </p>
          <p className="lead">{content.short}</p>
          <Link className="button" href={content.ctaHref}>
            {content.ctaLabel}
          </Link>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid">
          <ContentCard eyebrow="Intro" title="Short intro" content={content.intro} />
          <article className="case-card">
            <Image src={caseStudy.imagePath} alt={caseStudy.imageAlt} width={1254} height={1254} sizes="(max-width: 720px) calc(100vw - 32px), 50vw" />
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid">
          <ContentCard eyebrow="About" title="About the project" content={content.about} />
          <ContentCard eyebrow="Starting point" title="Initial situation" intro={content.startingPoint.intro} bullets={content.startingPoint.bullets} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid">
          <ContentCard eyebrow="Goal" title="Project goal" intro={content.projectGoal.intro} bullets={content.projectGoal.bullets} />
          <ContentCard eyebrow="Strategy" title="Automation strategy" intro={content.automationStrategy.intro} bullets={content.automationStrategy.bullets} />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid">
          <ContentCard
            eyebrow="Architecture"
            title="Workflow architecture"
            content={content.workflowArchitecture.join("\n")}
            preformatted
          />
          <ContentCard eyebrow="Implemented" title="What was implemented" bullets={content.implemented} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid">
          <ContentCard eyebrow="Tools / Stack" title="Tools / Stack" bullets={content.toolsStack} />
          <ContentCard eyebrow="Economics" title="Business economics" intro={content.businessEconomics.intro} bullets={content.businessEconomics.bullets} />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid">
          <ContentCard eyebrow="Results" title="Expected results" bullets={content.expectedResults} />
          <ContentCard eyebrow="Value" title="What the business gets" bullets={content.whatBusinessGets} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid">
          <ContentCard eyebrow="Conclusion" title="Conclusion" content={content.conclusion} />
          <article className="card" style={{ display: "grid", alignContent: "start", gap: "14px" }}>
            <p className="eyebrow">CTA</p>
            <h2 className="section-title" style={{ marginBottom: "0" }}>
              {content.ctaLabel}
            </h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              {content.ctaBody}
            </p>
            <Link className="button" href={content.ctaHref}>
              {content.ctaLabel}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export function CaseStudyPage({ caseStudy, locale = "en" }: CaseStudyPageProps) {
  return <DetailedCaseStudyPage caseStudy={caseStudy} locale={locale} />;
}
