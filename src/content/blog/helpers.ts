import type { BlogPost } from "./index";
import { createPageMetadata } from "@/content/seo";

export function getBlogPublishedDate(post: BlogPost) {
  return post.frontmatter.publishedAt || post.frontmatter.date;
}

export function getBlogSeoTitle(post: BlogPost) {
  return post.frontmatter.seoTitle || post.frontmatter.title;
}

export function getBlogSeoDescription(post: BlogPost) {
  return post.frontmatter.metaDescription || post.frontmatter.description;
}

export function buildBlogPageMetadata(post: BlogPost) {
  return createPageMetadata({
    title: getBlogSeoTitle(post),
    description: getBlogSeoDescription(post),
    path: post.url,
    locale: post.frontmatter.language === "ru" ? "ru" : "en",
  });
}
