import Link from "next/link";
import { AmbientTechCloud } from "@/components/decorative/AmbientTechCloud";
import { getSemanticHeadingAccent, NeonHeading } from "@/components/core/NeonHeading";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  accent?: string;
};

export function HeroSection({ eyebrow, title, lead, ctaLabel, ctaHref, accent }: HeroSectionProps) {
  return (
    <section className="hero">
      <AmbientTechCloud variant="hero" />
      <div className="container hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <NeonHeading as="h1" className="hero-title" accentPhrase={accent ?? getSemanticHeadingAccent(title)}>{title}</NeonHeading>
        {lead ? <p className="lead">{lead}</p> : null}
        {ctaLabel && ctaHref ? (
          <Link
            className="button"
            href={ctaHref}
            data-analytics-event="primary_cta_click"
            data-analytics-placement="hero"
            data-analytics-cta-id="hero-primary"
            data-analytics-cta-label-key="hero_primary"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
