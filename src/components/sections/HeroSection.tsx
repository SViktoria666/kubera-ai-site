import Link from "next/link";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeroSection({ eyebrow, title, lead, ctaLabel, ctaHref }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="hero-title">{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {ctaLabel && ctaHref ? (
          <Link
            className="button"
            href={ctaHref}
            data-matomo-event="cta_click"
            data-matomo-category="CTA"
            data-matomo-action="Hero"
            data-matomo-label={ctaLabel}
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
