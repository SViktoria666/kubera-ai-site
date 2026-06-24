import "server-only";

import fs from "node:fs";
import path from "node:path";
import { blogConfig } from "./meta";
import { getBlogPublishedDate } from "./helpers";

export type BlogLanguage = "en" | "ru" | "es" | string;
export type BlogStatus = "draft" | "approved" | "published" | string;

export type BlogFrontmatter = {
  title: string;
  slug: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  date: string;
  publishedAt: string;
  tags: string[];
  status: BlogStatus;
  language: BlogLanguage;
  category: string;
};

export type BlogPost = {
  frontmatter: BlogFrontmatter;
  body: string;
  excerpt: string;
  fileName: string;
  filePath: string;
  url: string;
};

const frontmatterDelimiter = /^---\s*$/;

function isVisibleStatus(status: BlogStatus) {
  return blogConfig.visibleStatuses.includes(status as (typeof blogConfig.visibleStatuses)[number]);
}

function toSlug(fileName: string) {
  return fileName.replace(/\.md$/, "");
}

function parseScalar(value: string) {
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

function parseFrontmatter(raw: string): { frontmatter: Partial<BlogFrontmatter>; body: string } {
  const normalized = raw.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");

  if (!frontmatterDelimiter.test(lines[0] ?? "")) {
    return { frontmatter: {}, body: normalized.trim() };
  }

  let index = 1;
  const frontmatterLines: string[] = [];

  while (index < lines.length && !frontmatterDelimiter.test(lines[index] ?? "")) {
    frontmatterLines.push(lines[index]);
    index += 1;
  }

  const body = lines.slice(index + 1).join("\n").trim();
  const frontmatter: Partial<BlogFrontmatter> = {};

  for (const line of frontmatterLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    const parsed = parseScalar(value);

    if (key === "tags" && Array.isArray(parsed)) {
      frontmatter.tags = parsed;
      continue;
    }

    if (key === "tags" && typeof parsed === "string") {
      frontmatter.tags = parsed
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      continue;
    }

    if (key === "title" || key === "slug" || key === "description" || key === "seoTitle" || key === "metaDescription" || key === "date" || key === "publishedAt" || key === "status" || key === "language" || key === "category") {
      frontmatter[key] = String(parsed);
    }
  }

  return { frontmatter, body };
}

function firstParagraph(body: string) {
  const blocks = body
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const paragraph = blocks.find((block) => !block.startsWith("#"));
  return paragraph ?? "";
}

function normalizePost(fileName: string, raw: string): BlogPost | null {
  const parsed = parseFrontmatter(raw);
  const inferredSlug = toSlug(fileName);
  const slug = parsed.frontmatter.slug || inferredSlug;

  const frontmatter: BlogFrontmatter = {
    title: String(parsed.frontmatter.title ?? ""),
    slug,
    description: String(parsed.frontmatter.description ?? ""),
    seoTitle: String(parsed.frontmatter.seoTitle ?? ""),
    metaDescription: String(parsed.frontmatter.metaDescription ?? ""),
    date: String(parsed.frontmatter.date ?? ""),
    publishedAt: String(parsed.frontmatter.publishedAt ?? ""),
    tags: Array.isArray(parsed.frontmatter.tags) ? parsed.frontmatter.tags.map((tag) => String(tag).trim()).filter(Boolean) : [],
    status: String(parsed.frontmatter.status ?? "draft"),
    language: String(parsed.frontmatter.language ?? blogConfig.defaultLanguage),
    category: String(parsed.frontmatter.category ?? blogConfig.defaultCategory),
  };

  const requiredFields: Array<keyof BlogFrontmatter> = ["title", "slug", "description", "seoTitle", "metaDescription", "date", "publishedAt", "tags", "status", "language", "category"];
  const missing = requiredFields.filter((field) => {
    const value = frontmatter[field];
    return Array.isArray(value) ? value.length === 0 : String(value).trim().length === 0;
  });

  if (missing.length) {
    throw new Error(`Blog post ${fileName} is missing required frontmatter fields: ${missing.join(", ")}`);
  }

  if (!isVisibleStatus(frontmatter.status)) {
    return null;
  }

  return {
    frontmatter,
    body: parsed.body,
    excerpt: frontmatter.description || firstParagraph(parsed.body),
    fileName,
    filePath: path.join(blogConfig.contentDir, fileName),
    url: `/blog/${slug}`,
  };
}

function readBlogFiles() {
  if (!fs.existsSync(blogConfig.contentDir)) {
    return [];
  }

  return fs
    .readdirSync(blogConfig.contentDir)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort((left, right) => left.localeCompare(right));
}

export function getAllBlogPosts() {
  const posts: BlogPost[] = [];

  for (const fileName of readBlogFiles()) {
    const filePath = path.join(blogConfig.contentDir, fileName);
    const raw = fs.readFileSync(filePath, "utf8");
    const post = normalizePost(fileName, raw);

    if (post) {
      posts.push(post);
    }
  }

  const sortedPosts = posts.sort((left, right) => {
    const leftDate = Date.parse(getBlogPublishedDate(left)) || 0;
    const rightDate = Date.parse(getBlogPublishedDate(right)) || 0;
    if (leftDate !== rightDate) {
      return rightDate - leftDate;
    }
    return left.frontmatter.title.localeCompare(right.frontmatter.title);
  });

  return sortedPosts;
}

export function getBlogPostBySlug(slug: string) {
  return getAllBlogPosts().find((post) => post.frontmatter.slug === slug) ?? null;
}

export function getBlogPostSlugs() {
  return getAllBlogPosts().map((post) => post.frontmatter.slug);
}
