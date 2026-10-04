import { expect, test } from "@playwright/test";

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
      return {
        h1Family: h1Style.fontFamily,
        h1Size: Number.parseFloat(h1Style.fontSize),
        buttonBackground: buttonStyle.backgroundImage || buttonStyle.backgroundColor,
        buttonWidth: button.getBoundingClientRect().width,
        buttonHeight: button.getBoundingClientRect().height,
        headerWidth: header.getBoundingClientRect().width,
      };
    });

    expect(initial.h1Family).toContain("Space Grotesk");
    expect(initial.h1Size).toBeGreaterThan(32);
    expect(initial.buttonBackground).not.toBe("rgba(0, 0, 0, 0)");

    await page.getByRole("button", { name: "Kubera Neon" }).click();
    const neon = await page.evaluate(() => {
      const button = document.querySelector<HTMLElement>(".ui-kit-button");
      const lab = document.querySelector<HTMLElement>(".ui-kit-lab");
      if (!button || !lab) throw new Error("UI Kit theme controls did not render");
      const style = getComputedStyle(button);
      return { theme: lab.dataset.theme, background: style.backgroundImage || style.backgroundColor, width: button.getBoundingClientRect().width, height: button.getBoundingClientRect().height };
    });

    expect(neon.theme).toBe("kubera-neon");
    expect(neon.background).not.toBe(initial.buttonBackground);
    expect(neon.width).toBeCloseTo(initial.buttonWidth, 1);
    expect(neon.height).toBeCloseTo(initial.buttonHeight, 1);
    expect(runtimeErrors).toEqual([]);
  });
});
