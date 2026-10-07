import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const reportPath = path.join(root, "reports", "KUBERA_NEON_FULL_ROUTE_AUDIT_2026-10-06.json");
const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const candidates = report.failures.filter((result) => result.images > 0 && result.assetFailures.length === 0 && result.applicationConsoleErrors.length === 0 && result.pageErrors.length === 0 && result.neonScope && !result.overflow && !result.hydrationError && result.assistantCount === 1);

const browser = await chromium.launch({ headless: true });
const targetedRechecks = [];
for (const candidate of candidates) {
  const page = await browser.newPage({ viewport: { width: candidate.requestedWidth, height: candidate.requestedWidth === 390 ? 844 : 900 } });
  const response = await page.goto(`http://127.0.0.1:3105${candidate.route}?neon=1`, { waitUntil: "domcontentloaded", timeout: 20000 });
  await page.waitForSelector(".neon-preview-sitewide", { state: "attached", timeout: 5000 });
  await page.locator("img").evaluateAll((images) => images.forEach((image) => image.scrollIntoView({ block: "center" })));
  await page.waitForFunction(() => [...document.images].every((image) => !image.currentSrc || (image.complete && image.naturalWidth > 0)), null, { timeout: 20000 }).catch(() => {});
  const state = await page.evaluate(() => ({
    scope: Boolean(document.querySelector(".neon-preview-sitewide")),
    overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    images: [...document.images].filter((image) => image.currentSrc && (!image.complete || image.naturalWidth === 0)).length,
    assistantCount: document.querySelectorAll(".ai-assistant-widget").length,
  }));
  targetedRechecks.push({ route: candidate.route, requestedWidth: candidate.requestedWidth, reason: "image-readiness", status: response?.status() ?? 0, ...state, pass: response?.status() === 200 && state.scope && !state.overflow && state.images === 0 && state.assistantCount === 1 });
  await page.close();
}
await browser.close();

const recheckedKeys = new Set(targetedRechecks.filter((result) => result.pass).map((result) => `${result.route}:${result.requestedWidth}`));
report.fullMatrixFailuresBeforeTargetedRecheck = report.failures.length;
report.targetedRechecks = targetedRechecks;
report.failures = report.failures.filter((result) => !recheckedKeys.has(`${result.route}:${result.requestedWidth}`));
report.effectiveFailures = report.failures.length;
report.generatedAt = new Date().toISOString();
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ candidates: candidates.length, targetedRechecks, effectiveFailures: report.effectiveFailures }, null, 2));
if (report.effectiveFailures) process.exitCode = 1;
