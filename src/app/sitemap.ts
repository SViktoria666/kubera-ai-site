import type { MetadataRoute } from "next";
import { countries } from "@/content/countries/countries";

const baseUrl = "https://kubera-automation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/how-we-work",
    "/cases",
    "/blog",
    "/contacts",
    "/ru",
    "/ru/uslugi",
    "/ru/kak-my-rabotaem",
    "/ru/keysy",
    "/ru/blog",
    "/ru/kontakty",
    "/es/espana-automatizacion",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...countries.map((country) => ({
      url: `${baseUrl}/en/${country.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

