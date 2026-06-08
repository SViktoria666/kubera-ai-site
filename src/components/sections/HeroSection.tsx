type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeroSection({ eyebrow = "Living Systems. Smart Automation.", title, lead, ctaLabel, ctaHref }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="hero-title">{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {ctaLabel && ctaHref ? (
          <a className="button" href={ctaHref}>
            {ctaLabel}
          </a>
        ) : null}
      </div>
    </section>
  );
}
