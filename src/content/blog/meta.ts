import path from "node:path";

export const blogConfig = {
  contentDir: path.join(process.cwd(), "content/blog"),
  defaultCategory: "AI Automation",
  defaultLanguage: "en",
  visibleStatuses: ["approved", "published"] as const,
  siteTitle: "Kubera AI Blog",
  siteDescription: "Kubera AI articles about AI automation, n8n, workflows, and practical business systems.",
};

export const blogFoundation = {
  categories: ["AI Automation", "n8n", "CRM", "Lead Generation", "Business Systems"],
  tags: ["automation", "ai", "workflow", "crm", "telegram", "whatsapp", "lead-processing"],
  authors: [
    {
      name: "Kubera AI",
      role: "Automation team",
      url: "https://kubera-automation.com",
    },
  ],
};
