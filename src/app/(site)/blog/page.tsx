import type { Metadata } from "next";
import { BlogVisualShell } from "@/components/sections/BlogVisualShell";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description: "Kubera AI blog foundation for future articles about AI automation, n8n, CRM workflows, lead processing, and digital business systems.",
  path: "/blog",
  locale: "en",
});

export default function BlogPage() {
  return <BlogVisualShell locale="en" />;
}
