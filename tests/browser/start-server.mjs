import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const portIndex = args.indexOf("--port");
const port = portIndex >= 0 ? args[portIndex + 1] : "3100";
const production = args.includes("--production");
const nextCli = path.resolve("node_modules/next/dist/bin/next");
const nextCommand = production ? "start" : "dev";

process.env.AI_ASSISTANT_ENABLED = "true";
process.env.NEXT_TELEMETRY_DISABLED = "1";
process.env.NODE_ENV = production ? "production" : "development";
process.argv = [process.argv[0], nextCli, nextCommand, "--hostname", "127.0.0.1", "--port", port];

// Load Next in this process so Playwright can terminate the server cleanly on Windows.
await import(pathToFileURL(nextCli).href);
