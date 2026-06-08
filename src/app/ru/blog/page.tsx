import type { Metadata } from "next";
import { BlogVisualShell } from "@/components/sections/BlogVisualShell";

export const metadata: Metadata = {
  title: "Блог",
  description: "Архитектура блога Kubera AI для будущей AI и n8n публикации.",
};

export default function RuBlogPage() {
  return <BlogVisualShell locale="ru" />;
}
