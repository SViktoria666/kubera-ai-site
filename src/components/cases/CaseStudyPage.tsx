import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseLocale, CaseStudy, CaseStudyType } from "@/content/cases";
import { getCasePageContent } from "@/content/cases";
import { getCaseSolutionLinks } from "@/content/internal-linking";

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

type CaseSectionProps = {
  children: ReactNode;
  tone?: "soft" | "dark";
};

type SectionCopy = {
  intro: { eyebrow: string; title: string };
  about: { eyebrow: string; title: string };
  startingPoint: { eyebrow: string; title: string };
  projectGoal: { eyebrow: string; title: string };
  automationStrategy: { eyebrow: string; title: string };
  workflowArchitecture: { eyebrow: string; title: string };
  implemented: { eyebrow: string; title: string };
  toolsStack: { eyebrow: string; title: string };
  businessEconomics: { eyebrow: string; title: string };
  expectedResults: { eyebrow: string; title: string };
  whatBusinessGets: { eyebrow: string; title: string };
  conclusion: { eyebrow: string; title: string };
};

type SectionTitleSet = {
  eyebrow: string;
  title: string;
};

const sectionCopy: Record<CaseLocale, SectionCopy> = {
  en: {
    intro: { eyebrow: "Intro", title: "Short intro" },
    about: { eyebrow: "About", title: "About the project" },
    startingPoint: { eyebrow: "Starting point", title: "Initial situation" },
    projectGoal: { eyebrow: "Goal", title: "Project goal" },
    automationStrategy: { eyebrow: "Strategy", title: "Automation strategy" },
    workflowArchitecture: { eyebrow: "Architecture", title: "Workflow architecture" },
    implemented: { eyebrow: "Implemented", title: "What was implemented" },
    toolsStack: { eyebrow: "Tools / Stack", title: "Tools / Stack" },
    businessEconomics: { eyebrow: "Economics", title: "Business economics" },
    expectedResults: { eyebrow: "Results", title: "Expected results" },
    whatBusinessGets: { eyebrow: "Value", title: "What the business gets" },
    conclusion: { eyebrow: "Conclusion", title: "Conclusion" },
  },
  ru: {
    intro: { eyebrow: "Вступление", title: "Краткое вступление" },
    about: { eyebrow: "О проекте", title: "О проекте" },
    startingPoint: { eyebrow: "Исходная точка", title: "Исходная точка" },
    projectGoal: { eyebrow: "Цель", title: "Цель проекта" },
    automationStrategy: { eyebrow: "Стратегия", title: "Стратегия автоматизации" },
    workflowArchitecture: { eyebrow: "Архитектура", title: "Архитектура процесса" },
    implemented: { eyebrow: "Реализация", title: "Что было реализовано" },
    toolsStack: { eyebrow: "Стек", title: "Инструменты / стек" },
    businessEconomics: { eyebrow: "Экономика", title: "Бизнес-экономика" },
    expectedResults: { eyebrow: "Результаты", title: "Ожидаемые результаты" },
    whatBusinessGets: { eyebrow: "Ценность", title: "Что получает бизнес" },
    conclusion: { eyebrow: "Заключение", title: "Заключение" },
  },
};

const implementedSectionCopy: Record<
  CaseLocale,
  Record<CaseStudyType, SectionTitleSet>
> = {
  en: {
    case: { eyebrow: "Implemented", title: "What was implemented" },
    "industry-scenario": { eyebrow: "Recommendation", title: "Recommended Architecture" },
  },
  ru: {
    case: { eyebrow: "Реализация", title: "Что было реализовано" },
    "industry-scenario": { eyebrow: "Рекомендация", title: "Рекомендуемая архитектура" },
  },
};

function getSectionCopy(locale: CaseLocale, type: CaseStudyType): SectionCopy {
  return {
    ...sectionCopy[locale],
    implemented: implementedSectionCopy[locale][type],
  };
}

function CaseSection({ children, tone = "soft" }: CaseSectionProps) {
  return (
    <section className={`section section-${tone} case-study-section`}>
      <div className="container case-study-flow">{children}</div>
    </section>
  );
}

