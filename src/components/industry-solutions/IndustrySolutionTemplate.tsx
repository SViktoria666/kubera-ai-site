import type { ReactNode } from "react";
import type { IndustrySolution } from "@/content/industry-solutions";
import { IndustryAutomationModules } from "./IndustryAutomationModules";
import { IndustryBusinessResults } from "./IndustryBusinessResults";
import { IndustryFAQ } from "./IndustryFAQ";
import { IndustryFinalCTA } from "./IndustryFinalCTA";
import { IndustryProblemSection } from "./IndustryProblemSection";
import { IndustryRecommendedServices } from "./IndustryRecommendedServices";
import { IndustryRelevantCases } from "./IndustryRelevantCases";
import { IndustrySolutionArchitecture } from "./IndustrySolutionArchitecture";
import { IndustrySolutionHero } from "./IndustrySolutionHero";

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
          <IndustryProblemSection solution={solution} />
          <IndustrySolutionArchitecture solution={solution} />
          <IndustryAutomationModules solution={solution} />
          <IndustryBusinessResults solution={solution} />
          <IndustryRecommendedServices solution={solution} />
          <IndustryRelevantCases solution={solution} />
          <IndustryFAQ solution={solution} />
          <IndustryFinalCTA solution={solution} />
        </div>
      </section>
    </main>
  );
}

