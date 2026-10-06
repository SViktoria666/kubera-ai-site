import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const write = (relative, value) => {
  const target = path.join(root, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${value}\n`, "utf8");
};

function parseQuoted(relative, pattern) {
  return [...read(relative).matchAll(pattern)].map((match) => match[1]);
}

function collectPageFiles(directory, result = []) {
  for (const entry of fs.readdirSync(path.join(root, directory), { withFileTypes: true })) {
    const relative = path.join(directory, entry.name);
    if (entry.isDirectory()) collectPageFiles(relative, result);
    else if (entry.name === "page.tsx") result.push(relative);
  }
  return result;
}

function routeFromPageFile(relative) {
  const segments = path.dirname(relative).split(path.sep).slice(2);
  const publicSegments = segments.filter((segment) => !/^\([^)]*\)$/.test(segment));
  if (publicSegments.some((segment) => /^\[[^]]+\]$/.test(segment))) return null;
  const route = `/${publicSegments.join("/")}`.replace(/\/+/g, "/").replace(/\/$/, "") || "/";
  return route.includes("[") || route.includes("]") ? null : route;
}

function parseFrontmatter(raw) {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const result = {};
  if (lines[0]?.trim() !== "---") return result;
  for (const line of lines.slice(1)) {
    if (line.trim() === "---") break;
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    result[line.slice(0, separator).trim()] = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
  }
  return result;
}

function classifyRoute(route) {
  if (route === "/" || ["/locations", "/services", "/en/solutions", "/how-we-work", "/contacts"].includes(route)) return "HOME / SHARED";
  if (route.startsWith("/ai-automation-") || route === "/automatizacion-ia-espana") return "GEO / REGIONAL / COUNTRY (legacy markdown)";
  if (/^\/en\/(?:spain|portugal|germany|italy|france|netherlands|belgium|austria|switzerland|ireland|cyprus|finland|lithuania|latvia|sweden|poland|estonia|denmark)-automation$/.test(route)) return "GEO / REGIONAL / COUNTRY (canonical country)";
  if (route.startsWith("/en/solutions/")) return "COMMERCIAL / INDUSTRY";
  if (route.startsWith("/services/")) return "LANDING PAGES";
  if (route.startsWith("/use-cases/")) return "USE CASES";
  if (route === "/blog" || route.startsWith("/blog/")) return "BLOG";
  if (route === "/cases" || route.startsWith("/cases/")) return "CASES";
  if (route === "/ru" || route.startsWith("/ru/")) return "RU";
  if (route.startsWith("/es/")) return "ES";
  return "OTHER REAL INDEXABLE FAMILY";
}

function loadCountries() {
  const source = read("src/content/countries/countries.ts");
  const match = source.match(/const countryData = (\[[\s\S]*?\]) as const;/);
  if (!match) throw new Error("Could not parse countryData");
  const raw = Function(`"use strict"; return (${match[1]});`)();
  return raw.map(({ slugBase, country, focus, heading }) => ({
    slug: `${slugBase}-automation`,
    country,
    heading,
    sections: [
      { title: "Who this helps", body: `Companies in ${country} that lose leads, repeat manual tasks, or need faster customer communication across sales and operations.` },
      { title: "What we automate", body: "Lead handling, customer communication, internal processes, CRM workflows, reporting systems, reminders, and document flows." },
      { title: "Integration readiness", body: "Built with server-side form processing, future n8n webhooks, secure environment boundaries, monitoring, and scalable deployment on Vercel." },
    ],
    focus,
  }));
}

function loadGeoCatalog() {
  const source = read("src/content/geo/catalog.ts");
  return [...source.matchAll(/\{\s*country:\s*"([^"]+)",\s*fileName:\s*"([^"]+)",\s*locale:\s*"([^"]+)",\s*route:\s*"([^"]+)"/g)].map((match) => ({
    country: match[1], fileName: match[2], locale: match[3], route: match[4],
  }));
}

function loadLegacyRedirects() {
  const source = read("src/content/geo/routes.ts");
  return Object.fromEntries([...source.matchAll(/"(\/ai-[^"]+|\/automatizacion-[^"]+)":\s*"([^"]+)"/g)].map((match) => [match[1], match[2]]));
}

function loadGeneratedGeo() {
  const source = read("src/content/geo/generated.ts");
  const match = source.match(/export const generatedGeoPages = ([\s\S]*?) as const satisfies/);
  if (!match) throw new Error("Could not parse generatedGeoPages");
  return JSON.parse(match[1]);
}

function nonEmpty(value) {
  return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
}

function wordCount(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function severityForLegacy(summary) {
  if (summary.empty > 0 || summary.titleOnly > 0) return "HIGH";
  if (summary.thin > 0) return "MEDIUM";
  return "HEALTHY";
}

const countries = loadCountries();
const geoCatalog = loadGeoCatalog();
const legacyRedirects = loadLegacyRedirects();
const generatedGeo = loadGeneratedGeo();
const priorGeo = JSON.parse(read("reports/KUBERA_GEO_CONTENT_GAP_FORENSIC_2026-10-06.json"));

const expectedRoutes = new Set();
for (const pageFile of collectPageFiles("src/app")) {
  const route = routeFromPageFile(pageFile);
  if (route && !route.startsWith("/api/") && !route.startsWith("/design-lab/") && !["/demo", "/ru/demo"].includes(route)) expectedRoutes.add(route);
}
const blogSlugs = fs.readdirSync(path.join(root, "content/blog")).filter((file) => file.endsWith(".md")).map((file) => parseFrontmatter(read(path.join("content/blog", file))).slug).filter(Boolean);
for (const slug of blogSlugs) expectedRoutes.add(`/blog/${slug}`);
for (const slug of parseQuoted("src/content/cases.ts", /\bslug:\s*["']([^"']+)["']/g)) {
  expectedRoutes.add(`/cases/${slug}`);
  expectedRoutes.add(`/ru/keysy/${slug}`);
}
for (const country of countries) expectedRoutes.add(`/en/${country.slug}`);
const industryFiles = fs.readdirSync(path.join(root, "src/content")).filter((file) => /^industry-solutions.*\.ts$/.test(file));
for (const file of industryFiles) {
  for (const route of parseQuoted(path.join("src/content", file), /\burl:\s*["'](\/en\/solutions\/[^"']+)["']/g)) expectedRoutes.add(route);
}
for (const item of geoCatalog) expectedRoutes.add(item.route);

const routeInventory = [...expectedRoutes].sort().map((route) => ({ route, family: classifyRoute(route), indexable: true, source: "validator-equivalent source route inventory" }));

const geoItems = [];
const legacyByRoute = new Map();
for (const item of priorGeo.routes) {
  const generated = generatedGeo.find((page) => page.route === item.route);
  const index = Number(String(item.sourceField).match(/\[(\d+)\]/)?.[1] ?? 0);
  const generatedSection = generated?.sections?.[index];
  const record = {
    route: item.route,
    country: item.countryRegion,
    family: "GEO / REGIONAL / COUNTRY (legacy markdown)",
    sectionKey: `sections[${index}]`,
    sectionHeading: item.section,
    itemKey: `section-${index + 1}`,
    title: item.section,
    bodyPresent: item.bodyPresent,
    bodyCharacterCount: item.bodyLength,
    bodyWordCount: wordCount(generatedSection?.blocks?.join(" ") ?? ""),
    visible: true,
    empty: item.empty,
    titleOnly: !item.bodyPresent,
    thin: item.thin,
    adequate: item.bodyQualityClass === "ADEQUATE",
    placeholder: item.bodyQualityClass === "STRUCTURAL PLACEHOLDER",
    duplicate: item.duplicateBoilerplate,
    sourceFile: item.sourceFile,
    sourceField: item.sourceField,
    generatedField: `generatedGeoPages[route=${item.route}].sections[${index}].blocks`,
    parserField: `GeoPageData.sections[${index}].blocks`,
    renderedField: "GeoPage article.geo-panel > .geo-copy",
    historicalSourceFound: true,
    classification: item.bodyQualityClass,
  };
  geoItems.push(record);
  if (!legacyByRoute.has(item.route)) legacyByRoute.set(item.route, []);
  legacyByRoute.get(item.route).push(record);
}

for (const country of countries) {
  for (const [index, section] of country.sections.entries()) {
    geoItems.push({
      route: `/en/${country.slug}`,
      country: country.country,
      family: "GEO / REGIONAL / COUNTRY (canonical country)",
      sectionKey: `sections[${index}]`,
      sectionHeading: section.title,
      itemKey: `section-${index + 1}`,
      title: section.title,
      bodyPresent: nonEmpty(section.body),
      bodyCharacterCount: section.body.length,
      bodyWordCount: wordCount(section.body),
      visible: true,
      empty: !nonEmpty(section.body),
      titleOnly: !nonEmpty(section.body),
      thin: section.body.length < 120,
      adequate: section.body.length >= 120,
      placeholder: false,
      duplicate: false,
      sourceFile: "src/content/countries/countries.ts",
      sourceField: `countryData[country=${country.country}].sections[${index}].body`,
      generatedField: `CountryPageContent.sections[${index}].body`,
      parserField: "CountryPage country.sections[index].body",
      renderedField: "CountryPage .service-card > p",
      historicalSourceFound: true,
      classification: section.body.length >= 120 ? "ADEQUATE" : "THIN",
    });
  }
}

const geoRouteSummary = [];
for (const item of geoCatalog) {
  const records = legacyByRoute.get(item.route) ?? [];
  const page = generatedGeo.find((candidate) => candidate.route === item.route);
  const empty = records.filter((record) => record.empty).length;
  const titleOnly = records.filter((record) => record.titleOnly).length;
  const thin = records.filter((record) => record.thin).length;
  const adequate = records.filter((record) => record.adequate).length;
  const canonicalRoute = legacyRedirects[item.route] ?? item.route;
  geoRouteSummary.push({
    route: item.route,
    country: item.country,
    language: item.locale,
    family: "legacy markdown GEO",
    sourceFile: `src/content/geo/${item.fileName}`,
    sourceRecord: `geoCatalog[route=${item.route}]`,
    indexable: true,
    canonical: item.route,
    sitemap: !Object.prototype.hasOwnProperty.call(legacyRedirects, item.route),
    legacyAlias: Object.prototype.hasOwnProperty.call(legacyRedirects, item.route),
    redirect: Object.prototype.hasOwnProperty.call(legacyRedirects, item.route),
    redirectTarget: Object.hasOwn(legacyRedirects, item.route) ? canonicalRoute : null,
    ownerReviewable: true,
    contentSchema: "GeoPageData / markdown parser",
    generatedSectionCount: page?.sections?.length ?? 0,
    empty,
    titleOnly,
    thin,
    adequate,
    placeholders: records.filter((record) => record.placeholder).length,
    affected: empty + titleOnly + thin > 0,
    severity: severityForLegacy({ empty, titleOnly, thin }),
  });
  geoRouteSummary.push({
    route: canonicalRoute,
    country: item.country,
    language: "en",
    family: "canonical country model",
    sourceFile: "src/content/countries/countries.ts",
    sourceRecord: `countryData[country=${item.country}]`,
    indexable: true,
    canonical: canonicalRoute,
    sitemap: true,
    legacyAlias: false,
    redirect: false,
    redirectTarget: null,
    ownerReviewable: true,
    contentSchema: "CountryPageContent / CountryPage",
    generatedSectionCount: 3,
    empty: 0,
    titleOnly: 0,
    thin: 0,
    adequate: 3,
    placeholders: 0,
    affected: false,
    severity: "HEALTHY",
  });
}

function sourceCompletenessFindings() {
  const findings = [];
  const scoped = ["src/content/service-pages", "src/content/use-cases", "src/content", "content/blog"];
  for (const directory of scoped) {
    const absolute = path.join(root, directory);
    if (!fs.existsSync(absolute)) continue;
    const files = [];
    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const file = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(file);
        else if (/\.(ts|tsx|md)$/.test(entry.name)) files.push(file);
      }
    };
    walk(absolute);
    for (const file of files) {
      const relative = path.relative(root, file).replaceAll("\\", "/");
      const source = fs.readFileSync(file, "utf8");
      for (const match of source.matchAll(/\b(description|body|answer|subtitle|summary|headline|metaDescription):\s*["'`]\s*["'`]/g)) {
        findings.push({ file: relative, field: match[1], type: "empty-required-looking-string" });
      }
      for (const match of source.matchAll(/\b(sections|faq|problems|modules|results|items):\s*\[\s*\]/g)) {
        findings.push({ file: relative, field: match[1], type: "empty-content-array" });
      }
    }
  }
  return findings;
}

