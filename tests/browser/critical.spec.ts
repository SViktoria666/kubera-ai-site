import { expect, test, type Page, type TestInfo } from "@playwright/test";

const representativeRoutes = [
  "/",
  "/services",
  "/blog/ai-agent-autonomy-human-in-the-loop",
  "/contacts",
  "/use-cases/ai-customer-support-ecommerce",
];

const workflowRoute = "/use-cases/ai-customer-support-ecommerce";

async function navigate(page: Page, route: string) {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto(route, { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("load");
  await page.waitForTimeout(250);
  await expect(page.locator("main")).toBeVisible();
  await expect.poll(() => pageErrors, { message: `Unhandled page errors on ${route}` }).toEqual([]);
}

async function assertNoDocumentOverflow(page: Page) {
  const result = await page.evaluate(() => ({
    bodyScrollWidth: document.body.scrollWidth,
    documentScrollWidth: document.documentElement.scrollWidth,
    viewportWidth: window.innerWidth,
  }));

  expect(result.bodyScrollWidth, "body must not be wider than the viewport").toBeLessThanOrEqual(result.viewportWidth + 1);
  expect(result.documentScrollWidth, "document must not be wider than the viewport").toBeLessThanOrEqual(result.viewportWidth + 1);
}

async function assertVisibleMedia(page: Page) {
  const brokenImages = await page.locator("img:visible").evaluateAll((images) =>
    images
      .filter((image) => {
        const box = image.getBoundingClientRect();
        return box.top < window.innerHeight + 200 && box.bottom > -200;
      })
      .filter((image): image is HTMLImageElement => image instanceof HTMLImageElement)
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.getAttribute("src") || "(missing src)"),
  );

  expect(brokenImages, "visible in/near viewport images must load").toEqual([]);
}

function rectCenter(rect: { x: number; y: number; width: number; height: number }) {
  return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
}

function assertWithinViewport(rect: { x: number; y: number; width: number; height: number }, viewport: { width: number; height: number }, label: string) {
  expect(rect.x, `${label} left edge`).toBeGreaterThanOrEqual(-1);
  expect(rect.y, `${label} top edge`).toBeGreaterThanOrEqual(-1);
  expect(rect.x + rect.width, `${label} right edge`).toBeLessThanOrEqual(viewport.width + 1);
  expect(rect.y + rect.height, `${label} bottom edge`).toBeLessThanOrEqual(viewport.height + 1);
}

test.describe("representative route browser sanity", () => {
  for (const route of representativeRoutes) {
    test(`${route} renders without fatal browser errors or viewport overflow`, async ({ page }) => {
      await navigate(page, route);
      await assertNoDocumentOverflow(page);
      await assertVisibleMedia(page);
    });
  }
});

test.describe("workflow geometry regression", () => {
  test("preserves the two branch paths and their rendered convergence", async ({ page }, testInfo: TestInfo) => {
    await navigate(page, workflowRoute);

    const workflow = page.locator(".workflow-steps").last();
    const scopeWrap = workflow.locator(":scope > .workflow-step-wrap").filter({ hasText: "Scope check" }).first();
    const scopeCard = scopeWrap.locator(":scope > .workflow-step-card").first();
    const branchPanel = scopeWrap.locator(":scope > .workflow-branch-panel");
    const branchColumns = branchPanel.locator(":scope > .workflow-branch-grid > .workflow-branch-column");
    const finalWrap = workflow.locator(":scope > .workflow-step-wrap").filter({ hasText: "Logging, monitoring and reporting" }).first();

    await expect(scopeCard.locator(".workflow-step-index")).toHaveText("07");
    await expect(branchPanel).toBeVisible();
    await expect(branchColumns).toHaveCount(2);
    await expect(branchColumns.nth(0).locator(".workflow-branch-label")).toHaveText("YES");
    await expect(branchColumns.nth(1).locator(".workflow-branch-label")).toHaveText("NO");
    await expect(branchColumns.nth(0).locator(".workflow-step-card")).toHaveCount(1);
    await expect(branchColumns.nth(1).locator(".workflow-step-card")).toHaveCount(2);
    await expect(finalWrap.locator(".workflow-step-index")).toHaveText("11");

    const scopeBox = await scopeCard.boundingBox();
    const panelBox = await branchPanel.boundingBox();
    const gridBox = await branchPanel.locator(":scope > .workflow-branch-grid").boundingBox();
    const yesBox = await branchColumns.nth(0).locator(".workflow-step-card").boundingBox();
    const noBox = await branchColumns.nth(1).locator(".workflow-step-card").first().boundingBox();
    const humanBox = await branchColumns.nth(1).locator(".workflow-step-card").nth(1).boundingBox();
    const finalBox = await finalWrap.boundingBox();

    expect(scopeBox && panelBox && gridBox && yesBox && noBox && humanBox && finalBox).toBeTruthy();
    if (!scopeBox || !panelBox || !gridBox || !yesBox || !noBox || !humanBox || !finalBox) {
      return;
    }

    expect(panelBox.y).toBeGreaterThanOrEqual(scopeBox.y + scopeBox.height - 2);
    const viewport = page.viewportSize();
    expect(viewport).toBeTruthy();
    if (!viewport) return;

    if (viewport.width <= 900) {
      expect(Math.abs(rectCenter(yesBox).x - rectCenter(noBox).x)).toBeLessThanOrEqual(2);
      expect(noBox.y).toBeGreaterThan(yesBox.y);
    } else {
      expect(yesBox.x + yesBox.width).toBeLessThanOrEqual(noBox.x + 1);
      expect(yesBox.x).toBeGreaterThanOrEqual(gridBox.x - 1);
      expect(noBox.x + noBox.width).toBeLessThanOrEqual(gridBox.x + gridBox.width + 1);
    }

    expect(humanBox.y).toBeGreaterThan(noBox.y);
    expect(finalBox.y).toBeGreaterThanOrEqual(panelBox.y + panelBox.height - 2);

    await expect(branchPanel.locator(".workflow-connector--merge")).toHaveCount(1);
    await page.screenshot({ path: testInfo.outputPath("workflow-geometry.png"), fullPage: false });
  });
});

test.describe("assistant overlay regression", () => {
  test("keeps the launcher in the viewport and proves mobile closed evidence", async ({ page }, testInfo) => {
    await navigate(page, "/");

    const button = page.getByRole("button", { name: "Open Kubera AI assistant" });
    await expect(button).toBeVisible();
    const viewport = page.viewportSize();
    const buttonBox = await button.boundingBox();
    expect(viewport && buttonBox).toBeTruthy();
    if (!viewport || !buttonBox) return;

    assertWithinViewport(buttonBox, viewport, "assistant launcher");
    await assertNoDocumentOverflow(page);
    await page.screenshot({ path: testInfo.outputPath("assistant-closed.png"), fullPage: false });
  });

  test("opens, contains, and closes the panel without destructive viewport escape", async ({ page }, testInfo) => {
    await navigate(page, "/");

    const openButton = page.locator(".ai-assistant-button");
    const panel = page.locator("#kubera-ai-assistant-panel");
    await openButton.click();
    await expect(openButton).toHaveAttribute("aria-expanded", "true");
    await expect(panel).toBeVisible();

    const viewport = page.viewportSize();
    const panelBox = await panel.boundingBox();
    expect(viewport && panelBox).toBeTruthy();
    if (!viewport || !panelBox) return;

    assertWithinViewport(panelBox, viewport, "assistant panel");
    await assertNoDocumentOverflow(page);
    await page.screenshot({ path: testInfo.outputPath("assistant-open.png"), fullPage: false });

    await page.getByRole("button", { name: "Close Kubera AI assistant" }).click();
    await expect(openButton).toHaveAttribute("aria-expanded", "false");
    await expect(panel).toBeHidden();
  });
});
