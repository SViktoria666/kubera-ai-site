import type { Metadata } from "next";
import { BlogVisualShell } from "@/components/sections/BlogVisualShell";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Блог",
  description: "Основа блога Kubera AI для будущих материалов про AI-автоматизацию, n8n, CRM, лиды и цифровые бизнес-системы.",
  path: "/ru/blog",
  locale: "ru",
});

export default function RuBlogPage() {
  return <BlogVisualShell locale="ru" />;
}
