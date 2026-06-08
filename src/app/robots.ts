import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host: "https://kubera-automation.com",
    sitemap: "https://kubera-automation.com/sitemap.xml",
  };
}
