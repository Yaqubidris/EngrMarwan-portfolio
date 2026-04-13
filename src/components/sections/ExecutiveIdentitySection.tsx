"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Landmark, DraftingCompass, ShieldCheck } from "lucide-react";

type ExecutiveIdentitySectionProps = {
  disableAnimation?: boolean;
};

const pillars = [
  {
    title: "Infrastructure Technocrat",
    label: "Systems",
    cta: "Explore Pillar",
    quote:
      "Delivering infrastructure requires systems thinking, technical discipline, and execution accountability.",
    Icon: Landmark,
  },
  {
    title: "Structural Engineer",
    label: "Engineering",
    cta: "Core Focus",
    quote:
      "Engineering integrity and structural precision form the foundation of sustainable development.",
    Icon: DraftingCompass,
  },
  {
    title: "Public Sector Leader",
    label: "Governance",
    cta: "View Detail",
    quote:
      "Public service demands efficiency, transparency, and measurable impact in delivery.",
    Icon: ShieldCheck,
  },
];

export function ExecutiveIdentitySection({
  disableAnimation = false,
}: ExecutiveIdentitySectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  return (
    <section id="executive-identity" className="section-container pt-10 md:pt-12 print:pt-6">
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="section-kicker">Executive Profile</p>
        <h2 className="section-heading mt-2">Executive Identity</h2>
        <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      </motion.div>

      <motion.div
        className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        initial={shouldAnimate ? "hidden" : false}
        whileInView={shouldAnimate ? "show" : undefined}
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
        }}
      >
        {pillars.map((pillar) => (
          <motion.article
            key={pillar.title}
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
            className="group relative flex h-full flex-col rounded-2xl border border-primary/10 bg-white px-6 pb-6 pt-10 shadow-[0_12px_34px_rgba(11,31,58,0.07)] transition-shadow duration-300 hover:border-primary/18 hover:shadow-[0_16px_40px_rgba(11,31,58,0.12)] print:shadow-none"
          >
            <motion.div
              initial={shouldAnimate ? { opacity: 0, scale: 0.92, y: 6 } : false}
              whileInView={shouldAnimate ? { opacity: 1, scale: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
              className="absolute -top-7 left-1/2 -translate-x-1/2"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/45 bg-white shadow-[0_8px_20px_rgba(11,31,58,0.08)]">
                <span className="absolute inset-1 rounded-full border border-primary/8 bg-background" />
                <pillar.Icon className="relative z-10 h-5 w-5 text-primary" strokeWidth={1.8} />
              </div>
            </motion.div>

            <div className="text-center">
              <h3 className="font-heading text-primary text-2xl leading-tight">{pillar.title}</h3>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent/90">
                {pillar.label}
              </p>
            </div>

            <p className="text-text/82 mt-6 flex-1 text-center text-sm leading-7">{pillar.quote}</p>

            <div className="mt-7 flex justify-center">
              <span className="inline-flex rounded-full border border-accent/45 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                {pillar.cta}
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
