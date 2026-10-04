import { expect, test } from "@playwright/test";

test.describe("isolated Home design lab stylesheet guard", () => {
  test("fails if the prototype falls back to browser-default CSS", async ({ page }) => {
    await page.goto("/design-lab/home-v1", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);

    const styles = await page.evaluate(() => {
      const h1 = document.querySelector(".home-prototype-title");
      const cta = document.querySelector(".home-prototype-primary");
      const header = document.querySelector(".site-header");
      if (!h1 || !cta || !header) throw new Error("Home design lab critical elements are missing");

      const h1Style = getComputedStyle(h1);
      const ctaStyle = getComputedStyle(cta);
      const headerStyle = getComputedStyle(header);
      return {
        h1FontFamily: h1Style.fontFamily,
        h1FontSize: Number.parseFloat(h1Style.fontSize),
        ctaBackground: ctaStyle.backgroundImage || ctaStyle.backgroundColor,
        headerBackground: headerStyle.backgroundColor,
      };
    });

    expect(styles.h1FontFamily).toContain("Space Grotesk");
    expect(styles.h1FontSize).toBeGreaterThan(32);
    expect(styles.ctaBackground).toContain("gradient");
    expect(styles.headerBackground).not.toBe("rgba(0, 0, 0, 0)");
  });
});
