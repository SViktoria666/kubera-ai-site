type AmbientTechCloudVariant = "hero" | "solution" | "compact";

const cloudWords = {
  hero: ["ChatGPT", "Claude", "n8n", "OpenClaw", "Notion", "GitHub"],
  solution: ["ChatGPT", "Claude", "n8n", "GitHub"],
  compact: ["ChatGPT", "n8n", "GitHub"],
} satisfies Record<AmbientTechCloudVariant, string[]>;

export function AmbientTechCloud({ variant = "hero" }: { variant?: AmbientTechCloudVariant }) {
  return (
    <div className={`ambient-tech-cloud ambient-tech-cloud--${variant}`} aria-hidden="true">
      <span className="ambient-tech-cloud__glow ambient-tech-cloud__glow--left" aria-hidden="true" />
      <span className="ambient-tech-cloud__glow ambient-tech-cloud__glow--right" aria-hidden="true" />
      {cloudWords[variant].map((word) => (
        <span className={`ambient-tech-cloud__word ambient-tech-cloud__word--${word.toLowerCase()}`} key={word}>
          {word}
        </span>
      ))}
    </div>
  );
}
