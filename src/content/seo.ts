import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  locale: "en" | "ru" | "es";
  image?: string;
};

const localeAlternates = {
  en: "/",
  ru: "/ru",
  es: "/es/espana-automatizacion",
};

export function createPageMetadata({ title, description, path, locale, image = siteConfig.defaultOgImage }: PageSeoInput): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "x-default": "/",
        "en-US": locale === "en" ? path : localeAlternates.en,
        "ru-RU": locale === "ru" ? path : localeAlternates.ru,
        "es-ES": locale === "es" ? path : localeAlternates.es,
      },
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}
