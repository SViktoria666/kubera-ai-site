import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/content/blog";
import { countries } from "@/content/countries/countries";
import { geoRoutes } from "@/content/geo/catalog";

const baseUrl = "https://kubera-automation.com";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{ route: string; priority: number }> = [
    { route: "", priority: 1 },
    { route: "/locations", priority: 0.86 },
    { route: "/services", priority: 0.9 },
    { route: "/how-we-work", priority: 0.85 },
    { route: "/cases", priority: 0.8 },
    { route: "/blog", priority: 0.7 },
    { route: "/contacts", priority: 0.85 },
    { route: "/ru", priority: 0.9 },
    { route: "/ru/uslugi", priority: 0.85 },
    { route: "/ru/kak-my-rabotaem", priority: 0.8 },
    { route: "/ru/keysy", priority: 0.75 },
    { route: "/ru/blog", priority: 0.65 },
    { route: "/ru/kontakty", priority: 0.8 },
    { route: "/es/espana-automatizacion", priority: 0.8 },
  ];

  return [
    ...staticRoutes.map(({ route, priority }) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...getAllBlogPosts().map((post) => ({
      url: `${baseUrl}${post.url}`,
      lastModified: new Date(post.frontmatter.date),
      changeFrequency: "monthly" as const,
      priority: 0.66,
    })),
    ...countries.map((country) => ({
      url: `${baseUrl}/en/${country.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...geoRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
  ];
}
