import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/cases/CaseStudyPage";
import { caseStudies, getCaseStudyBySlug } from "@/content/cases";
import { createPageMetadata } from "@/content/seo";

type CasePageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CasePageParams): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return createPageMetadata({
    title: caseStudy.title,
    description: caseStudy.short,
    path: `/cases/${caseStudy.slug}`,
    locale: "en",
    image: caseStudy.imagePath,
  });
}

export default async function CaseSlugPage({ params }: CasePageParams) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage caseStudy={caseStudy} />;
}

export const dynamicParams = false;
