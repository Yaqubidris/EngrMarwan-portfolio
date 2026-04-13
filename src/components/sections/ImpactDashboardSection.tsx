import type { KpiItem } from "@/types/executive-profile";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { FadeItem } from "@/components/animations/FadeItem";
import { StaggerContainer } from "@/components/animations/StaggerContainer";

type ImpactDashboardSectionProps = {
  kpis: KpiItem[];
  disableAnimation?: boolean;
};

function getTrendLabel(trend: KpiItem["trend"]): string {
  if (trend === "up") return "Improving";
  if (trend === "down") return "Declining";
  return "Stable";
}

function getKpiSupportLine(kpi: KpiItem): string {
  if (kpi.id === "kpi-road") {
    return "Road corridor rehabilitation progress across priority transport routes.";
  }

  if (kpi.id === "kpi-bridges") {
    return "Bridge stabilization and structural safety upgrades across key connections.";
  }

  if (kpi.id === "kpi-housing") {
    return "Serviced housing supply expansion aligned to current urban growth demand.";
  }

  const trend = getTrendLabel(kpi.trend).toLowerCase();
  return `Current reporting trend remains ${trend} across active delivery programs.`;
}

export function ImpactDashboardSection({
  kpis,
  disableAnimation = false,
}: ImpactDashboardSectionProps) {
  const hasUnvalidatedKpis = kpis.some((kpi) => kpi.verification_status !== "verified");
  const visibleKpis = kpis.slice(0, 4);

  return (
    <section id="impact-dashboard" className="section-container pt-10 md:pt-12 print:pt-6">
      <FadeInSection disableAnimation={disableAnimation} className="mx-auto max-w-4xl text-center">
        <p className="section-kicker">Delivery Impact</p>
        <h2 className="section-heading mt-2">Infrastructure &amp; Housing Impact</h2>
        <p className="text-text/76 mt-4 text-sm leading-7 md:text-base">
          A measurable overview of infrastructure delivery, housing expansion, and project
          execution outcomes.
        </p>
      </FadeInSection>
      <StaggerContainer
        className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-4"
        stagger={0.08}
        delayChildren={0.06}
        disableAnimation={disableAnimation}
      >
        {visibleKpis.map((kpi, index) => (
          <FadeItem
            key={kpi.id}
            className={`group rounded-2xl bg-white p-6 ring-1 ring-black/6 shadow-[0_10px_28px_rgba(11,31,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,31,58,0.14)] print:p-4 print:shadow-none ${
              index === 0 ? "md:scale-[1.01] md:shadow-[0_14px_34px_rgba(11,31,58,0.12)]" : ""
            }`}
            disableAnimation={disableAnimation}
            duration={0.5}
          >
            <div className="h-[2px] w-12 bg-accent/85" />
            <p className="text-text/62 mt-4 text-[11px] font-semibold uppercase tracking-[0.14em]">
              {kpi.label}
            </p>
            <p className="font-heading text-primary mt-3 text-[2.2rem] font-semibold leading-none md:text-[2.45rem]">
              {kpi.value}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/75" />
              <p className="text-primary/72 text-[11px] font-semibold uppercase tracking-[0.11em]">
                {getTrendLabel(kpi.trend)}
              </p>
            </div>
            <p className="text-text/76 mt-3 text-sm leading-7">{getKpiSupportLine(kpi)}</p>
            {kpi.verification_status !== "verified" ? (
              <p className="text-text/58 mt-4 text-[11px] tracking-[0.03em]">
                Data under technical validation
              </p>
            ) : null}
          </FadeItem>
        ))}
      </StaggerContainer>
      {hasUnvalidatedKpis ? (
        <p className="text-text/60 mt-4 text-xs tracking-[0.03em] print:mt-3">
          Selected metrics are subject to ongoing technical validation.
        </p>
      ) : null}
    </section>
  );
}
