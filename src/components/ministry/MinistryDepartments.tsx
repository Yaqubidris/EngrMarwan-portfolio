"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  ClipboardList,
  Compass,
  DraftingCompass,
  Route,
  Wrench,
} from "lucide-react";

type Department = {
  id: string;
  title: string;
  description: string;
  Icon: typeof Route;
};

const departments: Department[] = [
  {
    id: "road-infrastructure",
    title: "Road Infrastructure Department",
    description:
      "Responsible for planning, construction, and maintenance of road networks and transport corridors.",
    Icon: Route,
  },
  {
    id: "housing-development",
    title: "Housing Development Department",
    description:
      "Oversees housing schemes, estate development, and residential expansion initiatives.",
    Icon: Building2,
  },
  {
    id: "public-works",
    title: "Public Works Department",
    description:
      "Manages construction and maintenance of government buildings and public facilities.",
    Icon: Wrench,
  },
  {
    id: "urban-planning-design",
    title: "Urban Planning & Design",
    description:
      "Coordinates city layouts, urban expansion, and development control systems.",
    Icon: DraftingCompass,
  },
  {
    id: "project-monitoring-evaluation",
    title: "Project Monitoring & Evaluation",
    description:
      "Tracks project execution, performance metrics, and delivery accountability.",
    Icon: ClipboardList,
  },
  {
    id: "engineering-services",
    title: "Engineering Services",
    description:
      "Provides technical standards, approvals, and engineering oversight for all projects.",
    Icon: Compass,
  },
];

export function MinistryDepartments() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="departments" className="scroll-mt-24 bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A95B]">
            Organizational Structure
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight !text-[#0F3D2E] md:text-[2.35rem]">
            Ministry Departments
          </h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            Core departments responsible for planning, execution, and oversight of infrastructure
            and housing development across Kano State.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
          }}
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {departments.map((department) => (
            <motion.article
              key={department.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              className="rounded-2xl border border-[#0F3D2E]/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F3D2E]/5">
                <department.Icon className="h-5 w-5 text-[#0F3D2E]" aria-hidden />
              </div>
              <h3 className="text-[#0F3D2E] text-lg font-semibold leading-7">{department.title}</h3>
              <div className="mb-4 mt-3 h-[2px] w-12 bg-[#C8A95B]" />
              <p className="text-sm leading-7 text-slate-600">{department.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
