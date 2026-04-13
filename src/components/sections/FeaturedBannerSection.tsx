"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type FeaturedBannerSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  disableAnimation?: boolean;
};

export function FeaturedBannerSection({
  imageSrc = "/images/banner.jpg",
  imageAlt = "Featured leadership banner",
  disableAnimation = false,
}: FeaturedBannerSectionProps) {
  const [showFallback, setShowFallback] = useState(false);
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  return (
    <section className="section-container pt-8 md:pt-10 print:pt-4">
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-[420px] overflow-hidden rounded-2xl border border-primary/10 bg-primary md:h-[500px] print:h-auto"
      >
        {!showFallback ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={false}
            className="object-cover print:hidden"
            sizes="(max-width: 768px) 100vw, 1200px"
            onError={() => setShowFallback(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-primary/95 print:hidden" />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/80 via-[#0B1F3A]/55 to-transparent print:hidden" />

        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 flex h-full max-w-3xl flex-col items-start justify-center px-6 md:px-12 print:max-w-none print:py-10"
        >
          <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.16em] print:text-primary">
            Leadership Perspective
          </p>
          <h2 className="font-heading mt-4 text-3xl leading-tight text-white md:text-5xl print:text-primary">
            Leadership grounded in engineering discipline and public delivery.
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
