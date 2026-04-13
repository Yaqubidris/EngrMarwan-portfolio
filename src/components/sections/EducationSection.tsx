"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type EducationSectionProps = {
  disableAnimation?: boolean;
};

type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  detail: string;
  imageSrc: string;
  imageAlt: string;
};

const educationItems: EducationItem[] = [
  {
    id: "buk",
    institution: "Bayero University Kano",
    degree: "B.Eng. in Civil Engineering",
    detail:
      "Built the academic foundation for engineering analysis, infrastructure thinking, and technical problem-solving.",
    imageSrc: "/images/education/buk.jpg",
    imageAlt: "Bayero University Kano campus",
  },
  {
    id: "abu",
    institution: "Ahmadu Bello University, Zaria",
    degree: "M.Sc. in Structural Engineering",
    detail:
      "Advanced specialization in structural systems, technical rigor, and engineering precision.",
    imageSrc: "/images/education/ABU.jpg",
    imageAlt: "Ahmadu Bello University Zaria campus",
  },
];

export function EducationSection({ disableAnimation = false }: EducationSectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="education" className="section-container pt-10 md:pt-12 print:pt-6">
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="section-kicker">Academic Profile</p>
        <h2 className="section-heading mt-2">Education</h2>
        <p className="text-text/75 mt-3 text-sm md:text-base">
          Academic foundations in civil and structural engineering
        </p>
      </motion.div>

      <div className="mt-8 space-y-6">
        {educationItems.map((item, index) => {
          const imageFailed = failedImages[item.id] === true;
          const isReversed = index % 2 === 1;

          return (
            <motion.article
              key={item.id}
              initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_12px_34px_rgba(11,31,58,0.07)] print:shadow-none"
            >
              <div className="grid items-stretch md:grid-cols-2">
                <div className={isReversed ? "md:order-2" : "md:order-1"}>
                  <div className="h-full bg-gradient-to-br from-[#0B1F3A] to-[#0A1930] p-6 md:p-8 print:bg-white print:text-primary">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 print:text-primary/70">
                      Education
                    </p>
                    <h3 className="font-heading mt-3 text-2xl leading-tight text-white md:text-3xl print:text-primary">
                      {item.institution}
                    </h3>
                    <div className="mt-4 h-px w-14 bg-accent/80 print:bg-accent" />
                    <p className="mt-4 text-sm font-semibold text-white/85 md:text-base print:text-primary/85">
                      {item.degree}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 print:text-primary/75">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <div className={isReversed ? "md:order-1" : "md:order-2"}>
                  <div className="relative h-[240px] bg-background md:h-full md:min-h-[290px]">
                    {!imageFailed ? (
                      <motion.div
                        whileHover={shouldAnimate ? { scale: 1.03 } : undefined}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="h-full w-full"
                      >
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          onError={() => markFailed(item.id)}
                        />
                      </motion.div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/90 print:bg-primary/20">
                        <span className="font-heading text-4xl text-white/75 print:text-primary/80">ED</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
