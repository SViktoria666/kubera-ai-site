import fs from "node:fs";
import path from "node:path";
import { expect, test, type Page } from "@playwright/test";

const canonicalHost = "https://www.kubera-automation.com";
const representativeRoutes = [
  "/",
  "/services",
  "/services/portugal/landing-page-design",
  "/en/solutions/spain/whatsapp-automation",
  "/en/spain-automation",
  "/blog",
  "/blog/ai-agent-autonomy-human-in-the-loop",
  "/contacts",
  "/ru",
  "/ru/uslugi",
  "/ru/blog",
  "/ru/kontakty",
];

function parseJsonLd(page: Page) {
  return page.locator('script[type="application/ld+json"]').evaluateAll((scripts) =>
    scripts.map((script) => JSON.parse(script.textContent || "null")),
  );
}

async function assertRenderedSeo(page: Page, route: string) {
  const response = await page.goto(route, { waitUntil: "domcontentloaded" });
  expect(response?.status(), `${route} response`).toBe(200);
  await page.waitForLoadState("load");

  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
  await expect(page.locator("link[rel='canonical']")).toHaveAttribute("href", new RegExp(`^${canonicalHost.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  await expect(page.locator("h1")).toHaveCount(1);

  const headText = await page.locator("head").innerText();
  expect(headText).not.toMatch(/localhost|127\.0\.0\.1|vercel\.app/i);

  const schemas = await parseJsonLd(page);
  expect(schemas.length, `${route} must render structured data`).toBeGreaterThan(0);
  for (const schema of schemas) {
    expect(schema["@context"], `${route} JSON-LD context`).toBe("https://schema.org");
    const serialized = JSON.stringify(schema);
    expect(serialized).not.toMatch(/localhost|127\.0\.0\.1|vercel\.app/i);
  }
}

test.describe("rendered SEO primitives", () => {
  for (const route of representativeRoutes) {
    test(`${route} exposes canonical metadata, one H1, and parseable JSON-LD`, async ({ page }) => {
      await assertRenderedSeo(page, route);
    });
  }
});

test("blog index composition and sitemap contain the same published article routes", async ({ page, request }) => {
  const blogSourceDir = path.resolve("content/blog");
  const sourceSlugs = fs
    .readdirSync(blogSourceDir)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => `/blog/${path.basename(fileName, ".md")}`)
    .sort();

  await page.goto("/blog", { waitUntil: "domcontentloaded" });
  const indexRoutes = await page.locator('a[href^="/blog/"]').evaluateAll((links) =>
    [...new Set(links.map((link) => link.getAttribute("href") || ""))].sort(),
  );
  expect(indexRoutes).toEqual(sourceSlugs);

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.status()).toBe(200);
  const xml = await sitemapResponse.text();
  const sitemapRoutes = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname)
    .filter((route) => route.startsWith("/blog/"))
    .sort();
  expect(new Set(sitemapRoutes).size).toBe(sitemapRoutes.length);
  expect(sitemapRoutes).toEqual(sourceSlugs);
});
