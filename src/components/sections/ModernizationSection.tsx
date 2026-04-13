"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, FileCheck2, Gauge, Layers3 } from "lucide-react";
import type { ModernizationOpportunity } from "@/types/executive-profile";

type ModernizationSectionProps = {
  opportunities: ModernizationOpportunity[];
  disableAnimation?: boolean;
};

type RoadmapStage = {
  stage: string;
  title: string;
  description: string;
};

const stagedRoadmap: RoadmapStage[] = [
  {
    stage: "Stage 1",
    title: "Foundational Digitization",
    description: "Standardize project records, document workflows, and reporting formats.",
  },
  {
    stage: "Stage 2",
    title: "Operational Visibility",
    description: "Deploy structured tracking and executive dashboard views for portfolio oversight.",
  },
  {
    stage: "Stage 3",
    title: "Institutional Transparency",
    description: "Expand accountable public reporting and auditable delivery performance systems.",
  },
];

const opportunityIcons = [Layers3, BarChart3, FileCheck2, Gauge];
const MODERNIZATION_BANNER = "/images/opportunities/modernization-banner.png";

function getPriorityPill(priority: ModernizationOpportunity["priority"]): string {
  if (priority === "high") {
    return "HIGH";
  }

  if (priority === "medium") {
    return "MEDIUM";
  }

  return "LOW";
}

export function ModernizationSection({
  opportunities,
  disableAnimation = false,
}: ModernizationSectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  return (
    <section id="modernization-opportunities" className="section-container pt-10 md:pt-12 print:pt-6">
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl shadow-[0_14px_36px_rgba(11,31,58,0.12)] print:shadow-none"
      >
        <div className="relative h-[250px] bg-background md:h-[350px]">
          <Image
            src={MODERNIZATION_BANNER}
            alt="Institutional modernization strategic outlook"
            fill
            sizes="100vw"
            className="object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
              Institutional Modernization
            </p>
            <h2 className="font-heading mt-2 text-3xl leading-tight text-white md:text-4xl">
              Opportunities for Modernization
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/90 md:text-base">
              Structured digital capabilities can strengthen continuity, oversight, and transparency
              across infrastructure delivery portfolios.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.06, ease: "easeOut" }}
        className="mt-7 rounded-2xl bg-white p-7 ring-1 ring-black/6 shadow-[0_10px_28px_rgba(11,31,58,0.08)] md:p-9 print:p-5 print:shadow-none"
      >
        <p className="text-text/84 text-base leading-8 print:text-sm print:leading-7">
          As infrastructure portfolios scale in complexity, ministries can benefit from stronger
          digital systems for planning continuity, executive visibility, documentation integrity,
          and transparent public communication. The opportunities below are positioned as
          institutional enablers for better delivery governance.
        </p>
      </motion.div>

      <motion.div
        className="mt-7 grid gap-5 md:grid-cols-2"
        initial={shouldAnimate ? "hidden" : false}
        whileInView={shouldAnimate ? "show" : undefined}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.04,
            },
          },
        }}
      >
        {opportunities.map((opportunity, index) => {
          const Icon = opportunityIcons[index % opportunityIcons.length];

          return (
            <motion.article
              key={opportunity.id}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={
                shouldAnimate
                  ? {
                      y: -4,
                      transition: { duration: 0.22, ease: "easeOut" },
                    }
                  : undefined
              }
              className="rounded-2xl border-t-[2px] border-[#C8A95B] bg-white p-6 ring-1 ring-black/6 shadow-[0_10px_26px_rgba(11,31,58,0.08)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(11,31,58,0.14)] print:p-4 print:shadow-none"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F3A]/5">
                    <Icon className="h-5 w-5 text-[#0B1F3A]" aria-hidden />
                  </div>
                  <h3 className="font-heading text-primary text-[1.3rem] leading-tight md:text-[1.45rem]">
                    {opportunity.title}
                  </h3>
                </div>
                <span className="rounded-full bg-[#0B1F3A]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary">
                  {getPriorityPill(opportunity.priority)}
                </span>
              </div>

              <p className="text-text/82 mt-4 text-sm leading-7">{opportunity.description}</p>
              <p className="text-text/70 mt-4 border-t border-primary/10 pt-4 text-sm leading-7">
                {opportunity.expected_benefit}
              </p>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        className="mt-8 rounded-2xl bg-background p-6 ring-1 ring-black/6 md:p-7 print:p-4"
      >
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.14em]">
          Indicative Progression
        </p>

        <div className="relative mt-5 hidden md:block">
          <div className="absolute left-[10%] right-[10%] top-[14px] h-[2px] bg-primary/25" />
          <div className="grid gap-4 md:grid-cols-3">
            {stagedRoadmap.map((item) => (
              <div key={item.stage} className="relative">
                <div className="mx-auto h-7 w-7 rounded-full border-2 border-primary bg-white shadow-[0_4px_10px_rgba(11,31,58,0.12)]">
                  <div className="m-auto mt-[7px] h-2 w-2 rounded-full bg-[#C8A95B]" />
                </div>
                <article className="mt-4 rounded-xl bg-white p-4 ring-1 ring-primary/12">
                  <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.12em]">
                    {item.stage}
                  </p>
                  <h3 className="text-primary mt-2 text-sm font-semibold">{item.title}</h3>
                  <p className="text-text/80 mt-2 text-sm leading-6">{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:hidden print:grid print:grid-cols-3 print:gap-3">
          {stagedRoadmap.map((item) => (
            <article key={`${item.stage}-mobile`} className="rounded-xl bg-white p-4 ring-1 ring-primary/12">
              <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.12em]">
                {item.stage}
              </p>
              <h3 className="text-primary mt-2 text-sm font-semibold">{item.title}</h3>
              <p className="text-text/80 mt-2 text-sm leading-6">{item.description}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
