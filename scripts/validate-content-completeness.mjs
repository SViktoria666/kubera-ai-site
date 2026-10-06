import fs from "node:fs";
import path from "node:path";
import { validateGeoGeneratedPages, validateSourceGeneratedParity } from "./lib/content-completeness.mjs";

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const catalogSource = read("src/content/geo/catalog.ts");
const catalogMatch = catalogSource.match(/export const geoCatalog = ([\s\S]*?) as const satisfies/);
const generatedSource = read("src/content/geo/generated.ts");
const generatedMatch = generatedSource.match(/export const generatedGeoPages = ([\s\S]*?) as const satisfies/);
if (!catalogMatch || !generatedMatch) throw new Error("Unable to read GEO catalog/generated data");

const catalog = Function(`"use strict"; return (${catalogMatch[1]});`)();
const generated = JSON.parse(generatedMatch[1]);
const sourcePages = catalog.map((item) => ({ fileName: item.fileName, route: item.route, raw: read(path.join("src/content/geo", item.fileName)) }));
const failures = [...validateSourceGeneratedParity(sourcePages, generated), ...validateGeoGeneratedPages(generated)];

if (failures.length) {
  console.error(`Content completeness: FAIL (${failures.length} deterministic failures)`);
  for (const failure of failures) console.error(`FAIL: ${failure}`);
  process.exit(1);
}

console.log(`Content completeness: PASS (${generated.length} GEO pages; source/generated/parser contract has no empty content-bearing sections)`);
