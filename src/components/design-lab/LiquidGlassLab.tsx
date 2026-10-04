"use client";

import { LiquidGlass } from "@sohumsuthar/liquid-glass";
import { useEffect, useState } from "react";

const glassStyle = {
  "--lg-radius": "30px",
  "--lg-blur": "4px",
  "--lg-saturate": "168%",
  "--lg-brightness": "0.86",
  "--lg-contrast": "1.08",
} as React.CSSProperties;

const ctaStyle = {
  "--lg-radius": "999px",
  "--lg-blur": "3px",
  "--lg-saturate": "190%",
  "--lg-brightness": "1.02",
  "--lg-contrast": "1.12",
} as React.CSSProperties;

export function LiquidGlassLab() {
  const [glassOn, setGlassOn] = useState(true);

  useEffect(() => {
    const hadDarkClass = document.documentElement.classList.contains("dark");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.toggle("glass-off", !glassOn);
    document.body.classList.add("liquid-glass-lab-active");
    return () => {
      if (!hadDarkClass) document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("glass-off");
      document.body.classList.remove("liquid-glass-lab-active");
    };
  }, [glassOn]);

  return (
    <main className="liquid-glass-lab" data-glass-state={glassOn ? "on" : "off"}>
      <div className="liquid-glass-lab-backdrop" aria-hidden="true">
        <div className="lab-light-field lab-light-field--cyan" />
        <div className="lab-light-field lab-light-field--blue" />
        <div className="lab-light-field lab-light-field--violet" />
        <div className="lab-grid" />
        <div className="lab-signal-ruler"><span>01</span><i /><i /><i /><i /><i /><b>OPTICAL DATA</b></div>
        <div className="lab-signal-line" />
        <svg className="lab-orbits" viewBox="0 0 1440 920" fill="none" role="presentation">
          <path d="M-160 690C125 150 730 32 1540 250" stroke="url(#lab-cyan-orbit)" strokeWidth="2" />
          <path d="M360 1030C460 690 710 330 1540 -80" stroke="url(#lab-violet-orbit)" strokeWidth="1.5" />
          <path d="M-90 120C240 340 610 390 1510 520" stroke="url(#lab-blue-orbit)" strokeWidth="1" />
          <circle cx="1040" cy="282" r="4" fill="#4CE5E4" />
          <circle cx="1040" cy="282" r="16" fill="#4CE5E4" opacity="0.2" />
          <defs>
            <linearGradient id="lab-cyan-orbit" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#4CE5E4" stopOpacity="0" />
              <stop offset="0.48" stopColor="#4CE5E4" stopOpacity="0.8" />
              <stop offset="1" stopColor="#3495A0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lab-violet-orbit" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#6C7BFF" stopOpacity="0" />
              <stop offset="0.48" stopColor="#8E7CFF" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4CE5E4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lab-blue-orbit" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#5AA9FF" stopOpacity="0" />
              <stop offset="0.55" stopColor="#5AA9FF" stopOpacity="0.35" />
              <stop offset="1" stopColor="#5AA9FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="lab-technical-mark lab-technical-mark--top">OPTICAL / 04</div>
        <div className="lab-technical-mark lab-technical-mark--side">TRANSMISSION 0.58</div>
      </div>

      <header className="liquid-glass-lab-header">
        <div>
          <span className="lab-kicker">KUBERA MATERIAL LAB · V5</span>
          <h1>Liquid light, made visible.</h1>
          <p>Isolated proof surface for transmission, refraction, specular edge light and crisp content.</p>
        </div>
        <button className="lab-toggle" type="button" aria-pressed={glassOn} onClick={() => setGlassOn((value) => !value)}>
          Glass {glassOn ? "on" : "off"}
        </button>
      </header>

      <section className="liquid-glass-lab-stage" aria-label="Liquid glass material comparison">
        <LiquidGlass
          className="lab-glass-panel"
          macro
          lens
          lensOptions={{ bezel: 24, refraction: 2.2, dispersion: 7 }}
          style={glassStyle}
          contentClassName="lab-glass-content"
        >
          <div className="lab-panel-copy">
            <span className="lab-status"><i /> live optical surface</span>
            <h2>Depth can carry the signal.</h2>
            <p>Watch the orbital data and light fields respond at the edge while the foreground stays clean and selectable.</p>
            <div className="lab-actions">
              <LiquidGlass
                className="lab-primary-cta"
                lens
                interactive
                lensOptions={{ bezel: 12, refraction: 1.3, dispersion: 4 }}
                style={ctaStyle}
                contentClassName="lab-cta-content"
              >
                Explore the material
              </LiquidGlass>
              <button className="lab-secondary-control" type="button">Read the optics</button>
            </div>
          </div>
          <div className="lab-panel-readout" aria-label="Material parameters">
            <span>REFRACTION</span><strong>ACTIVE</strong>
            <span>RIM LIGHT</span><strong>FRESNEL</strong>
            <span>CONTENT</span><strong>CRISP</strong>
          </div>
        </LiquidGlass>
      </section>

      <p className="liquid-glass-lab-note">A/B control is local to this lab. The Germany pilot is not modified by this route.</p>
    </main>
  );
}
