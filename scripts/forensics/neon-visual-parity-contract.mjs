import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const base = "http://127.0.0.1:3105";
const routes = [
  ["Home", "/", "Business that grows."],
  ["How We Work", "/how-we-work", "working system"],
  ["Services", "/services", "tailored to your business."],
  ["Commercial", "/en/solutions/germany/whatsapp-automation", "for Businesses in Germany"],
  ["GEO", "/en/germany-automation", "for German companies"],
  ["Use Cases", "/use-cases/ai-customer-support-ecommerce", "for E-commerce"],
  ["Cases", "/cases", "scale your business."],
  ["Landing Pages", "/services/germany/landing-page-design", "for Businesses in Germany"],
  ["Blog index", "/blog", "AI Blog"],
  ["Blog article", "/blog/ai-agent-autonomy-human-in-the-loop", "Before a Human Steps In?"],
  ["Contacts", "/contacts"],
  ["RU", "/ru"],
  ["ES", "/automatizacion-ia-espana"],
  ["Case detail", "/cases/customer-communications", "Wrong System Three Days Later"],
  ["RU cases", "/ru/keysy"],
];
const forbidden = ["rgb(26, 5, 51)", "rgb(42, 16, 69)", "rgb(16, 0, 32)", "rgb(21, 3, 41)", "rgb(9, 0, 17)", "rgba(11, 4, 24", "rgba(5, 2, 14"];
const browser = await chromium.launch({ headless: true });
const results = [];

for (const [family, route, expectedAccent] of routes) {
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  const response = await page.goto(`${base}${route}?neon=1`, { waitUntil: "domcontentloaded", timeout: 20000 });
  await page.waitForSelector(".neon-preview-sitewide", { state: "attached", timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(100);
  const state = await page.evaluate(({ patterns, expectedAccent }) => {
    const surfaces = [...document.querySelectorAll("main, section, article, aside, .card, .solution-section, .site-footer")];
    const legacy = surfaces.filter((node) => {
      const style = getComputedStyle(node);
      const value = `${style.backgroundColor} ${style.backgroundImage}`;
      const rect = node.getBoundingClientRect();
      return rect.width * rect.height > 30000 && patterns.some((pattern) => value.includes(pattern));
    });
    const headings = [...document.querySelectorAll("h1, .solution-section-heading > h2, .home-solution-nav-card h2")];
    const accentHeadings = headings.filter((heading) => heading.querySelector(".neon-heading__accent"));
    const accentNodes = [...document.querySelectorAll(".neon-heading__accent")];
    const accentStyles = accentNodes.map((node) => getComputedStyle(node).color);
    const firstHeading = document.querySelector("h1");
    const accentText = firstHeading?.querySelector(".neon-heading__accent")?.textContent ?? "";
    return {
      path: window.location.pathname,
      scope: Boolean(document.querySelector(".neon-preview-sitewide")),
      h1: document.querySelector("h1")?.textContent ?? "",
      headings: headings.length,
      accentHeadings: accentHeadings.length,
      accentStyles,
      headingText: firstHeading?.textContent ?? "",
      accentText,
      expectedAccent: expectedAccent ?? null,
      semanticAccentPass: expectedAccent ? accentText === expectedAccent && accentStyles.includes("rgb(76, 229, 228)") : true,
      legacySurfaceCount: legacy.length,
      legacySurfaces: legacy.map((node) => ({ tag: node.tagName, className: String(node.className) })),
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    };
  }, { patterns: forbidden, expectedAccent });
  results.push({ family, route, status: response?.status() ?? 0, ...state, pass: response?.status() === 200 && state.scope && state.legacySurfaceCount === 0 && state.semanticAccentPass && !state.overflow });
  await page.close();
}

const review = await browser.newPage({ viewport: { width: 1366, height: 768 } });
await review.goto(`${base}/design-lab/visual-review`, { waitUntil: "networkidle" });
const reviewState = await review.evaluate(() => {
  const hrefs = [...document.querySelectorAll("a")].map((a) => a.getAttribute("href") ?? "");
  const labels = document.body.innerText;
  return {
    protectedRouteLinks: hrefs.filter((href) => href.includes("neon=1")).length,
    hasDemoDestination: labels.includes("DEMO → /cases") && hrefs.some((href) => href.includes("/cases?neon=1")),
    hasBlogIndex: labels.includes("BLOG INDEX"),
    hasBlogArticle: labels.includes("BLOG ARTICLE"),
    hasHowWeWork: labels.includes("HOW WE WORK"),
    noindex: document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "",
  };
});
results.push({ family: "Visual Review Index", route: "/design-lab/visual-review", ...reviewState, pass: reviewState.protectedRouteLinks > 0 && reviewState.hasDemoDestination && reviewState.hasBlogIndex && reviewState.hasBlogArticle && reviewState.hasHowWeWork && reviewState.noindex.includes("noindex") });
await review.close();
await browser.close();

const report = { generatedAt: new Date().toISOString(), base, routes: results, failures: results.filter((result) => !result.pass) };
fs.writeFileSync(path.join(root, "reports/KUBERA_NEON_VISUAL_PARITY_CONTRACT_2026-10-07.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ checked: results.length, failures: report.failures.length }));
