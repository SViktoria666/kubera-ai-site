"use client";

import { LiquidGlass } from "@sohumsuthar/liquid-glass";
import { useEffect, useRef, useState } from "react";

type ThemeName = "current" | "kubera-neon";
type ButtonVariant = "primary" | "secondary" | "language" | "icon" | "compact";
type MaterialVariant = "clean" | "optical" | "chromatic";

const liquidGlassStyle = {
  "--lg-radius": "24px",
  "--lg-blur": "5px",
  "--lg-saturate": "170%",
  "--lg-brightness": "0.88",
  "--lg-contrast": "1.08",
} as React.CSSProperties;

function KuberaButton({
  children,
  variant = "primary",
  material = "clean",
  disabled = false,
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  material?: MaterialVariant;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={ariaLabel}
      className={`ui-kit-button ui-kit-button--${variant} ui-kit-button--${material} ${className}`.trim()}
    >
      <span>{children}</span>
    </button>
  );
}

function ThemeSwitcher({ theme, onChange }: { theme: ThemeName; onChange: (value: ThemeName) => void }) {
  return (
    <div className="ui-kit-theme-switcher" aria-label="UI Kit theme">
      <span className="ui-kit-control-label">Theme</span>
      <div className="ui-kit-segmented" role="group" aria-label="Choose theme">
        {(["current", "kubera-neon"] as ThemeName[]).map((option) => (
          <button
            type="button"
            key={option}
            className={theme === option ? "is-selected" : ""}
            aria-pressed={theme === option}
            onClick={() => onChange(option)}
          >
            {option === "current" ? "Current" : "Kubera Neon"}
          </button>
        ))}
      </div>
    </div>
  );
}

function GeometryLock({ theme }: { theme: ThemeName }) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [baseline, setBaseline] = useState<{ width: number; height: number } | null>(null);
  const [status, setStatus] = useState<"measuring" | "pass" | "fail">("measuring");

  useEffect(() => {
    const node = anchorRef.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    if (!baseline) {
      setBaseline({ width: box.width, height: box.height });
      setStatus("pass");
      return;
    }
    setStatus(Math.abs(baseline.width - box.width) < 0.5 && Math.abs(baseline.height - box.height) < 0.5 ? "pass" : "fail");
  }, [theme, baseline]);

  return (
    <div className="ui-kit-geometry-lock" ref={anchorRef}>
      <span>Geometry lock</span>
      <strong>{status === "pass" ? "PASS" : status === "fail" ? "FAIL" : "MEASURING"}</strong>
      <small>{baseline ? `${Math.round(baseline.width)} × ${Math.round(baseline.height)} px baseline` : "Capturing baseline"}</small>
    </div>
  );
}

