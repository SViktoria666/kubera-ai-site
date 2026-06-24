import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const blogDir = path.join(repoRoot, "content", "blog");
const mojibakePattern = /â†’|â€”|â€“|â€™|�/;

function fail(message) {
  throw new Error(message);
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }

  if (/^\[(.*)\]$/.test(trimmed)) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) return [];
    return inner
      .split(",")
      .map((item) => item.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
  }

  return trimmed;
}

function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");

  if ((lines[0] ?? "").trim() !== "---") {
    fail("Blog file is missing frontmatter delimiter.");
  }

  let index = 1;
  const frontmatter = {};

  while (index < lines.length && (lines[index] ?? "").trim() !== "---") {
    const line = lines[index].trim();
    index += 1;
    if (!line || line.startsWith("#")) continue;
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    const parsed = parseScalar(value);
    frontmatter[key] = parsed;
  }

  return frontmatter;
}

function ensure(condition, message) {
  if (!condition) {
    fail(message);
  }
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

const blogFiles = fs
  .readdirSync(blogDir)
  .filter((fileName) => fileName.endsWith(".md"))
  .sort((left, right) => left.localeCompare(right));

ensure(blogFiles.length > 0, "No blog markdown files found.");

for (const fileName of blogFiles) {
  const filePath = path.join(blogDir, fileName);
  const raw = readText(filePath);
  const frontmatter = parseFrontmatter(raw);

  ensure(typeof frontmatter.title === "string" && frontmatter.title.trim().length > 0, `${fileName} is missing title.`);
  ensure(typeof frontmatter.slug === "string" && frontmatter.slug.trim().length > 0, `${fileName} is missing slug.`);
  ensure(typeof frontmatter.description === "string" && frontmatter.description.trim().length > 0, `${fileName} is missing description.`);
  ensure(typeof frontmatter.seoTitle === "string" && frontmatter.seoTitle.trim().length > 0, `${fileName} is missing seoTitle.`);
  ensure(typeof frontmatter.metaDescription === "string" && frontmatter.metaDescription.trim().length > 0, `${fileName} is missing metaDescription.`);
  ensure(typeof frontmatter.date === "string" && frontmatter.date.trim().length > 0, `${fileName} is missing date.`);
  ensure(typeof frontmatter.publishedAt === "string" && frontmatter.publishedAt.trim().length > 0, `${fileName} is missing publishedAt.`);
  ensure(frontmatter.date === frontmatter.publishedAt, `${fileName} must keep date and publishedAt in sync.`);
  ensure(frontmatter.category === "AI Automation", `${fileName} must use category AI Automation.`);
  ensure(frontmatter.status === "published", `${fileName} must use published status.`);
  ensure(path.basename(fileName, ".md") === frontmatter.slug, `${fileName} must keep filename and slug aligned.`);
  ensure(!mojibakePattern.test(raw), `${fileName} contains mojibake text.`);
}

const routeFile = readText(path.join(repoRoot, "src", "app", "(site)", "blog", "[slug]", "page.tsx"));
const blogArticleFile = readText(path.join(repoRoot, "src", "components", "blog", "BlogArticlePage.tsx"));
const blogIndexFile = readText(path.join(repoRoot, "src", "components", "blog", "BlogIndexPage.tsx"));
const sitemapFile = readText(path.join(repoRoot, "src", "app", "sitemap.ts"));
const blogMetaFile = readText(path.join(repoRoot, "src", "content", "blog", "meta.ts"));

ensure(routeFile.includes("buildBlogPageMetadata"), "Blog route must use blog metadata helper.");
ensure(blogArticleFile.includes("getBlogPublishedDate"), "Blog article page must use publishedAt/date helper.");
ensure(blogArticleFile.includes("getBlogSeoDescription"), "Blog article page must use SEO description helper.");
ensure(blogArticleFile.includes("BlogPosting"), "Blog article page must render BlogPosting schema.");
ensure(blogIndexFile.includes("getBlogPublishedDate"), "Blog index page must use publishedAt/date helper.");
ensure(sitemapFile.includes("getBlogPublishedDate"), "Sitemap must use publishedAt/date helper for blog posts.");
ensure(blogMetaFile.includes('defaultCategory: "AI Automation"'), "Blog default category must remain AI Automation.");

console.log(`Validated ${blogFiles.length} blog posts and blog metadata standards.`);
