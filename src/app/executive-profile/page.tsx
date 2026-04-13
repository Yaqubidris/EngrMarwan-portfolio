import type { Metadata } from "next";
import { ExecutivePortfolioPage } from "@/components/portfolio/ExecutivePortfolioPage";
import { getExecutiveProfile } from "@/lib/get-executive-profile";

export const metadata: Metadata = {
  title: "Executive Profile | Engr. Marwan Ahmad",
  description: "Print-friendly executive profile for institutional sharing.",
};

export default function ExecutiveProfilePage() {
  const content = getExecutiveProfile();

  return <ExecutivePortfolioPage content={content} printMode />;
}
