"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const BLUEPRINT_BACKGROUND = "/images/ministry/blueprint-bg.jpg";

export function MinistryBlueprintSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="blueprint"
      className="scroll-mt-24 relative flex items-center justify-center overflow-hidden py-24 text-center md:py-28"
    >
      <div className="absolute inset-0">
        <Image
          src={BLUEPRINT_BACKGROUND}
          alt="Strategic blueprint background"
          fill
          sizes="100vw"
          className="object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[#0F3D2E]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 px-5 sm:px-6 lg:px-12"
      >
        <h2 className="font-heading text-4xl !text-white md:text-5xl">
          Strategic Infrastructure Blueprint
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80 leading-8">
          A forward-looking framework guiding infrastructure delivery, housing expansion, and
          institutional performance across Kano State.
        </p>
        <a
          href="#news"
          className="mt-8 inline-flex rounded-full bg-[#C8A95B] px-6 py-3 text-sm font-semibold text-[#0F3D2E] transition-colors duration-300 hover:bg-[#b8964f]"
        >
          View Strategic Plan
        </a>
      </motion.div>
    </section>
  );
}
