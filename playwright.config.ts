import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.PLAYWRIGHT_PORT || 3200);
const baseURL = process.env.PLAYWRIGHT_BASE_URL || `http://127.0.0.1:${port}`;
const browserChannel = process.env.PLAYWRIGHT_BROWSER_CHANNEL;
const browserChannelUse = browserChannel ? { channel: browserChannel } : {};
const useProductionServer = process.env.PLAYWRIGHT_USE_PROD_SERVER === "1";

export default defineConfig({
  testDir: "./tests/browser",
  testMatch: "**/*.spec.ts",
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  timeout: 45_000,
  expect: {
    timeout: 7_000,
  },
  outputDir: "test-results",
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
  },
  projects: [
    {
      name: "desktop-1366",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1366, height: 768 },
        ...browserChannelUse,
      },
    },
    {
      name: "mobile-390",
      use: {
        // Keep the browser engine on Chromium; the viewport is the mobile contract.
        ...devices["Desktop Chrome"],
        viewport: { width: 390, height: 844 },
        isMobile: false,
        hasTouch: false,
        ...browserChannelUse,
      },
    },
    {
      name: "tablet-1024",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1024, height: 768 },
        ...browserChannelUse,
      },
    },
  ],
  webServer: {
    command: `node tests/browser/start-server.mjs --port ${port}${useProductionServer ? " --production" : ""}`,
    url: baseURL,
    // Never reuse an unrelated server: a stale process can hide the test env and create a false pass.
    reuseExistingServer: false,
    timeout: 120_000,
    stdout: "pipe",
    stderr: "pipe",
    env: {
      ...process.env,
      AI_ASSISTANT_ENABLED: "true",
      NEXT_TELEMETRY_DISABLED: "1",
      NODE_ENV: useProductionServer ? "production" : "development",
    },
  },
});
