"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const COMMISSIONER_IMAGE = "/images/ministry/commissioner.png";

export function MinistryLeadershipMessage() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 sm:px-6 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="relative min-h-[340px] w-full md:min-h-[460px]">
            <Image
              src={COMMISSIONER_IMAGE}
              alt="Commissioner portrait"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.58, delay: 0.04, ease: "easeOut" }}
          className="max-w-xl self-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A95B]">
            Leadership Message
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight !text-[#0F3D2E]/90 md:text-4xl">
            Message from the Commissioner
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-[#C8A95B]" />

          <div className="mt-6 space-y-4">
            <p className="text-slate-600 leading-8">
              A commitment to advancing infrastructure delivery, housing development, and
              institutional systems that support sustainable growth across Kano State.
            </p>
            <p className="text-slate-600 leading-8">
              Our approach prioritizes strategic planning, execution discipline, and
              accountability in the delivery of road networks, housing initiatives, and public
              works systems.
            </p>
            <p className="text-slate-600 leading-8">
              Through coordinated efforts and modern delivery frameworks, the ministry is
              positioned to enhance public value and strengthen long-term development outcomes.
            </p>
          </div>

          <div className="mt-7">
            <a
              href="#news"
              className="inline-flex items-center justify-center rounded-full bg-[#0F3D2E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#145640]"
            >
              Read Full Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
