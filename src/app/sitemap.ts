import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/cases";
import { getAllBlogPosts } from "@/content/blog";
import { getBlogPublishedDate } from "@/content/blog/helpers";
import { industrySolutions } from "@/content/industry-solutions";
import { countries } from "@/content/countries/countries";
import { geoRoutes } from "@/content/geo/catalog";
import { legacyGeoRoutes } from "@/content/geo/routes";

const baseUrl = "https://www.kubera-automation.com";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{ route: string; priority: number }> = [
    { route: "", priority: 1 },
    { route: "/locations", priority: 0.86 },
    { route: "/services", priority: 0.9 },
    { route: "/services/portugal/landing-page-design", priority: 0.81 },
    { route: "/services/spain/landing-page-design", priority: 0.81 },
    { route: "/services/germany/landing-page-design", priority: 0.81 },
    { route: "/en/solutions", priority: 0.88 },
    { route: "/how-we-work", priority: 0.85 },
    { route: "/cases", priority: 0.8 },
    { route: "/blog", priority: 0.7 },
    { route: "/contacts", priority: 0.85 },
    { route: "/use-cases/ai-voice-agents-home-services", priority: 0.74 },
    { route: "/use-cases/real-estate-lead-automation", priority: 0.74 },
    { route: "/use-cases/n8n-ecommerce-automation", priority: 0.74 },
    { route: "/use-cases/ai-customer-support-ecommerce", priority: 0.74 },
    { route: "/use-cases/ai-front-desk-dental-practices", priority: 0.74 },
    { route: "/use-cases/ai-client-intake-law-firms", priority: 0.74 },
    { route: "/use-cases/ai-receptionist-salons-spas", priority: 0.74 },
    { route: "/ru", priority: 0.9 },
    { route: "/ru/uslugi", priority: 0.85 },
    { route: "/ru/kak-my-rabotaem", priority: 0.8 },
    { route: "/ru/keysy", priority: 0.75 },
    { route: "/ru/blog", priority: 0.65 },
    { route: "/ru/kontakty", priority: 0.8 },
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
      lastModified: new Date(getBlogPublishedDate(post)),
      changeFrequency: "monthly" as const,
      priority: 0.66,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${baseUrl}/cases/${caseStudy.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.74,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${baseUrl}/ru/keysy/${caseStudy.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...countries.map((country) => ({
      url: `${baseUrl}/en/${country.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...geoRoutes.filter((route) => !legacyGeoRoutes.includes(route)).map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...industrySolutions.map((solution) => ({
      url: `${baseUrl}${solution.url}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.79,
    })),
  ];
}
