import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const canonicalHost = "https://www.kubera-automation.com";
const failures = [];
const warnings = [];

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function ensure(condition, message) {
  if (!condition) fail(message);
}

function parseFrontmatter(raw, fileName) {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  ensure(lines[0]?.trim() === "---", `${fileName}: missing frontmatter opener`);
  const result = {};
  let index = 1;
  while (index < lines.length && lines[index].trim() !== "---") {
    const line = lines[index].trim();
    index += 1;
    if (!line || line.startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();
    result[key] = rawValue.replace(/^['"]|['"]$/g, "");
  }
  return result;
}

function listFiles(directory, extension) {
  return fs.readdirSync(path.join(repoRoot, directory)).filter((file) => file.endsWith(extension)).sort();
}

function parseQuotedValues(relativePath, pattern) {
  return [...read(relativePath).matchAll(pattern)].map((match) => match[1]);
}

function parseQuotedValuesFromFiles(relativePaths, pattern) {
  return relativePaths.flatMap((relativePath) => parseQuotedValues(relativePath, pattern));
}

function collectPageFiles(directory, result = []) {
  for (const entry of fs.readdirSync(path.join(repoRoot, directory), { withFileTypes: true })) {
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

function getExpectedRoutes() {
  const routes = new Set();
  for (const pageFile of collectPageFiles("src/app")) {
    const route = routeFromPageFile(pageFile);
    if (route && !route.startsWith("/api/") && !route.startsWith("/design-lab/") && !["/demo", "/ru/demo"].includes(route)) routes.add(route);
  }
  for (const route of expectedBlogRoutes) routes.add(route);
  for (const slug of caseSlugs) {
    routes.add(`/cases/${slug}`);
    routes.add(`/ru/keysy/${slug}`);
  }
  for (const slugBase of countryBases) routes.add(`/en/${slugBase}-automation`);
  for (const route of industryRoutes) routes.add(route);
  for (const route of geoRoutes) routes.add(route);
  return routes;
}

function getBuiltRoutes() {
  const manifestPath = path.join(repoRoot, ".next", "prerender-manifest.json");
  if (!fs.existsSync(manifestPath) || !fs.existsSync(path.join(repoRoot, ".next", "BUILD_ID"))) return null;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  if (!manifest.routes || Object.keys(manifest.routes).length === 0) return null;
  return new Set(Object.keys(manifest.routes).filter((route) => !route.startsWith("/_") && !route.startsWith("/design-lab/") && !["/robots.txt", "/sitemap.xml"].includes(route)));
}

const blogFiles = listFiles("content/blog", ".md");
const blogSlugs = [];
const blogPosts = [];
const requiredBlogFields = ["title", "slug", "description", "seoTitle", "metaDescription", "date", "publishedAt", "status", "language", "category"];
let builtRoutes;
let expectedRoutes;

for (const fileName of blogFiles) {
  const frontmatter = parseFrontmatter(read(path.join("content/blog", fileName)), fileName);
  for (const field of requiredBlogFields) {
    ensure(String(frontmatter[field] ?? "").trim().length > 0, `${fileName}: missing ${field}`);
  }
  const slug = String(frontmatter.slug ?? "").trim();
  blogSlugs.push(slug);
  blogPosts.push({ fileName, ...frontmatter });
  ensure(path.basename(fileName, ".md") === slug, `${fileName}: filename and slug differ`);
  ensure(frontmatter.status === "published", `${fileName}: only published articles are indexable`);
  ensure(frontmatter.date === frontmatter.publishedAt, `${fileName}: date and publishedAt differ`);
  const timestamp = Date.parse(frontmatter.publishedAt);
  ensure(Number.isFinite(timestamp), `${fileName}: invalid publishedAt date`);
  if (Number.isFinite(timestamp)) ensure(timestamp <= Date.now() + 24 * 60 * 60 * 1000, `${fileName}: future publishedAt date`);
  ensure(!/[�]|Ã.|â€/.test(read(path.join("content/blog", fileName))), `${fileName}: mojibake detected`);
}

ensure(blogFiles.length === 48, `Expected current blog inventory of 48 files, found ${blogFiles.length}`);
ensure(new Set(blogSlugs).size === blogSlugs.length, "Duplicate published blog slug detected");

const expectedBlogRoutes = blogSlugs.map((slug) => `/blog/${slug}`);

const caseSlugs = parseQuotedValues("src/content/cases.ts", /\bslug:\s*["']([^"']+)["']/g);
const industrySolutionFiles = fs.readdirSync(path.join(repoRoot, "src/content")).filter((fileName) => /^industry-solutions.*\.ts$/.test(fileName)).map((fileName) => path.join("src/content", fileName));
const industryRoutes = parseQuotedValuesFromFiles(industrySolutionFiles, /\burl:\s*["'](\/en\/solutions\/[^"']+)["']/g);
const countryBases = parseQuotedValues("src/content/countries/countries.ts", /\bslugBase:\s*["']([^"']+)["']/g);
const geoRoutes = parseQuotedValues("src/content/geo/catalog.ts", /\broute:\s*["'](\/[^"']+)["']/g);
expectedRoutes = getExpectedRoutes();
builtRoutes = getBuiltRoutes();
if (builtRoutes) {
  for (const route of expectedRoutes) ensure(builtRoutes.has(route), `Expected route missing from production build: ${route}`);
} else {
  warn("Build manifest unavailable; run npm run build for source-to-build route consistency proof.");
}

const sitemapSource = read("src/app/sitemap.ts");
const staticSitemapRoutes = [...sitemapSource.matchAll(/\{ route:\s*["']([^"']*)["']/g)].map((match) => match[1] || "/");
const duplicateStaticRoutes = staticSitemapRoutes.filter((route, index) => staticSitemapRoutes.indexOf(route) !== index);
ensure(staticSitemapRoutes.length === new Set(staticSitemapRoutes).size, `Duplicate static sitemap routes: ${[...new Set(duplicateStaticRoutes)].join(", ")}`);
ensure(sitemapSource.includes(`const baseUrl = "${canonicalHost}"`), "Sitemap canonical host is not the approved production host");
for (const requiredSource of ["getAllBlogPosts", "caseStudies", "countries", "geoRoutes", "industrySolutions"]) {
  ensure(sitemapSource.includes(requiredSource), `Sitemap does not consume expected source: ${requiredSource}`);
}
ensure(!/(localhost|127\.0\.0\.1|vercel\.app)/i.test(sitemapSource), "Sitemap source contains a non-production host");
for (const route of [...expectedRoutes].filter((candidate) => !candidate.includes("["))) {
  const isGeneratedFromCatalog = ["/blog/", "/cases/", "/ru/keysy/", "/en/", "/ai-automation-", "/automatizacion-ia-"].some((prefix) => route.startsWith(prefix));
  if (!isGeneratedFromCatalog) ensure(staticSitemapRoutes.includes(route), `Static route missing from sitemap source: ${route}`);
}

const sourceFiles = [];
function collectSourceFiles(directory) {
  for (const entry of fs.readdirSync(path.join(repoRoot, directory), { withFileTypes: true })) {
    const relative = path.join(directory, entry.name);
    if (entry.isDirectory()) collectSourceFiles(relative);
    else if (/\.(ts|tsx)$/.test(entry.name)) sourceFiles.push(relative);
  }
}
collectSourceFiles("src/app");
collectSourceFiles("src/content");
collectSourceFiles("src/components");

const canonicalLiterals = [];
for (const relative of sourceFiles) {
  const source = read(relative);
  for (const match of source.matchAll(/\bcanonical:\s*["'](https?:\/\/[^"']+)["']/g)) canonicalLiterals.push({ relative, value: match[1] });
  ensure(!/(localhost|127\.0\.0\.1|vercel\.app)/i.test(source), `${relative}: non-production host found in indexable source`);
}
for (const { relative, value } of canonicalLiterals) ensure(value.startsWith(canonicalHost), `${relative}: canonical uses unexpected host: ${value}`);

const internalLinkCandidates = [];
for (const relative of sourceFiles) {
  const source = read(relative);
  for (const match of source.matchAll(/\bhref\s*:\s*["'](\/[^"'#?${}]+)["']/g)) internalLinkCandidates.push({ relative, route: match[1] });
  for (const match of source.matchAll(/\bhref\s*=\s*["'](\/[^"'#?${}]+)["']/g)) internalLinkCandidates.push({ relative, route: match[1] });
}
// Design Lab routes are explicitly noindex and excluded from the production
// route inventory/sitemap; links between local review surfaces are valid.
const ignoredInternalPrefixes = ["/assets/", "/api/", "/_next/", "/design-lab/"];
for (const { relative, route } of internalLinkCandidates) {
  if (ignoredInternalPrefixes.some((prefix) => route.startsWith(prefix))) continue;
  if (route === "/" || expectedRoutes.has(route)) continue;
  fail(`${relative}: internal href is not in the known route inventory: ${route}`);
}

const routeCount = builtRoutes?.size ?? expectedRoutes.size;
if (failures.length) {
  console.error(`SEO source validation: FAIL (${failures.length} deterministic failures)`);
  for (const failure of failures) console.error(`FAIL: ${failure}`);
  console.error(`SEO warnings: ${warnings.length}`);
  process.exit(1);
}

console.log(`SEO source validation: PASS (${blogFiles.length} blog files, ${routeCount} built indexable routes)`);
console.log(`SEO warnings: ${warnings.length}`);
for (const warning of warnings.slice(0, 20)) console.log(`WARNING: ${warning}`);
