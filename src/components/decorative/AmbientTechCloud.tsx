import { readFileSync } from "node:fs";
import path from "node:path";

type AmbientTechCloudVariant = "hero" | "solution" | "compact";
type TechIconId = "openai" | "anthropic" | "n8n" | "openclaw" | "notion" | "github";

type TechIconMeta = {
  className: string;
  fileName: string;
  motionClass: string;
};

const iconDir = path.join(process.cwd(), "public", "images", "tech-icons");

const cloudVariants = {
  hero: ["openai", "anthropic", "n8n", "openclaw", "notion", "github"],
  solution: ["openai", "anthropic", "n8n", "github"],
  compact: ["openai", "n8n", "github"],
} satisfies Record<AmbientTechCloudVariant, TechIconId[]>;

const techIcons = {
  openai: {
    className: "ambient-tech-cloud__icon--openai",
    fileName: "openai.svg",
    motionClass: "ambient-tech-cloud__icon--motion-a",
  },
  anthropic: {
    className: "ambient-tech-cloud__icon--anthropic",
    fileName: "anthropic.svg",
    motionClass: "ambient-tech-cloud__icon--motion-b",
  },
  n8n: {
    className: "ambient-tech-cloud__icon--n8n",
    fileName: "n8n.svg",
    motionClass: "ambient-tech-cloud__icon--motion-c",
  },
  openclaw: {
    className: "ambient-tech-cloud__icon--openclaw",
    fileName: "openclaw.svg",
    motionClass: "ambient-tech-cloud__icon--motion-b",
  },
  notion: {
    className: "ambient-tech-cloud__icon--notion",
    fileName: "notion.svg",
    motionClass: "ambient-tech-cloud__icon--motion-a",
  },
  github: {
    className: "ambient-tech-cloud__icon--github",
    fileName: "github.svg",
    motionClass: "ambient-tech-cloud__icon--motion-c",
  },
} satisfies Record<TechIconId, TechIconMeta>;

function loadIconSvg(fileName: string) {
  return readFileSync(path.join(iconDir, fileName), "utf8");
}

const iconMarkup = {
  openai: loadIconSvg(techIcons.openai.fileName),
  anthropic: loadIconSvg(techIcons.anthropic.fileName),
  n8n: loadIconSvg(techIcons.n8n.fileName),
  openclaw: loadIconSvg(techIcons.openclaw.fileName),
  notion: loadIconSvg(techIcons.notion.fileName),
  github: loadIconSvg(techIcons.github.fileName),
} satisfies Record<TechIconId, string>;

export function AmbientTechCloud({ variant = "hero" }: { variant?: AmbientTechCloudVariant }) {
  return (
    <div className={`ambient-tech-cloud ambient-tech-cloud--${variant}`} aria-hidden="true">
      <span className="ambient-tech-cloud__glow ambient-tech-cloud__glow--left" aria-hidden="true" />
      <span className="ambient-tech-cloud__glow ambient-tech-cloud__glow--right" aria-hidden="true" />
      {cloudVariants[variant].map((iconId) => {
        const icon = techIcons[iconId];

        return (
          <span
            className={`ambient-tech-cloud__icon ${icon.className} ${icon.motionClass}`}
            key={iconId}
            aria-hidden="true"
            data-tech-icon={iconId}
          >
            <span className="ambient-tech-cloud__svg" dangerouslySetInnerHTML={{ __html: iconMarkup[iconId] }} />
          </span>
        );
      })}
    </div>
  );
}
