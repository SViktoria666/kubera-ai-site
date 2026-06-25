import Image from "next/image";
import Link from "next/link";
import { caseStudies, getCaseCardCopy, type CaseLocale } from "@/content/cases";

type CasesGalleryProps = {
  locale?: CaseLocale;
  basePath?: string;
};

export function CasesGallery({ locale = "en", basePath = "/cases" }: CasesGalleryProps) {
  return (
    <div className="cases-grid">
      {caseStudies.map((caseStudy) => (
        <Link className="case-card case-card-link" href={`${basePath}/${caseStudy.slug}`} key={caseStudy.slug}>
          <Image
            src={caseStudy.imagePath}
            alt={caseStudy.imageAlt}
            width={1254}
            height={1254}
            sizes="(max-width: 720px) calc(100vw - 32px), 50vw"
          />
          <div style={{ display: "grid", gap: "8px", padding: "20px 22px 22px" }}>
            {(() => {
              const cardCopy = getCaseCardCopy(caseStudy, locale);

              return (
                <>
                  <p className="eyebrow" style={{ marginBottom: 0 }}>
                    {cardCopy.label}
                  </p>
                  <h2 style={{ margin: 0, fontSize: "1.65rem", lineHeight: 1.08 }}>{cardCopy.title}</h2>
                  <p className="muted" style={{ margin: 0, lineHeight: 1.6 }}>
                    {cardCopy.short}
                  </p>
                </>
              );
            })()}
            <span style={{ color: "var(--color-accent)", fontWeight: 800 }}>Open case</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
