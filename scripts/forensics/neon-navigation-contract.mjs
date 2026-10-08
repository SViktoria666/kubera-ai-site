import { chromium } from "playwright";

const base = "http://127.0.0.1:3105";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
await page.goto(`${base}/blog/google-rrsi-self-improving-agents?neon=1`, { waitUntil: "domcontentloaded", timeout: 20000 });
await page.waitForSelector(".neon-preview-sitewide", { state: "attached", timeout: 5000 });
const protectedLink = await page.evaluate(() => [...document.querySelectorAll("a[href]")]
  .map((anchor) => anchor.getAttribute("href") ?? "")
  .find((href) => href.startsWith("/") && !href.startsWith("/blog") && !href.startsWith("/_next") && !href.startsWith("/api")));
const hrefPreservesNeon = Boolean(protectedLink?.includes("neon=1"));
await page.goto(new URL(protectedLink, base).toString(), { waitUntil: "domcontentloaded", timeout: 20000 });
await page.waitForSelector(".neon-preview-sitewide", { state: "attached", timeout: 5000 });
const clickedState = await page.evaluate(() => ({
  path: window.location.pathname,
  scope: Boolean(document.querySelector(".neon-preview-sitewide")),
  background: getComputedStyle(document.body).backgroundColor,
  yellow: [...document.querySelectorAll("button, a, .lang-button")].filter((node) => /rgb\(255, 184, 0\)/.test(getComputedStyle(node).backgroundColor)).length,
}));
const review = await page.goto(`${base}/design-lab/visual-review`, { waitUntil: "domcontentloaded", timeout: 20000 });
await page.waitForSelector(".neon-preview-sitewide", { state: "attached", timeout: 5000 });
const reviewState = await page.evaluate(() => {
  const hrefs = [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href") ?? "");
  return {
    status: document.querySelector('meta[name="robots"]')?.content.includes("noindex") ?? false,
    protectedLinks: hrefs.filter((href) => href.includes("neon=1")).length,
    cases: hrefs.some((href) => href.includes("/cases?neon=1")),
    blog: hrefs.some((href) => href.includes("/blog?neon=1")),
  };
});
await browser.close();
const result = { hrefPreservesNeon, clickedState, reviewStatus: review?.status() ?? 0, reviewState };
console.log(JSON.stringify(result, null, 2));
if (!hrefPreservesNeon || !clickedState.scope || clickedState.background !== "rgb(12, 23, 38)" || clickedState.yellow !== 0 || review?.status() !== 200 || !reviewState.status || reviewState.protectedLinks === 0 || !reviewState.cases || !reviewState.blog) process.exitCode = 1;
