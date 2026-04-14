"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const KANO_SEAL = "/images/ministry/kano-logo.png";

const mandateItems = [
  {
    heading: "Road Infrastructure Delivery",
    description:
      "Plan, supervise, and advance strategic road and transport corridor development.",
  },
  {
    heading: "Housing Expansion",
    description:
      "Support housing schemes and urban growth initiatives aligned with public need.",
  },
  {
    heading: "Public Works Oversight",
    description:
      "Improve standards, accountability, and execution across government construction projects.",
  },
  {
    heading: "Institutional Delivery Systems",
    description:
      "Strengthen planning, monitoring, reporting, and long-term infrastructure governance.",
  },
];

export function MinistryMandate() {
  const [logoError, setLogoError] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 sm:px-6 md:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A95B]">
            Institutional Responsibility
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight !text-[#0F3D2E] md:text-[2.35rem]">
            Our Mandate
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-[#C8A95B]" />
          <p className="mt-5 max-w-xl text-sm leading-8 text-slate-600 md:text-base">
            The Ministry of Works and Housing, Kano State, is entrusted with the planning,
            coordination, and delivery of infrastructure, housing, and public works systems that
            support sustainable growth across the state.
          </p>

          <ol className="mt-8 space-y-6">
            {mandateItems.map((item, index) => (
              <li key={item.heading} className="grid grid-cols-[1.9rem_1fr] gap-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0F3D2E]/8 text-sm font-semibold text-[#0F3D2E]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight text-[#0F3D2E]">{item.heading}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.58, delay: 0.05, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-[430px] items-center justify-center self-center md:max-w-[500px]"
        >
          <div className="relative flex aspect-square w-full items-center justify-center rounded-full bg-white shadow-[0_16px_42px_rgba(15,61,46,0.14)] ring-1 ring-[#0F3D2E]/12">
            <div className="absolute inset-[10%] rounded-full ring-1 ring-[#C8A95B]/35" />
            {!logoError ? (
              <Image
                src={KANO_SEAL}
                alt="Kano State official seal"
                width={330}
                height={330}
                className="relative z-10 h-[72%] w-[72%] object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="relative z-10 flex h-[72%] w-[72%] items-center justify-center rounded-full bg-[#0F3D2E]/8 ring-1 ring-[#0F3D2E]/18">
                <span className="text-5xl font-semibold uppercase tracking-[0.08em] text-[#0F3D2E]">
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
