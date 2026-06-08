import type { Metadata } from "next";
import { BlogVisualShell } from "@/components/sections/BlogVisualShell";

export const metadata: Metadata = {
  title: "Blog",
  description: "Kubera AI blog architecture prepared for AI and n8n publishing.",
};

export default function BlogPage() {
  return <BlogVisualShell locale="en" />;
}