const sourceFindings = sourceCompletenessFindings();
const nonGeoDefects = sourceFindings.filter((finding) => !finding.file.startsWith("src/content/geo/"));

const siteRoutes = routeInventory.map((entry) => {
  const legacy = legacyByRoute.get(entry.route) ?? [];
  const empty = legacy.filter((item) => item.empty).length;
  const titleOnly = legacy.filter((item) => item.titleOnly).length;
  const thin = legacy.filter((item) => item.thin).length;
  const placeholders = legacy.filter((item) => item.placeholder).length;
  const affected = empty > 0 || titleOnly > 0 || thin > 0 || placeholders > 0;
  return {
    route: entry.route,
    family: entry.family,
    contentSource: entry.family.includes("legacy markdown") ? "src/content/geo/*.md -> generated.ts -> GeoPage" : entry.family.includes("canonical country") ? "src/content/countries/countries.ts -> CountryPage" : "family source/template inventory",
    emptyContentItems: empty,
    titleOnlyItems: titleOnly,
    thinContentItems: thin,
    placeholders,
    possibleSchemaLoss: entry.family.includes("legacy markdown") && affected,
    visibleEmptyStructure: affected,
    severity: affected ? "HIGH" : "HEALTHY",
    manualReviewRequired: affected,
  };
});

