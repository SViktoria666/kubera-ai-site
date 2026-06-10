import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoPage } from "@/components/geo/GeoPage";
import { getGeoPageByRoute } from "@/content/geo/loader";
import { siteConfig } from "@/content/site";

const route = "/automatizacion-ia-espana";

export async function generateMetadata(): Promise<Metadata> {
  const page = getGeoPageByRoute(route);

  if (!page) {
    return {};
  }

  const canonical = `${siteConfig.url}${page.route}`;

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.route,
      languages: {
        "x-default": "/locations",
        "es-ES": page.route,
      },
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: "es_ES",
      type: "website",
      images: [{ url: siteConfig.defaultOgImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.metaDescription,
      images: [siteConfig.defaultOgImage],
    },
  };
}

export default function SpainGeoPage() {
  const page = getGeoPageByRoute(route);

  if (!page) {
    notFound();
  }

  return <GeoPage page={page} />;
}
