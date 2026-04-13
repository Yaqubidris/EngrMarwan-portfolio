"use client";

import type { ContentSection } from "@/types/executive-profile";
import { motion, useReducedMotion } from "framer-motion";

type BiographySectionProps = {
  data: ContentSection;
  disableAnimation?: boolean;
};

type Milestone = {
  institution: string;
  role: string;
  detail: string;
};

const milestones: Milestone[] = [
  {
    institution: "Bayero University Kano",
    role: "B.Eng. in Civil Engineering",
    detail:
      "Academic foundation in engineering, infrastructure thinking, and technical problem-solving.",
  },
  {
    institution: "Ahmadu Bello University, Zaria",
    role: "M.Sc. in Structural Engineering",
    detail:
      "Advanced specialization in structural systems, technical rigor, and engineering precision.",
  },
  {
    institution: "Federal Ministry of Works",
    role: "Early Engineering Role",
    detail:
      "Exposure to public infrastructure systems and road project environments.",
  },
  {
    institution: "M. Ahmad Consults Ltd",
    role: "Consulting and Project Supervision",
    detail:
      "Experience in private-sector engineering delivery, design coordination, and supervision.",
  },
  {
    institution: "Kano State Government",
    role: "Technical Adviser -> Commissioner for Works and Housing",
    detail:
      "Transition into executive public-sector leadership and infrastructure governance.",
  },
];

export function BiographySection({ data, disableAnimation = false }: BiographySectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  return (
    <section id="biography" className="section-container pt-10 md:pt-12 print:pt-6">
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="section-kicker">Professional Progression</p>
        <h2 className="section-heading mt-2">{data.title || "Biography & Professional Journey"}</h2>
        <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
        <p className="text-text/72 mt-4 text-sm leading-7 md:text-base">
          A disciplined path through engineering education, technical practice, and public
          leadership.
        </p>
      </motion.div>

      <div className="relative mt-12 md:mt-14">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-[#0B1F3A]/45 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-6 md:space-y-7">
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.article
                key={`${item.institution}-${index}`}
                initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
                whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                whileHover={
                  shouldAnimate
                    ? {
                        y: -2,
                        transition: { duration: 0.22, ease: "easeOut" },
                      }
                    : undefined
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                className={[
                  "relative md:grid md:grid-cols-2 md:gap-10",
                  isLeft ? "" : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "pl-10 md:pl-0",
                    isLeft ? "md:pr-8" : "md:order-2 md:pl-8",
                  ].join(" ")}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_10px_30px_rgba(11,31,58,0.08)] transition-all duration-300 hover:shadow-[0_14px_34px_rgba(11,31,58,0.12)] print:shadow-none md:p-6">
                    <span className="absolute inset-y-0 left-0 w-1 bg-[#0B1F3A]" />
                    <p className="text-primary/70 text-[10px] font-semibold uppercase tracking-[0.14em]">
                      {item.institution}
                    </p>
                    <h3 className="font-heading text-primary mt-2 text-xl leading-tight md:text-2xl">
                      {item.role}
                    </h3>
                    <div className="mt-3 h-px w-12 bg-accent/75" />
                    <p className="text-text/78 mt-4 text-sm leading-7">{item.detail}</p>
                    <p className="text-primary/55 mt-4 text-[10px] uppercase tracking-[0.12em]">
                      Milestone {index + 1}
                    </p>
                  </div>
                </div>

                <div className={isLeft ? "hidden md:block" : "hidden md:block md:order-1"} />

                <motion.div
                  initial={shouldAnimate ? { scale: 0.8, opacity: 0 } : false}
                  whileInView={shouldAnimate ? { scale: 1, opacity: 1 } : undefined}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 + 0.06 }}
                  className="absolute left-4 top-8 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                >
                  <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-[#C8A95B] bg-[#0B1F3A] shadow-[0_4px_12px_rgba(11,31,58,0.14)]" />
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