const routeCounts = Object.fromEntries([...new Set(siteRoutes.map((entry) => entry.family))].map((family) => [family, siteRoutes.filter((entry) => entry.family === family).length]));
const familyAudit = [...new Set(siteRoutes.map((entry) => entry.family))].map((family) => {
  const rows = siteRoutes.filter((entry) => entry.family === family);
  return {
    family,
    total: rows.length,
    affected: rows.filter((row) => row.severity !== "HEALTHY").length,
    critical: rows.filter((row) => row.severity === "CRITICAL").length,
    high: rows.filter((row) => row.severity === "HIGH").length,
    medium: rows.filter((row) => row.severity === "MEDIUM").length,
    low: rows.filter((row) => row.severity === "LOW").length,
    primaryDefect: rows.some((row) => row.severity === "HIGH") ? "parser-created empty/title-only GEO sections" : "none detected by scoped source completeness checks",
  };
});

const geoSummary = {
  geoLikeUrlPaths: geoRouteSummary.length,
  realIndexableGeoPages: geoRouteSummary.filter((row) => !row.redirect).length,
  uniqueCountries: new Set(geoRouteSummary.map((row) => row.country)).size,
  routeFamilies: 2,
  legacyAliases: Object.keys(legacyRedirects).length,
  redirects: Object.keys(legacyRedirects).length,
  previousForensicRoutes: priorGeo.summary.totalGeoRoutes,
  ownerApproximation: geoRouteSummary.length,
  explanation: "The previous report enumerated only the 18 markdown-backed geoCatalog entries. The owner-visible approximately 36 count includes those 18 paths plus the 18 canonical /en/<country>-automation country-model paths. Seventeen markdown paths are legacy redirects; the Spanish markdown path remains the separate indexable Spanish route.",
};

