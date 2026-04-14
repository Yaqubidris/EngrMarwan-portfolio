"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Building2,
  CheckCircle2,
  Gauge,
  MapPinned,
  Route,
} from "lucide-react";

type ImpactMetric = {
  id: string;
  label: string;
  value: string;
  description: string;
  trend?: string;
  Icon: typeof Route;
};

const impactMetrics: ImpactMetric[] = [
  {
    id: "roads-delivered",
    label: "Roads Delivered",
    value: "120km+",
    description: "Priority road corridors completed under state infrastructure packages.",
    trend: "↑ +12% this year",
    Icon: Route,
  },
  {
    id: "housing-units",
    label: "Housing Units Completed",
    value: "2,600+",
    description: "Housing output delivered through strategic expansion and completion programs.",
    trend: "↑ +9% this year",
    Icon: Building2,
  },
  {
    id: "active-projects",
    label: "Active Projects",
    value: "50+",
    description: "Current project portfolio under active execution and monitoring.",
    trend: "↑ +3 new this year",
    Icon: Activity,
  },
  {
    id: "completed-projects",
    label: "Completed Projects",
    value: "50+",
    description: "Projects finalized and transitioned into service delivery operations.",
    trend: "↑ +2 this year",
    Icon: CheckCircle2,
  },
  {
    id: "urban-corridors",
    label: "Urban Corridors Improved",
    value: "36",
    description: "High-impact urban transport corridors upgraded for mobility performance.",
    trend: "↑ corridor optimization",
    Icon: MapPinned,
  },
  {
    id: "infrastructure-growth",
    label: "Infrastructure Growth",
    value: "+48%",
    description: "Measured growth in infrastructure output across key delivery indicators.",
    trend: "↑ sustained annual growth",
    Icon: Gauge,
  },
];

export function MinistryImpactDashboard() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="impact" className="scroll-mt-24 bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A95B]">
            Infrastructure Performance
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight !text-[#0F3D2E] md:text-[2.35rem]">
            Impact Dashboard
          </h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            A data-driven overview of infrastructure delivery, housing expansion, and public
            systems performance across Kano State.
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
          {impactMetrics.map((metric) => (
            <motion.article
              key={metric.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              className="rounded-2xl border border-[#0F3D2E]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-7"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0F3D2E]/6">
                <metric.Icon className="h-5 w-5 text-[#0F3D2E]" aria-hidden />
              </div>
              <p className="text-3xl font-semibold leading-none text-[#0F3D2E] md:text-4xl">
                {metric.value}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1B5A45]/82">
                {metric.label}
              </p>
              <div className="mb-4 mt-3 h-[2px] w-12 bg-[#C8A95B]" />
              <p className="text-sm leading-7 text-slate-600">{metric.description}</p>
              {metric.trend ? (
                <p className="mt-4 text-xs font-medium tracking-[0.02em] text-[#1B5A45]">
                  {metric.trend}
                </p>
              ) : null}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
