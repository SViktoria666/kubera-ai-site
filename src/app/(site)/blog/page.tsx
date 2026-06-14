import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/blog/BlogIndexPage";
import { getAllBlogPosts } from "@/content/blog";
import { blogConfig } from "@/content/blog/meta";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description: blogConfig.siteDescription,
  path: "/blog",
  locale: "en",
});

export default function BlogPage() {
  return <BlogIndexPage locale="en" posts={getAllBlogPosts()} />;
}
