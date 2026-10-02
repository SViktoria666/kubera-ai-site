import { execFileSync, spawn, spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const target = process.argv[2];
const allowedTargets = new Set(["local", "preview", "production"]);
const productionURL = "https://www.kubera-automation.com";
const baseURL = process.env.PLAYWRIGHT_BASE_URL || (target === "production" ? productionURL : "");
const expectedSHA = process.env.PLAYWRIGHT_EXPECTED_SHA || (target === "local" ? getLocalSHA() : "UNKNOWN");
const servingSHA = process.env.PLAYWRIGHT_SERVING_SHA || "UNKNOWN";
const deploymentId = process.env.PLAYWRIGHT_DEPLOYMENT_ID || "UNKNOWN";
const startedAt = new Date().toISOString();
const routes = ["/", "/services", "/blog/ai-agent-autonomy-human-in-the-loop", "/contacts", "/use-cases/ai-customer-support-ecommerce"];
const viewports = ["1366x768", "390x844", "1024x768"];

if (!allowedTargets.has(target)) {
  console.error("Usage: node scripts/browser-gate.mjs <local|preview|production>");
  process.exit(2);
}

if (target !== "local" && !baseURL) {
  console.error(`${target} gate requires PLAYWRIGHT_BASE_URL (production defaults to ${productionURL}).`);
  process.exit(2);
}

if (target !== "local" && /^https?:\/\/(127\.0\.0\.1|localhost)(:|\/|$)/i.test(baseURL)) {
  console.error(`${target} gate refuses a localhost URL; this would masquerade as remote verification.`);
  process.exit(2);
}

const evidence = {
  timestamp: startedAt,
  target: target.toUpperCase(),
  baseURL: baseURL || `http://127.0.0.1:${process.env.PLAYWRIGHT_PORT || 3200}`,
  expectedSHA,
  deploymentId,
  servingSHA,
  routes,
  viewports,
  http: { status: "NOT_RUN", attempts: 0 },
  browser: { status: "NOT_RUN", command: "npm run browser:test:critical" },
  servingVersion: "UNKNOWN",
  gateState: "DEPLOYMENT STATE UNKNOWN",
};

let localServer;
if (target === "local") {
  localServer = spawn(process.execPath, [resolve("node_modules/next/dist/bin/next"), "dev", "--hostname", "127.0.0.1", "--port", process.env.PLAYWRIGHT_PORT || "3200"], {
    env: { ...process.env, AI_ASSISTANT_ENABLED: "true", NEXT_TELEMETRY_DISABLED: "1", NODE_ENV: "development" },
    stdio: "inherit",
    windowsHide: true,
  });
  await waitForLocalServer(evidence.baseURL);
}

if (target !== "local") {
  evidence.http = await boundedHTTPCheck(evidence.baseURL);
}

const env = {
  ...process.env,
  PLAYWRIGHT_TARGET: target,
  PLAYWRIGHT_BASE_URL: evidence.baseURL,
  PLAYWRIGHT_EXPECTED_SHA: expectedSHA,
  PLAYWRIGHT_DEPLOYMENT_ID: deploymentId,
  PLAYWRIGHT_SERVING_SHA: servingSHA,
  ...(target === "local" ? { PLAYWRIGHT_EXTERNAL_SERVER: "1" } : {}),
};
const playwrightCLI = resolve("node_modules/@playwright/test/cli.js");
const result = spawnSync(process.execPath, [playwrightCLI, "test", "tests/browser/critical.spec.ts"], {
  env,
  stdio: "inherit",
  shell: false,
});
if (localServer) stopLocalServer(localServer);
evidence.browser.status = result.status === 0 ? "PASS" : "FAIL";

if (target === "local") {
  evidence.servingVersion = expectedSHA !== "UNKNOWN" ? "VERIFIED" : "PARTIAL";
  evidence.gateState = result.status === 0 ? "LOCAL VERIFIED" : "VERIFICATION FAILED";
} else if (expectedSHA !== "UNKNOWN" && servingSHA !== "UNKNOWN" && expectedSHA === servingSHA && evidence.http.status === "PASS") {
  evidence.servingVersion = "VERIFIED";
  evidence.gateState = result.status === 0 ? `${target.toUpperCase()} VERIFIED` : "VERIFICATION FAILED";
} else {
  evidence.gateState = result.status === 0 ? "DEPLOYMENT STATE UNKNOWN" : "VERIFICATION FAILED";
}

mkdirSync(resolve("browser-gate-evidence"), { recursive: true });
const filename = `${startedAt.replaceAll(/[^0-9]/g, "").slice(0, 14)}-${target}.json`;
const evidencePath = resolve("browser-gate-evidence", filename);
writeFileSync(evidencePath, `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
console.log(`[browser-gate] evidence=${evidencePath}`);
console.log(`[browser-gate] TARGET=${evidence.target} SERVING_VERSION=${evidence.servingVersion} GATE=${evidence.gateState}`);

if (result.status !== 0) process.exit(result.status ?? 1);
if (target !== "local" && evidence.gateState === "DEPLOYMENT STATE UNKNOWN") process.exit(2);

function getLocalSHA() {
  try {
    return execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  } catch {
    return "UNKNOWN";
  }
}

async function boundedHTTPCheck(url) {
  let lastStatus = "FAIL";
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    evidence.http.attempts = attempt;
    try {
      const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15_000) });
      lastStatus = response.status >= 200 && response.status < 400 ? "PASS" : `HTTP_${response.status}`;
      if (lastStatus === "PASS") return { status: lastStatus, statusCode: response.status, attempts: attempt };
    } catch (error) {
      lastStatus = error instanceof Error ? error.name : "FETCH_ERROR";
    }
    if (attempt < 3) await new Promise((resolveDelay) => setTimeout(resolveDelay, 2_000));
  }
  return { status: lastStatus, attempts: 3 };
}

async function waitForLocalServer(url) {
  for (let attempt = 1; attempt <= 30; attempt += 1) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(2_000) });
      if (response.ok) return;
    } catch {}
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 1_000));
  }
  throw new Error(`Local server did not become ready at ${url} within 30 seconds.`);
}

function stopLocalServer(server) {
  if (process.platform === "win32" && server.pid) {
    try { execFileSync("taskkill", ["/PID", String(server.pid), "/T", "/F"], { stdio: "ignore" }); } catch {}
  } else {
    server.kill("SIGTERM");
  }
}
