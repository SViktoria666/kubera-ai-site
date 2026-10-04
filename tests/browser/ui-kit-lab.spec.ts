import { expect, test } from "@playwright/test";
import sharp from "sharp";

async function pixelDelta(before: Buffer, after: Buffer) {
  const [beforeImage, afterImage] = await Promise.all([
    sharp(before).raw().toBuffer({ resolveWithObject: true }),
    sharp(after).raw().toBuffer({ resolveWithObject: true }),
  ]);
  if (beforeImage.info.width !== afterImage.info.width || beforeImage.info.height !== afterImage.info.height) return 1;
  let changed = 0;
  const totalPixels = beforeImage.info.width * beforeImage.info.height;
  for (let i = 0; i < beforeImage.data.length; i += beforeImage.info.channels) {
    let distance = 0;
    for (let channel = 0; channel < Math.min(3, beforeImage.info.channels); channel += 1) {
      distance += Math.abs(beforeImage.data[i + channel] - afterImage.data[i + channel]);
    }
    if (distance >= 12) changed += 1;
  }
  return changed / totalPixels;
}

test.describe("isolated UI Kit render and theme guard", () => {
  test("keeps critical styles non-default and geometry stable across themes", async ({ page }) => {
    const runtimeErrors: string[] = [];
    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error" && !message.text().includes("ERR_NETWORK_ACCESS_DENIED")) runtimeErrors.push(message.text());
    });
    await page.goto("/design-lab/ui-kit", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Current" }).click();

    const initial = await page.evaluate(() => {
      const lab = document.querySelector<HTMLElement>(".ui-kit-lab");
      const h1 = document.querySelector<HTMLElement>(".ui-kit-lab h1");
      const button = document.querySelector<HTMLElement>(".ui-kit-button");
      const header = document.querySelector<HTMLElement>(".ui-kit-lab-header");
      if (!lab || !h1 || !button || !header) throw new Error("UI Kit critical elements are missing");
      const h1Style = getComputedStyle(h1);
      const buttonStyle = getComputedStyle(button);
      const boxes = [".ui-kit-button", ".ui-kit-button--secondary", ".ui-kit-button--language", ".ui-kit-badge", ".ui-kit-glass-card", ".ui-kit-form-panel input", ".ui-kit-form-panel select", ".ui-kit-switch"].map((selector) => {
        const node = document.querySelector<HTMLElement>(selector);
        const box = node?.getBoundingClientRect();
        return [selector, box ? { width: box.width, height: box.height, x: box.x, y: box.y } : null];
      });
      return {
        activeTheme: document.querySelector<HTMLElement>("[data-testid='active-theme']")?.textContent,
        h1Family: h1Style.fontFamily,
        h1Size: Number.parseFloat(h1Style.fontSize),
        buttonBackground: buttonStyle.backgroundImage || buttonStyle.backgroundColor,
        buttonWidth: button.getBoundingClientRect().width,
        buttonHeight: button.getBoundingClientRect().height,
        headerWidth: header.getBoundingClientRect().width,
        boxes,
      };
    });

    expect(initial.h1Family).toContain("Space Grotesk");
    expect(initial.h1Size).toBeGreaterThanOrEqual(32);
    expect(initial.buttonBackground).not.toBe("rgba(0, 0, 0, 0)");
    expect(initial.activeTheme).toContain("CURRENT / LEGACY");
    const beforeImage = await page.screenshot();

    await page.getByRole("button", { name: "Kubera Neon" }).click();
    const neon = await page.evaluate(() => {
      const button = document.querySelector<HTMLElement>(".ui-kit-button");
      const lab = document.querySelector<HTMLElement>(".ui-kit-lab");
      if (!button || !lab) throw new Error("UI Kit theme controls did not render");
      const style = getComputedStyle(button);
      const boxes = [".ui-kit-button", ".ui-kit-button--secondary", ".ui-kit-button--language", ".ui-kit-badge", ".ui-kit-glass-card", ".ui-kit-form-panel input", ".ui-kit-form-panel select", ".ui-kit-switch"].map((selector) => {
        const node = document.querySelector<HTMLElement>(selector);
        const box = node?.getBoundingClientRect();
        return [selector, box ? { width: box.width, height: box.height, x: box.x, y: box.y } : null];
      });
      return { theme: lab.dataset.theme, activeTheme: document.querySelector<HTMLElement>("[data-testid='active-theme']")?.textContent, background: style.backgroundImage || style.backgroundColor, width: button.getBoundingClientRect().width, height: button.getBoundingClientRect().height, boxes };
    });
    const afterImage = await page.screenshot();
    const visualDelta = await pixelDelta(beforeImage, afterImage);

    expect(neon.theme).toBe("kubera-neon");
    expect(neon.activeTheme).toContain("KUBERA NEON");
    expect(neon.background).not.toBe(initial.buttonBackground);
    expect(neon.width).toBeCloseTo(initial.buttonWidth, 1);
    expect(neon.height).toBeCloseTo(initial.buttonHeight, 1);
    expect(Buffer.compare(beforeImage, afterImage)).not.toBe(0);
    expect(visualDelta).toBeGreaterThan(0.03);
    expect(neon.boxes).toEqual(initial.boxes);
    expect(runtimeErrors).toEqual([]);
  });
});
