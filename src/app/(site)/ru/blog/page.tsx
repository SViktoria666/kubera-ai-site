import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/blog/BlogIndexPage";
import { getAllBlogPosts } from "@/content/blog";
import { blogConfig } from "@/content/blog/meta";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Блог",
  description: blogConfig.siteDescription,
  path: "/ru/blog",
  locale: "ru",
});

export default function RuBlogPage() {
  return <BlogIndexPage locale="ru" posts={getAllBlogPosts()} />;
}
