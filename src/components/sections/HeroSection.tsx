"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type HeroSectionProps = {
  disableAnimation?: boolean;
};

const PORTRAIT_IMAGE = "/images/hero/marwan-portrait.png";

export function HeroSection({ disableAnimation = false }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  return (
    <section
      id="overview"
      className="relative min-h-[68vh] overflow-hidden border-b border-white/10 bg-[#0B1F3A] md:min-h-[74vh] lg:min-h-[78vh] print:min-h-[420px]"
    >
      <div className="absolute inset-0">
        <Image
          src={PORTRAIT_IMAGE}
          alt="Official portrait of Engr. Marwan Ahmad"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#07182D]/78 via-[#0B1F3A]/42 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[68vh] w-full max-w-[1200px] items-center px-5 py-12 sm:min-h-[68vh] sm:px-6 md:min-h-[74vh] md:py-14 lg:min-h-[78vh] lg:px-12 lg:py-16 xl:px-16 print:min-h-[420px]">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl lg:max-w-2xl"
        >
          <p className="mt-0 text-[10px] font-medium uppercase tracking-[0.22em] text-white/75 sm:text-xs">
            THE OFFICE OF
          </p>

          <h1 className="font-heading mt-4 text-4xl leading-[0.95] tracking-[0.01em] !text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            ENGR. MARWAN AHMAD
          </h1>

          <p className="mt-4 text-sm font-medium leading-relaxed text-white/90 sm:text-base lg:text-lg">
            Commissioner for Works &amp; Housing
            <br />
            Kano State
          </p>

          <div className="mt-5 h-[2px] w-12 bg-[#C8A95B]" />

          <h2 className="font-heading mt-8 text-3xl leading-[1.02] !text-white sm:text-4xl lg:mt-10 lg:text-5xl xl:text-6xl">
            Infrastructure Systems.
            <br />
            Engineered for <span className="text-[#C8A95B]">Impact.</span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg">
            A civil engineer and public-sector leader advancing infrastructure delivery, housing
            development, and institutional performance systems.
          </p>

          <div className="mt-7">
            <a
              href="#executive-summary"
              className="inline-flex items-center justify-center rounded-xl bg-[#C8A95B] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bfa150]"
            >
              Explore the Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
