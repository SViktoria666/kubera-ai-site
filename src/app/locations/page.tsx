import type { Metadata } from "next";
import { GeoIndexPage } from "@/components/geo/GeoIndexPage";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "AI Automation Locations | Kubera AI",
  description: "Browse all Kubera AI GEO country pages for AI automation, CRM, sales, and workflow systems across Europe.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "AI Automation Locations | Kubera AI",
    description: "Browse all Kubera AI GEO country pages for AI automation, CRM, sales, and workflow systems across Europe.",
    url: `${siteConfig.url}/locations`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: siteConfig.defaultOgImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Locations | Kubera AI",
    description: "Browse all Kubera AI GEO country pages for AI automation, CRM, sales, and workflow systems across Europe.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function LocationsPage() {
  return <GeoIndexPage />;
}
