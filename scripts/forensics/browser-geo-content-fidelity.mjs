import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const audit = JSON.parse(fs.readFileSync(path.join(root, "reports/KUBERA_FULL_GEO_CONTENT_AUDIT_2026-10-06.json"), "utf8"));
const routes = audit.routes.filter((route) => route.family === "legacy markdown GEO").map((route) => route.route);
const viewports = [390, 768, 1024, 1366, 1440];
const failures = [];
const results = [];
const allowedExternalConsoleNoise = [
  "Failed to load resource: net::ERR_NETWORK_ACCESS_DENIED",
];
const screenshotDir = path.join(root, "reports", "geo-browser-fidelity");
fs.mkdirSync(screenshotDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
for (const route of routes) {
  for (const width of viewports) {
    const page = await browser.newPage({ viewport: { width, height: width <= 768 ? 1024 : 900 } });
    const consoleErrors = [];
    const pageErrors = [];
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    const response = await page.goto(`http://127.0.0.1:3105${route}`, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(100);
    const state = await page.evaluate(() => {
      const copies = [...document.querySelectorAll(".geo-panel .geo-copy")].map((node) => node.textContent?.trim() ?? "");
      return {
        h1: document.querySelector("h1")?.textContent?.trim() ?? "",
        panelCount: document.querySelectorAll("article.geo-panel").length,
        geoCopyCount: copies.length,
        emptyGeoCopy: copies.filter((value) => !value).length,
        overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        assistantCount: document.querySelectorAll(".ai-assistant-widget").length,
        hydrationError: document.body.innerText.includes("Application error") || document.body.innerText.includes("Cannot find module"),
      };
    });
    const record = { route, width, status: response?.status() ?? 0, ...state, consoleErrors, pageErrors };
    record.applicationConsoleErrors = consoleErrors.filter((message) => !allowedExternalConsoleNoise.includes(message));
    results.push(record);
    if (record.status !== 200 || !record.h1 || record.emptyGeoCopy > 0 || record.overflow || record.hydrationError || record.applicationConsoleErrors.length || record.pageErrors.length || record.assistantCount > 1) {
      failures.push(record);
    }
    if ((route === "/ai-automation-germany" || route === "/automatizacion-ia-espana") && (width === 390 || width === 1366)) {
      const name = `${route.replaceAll("/", "_").replace(/^_/, "")}-${width}.png`;
      await page.screenshot({ path: path.join(screenshotDir, name), fullPage: false });
    }
    await page.close();
  }
}
await browser.close();

const report = {
  generatedAt: new Date().toISOString(),
  server: "http://127.0.0.1:3105",
  routes: routes.length,
  viewports,
  checks: results.length,
  failures: failures.length,
  results,
  screenshots: screenshotDir,
};
fs.writeFileSync(path.join(root, "reports/KUBERA_GEO_BROWSER_CONTENT_FIDELITY_2026-10-06.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ routes: routes.length, viewports, checks: results.length, failures: failures.length, screenshots: screenshotDir }, null, 2));
if (failures.length) process.exit(1);
