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
const viewports = [[390, 844], [768, 1024], [1024, 768], [1366, 768], [1440, 900]];
const browser = await chromium.launch({ headless: true });
const results = [];
const checks = entries.flatMap(([name, route]) => viewports.map(([width, height]) => ({ name, route, width, height })));
async function check({ name, route, width, height }) {
    const page = await browser.newPage({ viewport: { width, height } });
    try {
    const response = await page.goto(`http://127.0.0.1:3105${route}?neon=1`, { waitUntil: "networkidle", timeout: 30000 });
    await page.evaluate(() => window.scrollTo(0, 0));
    const screenshot = width === 1366 ? `${name}-1366.png` : undefined;
    if (screenshot) await page.screenshot({ path: path.join(evidenceDir, screenshot), fullPage: false });
    const state = await page.evaluate(() => {
      const heading = document.querySelector("h1");
      const words = heading?.textContent?.trim().match(/\S+/g) ?? [];
      const accent = heading?.querySelector(".neon-heading__accent")?.textContent?.trim() ?? "";
      const expectedAccent = words.slice(Math.ceil(words.length / 2)).join(" ");
      return {
        scope: Boolean(document.querySelector(".neon-preview-sitewide")),
        heading: heading?.textContent ?? "",
        overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        h1Contract: words.length <= 1 ? accent === "" : accent === expectedAccent && getComputedStyle(heading?.querySelector(".neon-heading__accent")).color === "rgb(76, 229, 228)",
      };
    });
    return { name, route, width, status: response?.status() ?? 0, ...state, screenshot, pass: response?.status() === 200 && state.scope && !state.overflow && state.h1Contract };
    } finally {
    await page.close();
    }
}
for (let offset = 0; offset < checks.length; offset += 8) {
  results.push(...await Promise.all(checks.slice(offset, offset + 8).map(check)));
}
await browser.close();
const report = { generatedAt: new Date().toISOString(), entries: results, failures: results.filter((result) => !result.pass), evidenceDir };
fs.writeFileSync(path.join(root, "reports", "KUBERA_NEON_PAGE_TYPE_VISUAL_REVIEW_2026-10-07.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ checked: results.length, failures: report.failures.length, evidenceDir }, null, 2));
if (report.failures.length) process.exitCode = 1;