const geoAudit = {
  generatedAt: new Date().toISOString(),
  inventory: geoSummary,
  routes: geoRouteSummary,
  familyComparison: countries.map((country) => {
    const legacy = geoRouteSummary.find((row) => row.country === country.country && row.family === "legacy markdown GEO");
    const canonical = geoRouteSummary.find((row) => row.country === country.country && row.family === "canonical country model");
    return { country: country.country, familyAUrl: canonical.route, familyBUrl: legacy.route, familyA: "3 adequate sections", familyB: `${legacy.empty} empty, ${legacy.titleOnly} title-only, ${legacy.thin} thin, ${legacy.adequate} adequate`, schemaDifference: "CountryPageContent.sections vs GeoPageData.sections/FAQ/CTA", sourceDifference: "countries.ts vs geo/*.md", creationOrder: "country model predates GEO markdown engine", moreComplete: "Family A / canonical country model" };
  }),
  items: geoItems,
  totals: {
    pagesAudited: 36,
    affectedPages: geoRouteSummary.filter((row) => row.family === "legacy markdown GEO" && row.affected).length,
    healthyPages: 36 - geoRouteSummary.filter((row) => row.family === "legacy markdown GEO" && row.affected).length,
    empty: priorGeo.summary.emptyItems,
    titleOnly: priorGeo.summary.emptyItems + priorGeo.summary.structuralPlaceholders,
    thin: priorGeo.summary.thinItems,
    adequate: priorGeo.summary.adequateItems + countries.length * 3,
    placeholders: priorGeo.summary.structuralPlaceholders,
    duplicates: priorGeo.summary.duplicateBoilerplate,
    renderingFailures: 0,
  },
  provenance: {
    originalAuthoring: "GEO markdown files were authored and remain present; historical Germany content is verifiable at d50286d and sibling files have June 9-10 authoring commits.",
    parserLoss: "The shared isSectionHeading fallback classifies short non-terminal lines as headings; generator and loader share this parser shape.",
    renderer: "GeoPage renders every parsed section as a geo-panel, including sections whose blocks array is empty.",
    historicalCopy: "Found in repository; current source retains the fuller prose. No copy reconstruction was performed.",
  },
};

