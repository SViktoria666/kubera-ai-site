import type { Metadata } from "next";
import Link from "next/link";
import { NeonPreviewShell } from "@/components/design-lab/NeonPreviewShell";
import { getAllBlogPosts } from "@/content/blog";
import { caseStudies } from "@/content/cases";
import { countries } from "@/content/countries/countries";
import { geoRoutes } from "@/content/geo/catalog";
import { legacyGeoRoutes, normalizeGeoRoute } from "@/content/geo/routes";
import { industrySolutions } from "@/content/industry-solutions";

export const metadata: Metadata = { title: "Kubera Neon Local Visual Review", robots: { index: false, follow: false, nocache: true } };

type ReviewRoute = { href: string; label: string };

const landingPageRoutes = ["portugal", "spain", "germany", "france", "netherlands", "ireland", "belgium", "italy", "switzerland", "austria", "denmark", "sweden", "finland", "poland", "estonia", "australia", "united-states", "canada", "cyprus", "latvia", "lithuania"].map((country) => `/services/${country}/landing-page-design`);
const useCaseRoutes = ["/use-cases/ai-voice-agents-home-services", "/use-cases/real-estate-lead-automation", "/use-cases/n8n-ecommerce-automation", "/use-cases/ai-customer-support-ecommerce", "/use-cases/ai-front-desk-dental-practices", "/use-cases/ai-client-intake-law-firms", "/use-cases/ai-receptionist-salons-spas"];
const previews: ReviewRoute[] = [
  { href: "/design-lab/neon-preview/home", label: "Home reference — approved geometry and atmosphere" },
  { href: "/design-lab/neon-preview/commercial", label: "Commercial / industry — Germany WhatsApp" },
  { href: "/design-lab/neon-preview/geo", label: "GEO / regional — Germany automation" },
  { href: "/design-lab/neon-preview/contacts", label: "Contacts / forms" },
  { href: "/design-lab/neon-preview/landing-page", label: "Landing-page / website-building — Germany" },
];

function label(href: string) { return href.replace(/^\//, "").replaceAll("/", " › "); }
function unique(routes: ReviewRoute[]) { return [...new Map(routes.map((route) => [route.href, route])).values()].sort((a, b) => a.href.localeCompare(b.href)); }

export default function NeonPreviewIndexPage() {
  const groups = [
    { name: "Home / shared", routes: [{ href: "/", label: "Home" }, { href: "/locations", label: "Locations" }, { href: "/services", label: "Services" }, { href: "/en/solutions", label: "Solutions" }, { href: "/how-we-work", label: "How we work" }] },
    { name: "Commercial / industry", routes: industrySolutions.map((item) => ({ href: item.url, label: item.hero.title })) },
    { name: "GEO / regional / country", routes: [...countries.map((item) => ({ href: `/en/${item.slug}`, label: item.country })), ...geoRoutes.filter((route) => !legacyGeoRoutes.includes(route)).map((route) => ({ href: normalizeGeoRoute(route), label: label(normalizeGeoRoute(route)) }))] },
    { name: "Use cases", routes: useCaseRoutes.map((href) => ({ href, label: label(href) })) },
    { name: "Cases", routes: [{ href: "/cases", label: "Cases index" }, ...caseStudies.map((item) => ({ href: `/cases/${item.slug}`, label: item.title }))] },
    { name: "Landing-page / website-building", routes: landingPageRoutes.map((href) => ({ href, label: label(href) })) },
    { name: "Blog", routes: [{ href: "/blog", label: "Blog index" }, ...getAllBlogPosts().map((item) => ({ href: item.url, label: item.frontmatter.title }))] },
    { name: "Contacts", routes: [{ href: "/contacts", label: "Contacts" }] },
    { name: "RU", routes: [{ href: "/ru", label: "RU home" }, { href: "/ru/uslugi", label: "RU services" }, { href: "/ru/kak-my-rabotaem", label: "RU how we work" }, { href: "/ru/keysy", label: "RU cases" }, { href: "/ru/blog", label: "RU blog" }, { href: "/ru/kontakty", label: "RU contacts" }, ...caseStudies.map((item) => ({ href: `/ru/keysy/${item.slug}`, label: item.title }))] },
    { name: "ES", routes: [{ href: "/es/espana-automatizacion", label: "España automatización" }] },
  ].map((group) => ({ ...group, routes: unique(group.routes) }));
  const total = groups.reduce((sum, group) => sum + group.routes.length, 0);

  return <NeonPreviewShell className="neon-preview-index"><main>
    <section className="neon-preview-index__hero"><div className="container"><p className="eyebrow">Protected local review · Wave 1</p><h1 className="hero-title">Kubera Neon across real page families.</h1><p className="lead">Five protected Neon review surfaces appear first. The source-of-truth index below lists {total} indexable routes grouped for systematic local visual review. Normal public routes remain unchanged.</p><div className="neon-preview-index__grid">{previews.map((route) => <Link className="card neon-preview-index__link" href={route.href} key={route.href}><strong>{route.label}</strong><small>{route.href}</small></Link>)}</div></div></section>
    {groups.map((group) => <section className="container neon-review-group" key={group.name}><h2>{group.name} <span>({group.routes.length})</span></h2><div className="neon-review-group__routes">{group.routes.map((route) => <Link href={route.href} key={route.href}>{route.label}<small>{route.href}</small></Link>)}</div></section>)}
  </main></NeonPreviewShell>;
}
