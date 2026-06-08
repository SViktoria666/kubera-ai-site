import type { Metadata } from "next";
import { BlogIndexPlaceholder } from "@/components/blog/BlogIndexPlaceholder";

export const metadata: Metadata = {
  title: "Blog",
  description: "Kubera AI blog architecture prepared for AI and n8n publishing.",
};

export default function BlogPage() {
  return <BlogIndexPlaceholder locale="en" />;
}

