"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ProjectStatus = "Ongoing" | "In Progress" | "Planned";
type ProjectCategory = "Housing" | "Roads" | "Transport" | "Public Works";
type ProjectFilter = "All" | "Ongoing" | "Completed" | "Housing" | "Roads";

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  progress: number;
  image: string;
  imageFallback: string;
  lastUpdated: string;
};

const kpiItems = [
  { label: "Active Projects", value: "12+" },
  { label: "Housing Units", value: "2,600+" },
  { label: "Road Projects", value: "8+" },
  { label: "Major Initiatives", value: "6" },
];

const projectFilters: ProjectFilter[] = ["All", "Ongoing", "Completed", "Housing", "Roads"];

const projectsData: ProjectItem[] = [
  {
    id: "abba-gida-gida-2024",
    title: "Urban Renewal Program (ABBA GIDA-GIDA 2024)",
    description: "Metropolitan renewal package covering 6 priority urban road corridors.",
    category: "Roads",
    status: "Ongoing",
    progress: 62,
    image: "/images/projects/urban-roads.jpg",
    imageFallback: "/images/projects/project-01.jpg",
    lastUpdated: "March 2026",
  },
  {
    id: "wuju-wuju-road",
    title: "Wuju-Wuju Road Project",
    description: "8km corridor reconstruction and drainage stabilization project (resumed execution phase).",
    category: "Roads",
    status: "In Progress",
    progress: 48,
    image: "/images/projects/wuju-road.jpg",
    imageFallback: "/images/projects/project-02.jpg",
    lastUpdated: "March 2026",
  },
  {
    id: "kwankwasiyya-office",
    title: "Kwankwasiyya Housing Office",
    description: "Administrative and service facility upgrade under ongoing construction.",
    category: "Housing",
    status: "In Progress",
    progress: 55,
    image: "/images/projects/housing-office.jpg",
    imageFallback: "/images/projects/project-03.jpg",
    lastUpdated: "March 2026",
  },
  {
    id: "djanguza-housing",
    title: "Djanguza Housing Project",
    description: "Development of 100 housing units within the state housing expansion plan.",
    category: "Housing",
    status: "Ongoing",
    progress: 66,
    image: "/images/projects/lambu-housing.jpg",
    imageFallback: "/images/projects/project-04.jpg",
    lastUpdated: "March 2026",
  },
  {
    id: "mass-transit-weighbridges",
    title: "Mass Transit & Weigh Bridges",
    description: "Integrated transport control initiative with weigh bridge deployment planning.",
    category: "Transport",
    status: "Planned",
    progress: 22,
    image: "/images/projects/transit.jpg",
    imageFallback: "/images/projects/project-05.jpg",
    lastUpdated: "March 2026",
  },
  {
    id: "row-compensation-support",
    title: "Road Infrastructure Support",
    description: "Right-of-way compensation and traffic flow improvements for priority corridors.",
    category: "Public Works",
    status: "In Progress",
    progress: 41,
    image: "/images/projects/urban-roads.jpg",
    imageFallback: "/images/projects/project-01.jpg",
    lastUpdated: "March 2026",
  },
];

function getStatusBadgeStyles(status: ProjectStatus): string {
  if (status === "Ongoing") {
    return "bg-green-100 text-green-700";
  }
  if (status === "In Progress") {
    return "bg-amber-100 text-amber-700";
  }
  return "bg-slate-200 text-slate-600";
}

type DashboardImageProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  sizes: string;
};

function DashboardImage({ src, fallbackSrc, alt, className, sizes }: DashboardImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#0F3D2E]/8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1B5A45]/75">
          Project Visual
        </p>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={className ?? "object-cover"}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
          return;
        }
        setFailed(true);
      }}
    />
  );
}

export function MinistryProjectsDashboard() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData;
    }

    if (activeFilter === "Ongoing") {
      return projectsData.filter((project) => project.status === "Ongoing");
    }

    if (activeFilter === "Completed") {
      return projectsData.filter((project) => project.progress >= 95);
    }

    if (activeFilter === "Housing") {
      return projectsData.filter((project) => project.category === "Housing");
    }

    return projectsData.filter((project) => project.category === "Roads");
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-24 bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A95B]">
            Project Tracking
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight !text-[#0F3D2E] md:text-[2.35rem]">
            Projects Dashboard
          </h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            A structured view of priority infrastructure and housing projects across Kano State.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
          }}
          className="mt-12 grid gap-4 md:grid-cols-4"
        >
          {kpiItems.map((kpi) => (
            <motion.article
              key={kpi.label}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              className="rounded-xl border border-[#0F3D2E]/10 bg-white p-4 shadow-sm md:p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">{kpi.label}</p>
              <p className="mt-2 text-3xl font-semibold leading-none text-[#0F3D2E]">{kpi.value}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          className="mt-12 rounded-2xl border border-[#0F3D2E]/10 bg-gradient-to-br from-white to-[#F8FAFC] p-8 shadow-sm md:mt-16 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-green-700">
                  Ongoing
                </span>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Flagship Housing</p>
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight !text-[#0F3D2E] md:text-3xl">
                Renewed Hope Housing City - Lambu
              </h3>
              <div className="mt-4 h-[2px] w-14 bg-[#C8A95B]" />
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A 2,500-unit housing development targeting low and middle-income earners, with
                expected completion in early 2025.
              </p>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
                  <span>Execution Progress</span>
                  <span className="text-[#0F3D2E]">70%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200">
                  <div className="h-2.5 rounded-full bg-[#1B5A45]" style={{ width: "70%" }} />
                </div>
              </div>
            </div>

            <div className="relative h-[220px] w-full overflow-hidden rounded-xl md:h-[260px]">
              <DashboardImage
                src="/images/projects/lambu-housing.jpg"
                fallbackSrc="/images/projects/featured-project.jpg"
                alt="Renewed Hope Housing City Lambu"
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/20 to-transparent" />
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-12 flex flex-wrap gap-2 md:mt-16"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition duration-300 ${
                activeFilter === filter
                  ? "bg-[#0F3D2E] text-white"
                  : "border border-[#0F3D2E]/10 bg-white text-[#0F3D2E] hover:bg-[#0F3D2E]/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
          }}
          className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="rounded-2xl border border-[#0F3D2E]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
                <DashboardImage
                  src={project.image}
                  fallbackSrc={project.imageFallback}
                  alt={`${project.title} project image`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 48vw, 30vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1B5A45]/80">
                  {project.category}
                </p>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${getStatusBadgeStyles(
                    project.status,
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-7 text-[#0F3D2E]">{project.title}</h3>
              <div className="mb-4 mt-3 h-[2px] w-12 bg-[#C8A95B]" />
              <p className="text-sm leading-7 text-slate-600">{project.description}</p>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
                  <span>Progress</span>
                  <span className="text-[#0F3D2E]">{project.progress}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200">
                  <div
                    className="h-2.5 rounded-full bg-[#1B5A45]"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">Last updated: {project.lastUpdated}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
