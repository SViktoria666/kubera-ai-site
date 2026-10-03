import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.PLAYWRIGHT_PORT || 3200);
const target = process.env.PLAYWRIGHT_TARGET || "local";
const localBaseURL = `http://127.0.0.1:${port}`;
const baseURL = process.env.PLAYWRIGHT_BASE_URL || (target === "local" ? localBaseURL : "");
const browserChannel = process.env.PLAYWRIGHT_BROWSER_CHANNEL;
const browserChannelUse = browserChannel ? { channel: browserChannel } : {};
const useProductionServer = process.env.PLAYWRIGHT_USE_PROD_SERVER === "1";

if (!["local", "preview", "production"].includes(target)) {
  throw new Error(`Unsupported PLAYWRIGHT_TARGET: ${target}`);
}

if (target !== "local" && !baseURL) {
  throw new Error(`${target} browser QA requires PLAYWRIGHT_BASE_URL`);
}

console.log(`[browser-gate] TARGET=${target} BASE_URL=${baseURL} EXPECTED_SHA=${process.env.PLAYWRIGHT_EXPECTED_SHA || "UNKNOWN"} DEPLOYMENT_ID=${process.env.PLAYWRIGHT_DEPLOYMENT_ID || "UNKNOWN"}`);

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
    storageState: process.env.PLAYWRIGHT_STORAGE_STATE || undefined,
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
  ...(target === "local" && process.env.PLAYWRIGHT_EXTERNAL_SERVER !== "1" ? { webServer: {
    command: `node node_modules/next/dist/bin/next ${useProductionServer ? "start" : "dev"} --hostname 127.0.0.1 --port ${port}`,
    url: localBaseURL,
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
  } } : {}),
});
