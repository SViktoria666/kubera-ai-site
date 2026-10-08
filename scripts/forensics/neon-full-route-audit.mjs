import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const inventory = JSON.parse(fs.readFileSync(path.join(root, "reports/KUBERA_SITEWIDE_CONTENT_COMPLETENESS_AUDIT_2026-10-06.json"), "utf8"));
const routes = inventory.routes.map((entry) => ({ route: entry.route, family: entry.family }));
const responsiveViewports = [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
];
const desktopOnly = process.argv.includes("--desktop-only");
const viewports = desktopOnly ? responsiveViewports.filter((viewport) => viewport.width === 1366) : responsiveViewports;
const boundaryWidths = [561, 1200];
const results = [];
const screenshotsDir = path.join(root, "reports", "evidence", "neon-full-rollout");
fs.mkdirSync(screenshotsDir, { recursive: true });
const screenshotRoutes = new Map();
for (const entry of routes) {
  if (!screenshotRoutes.has(entry.family)) screenshotRoutes.set(entry.family, entry.route);
}

const allowedExternalNoise = ["net::ERR_NETWORK_ACCESS_DENIED", "Failed to load resource: net::ERR_NAME_NOT_RESOLVED"];
const browser = await chromium.launch({ headless: true });

async function check(page, entry, viewport, capture = false) {
  const consoleErrors = [];
  const pageErrors = [];
  const assetFailures = [];
  const assetStatuses = [];
  page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => {
    const url = request.url();
    const externalNonCritical = url.startsWith("https://fonts.googleapis.com/") || url.startsWith("https://analytics.kubera-automation.com/");
    if (["stylesheet", "script"].includes(request.resourceType()) && !externalNonCritical) assetFailures.push(`${request.resourceType()}: ${url}`);
  });
  page.on("response", (response) => {
    if (["stylesheet", "script"].includes(response.request().resourceType())) assetStatuses.push({ type: response.request().resourceType(), status: response.status() });
  });
  const response = await page.goto(`http://127.0.0.1:3105${entry.route}?neon=1`, { waitUntil: "domcontentloaded", timeout: 15000 });
  await page.locator("img").evaluateAll((images) => images.forEach((image) => image.scrollIntoView({ block: "center" })));
  await page.waitForSelector(".neon-preview-sitewide", { state: "attached", timeout: 2000 }).catch(() => {});
  if (capture) await page.waitForFunction(() => [...document.images].every((image) => !image.currentSrc || (image.complete && image.naturalWidth > 0)), null, { timeout: 4000 }).catch(() => {});
  await page.waitForTimeout(100);
  const state = await page.evaluate(() => {
    const legacyStructuralPatterns = [
      "rgb(26, 5, 51)", "rgb(42, 16, 69)", "rgb(16, 0, 32)", "rgb(21, 3, 41)", "rgb(9, 0, 17)",
      "rgba(11, 4, 24", "rgba(5, 2, 14",
    ];
    const yellowControl = (node) => {
      const style = getComputedStyle(node);
      const values = [style.backgroundColor, style.color, style.borderColor, style.backgroundImage].join(" ").toLowerCase();
      const match = values.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      return Boolean(match && Number(match[1]) > 150 && Number(match[2]) > 115 && Number(match[3]) < 130);
    };
    const legacyStructural = [...document.querySelectorAll("main, section, article, .card, .solution-section, .site-footer")].filter((node) => {
      const style = getComputedStyle(node);
      const values = [style.backgroundColor, style.backgroundImage].join(" ").toLowerCase();
      return legacyStructuralPatterns.some((pattern) => values.includes(pattern));
    }).length;
    const majorHeadings = [...document.querySelectorAll("h1, .solution-section-heading > h2, .home-solution-nav-card h2")];
    const headingAccentCount = majorHeadings.filter((heading) => heading.querySelector(".neon-heading__accent")).length;
    const computedAccentCount = [...document.querySelectorAll(".neon-heading__accent")].filter((node) => getComputedStyle(node).color === "rgb(76, 229, 228)").length;
    const contentPanels = [...document.querySelectorAll(".card, .solution-card, .pricing-card, .geo-panel, .contact-link, .case-card, article")];
    return {
      finalPath: window.location.pathname,
      neonScope: Boolean(document.querySelector(".neon-preview-sitewide")),
      h1: document.querySelector("h1")?.textContent?.trim() ?? "",
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      hydrationError: /Application error|Cannot find module|Unhandled Runtime Error/i.test(document.body.innerText),
      rawUnstyled: document.body.innerText.includes("__NEXT_DATA__") || document.body.innerText.includes("Loading...") && document.querySelectorAll("main").length === 0,
      emptyContentPanels: contentPanels.filter((node) => (node.textContent ?? "").trim().length === 0).length,
      missingCtaLabels: [...document.querySelectorAll(".button, button, .solution-secondary-link")].filter((node) => !(node.textContent ?? "").trim() && !node.getAttribute("aria-label")).length,
      yellowFunctionalControls: [...document.querySelectorAll(".button, button, .solution-secondary-link, .lang-button")].filter(yellowControl).length,
      legacyStructuralSurfaces: legacyStructural,
      majorHeadingCount: majorHeadings.length,
      headingAccentCount,
      computedAccentCount,
      // Route-wide coverage proves structural rendering. Exact semantic accent
      // phrases are enforced by neon-semantic-heading-contract.mjs so headings
      // intentionally left white are not treated as terminal-phrase failures.
      headingAccentObserved: headingAccentCount > 0,
      assistantCount: document.querySelectorAll(".ai-assistant-widget").length,
      forms: document.querySelectorAll("form").length,
      images: [...document.images].filter((image) => image.currentSrc && (!image.complete || image.naturalWidth === 0)).length,
    };
  });
  if (capture) {
    const name = `${entry.family.replaceAll(/[^a-z0-9]+/gi, "-").toLowerCase()}-${viewport.width}.png`;
    await page.screenshot({ path: path.join(screenshotsDir, name), fullPage: false });
  }
  const applicationConsoleErrors = consoleErrors.filter((message) => !allowedExternalNoise.some((noise) => message.includes(noise)));
  return {
    route: entry.route,
    family: entry.family,
    requestedWidth: viewport.width,
    status: response?.status() ?? 0,
    assetStatuses,
    assetFailures,
    consoleErrors,
    applicationConsoleErrors,
    pageErrors,
    ...state,
    redirectOnly: state.finalPath !== entry.route,
    pass: (response?.status() ?? 0) === 200 && Boolean(state.h1) && !state.overflow && !state.hydrationError && !state.rawUnstyled && state.emptyContentPanels === 0 && state.missingCtaLabels === 0 && state.images === 0 && assetFailures.length === 0 && applicationConsoleErrors.length === 0 && pageErrors.length === 0 && (state.finalPath !== entry.route || (state.neonScope && state.yellowFunctionalControls === 0 && state.legacyStructuralSurfaces === 0 && state.assistantCount === 1)),
  };
}