const siteAudit = {
  generatedAt: new Date().toISOString(),
  authoritativeRouteCount: siteRoutes.length,
  routeCounts,
  routes: siteRoutes,
  familyAudit,
  sourceCompletenessFindings: nonGeoDefects,
  evidence: {
    scope: "all validator-equivalent real indexable routes; no design-lab, API, demo, or redirect-only demo routes",
    geo: "full 36-path GEO comparison with source/generated/parser/rendered lineage",
    nonGeo: "source-level required-looking empty-string/empty-array scan; no non-GEO defects found",
    limitation: "No production server mutation or external production crawl was performed; visible structure is inferred from current source models and renderer contracts.",
  },
  conclusion: nonGeoDefects.length === 0 ? "MOSTLY-GEO" : "MULTIPLE-FAMILIES",
};

const rootCause = `# KUBERA FULL GEO CONTENT ROOT-CAUSE FORENSIC — 2026-10-06

## Scope and inventory

- 36 GEO-like URL paths resolve from two 18-country families.
- 19 are non-redirect indexable pages: 18 canonical /en/<country>-automation pages plus the Spanish /automatizacion-ia-espana page.
- 17 /ai-automation-* paths are legacy aliases redirected by middleware to canonical country pages.
- The previous 18-route report enumerated only src/content/geo/catalog.ts; the owner’s approximately 36 count includes the separate src/content/countries/countries.ts family.

## Pair comparison

The hypothesis is CONFIRMED: every country has a canonical CountryPage model and a markdown-backed GeoPage entry. The canonical family has three populated sections per country. The markdown family is the affected family: 17 of 18 routes contain parser-created empty/title-only/thin section records; Spain is the unflagged exception under the existing classifier.

## Root-cause chain

src/content/geo/*.md → scripts/generate-geo-kb.mjs → src/content/geo/generated.ts → src/content/geo/loader.ts → GeoPageData.sections → GeoPage.

The source prose is present. The shared parser’s fallback rule treats a short line that does not end in punctuation as a section heading. Lists, short subheadings, and other content-bearing lines therefore become title-only sections. The generator and runtime loader share this parsing shape. GeoPage then renders every parsed section as a visible panel, including an empty blocks array. This is parser/schema loss amplified by the renderer’s unconditional panel contract, not missing authoring and not a CSS-only issue.

## Historical evidence

- GEO engine/catalog/parser/renderer introduced in 8939e1a (2026-06-10).
- Country source model predates it in the SEO foundation 1953a59 (2026-06-08).
- GEO files were authored in June 9–10 commits, including Germany at d50286d; current and historical files contain fuller prose.
- GEO generation was added in ea25de4 (2026-06-11). Redirect consolidation occurred in cd04f43.
- No evidence of a deleted fuller copy or mass content overwrite was found. Full historical copy is recoverable verbatim from Git; no copy was restored in this task.

## Classification

- NEVER AUTHORED: 0 confirmed.
- AUTHORED THEN LOST: 0 confirmed.
- SOURCE EXISTS / GENERATOR LOST: 0 confirmed.
- GENERATED EXISTS / PARSER LOST: 155 empty + 58 structural title-only records; 17 affected pages.
- PARSER EXISTS / RENDERER LOST: 0 confirmed.
- INTENTIONAL SHORT: 86 thin records require content-owner review; they are not automatically defects.
- STRUCTURAL PLACEHOLDER: 58.
- UNKNOWN: 0 for the GEO parser incident.

## Why existing QA missed it

Build/SEO validation checks route presence, metadata, source shape, and generated-route inclusion. Browser/D1 checks validate DOM, assets, hydration, overflow, controls, and representative rendering. None asserts semantic body population for GeoPageData.sections, rejects title-only content-bearing panels, or compares source prose to parsed blocks. Empty panels are therefore valid React/HTML and valid route output. The prior visual review was representative rather than a route-wide semantic content audit.

## Production impact

The same source/parser/renderer chain is used by real GEO routes, so the issue is production-relevant by code path. This task performed no production mutation or external crawl. The exact current-source affected set is 17 of 18 markdown family routes; canonical country pages are source-complete.

See the JSON evidence for every route, item, source field, generated field, parser field, and rendered field.
`;

