import { expect, test, type Page, type TestInfo } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const previewRoutes = [
  ["home", "/design-lab/neon-preview/home"],
  ["commercial", "/design-lab/neon-preview/commercial"],
  ["geo", "/design-lab/neon-preview/geo"],
  ["contacts", "/design-lab/neon-preview/contacts"],
] as const;

async function assertPreview(page: Page, route: string) {
  const failedStaticRequests: string[] = [];
  const pageErrors: string[] = [];
  page.on("response", (response) => {
    if (response.url().includes("/_next/static/") && response.status() >= 400) {
      failedStaticRequests.push(`${response.status()} ${response.url()}`);
    }
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto(route, { waitUntil: "networkidle" });
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/.*/);

  const state = await page.evaluate(() => {
    const body = document.body;
    const root = document.querySelector(".neon-preview");
    const header = document.querySelector(".site-header");
    const button = document.querySelector(".neon-preview .button, .site-header .header-actions > .button");
    const card = document.querySelector(".neon-preview .card, .neon-preview .pricing-card, .neon-preview .contact-link");
    const styles = {
      bodyBackground: getComputedStyle(body).backgroundColor,
      rootBackground: root ? getComputedStyle(root).backgroundImage : "",
      headerBackground: header ? getComputedStyle(header).backgroundColor : "",
      buttonBackground: button ? `${getComputedStyle(button).backgroundImage}|${getComputedStyle(button).backgroundColor}` : "",
      buttonShadow: button ? getComputedStyle(button).boxShadow : "",
      cardBackground: card ? `${getComputedStyle(card).backgroundImage}|${getComputedStyle(card).backgroundColor}` : "",
    };
    const rects = [root, header, button, card]
      .filter((element): element is Element => Boolean(element))
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return { width: rect.width, height: rect.height, left: rect.left, right: rect.right };
      });
    const advancedFilterElements = [...document.querySelectorAll("*")].filter((element) => {
      const style = getComputedStyle(element);
      const webkitBackdropFilter = (style as CSSStyleDeclaration & { webkitBackdropFilter?: string }).webkitBackdropFilter;
      return style.backdropFilter !== "none" || webkitBackdropFilter !== "none" || style.filter.includes("url(");
    }).length;
    return {
      hasMarker: Boolean(root),
      styles,
      rects,
      advancedFilterElements,
      overflow: document.documentElement.scrollWidth > window.innerWidth || document.body.scrollWidth > window.innerWidth,
    };
  });

  expect(failedStaticRequests, `static asset failures on ${route}`).toEqual([]);
  expect(pageErrors, `page errors on ${route}`).toEqual([]);
  expect(state.hasMarker).toBe(true);
  expect(state.styles.bodyBackground).not.toContain("rgb(255, 255, 255)");
  expect(state.styles.bodyBackground).not.toContain("rgba(0, 0, 0, 0)");
  expect(state.styles.rootBackground).toContain("gradient");
  expect(state.styles.headerBackground).not.toContain("rgb(255, 255, 255)");
  expect(state.styles.headerBackground).not.toContain("rgba(0, 0, 0, 0)");
  expect(state.styles.buttonBackground).toContain("gradient");
  expect(state.styles.buttonShadow).toContain("rgba");
  expect(state.styles.cardBackground).toContain("gradient");
  expect(state.overflow).toBe(false);

  const evidenceDir = path.resolve("reports/evidence/neon-preview-wave1");
  fs.mkdirSync(evidenceDir, { recursive: true });
  await page.screenshot({ path: path.join(evidenceDir, `${route.split("/").pop()}-${test.info().project.name}.png`), fullPage: true, timeout: 30_000 });
  return state;
}

test.describe("protected Kubera Neon Wave 1 previews", () => {
  for (const [name, route] of previewRoutes) {
    test(`${name} uses the preview theme without CSS/JS failures`, async ({ page }) => {
      await assertPreview(page, route);
    });
  }
});

test("Wave 1 preview markers do not leak onto normal representative routes", async ({ page }) => {
  for (const route of ["/contacts", "/en/germany-automation", "/en/solutions/germany/whatsapp-automation"]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("body.neon-preview")).toHaveCount(0);
    await expect(page.locator(".neon-preview")).toHaveCount(0);
  }
});

test("Wave 1 preview boundary viewports retain styling and no overflow", async ({ page }, testInfo: TestInfo) => {
  test.skip(testInfo.project.name !== "desktop-1366", "Run boundary viewport proof once in the desktop project.");
  test.setTimeout(180_000);
  const evidenceDir = path.resolve("reports/evidence/neon-preview-wave1");
  fs.mkdirSync(evidenceDir, { recursive: true });

  for (const [width, height] of [[768, 1024], [1440, 900]] as const) {
    await page.setViewportSize({ width, height });
    for (const [name, route] of previewRoutes) {
      await page.goto(route, { waitUntil: "networkidle" });
      const state = await page.evaluate(() => ({
        marker: Boolean(document.querySelector(".neon-preview")),
        overflow: document.documentElement.scrollWidth > window.innerWidth || document.body.scrollWidth > window.innerWidth,
        header: getComputedStyle(document.querySelector(".site-header") as Element).backgroundColor,
      }));
      expect(state.marker).toBe(true);
      expect(state.overflow).toBe(false);
      expect(state.header).not.toBe("rgba(0, 0, 0, 0)");
      await page.screenshot({ path: path.join(evidenceDir, `${name}-${width}x${height}.png`), fullPage: true, timeout: 30_000 });
    }
  }
});
