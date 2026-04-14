"use client";

import { motion, useReducedMotion } from "framer-motion";

const responsibilityCards = [
  {
    title: "Infrastructure Delivery",
    description:
      "Planning and executing road, drainage, and strategic public works projects.",
  },
  {
    title: "Housing Development",
    description:
      "Supporting housing initiatives and urban expansion aligned with state growth priorities.",
  },
  {
    title: "Public Works Oversight",
    description:
      "Strengthening standards, project supervision, and accountability across delivery systems.",
  },
];

export function MinistryAbout() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24 bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 sm:px-6 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A95B]">
            Institutional Mandate
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight !text-[#0F3D2E] md:text-[2.35rem]">
            About the Ministry
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#475569]/90 md:text-[1.05rem]">
            Delivering public infrastructure, housing development, and systems that support growth
            across Kano State.
          </p>
          <div className="mt-6 h-[2px] w-14 bg-[#C8A95B]" />

          <div className="mt-7 max-w-xl space-y-5">
            <p className="text-sm leading-8 text-[#475569]/92 md:text-base">
              The Ministry of Works and Housing, Kano State, is responsible for planning,
              coordinating, and advancing public infrastructure and housing initiatives that
              support mobility, urban growth, and institutional development across the state.
            </p>
            <p className="text-sm leading-8 text-[#475569]/92 md:text-base">
              Its mandate includes road infrastructure, housing expansion, public works oversight,
              and the systems required to improve delivery quality, transparency, and long-term
              public value.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
          }}
          className="space-y-5 md:space-y-6"
        >
          {responsibilityCards.map((card) => (
            <motion.article
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="rounded-2xl border border-[#0F3D2E]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1B5A45]/80">
                Responsibility
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-[#0F3D2E]">
                {card.title}
              </h3>
              <div className="mb-4 mt-3 h-[2px] w-12 bg-[#C8A95B]" />
              <p className="text-sm leading-7 text-[#475569]/88">{card.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
