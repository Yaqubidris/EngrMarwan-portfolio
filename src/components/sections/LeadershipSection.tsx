"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Scale, Compass, ShieldCheck, BarChart3 } from "lucide-react";
import type { ExecutiveProfile } from "@/types/executive-profile";

type LeadershipSectionProps = {
  data: ExecutiveProfile["sections"]["leadership"];
  disableAnimation?: boolean;
};

const leadershipCards = [
  {
    title: "Technical Governance",
    pillar: "Standards",
    description:
      "Establish clear engineering standards and approval discipline before procurement and execution.",
    Icon: Scale,
  },
  {
    title: "Strategic Delivery",
    pillar: "Execution",
    description:
      "Align implementation plans to measurable infrastructure outcomes with phased execution control.",
    Icon: Compass,
  },
  {
    title: "Institutional Accountability",
    pillar: "Governance",
    description:
      "Embed accountability checkpoints across planning, delivery, and handover responsibilities.",
    Icon: ShieldCheck,
  },
  {
    title: "Performance Monitoring",
    pillar: "Performance",
    description:
      "Use structured progress intelligence and quality metrics to sustain delivery performance.",
    Icon: BarChart3,
  },
];

export function LeadershipSection({ data, disableAnimation = false }: LeadershipSectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);
  const leadershipThesis = data.leadership_thesis?.trim() || data.summary;

  return (
    <section
      id={data.id}
      className="section-container relative overflow-hidden pt-12 md:pt-14 print:pt-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/[0.04] to-transparent"
      />

      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="section-kicker">Leadership Framework</p>
        <h2 className="section-heading mt-2 text-balance">Leadership Approach</h2>
        <p className="text-text/76 mx-auto mt-4 max-w-2xl text-sm leading-7 md:text-base">
          A systems-oriented approach to infrastructure delivery, technical governance, and
          institutional performance.
        </p>
        <p className="text-text/68 mx-auto mt-4 max-w-2xl text-sm leading-7">
          Leadership philosophy is anchored in engineering discipline, governance clarity, and
          measurable public value across the full infrastructure lifecycle.
        </p>
      </motion.div>

      <motion.div
        className="relative mt-10 grid gap-6 md:grid-cols-2"
        initial={shouldAnimate ? "hidden" : false}
        whileInView={shouldAnimate ? "show" : undefined}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
        }}
      >
        {leadershipCards.map((card) => (
          <motion.article
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
            }}
            whileHover={
              shouldAnimate
                ? {
                    y: -4,
                    transition: { duration: 0.24, ease: "easeOut" },
                  }
                : undefined
            }
            className="group relative overflow-hidden rounded-2xl border-t-[3px] border-t-[#0B1F3A] bg-gradient-to-br from-[#FFFFFF] via-[#FBFCFE] to-[#F8FAFC] p-7 ring-1 ring-[#0B1F3A]/10 shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all duration-300 hover:shadow-[0_18px_38px_rgba(11,31,58,0.16)] print:shadow-none"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/55 via-accent/25 to-transparent"
            />
            <div className="relative z-10 h-12 w-12 rounded-xl border border-[#C8A95B]/35 bg-[#C8A95B]/12 p-2.5 text-primary shadow-[0_8px_18px_rgba(11,31,58,0.08)]">
              <card.Icon className="h-full w-full" strokeWidth={1.8} />
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-primary/60">{card.pillar}</p>
            <h3 className="font-heading mt-2 text-[1.7rem] leading-tight text-primary">
              {card.title}
            </h3>
            <div className="mt-5 h-[2px] w-16 bg-accent/85 transition-all duration-300 group-hover:w-24" />
            <p className="mt-5 text-sm leading-7 text-text/78">{card.description}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.blockquote
        initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
        className="mt-9 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1F3A] to-[#08182D] p-7 text-white shadow-[0_16px_34px_rgba(11,31,58,0.24)] print:shadow-none md:p-10"
      >
        <div className="h-[2px] w-20 bg-accent/90" />
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/95 md:text-[1.28rem]">
          {leadershipThesis}
        </p>
        <footer className="mt-6 text-xs uppercase tracking-[0.12em] text-accent">
          Engr. Marwan Ahmad
        </footer>
      </motion.blockquote>
    </section>
  );
}
