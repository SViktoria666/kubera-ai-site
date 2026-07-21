import Link from "next/link";
import type { ReactNode } from "react";
import { ServiceLeadForm } from "@/components/forms/ServiceLeadForm";
import { siteConfig } from "@/content/site";
import type { LandingPageDesignCountryPageData, LandingPageDesignHubPageData } from "@/content/services/landing-page-design";

function CountrySchemas({ canonical, content }: { canonical: string; content: LandingPageDesignCountryPageData }) {
  const hubPath = content.locale === "pt-PT" ? "/pt/services/landing-page-design" : "/services/landing-page-design";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: content.h1,
    description: content.metaDescription,
    inLanguage: content.locale,
    isPartOf: { "@id": `${siteConfig.url}#website` },
    publisher: { "@id": `${siteConfig.url}#organization` },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: content.h1,
    serviceType: "Landing Page Design",
    description: content.metaDescription,
    areaServed: { "@type": "Country", name: "Portugal" },
    provider: { "@id": `${siteConfig.url}#organization` },
    url: canonical,
    mainEntityOfPage: { "@id": canonical },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: content.breadcrumb[0], item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: content.breadcrumb[1], item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: content.breadcrumb[2], item: `${siteConfig.url}${hubPath}` },
      { "@type": "ListItem", position: 4, name: content.breadcrumb[3], item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

function HubSchemas({ canonical, content }: { canonical: string; content: LandingPageDesignHubPageData }) {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: content.h1,
    description: content.metaDescription,
    inLanguage: content.locale,
    isPartOf: { "@id": `${siteConfig.url}#website` },
    publisher: { "@id": `${siteConfig.url}#organization` },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: content.h1,
    serviceType: "Landing Page Design Hub",
    description: content.metaDescription,
    provider: { "@id": `${siteConfig.url}#organization` },
    url: canonical,
    mainEntityOfPage: { "@id": canonical },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: content.breadcrumb[0], item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: content.breadcrumb[1], item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: content.breadcrumb[2], item: canonical },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

function CountryBreadcrumb({ content }: { content: LandingPageDesignCountryPageData }) {
  const hubHref = content.locale === "pt-PT" ? "/pt/services/landing-page-design" : "/services/landing-page-design";

  return (
    <nav className="service-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">{content.breadcrumb[0]}</Link>
        </li>
        <li>
          <Link href="/services">{content.breadcrumb[1]}</Link>
        </li>
        <li>
          <Link href={hubHref}>{content.breadcrumb[2]}</Link>
        </li>
        <li aria-current="page">{content.breadcrumb[3]}</li>
      </ol>
    </nav>
  );
}

function HubBreadcrumb({ content }: { content: LandingPageDesignHubPageData }) {
  return (
    <nav className="service-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">{content.breadcrumb[0]}</Link>
        </li>
        <li>
          <Link href="/services">{content.breadcrumb[1]}</Link>
        </li>
        <li aria-current="page">{content.breadcrumb[2]}</li>
      </ol>
    </nav>
  );
}

function Section({
  eyebrow,
  heading,
  body,
  children,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="solution-section">
      <div className="solution-section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{heading}</h2>
        {body ? <p className="lead solution-section-lead">{body}</p> : null}
      </div>
      {children}
    </section>
  );
}

function HeroVisual({ content }: { content: LandingPageDesignCountryPageData }) {
  const routeParts = content.heroVisual.routeLine.includes("->")
    ? content.heroVisual.routeLine.split("->").map((part) => part.trim())
    : [content.heroVisual.routeLine];

  return (
    <aside className="solution-hero-card service-hero-card" aria-label="Service illustration">
      <div className="service-hero-path" aria-hidden="true">
        <span>{routeParts[0]}</span>
        <span>&gt;</span>
        <span>{routeParts[1] ?? routeParts[0]}</span>
        <span>&gt;</span>
        <span>{routeParts[2] ?? routeParts[0]}</span>
      </div>

      <div className="service-hero-visual">
        <div className="service-browser service-browser--landing">
          <div className="service-browser-top" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="service-browser-body">
            <p className="service-mini-kicker">{content.heroVisual.browserAdLabel}</p>
            <strong>{content.heroVisual.browserTitle}</strong>
            <p className="service-mini-copy">{content.heroVisual.browserLeadLabel}</p>
            <div className="service-browser-badges">
              <span>{content.proof.visualLabels.adMessage}</span>
              <span>{content.proof.visualLabels.tracking}</span>
              <span>{content.heroVisual.trustLabel}</span>
            </div>
            <div className="service-mini-cta">{content.heroVisual.browserCta}</div>
            <div className="service-mini-form">
              <span>{content.finalCta.fields.nameLabel}</span>
              <span>{content.finalCta.fields.emailLabel}</span>
              <span>{content.finalCta.fields.needLabel}</span>
            </div>
          </div>
        </div>

        <div className="service-mobile service-mobile--landing">
          <div className="service-mobile-top" aria-hidden="true" />
          <div className="service-mobile-body">
            <p className="service-mini-kicker">{content.heroVisual.mobilePreviewLabel}</p>
            <div className="service-mobile-stack">
              <div className="service-mobile-card">
                <strong>{content.heroVisual.mobileBadge}</strong>
                <span>{content.heroVisual.routeLine}</span>
                <span>{content.heroVisual.confirmState}</span>
              </div>
              <div className="service-proof-phone-card">
                <strong>{content.proof.visualLabels.bookingConfirmed}</strong>
                <span>{content.heroVisual.browserCta}</span>
                <span>{content.finalCta.fields.successMessage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-hero-footer">
        <div className="service-hero-badge">
          <strong>{content.heroVisual.trustLabel}</strong>
          <span>{content.heroVisual.browserLeadLabel}</span>
        </div>
        <div className="service-hero-metrics" aria-hidden="true">
          <span>{content.heroVisual.mobileBadge}</span>
          <span>{content.proof.visualLabels.shortForm}</span>
          <span>{content.proof.visualLabels.bookingConfirmed}</span>
        </div>
      </div>
    </aside>
  );
}

function HubVisual({ content }: { content: LandingPageDesignHubPageData }) {
  return (
    <aside className="solution-hero-card service-hero-card" aria-label="Landing page design hub illustration">
      <div className="service-hero-visual service-hero-visual--hub">
        <div className="service-browser service-browser--landing">
          <div className="service-browser-top" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="service-browser-body">
            <p className="service-mini-kicker">{content.hero.eyebrow}</p>
            <strong>{content.h1}</strong>
            <p className="service-mini-copy">{content.hero.subtitle}</p>
            <div className="service-browser-badges">
              <span>Paid traffic</span>
              <span>Organic traffic</span>
              <span>Social traffic</span>
            </div>
            <div className="service-mini-cta">{content.hero.primaryCta}</div>
          </div>
        </div>
        <div className="service-mobile service-mobile--landing">
          <div className="service-mobile-top" aria-hidden="true" />
          <div className="service-mobile-body">
            <p className="service-mini-kicker">{content.h1}</p>
            <div className="service-proof-phone-card">
              <strong>Portugal</strong>
              <span>Localized content</span>
              <span>SEO per market</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function ProofVisual({ content }: { content: LandingPageDesignCountryPageData }) {
  return (
    <div className="service-proof-visual">
      <div className="service-proof-flow" aria-label={content.proof.flowTitle}>
        <span className="service-proof-chip">{content.proof.visualLabels.illustrativeExample}</span>
        <span className="service-proof-chip">{content.proof.visualLabels.adMessage}</span>
        <span className="service-proof-chip">{content.proof.visualLabels.landingPagePreview}</span>
        <span className="service-proof-chip">{content.proof.visualLabels.shortForm}</span>
        <span className="service-proof-chip">{content.proof.visualLabels.bookingConfirmed}</span>
      </div>

      <div className="service-proof-mockups">
        <div className="service-proof-browser">
          <div className="service-browser-top" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="service-proof-browser-body">
            <p className="service-mini-kicker">{content.proof.visualLabels.illustrativeExample}</p>
            <h3>{content.proof.scenarioTitle}</h3>
            <p className="service-mini-copy">{content.proof.body}</p>
            <div className="service-proof-state">
              <span>{content.proof.visualLabels.trustProof}</span>
              <span>{content.proof.visualLabels.tracking}</span>
            </div>
          </div>
        </div>

        <div className="service-proof-phone">
          <p className="service-mini-kicker">{content.proof.visualLabels.mobilePreview}</p>
          <div className="service-proof-phone-card">
            <strong>{content.proof.visualLabels.shortForm}</strong>
            <span>{content.finalCta.fields.nameLabel}</span>
            <span>{content.finalCta.fields.emailLabel}</span>
            <span>{content.finalCta.fields.needLabel}</span>
            <span>{content.finalCta.fields.successMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIVisual({ content }: { content: LandingPageDesignCountryPageData }) {
  return (
    <div className="service-chat-card">
      {content.aiMechanism.conversation.map((item, index) => (
        <div className={`service-chat-bubble is-${item.role}`} key={`${item.role}-${index}`}>
          <span className="service-chat-role">
            {item.role === "assistant" ? content.sectionLabels.ai : content.locale === "pt-PT" ? "Visitante" : "Visitor"}
          </span>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function PricingCard({ item }: { item: LandingPageDesignCountryPageData["pricing"]["cards"][number] }) {
  return (
    <article className={`pricing-card${item.featured ? " pricing-card--featured" : ""}`}>
      <div className="pricing-card-head">
        <div className="pricing-card-topline">
          <h3>{item.title}</h3>
        </div>
        <div className="pricing-price">{item.price}</div>
        {item.extra ? <p className="pricing-description">{item.extra}</p> : null}
        <p className="pricing-description">{item.scope}</p>
      </div>
      <ul className="pricing-features">
        <li>{item.timeline}</li>
        <li>{item.pages}</li>
        <li>{item.revisions}</li>
        <li>{item.ai}</li>
        <li>{item.support}</li>
      </ul>
    </article>
  );
}

function FAQItem({ item }: { item: LandingPageDesignCountryPageData["faq"][number] }) {
  return (
    <details className="solution-faq-item">
      <summary>
        <span className="solution-faq-question">{item.question}</span>
        <span className="solution-faq-toggle" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="solution-faq-content">
        <div className="solution-faq-content-inner">
          <p className="muted">{item.answer}</p>
        </div>
      </div>
    </details>
  );
}

function CountrySections({ content }: { content: LandingPageDesignCountryPageData }) {
  return (
    <>
      <Section eyebrow={content.whoThisIsFor.eyebrow} heading={content.whoThisIsFor.heading} body={content.whoThisIsFor.body}>
        <div className="service-intent-panel">
          <div className="service-intent-badges">
            {content.whoThisIsFor.chips.map((chip) => (
              <span className="service-intent-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow={content.process.eyebrow} heading={content.process.heading} body={content.process.body}>
        <div className="service-process-grid" id="como-funciona">
          {content.process.steps.map((step, index) => (
            <article className="card service-process-card" key={step.title}>
              <span className="service-process-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="service-process-copy">
                <span className="service-process-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.title}</h3>
                <p className="muted">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow={content.proof.eyebrow} heading={content.proof.heading} body={content.proof.body}>
        <div className="service-proof-layout">
          <div className="service-proof-copy">
            <article className="card service-proof-card">
              <p className="eyebrow">{content.proof.scenarioLabel}</p>
              <h3>{content.proof.scenarioTitle}</h3>
              <p className="muted">{content.proof.body}</p>
            </article>

            <article className="card service-proof-card">
              <p className="eyebrow">{content.proof.visualLabels.illustrativeExample}</p>
              <ul className="service-proof-list">
                <li>{content.proof.visualLabels.landingPagePreview}</li>
                <li>{content.proof.visualLabels.shortForm}</li>
                <li>{content.proof.visualLabels.trustProof}</li>
                <li>{content.proof.visualLabels.bookingConfirmed}</li>
              </ul>
            </article>
          </div>

          <ProofVisual content={content} />
        </div>
      </Section>

      <Section eyebrow={content.aiMechanism.eyebrow} heading={content.aiMechanism.heading} body={content.aiMechanism.body}>
        <div className="service-ai-grid">
          <AIVisual content={content} />
          <article className="card service-ai-note">
            <p className="eyebrow">{content.sectionLabels.ai}</p>
            <h3>{content.aiMechanism.heading}</h3>
            <p className="muted">{content.aiMechanism.body}</p>
          </article>
        </div>
      </Section>

      <section className="solution-section">
        <div className="solution-section-heading">
          <p className="eyebrow">{content.sectionLabels.pricing}</p>
          <h2 className="section-title">{content.pricing.heading}</h2>
          <p className="lead solution-section-lead">{content.pricing.body}</p>
        </div>

        <div className="pricing-packages-grid">
          {content.pricing.cards.map((item) => (
            <PricingCard item={item} key={item.title} />
          ))}
        </div>

        <p className="pricing-note muted">{content.pricing.guarantee}</p>
      </section>

      <section className="solution-section">
        <div className="solution-section-heading">
          <p className="eyebrow">{content.sectionLabels.faq}</p>
          <h2 className="section-title">{content.sectionLabels.faq}</h2>
        </div>

        <div className="solution-faq-grid">
          {content.faq.map((item) => (
            <FAQItem item={item} key={item.question} />
          ))}
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-section-heading">
          <p className="eyebrow">{content.relatedServices.eyebrow}</p>
          <h2 className="section-title">{content.relatedServices.heading}</h2>
        </div>

        <div className="solution-grid solution-grid--services">
          {content.relatedServices.items.map((item) =>
            item.href ? (
              <Link className="solution-card solution-card--link" href={item.href} key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
                <span className="solution-card-link">{content.locale === "pt-PT" ? "Abrir página" : "Open page"}</span>
              </Link>
            ) : (
              <article className="solution-card service-related-card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ),
          )}
        </div>

        <div className="service-compact-links">
          {content.relatedServices.compactLinks.map((link) => (
            <Link className="solution-reading-link" href={link.href} key={link.title}>
              <strong>{link.title}</strong>
              <span>{content.locale === "pt-PT" ? "Abrir página" : "Open page"}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="solution-final-cta" id="final-audit-form">
        <div className="service-final-grid">
          <div className="service-final-copy">
            <p className="eyebrow">{content.finalCta.buttonLabel}</p>
            <h2 className="section-title">{content.finalCta.heading}</h2>
            <p className="lead solution-section-lead">{content.finalCta.body}</p>
          </div>
          <div className="card service-form-card">
            <ServiceLeadForm
              buttonLabel={content.finalCta.buttonLabel}
              fields={content.finalCta.fields}
              pagePath={content.path}
              locale={content.locale === "pt-PT" ? "pt" : "en"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function HubCountryCard({ card, locale }: { card: LandingPageDesignHubPageData["countryCards"][number]; locale: "en" | "pt" }) {
  return (
    <Link className="solution-card solution-card--link" href={card.href[locale]}>
      <p className="eyebrow">{card.eyebrow}</p>
      <h3>{card.h1}</h3>
      <p className="muted">{card.body}</p>
      <span className="solution-card-link">{locale === "pt" ? "Abrir página" : "Open page"}</span>
    </Link>
  );
}

export function LandingPageDesignCountryPage({ content }: { content: LandingPageDesignCountryPageData }) {
  return (
    <main className="solutions-page service-detail-page" lang={content.locale}>
      <CountrySchemas canonical={content.canonical} content={content} />
      <section className="solution-shell">
        <div className="container solution-container">
          <CountryBreadcrumb content={content} />

          <section className="solution-hero">
            <div className="solution-hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="solution-title">{content.h1}</h1>
              <p className="lead solution-lead">{content.hero.subtitle}</p>
              <p className="solution-trustline">{content.hero.trustLine}</p>
              <div className="solution-hero-actions">
                <a className="button" href="#final-audit-form">
                  {content.hero.primaryCta}
                </a>
                <a className="solution-secondary-link" href="#final-audit-form">
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>

            <HeroVisual content={content} />
          </section>

          <CountrySections content={content} />
        </div>
      </section>
    </main>
  );
}

export function LandingPageDesignHubPage({ content }: { content: LandingPageDesignHubPageData }) {
  return (
    <main className="solutions-page service-detail-page" lang={content.locale}>
      <HubSchemas canonical={content.canonical} content={content} />
      <section className="solution-shell">
        <div className="container solution-container">
          <HubBreadcrumb content={content} />

          <section className="solution-hero">
            <div className="solution-hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="solution-title">{content.h1}</h1>
              <p className="lead solution-lead">{content.hero.subtitle}</p>
              <div className="solution-hero-actions">
                <a className="button" href={content.countryCards[0]?.href[content.languageSwitcher.current] ?? "/services"}>
                  {content.hero.primaryCta}
                </a>
                <a className="solution-secondary-link" href="/services">
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>

            <HubVisual content={content} />
          </section>

          {content.sections.map((section) => (
            <Section eyebrow={section.eyebrow} heading={section.heading} body={section.body} key={section.heading} />
          ))}

          <section className="solution-section">
            <div className="solution-section-heading">
              <p className="eyebrow">{content.locale === "pt-PT" ? "Países" : "Countries"}</p>
              <h2 className="section-title">{content.countryCards[0].h1}</h2>
              <p className="lead solution-section-lead">
                {content.locale === "pt-PT"
                  ? "Apenas Portugal está activo por agora. Novos países podem ser adicionados por dados quando estiverem prontos."
                  : "Only Portugal is active for now. New countries can be added from data when they are published."}
              </p>
            </div>

            <div className="solution-grid solution-grid--services">
              {content.countryCards.map((card) => (
                <HubCountryCard card={card} key={card.h1} locale={content.languageSwitcher.current} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
