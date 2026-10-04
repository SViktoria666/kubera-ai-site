"use client";

import { LiquidGlass } from "@sohumsuthar/liquid-glass";
import Link from "next/link";
import { useEffect } from "react";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { PricingPackages } from "@/components/sections/PricingPackages";
import { buildSolutionLinks, getHomeFeaturedUseCaseLinks, solutionHubRoute } from "@/content/internal-linking";

const glassStyle = {
  "--lg-radius": "28px",
  "--lg-blur": "4px",
  "--lg-saturate": "168%",
  "--lg-brightness": "0.86",
  "--lg-contrast": "1.08",
} as React.CSSProperties;

export function HomeDesignPrototype() {
  const featuredSolutionLinks = buildSolutionLinks([
    "/en/solutions/germany/dental-automation",
    "/en/solutions/cyprus/real-estate-automation",
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/sweden/recruitment-automation",
    "/en/solutions/estonia/e-commerce-automation",
    "/en/solutions/lithuania/e-commerce-automation",
  ]);
  const featuredUseCaseLinks = getHomeFeaturedUseCaseLinks();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.add("home-design-lab-active");

    return () => {
      document.body.classList.remove("home-design-lab-active");
      document.documentElement.classList.remove("dark");
    };
  }, []);

  return (
    <main className="home-design-prototype">
      <section className="home-prototype-hero">
        <div className="home-prototype-light home-prototype-light--cyan" aria-hidden="true" />
        <div className="home-prototype-light home-prototype-light--blue" aria-hidden="true" />
        <div className="home-prototype-light home-prototype-light--violet" aria-hidden="true" />
        <svg className="home-prototype-orbits" viewBox="0 0 1440 860" fill="none" aria-hidden="true">
          <path d="M-160 710C190 220 760 50 1550 260" stroke="url(#home-cyan-orbit)" strokeWidth="2" />
          <path d="M390 940C530 570 900 250 1570 -80" stroke="url(#home-violet-orbit)" strokeWidth="1.5" />
          <path d="M-110 150C270 355 660 410 1530 520" stroke="url(#home-blue-orbit)" strokeWidth="1" />
          <circle cx="1110" cy="272" r="4" fill="#4CE5E4" />
          <circle cx="1110" cy="272" r="17" fill="#4CE5E4" opacity=".18" />
          <circle cx="922" cy="424" r="3" fill="#AA895E" />
          <defs>
            <linearGradient id="home-cyan-orbit" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#4CE5E4" stopOpacity="0" />
              <stop offset=".48" stopColor="#4CE5E4" stopOpacity=".8" />
              <stop offset="1" stopColor="#3495A0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="home-violet-orbit" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#6C7BFF" stopOpacity="0" />
              <stop offset=".48" stopColor="#8E7CFF" stopOpacity=".55" />
              <stop offset="1" stopColor="#4CE5E4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="home-blue-orbit" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#5AA9FF" stopOpacity="0" />
              <stop offset=".55" stopColor="#5AA9FF" stopOpacity=".34" />
              <stop offset="1" stopColor="#5AA9FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container home-prototype-hero-inner">
          <div className="home-prototype-hero-copy">
            <p className="eyebrow">AI automation systems for growing businesses</p>
            <h1 className="home-prototype-title">
              <span>Systems that work.</span>
              {"\n"}
              <strong>Business that grows.</strong>
            </h1>
            <p className="lead">Kubera AI builds a digital workforce for companies that run on processes and are ready for the next level.</p>
            <div className="home-prototype-actions">
              <Link className="button home-prototype-primary" href="/contacts">Discuss my project</Link>
              <Link className="home-prototype-secondary" href="/services">Explore services</Link>
            </div>
            <p className="home-prototype-proof"><span /> Built around real processes, clear scope and measurable delivery.</p>
          </div>

          <div className="home-prototype-hero-visual" aria-label="Kubera AI system atmosphere" role="img">
            <div className="home-prototype-sphere" aria-hidden="true">
              <span className="home-prototype-sphere-rim" />
              <span className="home-prototype-sphere-core" />
              <span className="home-prototype-sphere-reflection" />
            </div>
            <LiquidGlass className="home-prototype-signal-panel" lens macro lensOptions={{ bezel: 18, refraction: 1.7, dispersion: 5 }} style={glassStyle}>
              <span className="home-prototype-signal-label">LIVE SYSTEM MAP</span>
              <strong>Signal in. Clarity out.</strong>
              <span>Automation that keeps the human decision visible.</span>
            </LiquidGlass>
          </div>
        </div>
      </section>

      <div className="container home-prototype-blog-lead">
        <p className="lead" style={{ margin: 0 }}>
          Explore the blog for practical automation guidance and AI system decisions: <Link href="/blog">Kubera AI Blog</Link>.
        </p>
      </div>

      <PricingPackages locale="en" />
      <LossCalculator locale="en" />

      <section className="section home-prototype-solutions home-prototype-solutions--use-cases">
        <div className="container">
          <div className="home-prototype-section-heading">
            <p className="eyebrow">International use cases</p>
            <h2 className="section-title">Explore practical <span>automation examples</span></h2>
            <p className="lead">Browse a compact set of real use cases before moving into the full services and solution catalogue.</p>
          </div>
          <div className="home-solution-nav-grid">
            {featuredUseCaseLinks.map((item) => (
              <Link className="home-solution-nav-link" href={item.href} key={item.href}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </Link>
            ))}
          </div>
          <div className="home-solution-nav-actions"><Link className="button home-solution-nav-button" href="/services">Explore services</Link></div>
        </div>
      </section>

      <section className="section home-prototype-solutions home-prototype-solutions--featured">
        <div className="container">
          <div className="home-prototype-section-heading">
            <p className="eyebrow">Featured solution pages</p>
            <h2 className="section-title">Explore AI <span>automation solutions</span></h2>
            <p className="lead">Browse country-specific automation pages for hotels, real estate, recruitment, e-commerce, SaaS, clinics, and more.</p>
          </div>
          <div className="home-solution-nav-grid">
            {featuredSolutionLinks.map((item) => (
              <Link className="home-solution-nav-link" href={item.href} key={item.href}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </Link>
            ))}
          </div>
          <div className="home-solution-nav-actions"><Link className="button home-solution-nav-button" href={solutionHubRoute}>View all AI Automation Solutions</Link></div>
        </div>
      </section>
    </main>
  );
}