function ContentCard({ eyebrow, title, intro, bullets, content, preformatted = false }: ContentCardProps) {
  return (
    <article className="card case-block">
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
  const copy = getSectionCopy(locale ?? "en", caseStudy.type ?? "case");
  const relatedSolutionLinks = locale === "en" ? getCaseSolutionLinks(caseStudy.slug) : [];

  if (!content) {
    return (
      <main className="case-study-page">
        <LegacyCaseStudyPage caseStudy={caseStudy} />
      </main>
    );
  }

  return (
    <main className="case-study-page">
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">{content.label}</p>
          <h1 className="hero-title">{content.heroTitle}</h1>
          <p className="muted" style={{ margin: "18px 0 10px", fontSize: "1rem", letterSpacing: "0.02em" }}>
            {content.category}
          </p>
          <p className="lead">{content.short}</p>
          <Link className="button case-cta-button" href={content.ctaHref}>
            {content.ctaLabel}
          </Link>
        </div>
      </section>

      <CaseSection tone="soft">
        <ContentCard eyebrow={copy.intro.eyebrow} title={copy.intro.title} content={content.intro} />
        <figure className="case-media">
          <Image src={caseStudy.imagePath} alt={caseStudy.imageAlt} width={1254} height={1254} sizes="(max-width: 720px) calc(100vw - 32px), 100vw" />
        </figure>
      </CaseSection>

      <CaseSection tone="dark">
        <ContentCard eyebrow={copy.about.eyebrow} title={copy.about.title} content={content.about} />
        <ContentCard
          eyebrow={copy.startingPoint.eyebrow}
          title={copy.startingPoint.title}
          intro={content.startingPoint.intro}
          bullets={content.startingPoint.bullets}
        />
      </CaseSection>

      <CaseSection tone="soft">
        <ContentCard eyebrow={copy.projectGoal.eyebrow} title={copy.projectGoal.title} intro={content.projectGoal.intro} bullets={content.projectGoal.bullets} />
        <ContentCard
          eyebrow={copy.automationStrategy.eyebrow}
          title={copy.automationStrategy.title}
          intro={content.automationStrategy.intro}
          bullets={content.automationStrategy.bullets}
        />
      </CaseSection>

      <CaseSection tone="dark">
        <ContentCard
          eyebrow={copy.workflowArchitecture.eyebrow}
          title={copy.workflowArchitecture.title}
          content={content.workflowArchitecture.join("\n")}
          preformatted
        />
        <ContentCard eyebrow={copy.implemented.eyebrow} title={copy.implemented.title} bullets={content.implemented} />
      </CaseSection>

      <CaseSection tone="soft">
        <ContentCard eyebrow={copy.toolsStack.eyebrow} title={copy.toolsStack.title} bullets={content.toolsStack} />
        <ContentCard
          eyebrow={copy.businessEconomics.eyebrow}
          title={copy.businessEconomics.title}
          intro={content.businessEconomics.intro}
          bullets={content.businessEconomics.bullets}
        />
      </CaseSection>

      <CaseSection tone="dark">
        <ContentCard eyebrow={copy.expectedResults.eyebrow} title={copy.expectedResults.title} bullets={content.expectedResults} />
        <ContentCard eyebrow={copy.whatBusinessGets.eyebrow} title={copy.whatBusinessGets.title} bullets={content.whatBusinessGets} />
      </CaseSection>

      <CaseSection tone="soft">
        <ContentCard eyebrow={copy.conclusion.eyebrow} title={copy.conclusion.title} content={content.conclusion} />
        <article className="card case-cta-card">
          <p className="eyebrow">CTA</p>
          <h2 className="section-title" style={{ marginBottom: "0" }}>
            {content.ctaLabel}
          </h2>
          <p className="muted" style={{ lineHeight: 1.7 }}>
            {content.ctaBody}
          </p>
          <Link className="button case-cta-button" href={content.ctaHref}>
            {content.ctaLabel}
          </Link>
        </article>
      </CaseSection>

      {relatedSolutionLinks.length ? (
        <section className="section section-dark">
          <div className="container">
            <div className="solution-section-heading">
              <p className="eyebrow">Related industry solution pages</p>
              <h2 className="section-title">Where this architecture applies</h2>
              <p className="lead solution-section-lead">These links stay at the same level of intent as the case study without claiming the case happened in those markets.</p>
            </div>

            <div className="solution-grid solution-grid--services">
              {relatedSolutionLinks.map((item) => (
                <Link className="solution-card solution-card--link" href={item.href} key={item.href}>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.description}</p>
                  <span className="solution-card-link">Open solution page</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

export function CaseStudyPage({ caseStudy, locale = "en" }: CaseStudyPageProps) {
  return <DetailedCaseStudyPage caseStudy={caseStudy} locale={locale} />;
}
