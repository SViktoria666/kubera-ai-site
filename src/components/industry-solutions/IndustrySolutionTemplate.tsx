import type { ReactNode } from "react";
import type { IndustrySolution } from "@/content/industry-solutions";
import { IndustryAutomationModules } from "./IndustryAutomationModules";
import { IndustryBusinessResults } from "./IndustryBusinessResults";
import { IndustryFAQ } from "./IndustryFAQ";
import { IndustryFinalCTA } from "./IndustryFinalCTA";
import { IndustryMidCTA } from "./IndustryMidCTA";
import { IndustryProblemSection } from "./IndustryProblemSection";
import { IndustryRecommendedServices } from "./IndustryRecommendedServices";
import { IndustryRelevantCases } from "./IndustryRelevantCases";
import { IndustryInternalLinks } from "./IndustryInternalLinks";
import { IndustrySolutionExplainer } from "./IndustrySolutionExplainer";
import { IndustrySolutionArchitecture } from "./IndustrySolutionArchitecture";
import { IndustrySolutionHero } from "./IndustrySolutionHero";
import { PricingPackages } from "../sections/PricingPackages";

export function IndustrySolutionTemplate({
  solution,
  schemas,
}: {
  solution: IndustrySolution;
  schemas: ReactNode[];
}) {
  return (
    <main className="solutions-page" lang="en">
      {schemas}

      <section className="solution-shell">
        <div className="container solution-container">
          <IndustrySolutionHero solution={solution} />
          <IndustrySolutionExplainer solution={solution} />
          <IndustryProblemSection solution={solution} />
          <IndustrySolutionArchitecture solution={solution} />
          <IndustryAutomationModules solution={solution} />
          <IndustryBusinessResults solution={solution} />
          <IndustryMidCTA solution={solution} />
          <PricingPackages locale="en" />
          <IndustryRecommendedServices solution={solution} />
          <IndustryRelevantCases solution={solution} />
          <IndustryInternalLinks solution={solution} />
          <IndustryFAQ solution={solution} />
          <IndustryFinalCTA solution={solution} />
        </div>
      </section>
    </main>
  );
}
