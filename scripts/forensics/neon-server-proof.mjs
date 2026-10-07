import { chromium } from "playwright";

const base = "http://127.0.0.1:3105/design-lab/visual-review";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const consoleErrors = [];
const requestFailures = [];
page.on("console", (message) => {
  if (message.type() === "error") consoleErrors.push(message.text());
});
page.on("requestfailed", (request) => requestFailures.push({ url: request.url(), error: request.failure()?.errorText ?? "" }));

const normal = await page.goto(base, { waitUntil: "networkidle", timeout: 30000 });
const hard = await page.reload({ waitUntil: "networkidle", timeout: 30000 });
const fresh = await browser.newPage();
const freshResponse = await fresh.goto(base, { waitUntil: "networkidle", timeout: 30000 });
const state = await fresh.evaluate(() => ({
  noindex: document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "",
  hydration: !document.body.innerText.includes("Application error"),
  reviewLinks: [...document.querySelectorAll("a")].filter((anchor) => anchor.href.includes("?neon=1")).length,
}));

const result = {
  normalReload: normal?.status() ?? 0,
  hardReload: hard?.status() ?? 0,
  newTab: freshResponse?.status() ?? 0,
  ...state,
  consoleErrors,
  requestFailures,
};
console.log(JSON.stringify(result, null, 2));
await browser.close();
const applicationErrors = result.consoleErrors.filter((message) => !message.includes("ERR_NETWORK_ACCESS_DENIED"));
if (result.normalReload !== 200 || result.hardReload !== 200 || result.newTab !== 200 || !result.noindex.includes("noindex") || !result.hydration || applicationErrors.length) process.exitCode = 1;
