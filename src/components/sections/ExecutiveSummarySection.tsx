"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ContentSection } from "@/types/executive-profile";

type ExecutiveSummarySectionProps = {
  data: ContentSection;
  disableAnimation?: boolean;
};

const summaryImage = {
  src: "/images/executive-summary.jpg",
  alt: "Executive summary portrait of Engr. Marwan Ahmad",
};

export function ExecutiveSummarySection({
  data,
  disableAnimation = false,
}: ExecutiveSummarySectionProps) {
  const [showFallback, setShowFallback] = useState(false);
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  const paragraphs = useMemo(() => {
    const fromContent = data.summary
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
    return fromContent.length > 0 ? fromContent : [];
  }, [data.summary]);

  return (
    <section id="executive-summary" className="section-container pt-10 md:pt-12 print:pt-6">
      <div className="grid items-start gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <motion.article
          initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-primary/10 bg-white p-7 md:p-9 print:p-5"
        >
          <p className="section-kicker">Executive Brief</p>
          <h2 className="section-heading mt-2">{data.title || "Executive Summary"}</h2>
          <div className="mt-4 h-px w-16 bg-accent/75" />
          <div className="mt-7 max-w-2xl space-y-6">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-text/85 text-base leading-8 print:text-sm print:leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>

        <motion.aside
          initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.06, ease: "easeOut" }}
          className="relative rounded-2xl border border-primary/10 bg-white p-4 md:p-5 print:p-4"
        >
          <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-background shadow-[0_10px_28px_rgba(11,31,58,0.08)] aspect-[4/5]">
            {!showFallback ? (
              <Image
                src={summaryImage.src}
                alt={summaryImage.alt}
                fill
                className="object-cover print:hidden"
                sizes="(max-width: 768px) 100vw, 40vw"
                onError={() => setShowFallback(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/95 print:hidden">
                <span className="font-heading text-5xl text-white/70">MA</span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-black/[0.05] print:hidden" />
          </div>

          <motion.blockquote
            initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="relative mt-4 rounded-xl border border-accent/35 bg-[#0B1F3A]/95 p-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm md:absolute md:bottom-10 md:left-8 md:mt-0 md:max-w-[80%] print:static print:mt-4 print:max-w-full"
          >
            <div className="h-px w-12 bg-accent/85" />
            <p className="mt-4 text-sm leading-relaxed text-white md:text-base">
              Engineering discipline and execution accountability remain central to delivering
              sustainable infrastructure systems.
            </p>
            <footer className="mt-4 text-xs tracking-[0.08em] text-accent">
              - Engr. Marwan Ahmad
            </footer>
          </motion.blockquote>
        </motion.aside>
      </div>
    </section>
  );
}
