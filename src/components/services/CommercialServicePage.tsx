import Link from "next/link";
import type { ReactNode } from "react";
import { ServiceLeadForm } from "@/components/forms/ServiceLeadForm";
import { siteConfig } from "@/content/site";
import type { CommercialServiceContent } from "@/content/services/portugal/landing-page-design";

type CommercialServicePageProps = {
  content: CommercialServiceContent;
};

function SchemaScripts({ canonical, content }: { canonical: string; content: CommercialServiceContent }) {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: content.h1,
    description: content.metaDescription,
    inLanguage: "pt-PT",
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: content.h1,
    serviceType: "Landing Page Design",
    description: content.metaDescription,
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
    provider: {
      "@id": `${siteConfig.url}#organization`,
    },
    url: canonical,
    mainEntityOfPage: {
      "@id": canonical,
    },
  };

  const breadcrumbSchema = {
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
        name: "Portugal",
        item: `${siteConfig.url}/services#portugal`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Landing Page Design",
        item: canonical,
      },
    ],
  };

  const faqSchema = {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

function Breadcrumb({ content }: { content: CommercialServiceContent }) {
  return (
    <nav className="service-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/services#portugal">Portugal</Link>
        </li>
        <li aria-current="page">{content.h1}</li>
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
  body?: string;
  children?: ReactNode;
  eyebrow: string;
  heading: string;
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

function HeroVisual({ content }: { content: CommercialServiceContent }) {
  return (
    <aside className="solution-hero-card service-hero-card" aria-label="Service illustration">
      <div className="service-hero-path" aria-hidden="true">
        <span>Google Ad</span>
        <span>→</span>
        <span>Landing Page</span>
        <span>→</span>
        <span>Form / Call</span>
      </div>

      <div className="service-hero-visual">
        <div className="service-browser">
          <div className="service-browser-top" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="service-browser-body">
            <p className="service-mini-kicker">Google Ads → Landing Page</p>
            <strong>{content.proof.visualLabels.browserTitle}</strong>
            <p className="service-mini-copy">Uma landing page focada com uma CTA principal e um formulário curto.</p>
            <div className="service-mini-cta">{content.proof.visualLabels.browserCta}</div>
            <div className="service-mini-form">
              <span>Nome</span>
              <span>Email profissional</span>
              <span>Website atual</span>
            </div>
          </div>
        </div>

        <div className="service-mobile">
          <div className="service-mobile-top" aria-hidden="true" />
          <div className="service-mobile-body">
            <p className="service-mini-kicker">{content.proof.visualLabels.mobileTitle}</p>
            <div className="service-mobile-card">
              <strong>CTA visível</strong>
              <span>1 formulário curto</span>
              <span>Rota clara para contacto</span>
            </div>
          </div>
        </div>
      </div>

      <div className="service-hero-footer">
        <div className="service-hero-badge">
          <strong>Tracking ready</strong>
          <span>GA4 + Google Ads</span>
        </div>
        <div className="service-hero-metrics" aria-hidden="true">
          <span>Mobile first</span>
          <span>Clear CTA</span>
          <span>Short form</span>
        </div>
      </div>
    </aside>
  );
}

function ProofVisual({ content }: { content: CommercialServiceContent }) {
  return (
    <div className="service-proof-visual">
      <div className="service-proof-flow" aria-label={content.proof.flowTitle}>
        {content.proof.scenarioTitle.split(" → ").map((step) => (
          <span className="service-proof-chip" key={step}>
            {step}
          </span>
        ))}
      </div>

      <div className="service-proof-mockups">
        <div className="service-proof-browser">
          <div className="service-browser-top" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="service-proof-browser-body">
            <p className="service-mini-kicker">{content.proof.scenarioLabel}</p>
            <h3>{content.proof.heading}</h3>
            <p className="service-mini-copy">
              Hero focado, prova acima da dobra, formulário curto e estado de booking claro.
            </p>
            <div className="service-proof-state">
              <span>{content.proof.visualLabels.browserCta}</span>
              <span>{content.proof.visualLabels.thankYouLabel}</span>
            </div>
          </div>
        </div>

        <div className="service-proof-phone">
          <p className="service-mini-kicker">{content.proof.visualLabels.mobileTitle}</p>
          <div className="service-proof-phone-card">
            <strong>{content.proof.visualLabels.bookingLabel}</strong>
            <span>Nome</span>
            <span>Email profissional</span>
            <span>Investimento mensal</span>
            <div className="service-mini-cta">{content.proof.visualLabels.browserCta}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIVisual({ content }: { content: CommercialServiceContent }) {
  return (
    <div className="service-chat-card">
      {content.aiMechanism.conversation.map((item, index) => (
        <div className={`service-chat-bubble is-${item.role}`} key={`${item.role}-${index}`}>
          <span className="service-chat-role">{item.role === "assistant" ? "Assistente" : "Visitante"}</span>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function PricingCard({ item }: { item: CommercialServiceContent["pricing"]["items"][number] }) {
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

function FAQItem({ item }: { item: CommercialServiceContent["faq"][number] }) {
  return (
    <details className="solution-faq-item">
      <summary>{item.question}</summary>
      <div className="solution-faq-content">
        <div className="solution-faq-content-inner">
          <p className="muted">{item.answer}</p>
        </div>
      </div>
    </details>
  );
}

export function CommercialServicePage({ content }: CommercialServicePageProps) {
  const canonical = `${siteConfig.url}${content.path}`;

  return (
    <main className="solutions-page service-detail-page" lang="pt-PT">
      <SchemaScripts canonical={canonical} content={content} />

      <section className="solution-shell">
        <div className="container solution-container">
          <Breadcrumb content={content} />

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
                <a className="solution-secondary-link" href="#como-funciona">
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>

            <HeroVisual content={content} />
          </section>

          <Section eyebrow={content.whoThisIsFor.eyebrow} heading={content.whoThisIsFor.heading} body={content.whoThisIsFor.body}>
            <div className="service-intent-panel">
              <div className="service-intent-badges">
                {content.whoThisIsFor.chips.map((chip) => (
                  <span className="service-intent-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <p className="muted service-intent-note">
                Não é uma lista fechada de nichos. É um serviço desenhado para tráfego pago onde a página precisa de orientar o clique até ao contacto.
              </p>
            </div>
          </Section>

          <Section eyebrow={content.problem.eyebrow} heading={content.problem.heading} body={content.problem.body}>
            <div className="solution-grid solution-grid--services">
              {content.problem.items.map((item) => (
                <article className="solution-card service-problem-card" key={item.title}>
                  <span className="service-card-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.body}</p>
                </article>
              ))}
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
                  <p className="muted">
                    Exemplo ilustrativo sem métricas inventadas, nomes falsos ou promessas não verificadas. A competência aparece na estrutura da página, no caminho do utilizador e na prontidão para tracking.
                  </p>
                </article>

                <article className="card service-proof-card">
                  <p className="eyebrow">O que se vê</p>
                  <ul className="service-proof-list">
                    <li>desktop mockup;</li>
                    <li>mobile mockup;</li>
                    <li>estrutura hero;</li>
                    <li>CTA;</li>
                    <li>formulário;</li>
                    <li>elementos de confiança;</li>
                    <li>thank-you state / booking state.</li>
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
                <p className="eyebrow">Tracking readiness</p>
                <h3>Assistente opcional, não obrigação</h3>
                <p className="muted">
                  O mecanismo de IA funciona como um complemento opcional para qualificação de contactos, sem substituir a página principal nem adicionar complexidade desnecessária ao lançamento.
                </p>
              </article>
            </div>
          </Section>

          <section className="solution-section">
            <div className="solution-section-heading">
              <p className="eyebrow">{content.pricing.eyebrow}</p>
              <h2 className="section-title">{content.pricing.heading}</h2>
            </div>

            <div className="pricing-packages-grid">
              {content.pricing.items.map((item) => (
                <PricingCard item={item} key={item.title} />
              ))}
            </div>

            <p className="pricing-note muted">{content.pricing.guarantee}</p>
          </section>

          <section className="solution-section">
            <div className="solution-section-heading">
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title">Perguntas frequentes</h2>
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
                    <span className="solution-card-link">Open page</span>
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
                  <span>Open page</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="solution-final-cta" id="final-audit-form">
            <div className="service-final-grid">
              <div className="service-final-copy">
                <p className="eyebrow">Pedir uma Auditoria Gratuita</p>
                <h2 className="section-title">{content.finalCta.heading}</h2>
                <p className="lead solution-section-lead">{content.finalCta.body}</p>
              </div>
              <div className="card service-form-card">
                <ServiceLeadForm buttonLabel={content.finalCta.buttonLabel} fields={content.finalCta.fields} pagePath={content.path} />
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
