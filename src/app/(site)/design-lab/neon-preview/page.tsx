import type { Metadata } from "next";
import Link from "next/link";
import { NeonPreviewShell } from "@/components/design-lab/NeonPreviewShell";
import { getAllBlogPosts } from "@/content/blog";
import { caseStudies } from "@/content/cases";
import { countries } from "@/content/countries/countries";
import { geoRoutes } from "@/content/geo/catalog";
import { industrySolutions } from "@/content/industry-solutions";

export const metadata: Metadata = { title: "Kubera Neon Local Visual Review", robots: { index: false, follow: false, nocache: true } };

type ReviewStatus = "NOT REVIEWED" | "PASS" | "ISSUE" | "FIXED" | "RECHECK";
type ReviewRoute = { href: string; label: string; status?: ReviewStatus };

const landingPageRoutes = ["portugal", "spain", "germany", "france", "netherlands", "ireland", "belgium", "italy", "switzerland", "austria", "denmark", "sweden", "finland", "poland", "estonia", "australia", "united-states", "canada", "cyprus", "latvia", "lithuania"].map((country) => `/services/${country}/landing-page-design`);
const useCaseRoutes = ["/use-cases/ai-voice-agents-home-services", "/use-cases/real-estate-lead-automation", "/use-cases/n8n-ecommerce-automation", "/use-cases/ai-customer-support-ecommerce", "/use-cases/ai-front-desk-dental-practices", "/use-cases/ai-client-intake-law-firms", "/use-cases/ai-receptionist-salons-spas"];
const previews: ReviewRoute[] = [
  { href: "/design-lab/neon-preview/home", label: "Home reference - approved geometry and atmosphere" },
  { href: "/design-lab/neon-preview/commercial", label: "Commercial / industry - Germany WhatsApp" },
  { href: "/design-lab/neon-preview/geo", label: "GEO / regional - Germany automation" },
  { href: "/design-lab/neon-preview/contacts", label: "Contacts / forms" },
  { href: "/design-lab/neon-preview/landing-page", label: "Landing-page / website-building - Germany" },
];
const reviewAnchors: ReviewRoute[] = [
  { href: "/", label: "HOME" },
  { href: "/how-we-work", label: "HOW WE WORK" },
  { href: "/services", label: "SERVICES" },
  { href: "/en/solutions/germany/whatsapp-automation", label: "COMMERCIAL / INDUSTRY" },
  { href: "/en/germany-automation", label: "GEO / COUNTRY" },
  { href: "/use-cases/ai-customer-support-ecommerce", label: "USE CASES" },
  { href: "/cases", label: "CASES" },
  { href: "/services/germany/landing-page-design", label: "LANDING PAGES" },
  { href: "/blog", label: "BLOG INDEX" },
  { href: "/blog/ai-agent-autonomy-human-in-the-loop", label: "BLOG ARTICLE" },
  { href: "/contacts", label: "CONTACTS" },
  { href: "/ru", label: "RU" },
  { href: "/es/espana-automatizacion", label: "ES" },
  { href: "/cases", label: "DEMO → /cases (redirect destination)" },
];

function label(href: string) { return href.replace(/^\//, "").replaceAll("/", " > "); }
function protectedHref(href: string) {
  // The dedicated reference pages are already isolated Neon surfaces; keep
  // their established stable URLs for existing review/test links. Real site
  // routes receive the local-only query scope.
  if (href.startsWith("/design-lab/neon-preview/")) return href;
  return `${href}${href.includes("?") ? "&" : "?"}neon=1`;
}
function unique(routes: ReviewRoute[]) {
  return [...new Map(routes.map((route) => [route.href, { ...route, status: route.status ?? "NOT REVIEWED" }])).values()].sort((a, b) => a.href.localeCompare(b.href));
}

export default function NeonPreviewIndexPage() {
  const groups = [
    { name: "Home / shared", routes: [{ href: "/", label: "Home" }, { href: "/locations", label: "Locations" }, { href: "/services", label: "Services" }, { href: "/en/solutions", label: "Solutions" }, { href: "/how-we-work", label: "How we work" }] },
    { name: "Commercial / industry", routes: industrySolutions.map((item) => ({ href: item.url, label: item.hero.title })) },
    { name: "GEO / regional / country", routes: [...countries.map((item) => ({ href: `/en/${item.slug}`, label: item.country })), ...geoRoutes.map((route) => ({ href: route, label: label(route) }))] },
    { name: "Use cases", routes: useCaseRoutes.map((href) => ({ href, label: label(href) })) },
    { name: "Cases", routes: [{ href: "/cases", label: "Cases index" }, ...caseStudies.map((item) => ({ href: `/cases/${item.slug}`, label: item.title }))] },
    { name: "Landing-page / website-building", routes: landingPageRoutes.map((href) => ({ href, label: label(href) })) },
    { name: "Blog", routes: [{ href: "/blog", label: "Blog index" }, ...getAllBlogPosts().map((item) => ({ href: item.url, label: item.frontmatter.title }))] },
    { name: "Contacts", routes: [{ href: "/contacts", label: "Contacts" }] },
    { name: "RU", routes: [{ href: "/ru", label: "RU home" }, { href: "/ru/uslugi", label: "RU services" }, { href: "/ru/kak-my-rabotaem", label: "RU how we work" }, { href: "/ru/keysy", label: "RU cases" }, { href: "/ru/blog", label: "RU blog" }, { href: "/ru/kontakty", label: "RU contacts" }, ...caseStudies.map((item) => ({ href: `/ru/keysy/${item.slug}`, label: item.title }))] },
    { name: "ES", routes: [{ href: "/es/espana-automatizacion", label: "Spain automation" }] },
  ].map((group) => ({ ...group, routes: unique(group.routes) }));
  const allRoutes = unique(groups.flatMap((group) => group.routes));
  const total = allRoutes.length;
  const notReviewed = allRoutes.filter((route) => route.status === "NOT REVIEWED").length;

  return <NeonPreviewShell className="neon-preview-index"><main>
    <section className="neon-preview-index__hero"><div className="container"><p className="eyebrow">Protected local review - systemic parity correction</p><h1 className="hero-title">Kubera Neon across real page families.</h1><p className="lead">The approved reference surfaces and the family anchors below are direct protected review links. The source-of-truth index lists {total} indexable routes for automated and later owner review. Normal public routes remain unchanged.</p><p className="neon-review-progress" aria-live="polite"><strong>{notReviewed}</strong> routes not reviewed yet. Status is route-level evidence; automated checks never become owner approval.</p><div className="neon-preview-index__grid">{[...previews, ...reviewAnchors].map((route, index) => <Link className="card neon-preview-index__link" href={protectedHref(route.href)} key={`${route.href}-${index}`}><strong>{route.label}</strong><small>{route.href === "/cases" && route.label.startsWith("DEMO") ? "Intentional /demo → /cases redirect" : route.href}</small><span className="neon-review-status">NOT REVIEWED</span></Link>)}</div></div></section>
    {groups.map((group) => <section className="container neon-review-group" key={group.name}><h2>{group.name} <span>({group.routes.length})</span></h2><div className="neon-review-group__routes">{group.routes.map((route) => <Link href={protectedHref(route.href)} key={route.href}>{route.label}<small>{route.href}</small><span className="neon-review-status">{route.status}</span></Link>)}</div></section>)}
  </main></NeonPreviewShell>;
}
