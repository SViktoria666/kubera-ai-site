import type { ElementType, ReactNode } from "react";

type NeonHeadingProps = {
  as: Extract<ElementType, "h1" | "h2" | "h3">;
  children: string;
  accent?: string;
  className?: string;
};

/**
 * Appearance-only heading emphasis. The complete source string remains in the
 * DOM in the same order; the accent phrase is existing text, never new copy.
 */
export function NeonHeading({ as: Tag, children, accent, className }: NeonHeadingProps) {
  if (!accent || !children.includes(accent)) {
    return <Tag className={className}>{children}</Tag>;
  }

  const [before, after] = children.split(accent);
  const content: ReactNode[] = [
    before,
    <span className="neon-heading__accent" key="accent">{accent}</span>,
    after,
  ];
  return <Tag className={className}>{content}</Tag>;
}

export function getNeonAccent(text: string): string | undefined {
  const normalized = text.replace(/\s+/g, " ").trim();
  // Use the existing terminal phrase as an appearance-only accent. This is
  // deliberately content-agnostic and avoids encoding-sensitive punctuation
  // heuristics while preserving the exact heading text and SEO semantics.
  const words = normalized.split(" ").filter(Boolean);
  if (words.length >= 2) return words.slice(-2).join(" ");
  return undefined;
}
