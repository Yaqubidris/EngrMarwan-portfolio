import type { ExecutiveProfile } from "@/types/executive-profile";
import { Footer } from "@/components/layout/Footer";
import { BiographySection } from "@/components/sections/BiographySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExecutiveSummarySection } from "@/components/sections/ExecutiveSummarySection";
import { ExecutiveIdentitySection } from "@/components/sections/ExecutiveIdentitySection";
import { FeaturedBannerSection } from "@/components/sections/FeaturedBannerSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactDashboardSection } from "@/components/sections/ImpactDashboardSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { ModernizationSection } from "@/components/sections/ModernizationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { VisionSection } from "@/components/sections/VisionSection";

type ExecutivePortfolioPageProps = {
  content: ExecutiveProfile;
  printMode?: boolean;
};

export function ExecutivePortfolioPage({
  content,
  printMode = false,
}: ExecutivePortfolioPageProps) {
  return (
    <>
      <main className={printMode ? "print-container" : ""}>
        <HeroSection disableAnimation={printMode} />
        <ExecutiveIdentitySection disableAnimation={printMode} />
        <FeaturedBannerSection disableAnimation={printMode} />
        <ExecutiveSummarySection
          data={content.sections.executive_summary}
          disableAnimation={printMode}
        />
      <BiographySection data={content.sections.biography} disableAnimation={printMode} />
      <EducationSection disableAnimation={printMode} />
      <LeadershipSection data={content.sections.leadership} disableAnimation={printMode} />
        <ProjectsSection projects={content.projects} disableAnimation={printMode} />
        <ImpactDashboardSection kpis={content.kpis} disableAnimation={printMode} />
        <MediaSection items={content.media_mentions} disableAnimation={printMode} />
        <VisionSection
          data={content.sections.vision}
          priorities={content.priorities}
          disableAnimation={printMode}
        />
        <ModernizationSection
          opportunities={content.modernization_opportunities}
          disableAnimation={printMode}
        />
        <ContactSection data={content.sections.contact} disableAnimation={printMode} />
      </main>
      <Footer />
    </>
  );
}
