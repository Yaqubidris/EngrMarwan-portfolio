import { ExecutivePortfolioPage } from "@/components/portfolio/ExecutivePortfolioPage";
import { PortfolioNavigation } from "@/components/navigation/PortfolioNavigation";
import { getExecutiveProfile } from "@/lib/get-executive-profile";

export default function Home() {
  const content = getExecutiveProfile();

  return (
    <>
      <PortfolioNavigation />
      <main>
        <ExecutivePortfolioPage content={content} />
      </main>
    </>
  );
}
