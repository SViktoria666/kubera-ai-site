import { chromium } from "playwright";

const base = "http://127.0.0.1:3105";
const browser = await chromium.launch({ headless: true });
const checks = [
  { name: "WhatsApp Germany", path: "/en/solutions/germany/whatsapp-automation", full: "WhatsApp Automation for Businesses in Germany", accent: "for Businesses in Germany" },
  { name: "Landing Page Germany", path: "/services/germany/landing-page-design", accent: "for Businesses in Germany" },
  { name: "Blog index", path: "/blog", accent: "AI Blog" },
  { name: "RU cases gallery", path: "/ru/keysy", accent: "масштабируют ваш бизнес." },
  { name: "ES canonical page", path: "/automatizacion-ia-espana", accent: "Trabaja con Inteligencia, Crece sin Límites" },
];
const results = [];

for (const check of checks) {
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  const response = await page.goto(`${base}${check.path}?neon=1`, { waitUntil: "networkidle", timeout: 30000 });
  const state = await page.evaluate(() => {
    const heading = document.querySelector("h1");
    const accent = heading?.querySelector(".neon-heading__accent");
    return {
      textContent: heading?.textContent ?? "",
      accentText: accent?.textContent ?? "",
      accentColor: accent ? getComputedStyle(accent).color : "",
      headingColor: heading ? getComputedStyle(heading).color : "",
      scope: Boolean(document.querySelector(".neon-preview-sitewide")),
    };
  });
  const expectedFull = check.full ?? state.textContent;
  results.push({ ...check, status: response?.status() ?? 0, ...state, pass: response?.status() === 200 && state.scope && state.textContent === expectedFull && state.accentText === check.accent && state.accentColor === "rgb(76, 229, 228)" });
  await page.close();
}

const article = await browser.newPage({ viewport: { width: 390, height: 844 } });
const articleResponse = await article.goto(`${base}/blog/ai-agent-autonomy-human-in-the-loop?neon=1`, { waitUntil: "networkidle", timeout: 30000 });
const articleState = await article.evaluate(() => ({
  scope: Boolean(document.querySelector(".neon-preview-sitewide")),
  body: Boolean(document.querySelector(".blog-article, article")),
  overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
}));
results.push({ name: "Blog article detail", status: articleResponse?.status() ?? 0, ...articleState, pass: articleResponse?.status() === 200 && articleState.scope && articleState.body && !articleState.overflow });
await article.close();

const casePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
const caseResponse = await casePage.goto(`${base}/cases/customer-communications?neon=1`, { waitUntil: "networkidle", timeout: 30000 });
const caseState = await casePage.evaluate(() => ({
  scope: Boolean(document.querySelector(".neon-preview-sitewide")),
  body: Boolean(document.querySelector("main img, .case-study-flow, .case-block")),
  overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
}));
results.push({ name: "Case detail", status: caseResponse?.status() ?? 0, ...caseState, pass: caseResponse?.status() === 200 && caseState.scope && caseState.body && !caseState.overflow });
await casePage.close();
await browser.close();

console.log(JSON.stringify({ checked: results.length, failures: results.filter((item) => !item.pass), results }, null, 2));
if (results.some((item) => !item.pass)) process.exitCode = 1;