const routeChecks = routes.flatMap((entry) => viewports.map((viewport) => ({ entry, viewport })));
// Keep local browser fan-out bounded; the previous 8-page fan-out could
// exhaust the Windows browser process pool before producing evidence.
const concurrency = desktopOnly ? 4 : 6;
for (let offset = 0; offset < routeChecks.length; offset += concurrency) {
  const batch = routeChecks.slice(offset, offset + concurrency);
  const batchResults = await Promise.all(batch.map(async ({ entry, viewport }) => {
    const page = await browser.newPage({ viewport });
    try {
      return await check(page, entry, viewport, screenshotRoutes.get(entry.family) === entry.route && (viewport.width === 390 || viewport.width === 1366));
    } finally {
      await page.close();
    }
  }));
  results.push(...batchResults);
}

const boundaryResults = [];
for (const entry of desktopOnly ? [] : [...screenshotRoutes.values()]) {
  for (const width of boundaryWidths) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    boundaryResults.push(await check(page, { route: entry, family: [...screenshotRoutes.entries()].find(([, route]) => route === entry)?.[0] ?? "boundary" }, { width, height: 900 }));
    await page.close();
  }
}
await browser.close();

const all = [...results, ...boundaryResults];
const report = {
  generatedAt: new Date().toISOString(),
  server: "http://127.0.0.1:3105",
  sourceSha: "runtime verified against current local worktree before commit",
  routes: routes.length,
  viewports: viewports.map(({ width }) => width),
  boundaryWidths: desktopOnly ? [] : boundaryWidths,
  routeChecks: results.length,
  boundaryChecks: boundaryResults.length,
  totalChecks: all.length,
  failures: all.filter((result) => !result.pass),
  familyCounts: Object.fromEntries([...new Set(routes.map((entry) => entry.family))].map((family) => [family, routes.filter((entry) => entry.family === family).length])),
  screenshotsDir,
  results: all,
};
fs.writeFileSync(path.join(root, "reports/KUBERA_NEON_FULL_ROUTE_AUDIT_2026-10-06.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ routes: routes.length, routeChecks: results.length, boundaryChecks: boundaryResults.length, totalChecks: all.length, failures: report.failures.length, screenshotsDir }, null, 2));
if (report.failures.length) process.exitCode = 1;
