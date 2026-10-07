import type { ElementType, ReactNode } from "react";

type NeonHeadingProps = {
  as: Extract<ElementType, "h1" | "h2" | "h3">;
  children: string;
  /** Existing heading text selected by semantic presentation data. */
  accentPhrase?: string;
  className?: string;
};

/**
 * Appearance-only heading emphasis. The complete source string remains in the
 * DOM in the same order; the accent phrase is existing text, never new copy.
 */
export function NeonHeading({ as: Tag, children, accentPhrase, className }: NeonHeadingProps) {
  if (!accentPhrase || !children.includes(accentPhrase)) {
    return <Tag className={className}>{children}</Tag>;
  }

  const [before, after] = children.split(accentPhrase);
  const content: ReactNode[] = [
    before,
    <span className="neon-heading__accent" key="accent">{accentPhrase}</span>,
    after,
  ];
  return <Tag className={className}>{content}</Tag>;
}

/**
 * Semantic presentation data only. Values are existing substrings of the
 * authored heading; this registry never changes textContent or SEO wording.
 * Unlisted headings intentionally remain white until an owner-reviewable
 * semantic phrase is specified.
 */
const exactSemanticAccents: Record<string, string> = {
  "Business that grows.": "Business that grows.",
  "Explore practical automation examples": "automation examples",
  "Explore AI automation solutions": "automation solutions",
  "WhatsApp Automation for Businesses in Germany": "for Businesses in Germany",
  "Packages & Pricing": "& Pricing",
  "Tell us about your project and receive a written scope and fixed quote.": "fixed quote.",
  "AI Automation by Market": "by Market",
  "AI Automation Solutions by Industry and Country": "by Industry and Country",
  "Kubera AI Blog": "AI Blog",
  "From first conversation to a working system — 2–5 weeks": "working system",
  "Digital workforce tailored to your business.": "tailored to your business.",
  "Business process automation for German companies": "for German companies",
  "AI Customer Support for E-commerce: Handle More Tickets Without Expanding the Team": "for E-commerce",
  "Digital employees that scale your business.": "scale your business.",
  "How Much Autonomy Should an AI Agent Have Before a Human Steps In?": "Before a Human Steps In?",
  "The Customer Wasn't Ignored. They Were Just Answered by the Wrong System Three Days Later": "Wrong System Three Days Later",
  "Цифровые сотрудники, которые масштабируют ваш бизнес.": "масштабируют ваш бизнес.",
  "Automatización con IA para Empresas Españolas: Trabaja con Inteligencia, Crece sin Límites": "Trabaja con Inteligencia, Crece sin Límites",
};

export function getSemanticHeadingAccent(text: string): string | undefined {
  const exact = exactSemanticAccents[text];
  if (exact) return exact;

  // These are schema-level presentation contracts, not word-count heuristics:
  // service and country templates deliberately encode their market qualifier.
  if (text.startsWith("Landing Page Design for Businesses in ")) {
    return text.slice("Landing Page Design ".length);
  }
  if (text.startsWith("AI Automation for ")) {
    return text.slice("AI Automation ".length);
  }
  return undefined;
}
