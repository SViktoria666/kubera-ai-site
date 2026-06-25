import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/cases/CaseStudyPage";
import { caseStudies, getCasePageContent, getCaseStudyBySlug } from "@/content/cases";
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

  const pageContent = getCasePageContent(caseStudy, "ru");

  return createPageMetadata({
    title: pageContent?.title ?? caseStudy.title,
    description: pageContent?.short ?? caseStudy.short,
    path: `/ru/keysy/${caseStudy.slug}`,
    locale: "ru",
    image: caseStudy.imagePath,
  });
}

export default async function RuCaseSlugPage({ params }: CasePageParams) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage caseStudy={caseStudy} locale="ru" />;
}

export const dynamicParams = false;
