"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LOGO_PATH = "/images/ministry/kano-logo.png";

const heroStats = ["18+ Active Projects", "45 Housing Initiatives", "120km Priority Corridors"];

export function MinistryHero() {
  const [logoError, setLogoError] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#103B2E] text-white md:min-h-[74vh] lg:min-h-[78vh]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(200,169,91,0.18),transparent_42%),linear-gradient(140deg,#103B2E_0%,#1B5A45_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-16 lg:px-12 lg:py-20 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/74">
            Government of Kano State
          </p>
          <h1 className="font-heading mt-4 text-4xl leading-[1.06] !text-white sm:text-5xl lg:text-6xl">
            Building Infrastructure. Expanding Housing. Strengthening Delivery.
          </h1>
          <div className="mt-5 h-[2px] w-14 bg-[#C8A95B]" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/84 sm:text-base sm:leading-8">
            A modern public platform for infrastructure projects, housing initiatives, and
            institutional performance across Kano State.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-[#C8A95B] px-5 py-3 text-sm font-semibold text-[#103B2E] transition-colors duration-300 hover:bg-[#d2b772]"
            >
              View Ongoing Projects
            </a>
            <a
              href="#about-ministry"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/14"
            >
              Explore the Ministry
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat}
                className="rounded-lg bg-white/8 px-3 py-2 ring-1 ring-white/16 backdrop-blur-[1px]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/88">{stat}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.06, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-[430px] items-center justify-center md:max-w-[500px]"
        >
          <div className="relative flex aspect-square w-full items-center justify-center rounded-full bg-white/6 ring-1 ring-white/22 shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-[11%] rounded-full ring-1 ring-[#C8A95B]/42" />
            {!logoError ? (
              <Image
                src={LOGO_PATH}
                alt="Kano State official seal"
                width={330}
                height={330}
                className="relative z-10 h-[72%] w-[72%] object-contain drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="relative z-10 flex h-[72%] w-[72%] items-center justify-center rounded-full bg-white/12 ring-1 ring-white/26">
                <span className="text-5xl font-semibold uppercase tracking-[0.1em] text-white/92">
                  KS
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
