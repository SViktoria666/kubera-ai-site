import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const evidenceDir = path.join(root, "reports", "evidence", "neon-page-types-2026-10-07");
fs.mkdirSync(evidenceDir, { recursive: true });
const entries = [
  ["home", "/"], ["how-we-work", "/how-we-work"], ["services-index", "/services"], ["service-detail", "/services/germany/landing-page-design"],
  ["commercial", "/en/solutions/germany/whatsapp-automation"], ["geo", "/en/germany-automation"], ["use-case", "/use-cases/ai-customer-support-ecommerce"],
  ["cases-gallery", "/cases"], ["case-detail", "/cases/customer-communications"], ["blog-index", "/blog"],
  ["blog-article", "/blog/ai-agent-autonomy-human-in-the-loop"], ["contacts-form", "/contacts"], ["ru-gallery", "/ru/keysy"],
  ["ru-detail", "/ru/keysy/customer-communications"], ["es", "/automatizacion-ia-espana"], ["workflow", "/use-cases/ai-voice-agents-home-services"],
];
const browser = await chromium.launch({ headless: true });
const results = [];
for (const [name, route] of entries) {
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  const response = await page.goto(`http://127.0.0.1:3105${route}?neon=1`, { waitUntil: "networkidle", timeout: 30000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: path.join(evidenceDir, `${name}-1366.png`), fullPage: false });
  const state = await page.evaluate(() => ({ scope: Boolean(document.querySelector(".neon-preview-sitewide")), heading: document.querySelector("h1")?.textContent ?? "", overflow: document.documentElement.scrollWidth > window.innerWidth + 1 }));
  results.push({ name, route, status: response?.status() ?? 0, ...state, screenshot: `${name}-1366.png`, pass: response?.status() === 200 && state.scope && !state.overflow });
  await page.close();
}
await browser.close();
const report = { generatedAt: new Date().toISOString(), entries: results, failures: results.filter((result) => !result.pass), evidenceDir };
fs.writeFileSync(path.join(root, "reports", "KUBERA_NEON_PAGE_TYPE_VISUAL_REVIEW_2026-10-07.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ checked: results.length, failures: report.failures.length, evidenceDir }, null, 2));
if (report.failures.length) process.exitCode = 1;
