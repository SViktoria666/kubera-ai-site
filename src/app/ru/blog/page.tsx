import type { Metadata } from "next";
import { BlogIndexPlaceholder } from "@/components/blog/BlogIndexPlaceholder";

export const metadata: Metadata = {
  title: "Блог",
  description: "Архитектура блога Kubera AI для будущей AI и n8n публикации.",
};

export default function RuBlogPage() {
  return <BlogIndexPlaceholder locale="ru" />;
}