export function UiKitLab() {
  const [theme, setTheme] = useState<ThemeName>("kubera-neon");
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <main className="ui-kit-lab" data-theme={theme}>
      <div className="ui-kit-atmosphere ui-kit-atmosphere--cyan" aria-hidden="true" />
      <div className="ui-kit-atmosphere ui-kit-atmosphere--blue" aria-hidden="true" />
      <div className="ui-kit-atmosphere ui-kit-atmosphere--violet" aria-hidden="true" />
      <header className="ui-kit-lab-header">
        <div>
          <p className="ui-kit-kicker">Kubera UI foundation · isolated lab</p>
          <h1>Structure stays. Appearance can change.</h1>
          <p>One DOM, one geometry, two semantic themes. The lab is the review surface for reusable glass and neon primitives.</p>
        </div>
        <div className="ui-kit-header-tools">
          <ThemeSwitcher theme={theme} onChange={setTheme} />
          <div className="ui-kit-active-theme" aria-live="polite" data-testid="active-theme">
            <span className="ui-kit-control-label">Active appearance</span>
            <strong>{theme === "current" ? "CURRENT / LEGACY" : "KUBERA NEON"}</strong>
            <span className={`ui-kit-theme-swatch ui-kit-theme-swatch--${theme}`} aria-hidden="true" />
          </div>
          <GeometryLock theme={theme} />
        </div>
      </header>

      <section className="ui-kit-section" aria-labelledby="button-title">
        <div className="ui-kit-section-heading"><p className="ui-kit-kicker">01 · Interaction</p><h2 id="button-title">Buttons that keep their material through every state.</h2></div>
        <div className="ui-kit-material-grid">
          {(["clean", "optical", "chromatic"] as MaterialVariant[]).map((material) => (
            <article className="ui-kit-sample-panel" key={material}>
              <div className="ui-kit-sample-label"><span>{material === "clean" ? "A" : material === "optical" ? "B" : "C"}</span><strong>{material === "clean" ? "Artisan Cyan Glass" : material === "optical" ? "Optical Cyan Glass" : "Chromatic Cyan Glass"}</strong></div>
              <KuberaButton material={material}>Discuss my project</KuberaButton>
              <small>Normal · hover · focus-visible · active · disabled</small>
            </article>
          ))}
        </div>
        <div className="ui-kit-state-row">
          <KuberaButton variant="secondary">Explore services</KuberaButton>
          <KuberaButton variant="language" ariaLabel="English">EN</KuberaButton>
          <KuberaButton variant="language">RU</KuberaButton>
          <KuberaButton variant="compact">View all solutions</KuberaButton>
          <KuberaButton variant="icon" ariaLabel="Open details">↗</KuberaButton>
          <KuberaButton disabled>Unavailable</KuberaButton>
        </div>
      </section>

      <section className="ui-kit-section ui-kit-section--split" aria-labelledby="surface-title">
        <div className="ui-kit-section-heading"><p className="ui-kit-kicker">02 · Surfaces</p><h2 id="surface-title">Glass is a focal material, not wallpaper.</h2></div>
        <div className="ui-kit-surface-grid">
          <LiquidGlass className="ui-kit-glass-card" lens macro lensOptions={{ bezel: 18, refraction: 1.7, dispersion: 5 }} style={liquidGlassStyle}>
            <div className="ui-kit-card-inner"><span className="ui-kit-card-light" aria-hidden="true" /><p className="ui-kit-kicker">Primary glass surface</p><h3>Light catches the edge, content stays crisp.</h3><p>Transmission, refraction, specular edge and depth remain behind a simple reusable component API.</p><KuberaButton material="optical" variant="compact">Inspect surface</KuberaButton></div>
          </LiquidGlass>
          <div className="ui-kit-form-panel">
            <label>Project name<input suppressHydrationWarning placeholder="Your next system" /></label>
            <label>Material preference<select defaultValue="optical"><option value="clean">Clean cyan glass</option><option value="optical">Cyan + blue optical edge</option><option value="chromatic">Controlled violet edge</option></select></label>
            <label className="ui-kit-switch-row"><span>Atmospheric lighting</span><button type="button" className={`ui-kit-switch ${switchOn ? "is-on" : ""}`} aria-pressed={switchOn} onClick={() => setSwitchOn(!switchOn)}><span /></button></label>
            <div className="ui-kit-form-actions"><KuberaButton variant="secondary" ariaLabel="Reset form">Reset</KuberaButton><KuberaButton variant="compact">Continue</KuberaButton></div>
          </div>
        </div>
      </section>

      <section className="ui-kit-section" aria-labelledby="signals-title">
        <div className="ui-kit-section-heading"><p className="ui-kit-kicker">03 · Semantic roles</p><h2 id="signals-title">Cyan is functional. Gold is brand.</h2></div>
        <div className="ui-kit-role-grid">
          <div className="ui-kit-role-card"><span className="ui-kit-badge">MOST POPULAR</span><h3>Recommended surface</h3><p>Badge, action, focus and selected states use theme roles rather than literal yellow values.</p><KuberaButton>Choose this path</KuberaButton></div>
          <div className="ui-kit-role-card ui-kit-role-card--quiet"><span className="ui-kit-gold-mark">KUBERA</span><h3>Brand detail stays restrained.</h3><p>The logo and premium identity can remain gold while functional energy stays cyan.</p><KuberaButton variant="secondary">Read the rule</KuberaButton></div>
        </div>
      </section>

      <footer className="ui-kit-lab-footer"><span>Design Lab · no production route changed.</span><span>Owner visual approval: pending.</span></footer>
    </main>
  );
}