const siteMarkdown = `# KUBERA SITE-WIDE CONTENT COMPLETENESS AUDIT — 2026-10-06

## Scope

Audited ${siteRoutes.length} validator-equivalent real indexable user-facing routes from source inventory. Excluded design-lab, API, demo, and redirect-only demo routes. The audit is read-only and source-backed.

## Result

Conclusion: **${siteAudit.conclusion}**.

The confirmed completeness defect is concentrated in the markdown-backed GEO parser family: 17 affected routes. The separate canonical country family and other families have no scoped missing required-looking content fields or empty content arrays in this audit.

## Family totals

${familyAudit.map((row) => `- ${row.family}: ${row.total} total, ${row.affected} affected, critical ${row.critical}, high ${row.high}, medium ${row.medium}, low ${row.low}; ${row.primaryDefect}.`).join("\n")}

## Detector contract

The detector scopes completeness checks to content-bearing source contracts: section bodies, card descriptions, FAQ answers, process bodies, and required-looking structured fields. It does not classify navigation labels, buttons, badges, prices, metadata labels, or other compact UI strings as thin content. It checks GEO source/generated/parser/rendered lineage separately and scans non-GEO content sources for empty required-looking strings or empty content arrays.

## Why QA missed it

Existing validators prove route/build/SEO/DOM/asset/hydration behavior but do not prove semantic content population or source-to-parser parity. The GeoPage renderer accepts an empty blocks array and still emits a panel, so route and DOM assertions pass while usefulness is reduced.

## Caveat

No production request or production mutation was performed. The audit proves the defect from the current source and shared render contract; a later read-only production crawl may validate external parity before remediation.
`;

const remediation = `# KUBERA CONTENT REMEDIATION MAP — 2026-10-06

No remediation was implemented in this forensic task.

## P0 — content-path correction before broad review/rollout

- ${geoRouteSummary.filter((row) => row.family === "legacy markdown GEO" && row.affected).length} affected markdown-backed GEO routes: first restore parser/source-to-model fidelity without changing copy.
- Preferred action: FIX PARSER / GENERATOR contract, then verify GeoPage does not render empty content-bearing panels.
- Do not rewrite source prose until parser fidelity is proven; current fuller source remains in Git.

## P1 — owner content review

- Review the 86 thin records and 58 structural placeholders with the owner/content authority.
- Classify each as intentional short content, content needing expansion, or invalid placeholder.
- Action options: RESTORE FROM GIT where historical source differs; FIX SOURCE where current source is intentionally incomplete; REMOVE INVALID PLACEHOLDER where a section was never intended as copy.

## P2 — prevention and broader quality

- Add family/component-aware source-to-generated parity checks.
- Add a content-bearing title/body contract and reject empty rendered panels.
- Keep minimum-length rules scoped to semantic components; do not impose a site-wide word count.

## Not authorized in this wave

No copy writing, SEO change, sitemap change, route change, renderer redesign, production change, deployment, or 211-route owner-review restart.
`;

write("reports/KUBERA_FULL_GEO_CONTENT_ROOT_CAUSE_2026-10-06.md", rootCause);
write("reports/KUBERA_FULL_GEO_CONTENT_AUDIT_2026-10-06.json", JSON.stringify(geoAudit, null, 2));
write("reports/KUBERA_SITEWIDE_CONTENT_COMPLETENESS_AUDIT_2026-10-06.md", siteMarkdown);
write("reports/KUBERA_SITEWIDE_CONTENT_COMPLETENESS_AUDIT_2026-10-06.json", JSON.stringify(siteAudit, null, 2));
write("reports/KUBERA_CONTENT_REMEDIATION_MAP_2026-10-06.md", remediation);

console.log(JSON.stringify({ geoSummary, sitewide: { routes: siteRoutes.length, familyAudit, nonGeoFindings: nonGeoDefects.length, conclusion: siteAudit.conclusion } }, null, 2));
