"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Route, ShieldCheck } from "lucide-react";
import type { ContentSection, PriorityItem } from "@/types/executive-profile";

type VisionSectionProps = {
  data: ContentSection;
  priorities: PriorityItem[];
  disableAnimation?: boolean;
};

type VisionPillar = {
  id: string;
  title: string;
  description: string;
};

const pillarIcons = [Route, Building2, ShieldCheck];

const defaultVisionPillars: VisionPillar[] = [
  {
    id: "vision-resilient-infrastructure",
    title: "Resilient Infrastructure",
    description:
      "Advancing durable road, drainage, and transport systems designed for long-term public value.",
  },
  {
    id: "vision-urban-growth-housing",
    title: "Urban Growth & Housing",
    description:
      "Supporting housing expansion and infrastructure planning that respond to population growth and urban demand.",
  },
  {
    id: "vision-systems-governance",
    title: "Systems & Governance",
    description:
      "Strengthening standards, oversight, and institutional delivery systems for better public-sector performance.",
  },
];

function buildVisionPillars(priorities: PriorityItem[]): VisionPillar[] {
  if (priorities.length >= 3) {
    return priorities.slice(0, 3).map((item, index) => ({
      id: item.id || defaultVisionPillars[index].id,
      title: item.title || defaultVisionPillars[index].title,
      description: item.description || defaultVisionPillars[index].description,
    }));
  }

  return defaultVisionPillars;
}

export function VisionSection({ data, priorities, disableAnimation = false }: VisionSectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);
  const pillars = buildVisionPillars(priorities);

  return (
    <section id={data.id} className="section-container pt-10 md:pt-12 print:pt-6">
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="section-kicker">Strategic Direction</p>
        <h2 className="section-heading mt-2">Vision</h2>
        <p className="text-text/76 mx-auto mt-4 max-w-3xl text-sm leading-7 md:text-base">
          A forward-looking framework for infrastructure delivery, urban growth, and institutional
          performance.
        </p>
      </motion.div>

      <motion.div
        className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-4"
        initial={shouldAnimate ? "hidden" : false}
        whileInView={shouldAnimate ? "show" : undefined}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.06,
            },
          },
        }}
      >
        {pillars.map((pillar, index) => (
          <motion.article
            key={pillar.id}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
            }}
            whileHover={
              shouldAnimate
                ? { y: -4, transition: { duration: 0.22, ease: "easeOut" } }
                : undefined
            }
            className={`group relative mx-auto w-full max-w-[26rem] transition-all duration-300 ${
              index === 0 ? "lg:scale-[1.015]" : ""
            }`}
          >
            <div
              className={`relative min-h-[290px] overflow-hidden bg-white/95 px-7 py-8 ring-1 ring-black/5 shadow-[0_15px_40px_rgba(11,31,58,0.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_55px_rgba(11,31,58,0.18)] print:min-h-[240px] print:rounded-2xl print:px-5 print:py-5 print:shadow-none ${
                index === 0 ? "shadow-[0_17px_44px_rgba(11,31,58,0.14)]" : ""
              }`}
              style={{
                clipPath:
                  "polygon(24% 0%, 76% 0%, 100% 50%, 76% 100%, 24% 100%, 0% 50%)",
              }}
            >
              <div className="relative z-10 flex h-full flex-col items-center text-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F3A]/5">
                  {(() => {
                    const Icon = pillarIcons[index] || Route;
                    return <Icon className="h-5 w-5 text-[#0B1F3A]" aria-hidden />;
                  })()}
                </div>
                <p className="text-primary/56 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Pillar {index + 1}
                </p>
                <h3 className="font-heading text-primary mt-4 text-[1.55rem] leading-tight md:text-[1.65rem]">
                  {pillar.title}
                </h3>
                <div className="mt-4 h-[2px] w-14 bg-[#C8A95B]" />
                <p className="text-text/78 mt-5 text-sm leading-7">{pillar.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
