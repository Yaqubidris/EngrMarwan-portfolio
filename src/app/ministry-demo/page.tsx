import { MinistryHero } from "@/components/ministry/MinistryHero";
import { MinistryImpactDashboard } from "@/components/ministry/MinistryImpactDashboard";
import { MinistryBlueprintSection } from "@/components/ministry/MinistryBlueprintSection";
import { MinistryContact } from "@/components/ministry/MinistryContact";
import { MinistryLeadershipMessage } from "@/components/ministry/MinistryLeadershipMessage";
import { MinistryMandate } from "@/components/ministry/MinistryMandate";
import { MinistryNavbar } from "@/components/ministry/MinistryNavbar";
import { MinistryAbout } from "@/components/ministry/MinistryAbout";
import { MinistryDepartments } from "@/components/ministry/MinistryDepartments";
import { MinistryFooter } from "@/components/ministry/MinistryFooter";
import { MinistryNews } from "@/components/ministry/MinistryNews";
import { MinistryProjectsDashboard } from "@/components/ministry/MinistryProjectsDashboard";

export default function MinistryDemoPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <MinistryNavbar />
      <MinistryHero />
      <MinistryLeadershipMessage />
      <MinistryAbout />
      <MinistryMandate />
      <MinistryProjectsDashboard />
      <MinistryImpactDashboard />
      <MinistryBlueprintSection />
      <MinistryDepartments />
      <MinistryNews />
      <MinistryContact />
      <MinistryFooter />
    </main>
  );
}
