"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectItem } from "@/types/executive-profile";
import { FadeInSection } from "@/components/animations/FadeInSection";

type ProjectsSectionProps = {
  projects: ProjectItem[];
  disableAnimation?: boolean;
};

type ProjectImageProps = {
  src?: string;
  fallbackSrc: string;
  alt: string;
  sizes: string;
  className?: string;
};

const FEATURED_FALLBACK_IMAGE = "/images/projects/featured-project.jpg";
const GALLERY_FALLBACK_IMAGES = [
  "/images/projects/project-01.jpg",
  "/images/projects/project-02.jpg",
  "/images/projects/project-03.jpg",
  "/images/projects/project-04.jpg",
  "/images/projects/project-05.jpg",
];

function formatMetricValue(value: number, unit: string): string {
  return `${value.toLocaleString()} ${unit}`;
}

function isMetricValidated(status: ProjectItem["metrics"][number]["verification_status"]): boolean {
  return status === "verified";
}

function normalizeProjectImagePath(url?: string): string | undefined {
  if (!url) {
    return undefined;
  }

  if (url.startsWith("/public/images/projects/")) {
    return url.replace("/public", "");
  }

  if (url.startsWith("/images/projects/")) {
    return url;
  }

  return undefined;
}

function ProjectImage({ src, fallbackSrc, alt, sizes, className }: ProjectImageProps) {
  const primarySrc = normalizeProjectImagePath(src) ?? fallbackSrc;
  const [attempt, setAttempt] = useState(0);
  const candidates = [primarySrc, fallbackSrc];
  const currentSrc = candidates[Math.min(attempt, candidates.length - 1)];

  if (attempt >= candidates.length) {
    return (
      <div className="flex h-full items-center justify-center bg-background p-6 text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-text/60">Project Visual Placeholder</p>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={className ?? "object-cover"}
      onError={() => {
        setAttempt((previous) => previous + 1);
      }}
    />
  );
}

function ProjectGalleryCard({
  project,
  imageFallback,
}: {
  project: ProjectItem;
  imageFallback: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-primary/12 bg-white shadow-[0_10px_28px_rgba(11,31,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(11,31,58,0.14)] print:shadow-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-background">
        <ProjectImage
          key={`${project.id}-${project.images[0]?.url ?? "default-gallery"}`}
          src={project.images[0]?.url}
          fallbackSrc={imageFallback}
          alt={project.images[0]?.caption || `${project.name} gallery image`}
          sizes="(max-width: 768px) 88vw, (max-width: 1024px) 48vw, 32vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        <div className="absolute left-3 top-3 rounded-full bg-[#0B1F3A]/86 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white">
          {project.location}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl leading-tight text-primary">{project.name}</h3>
          <span className="shrink-0 rounded-full border border-accent/45 bg-accent/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-primary">
            {project.status}
          </span>
        </div>
        <div className="mt-3 h-px w-12 bg-accent/80" />
        <p className="mt-3 text-sm leading-7 text-text/78">{project.impact}</p>
      </div>
    </article>
  );
}

export function ProjectsSection({ projects, disableAnimation = false }: ProjectsSectionProps) {
  const featuredProject = projects[0];
  const carouselProjects = projects.slice(1);
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(carouselProjects.length > 1);
  const [selectedSnap, setSelectedSnap] = useState(0);

  const onEmblaSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      onEmblaSelect();
    });

    emblaApi.on("select", onEmblaSelect);
    emblaApi.on("reInit", onEmblaSelect);

    return () => {
      window.cancelAnimationFrame(frame);
      emblaApi.off("select", onEmblaSelect);
      emblaApi.off("reInit", onEmblaSelect);
    };
  }, [emblaApi, onEmblaSelect]);

  return (
    <section id="signature-projects" className="section-container pt-10 md:pt-12 print:pt-6">
      <FadeInSection disableAnimation={disableAnimation} className="mx-auto max-w-3xl text-center">
        <p className="section-kicker">Infrastructure Portfolio</p>
        <h2 className="section-heading mt-2">Signature Projects &amp; Infrastructure Delivery</h2>
        <p className="mt-4 text-sm leading-7 text-text/75 md:text-base">
          A curated view of strategic delivery programs shaping mobility, resilience, and long-term
          infrastructure performance across Kano State.
        </p>
      </FadeInSection>

      {featuredProject ? (
        <FadeInSection disableAnimation={disableAnimation} delay={0.06} className="mt-8">
          <article className="overflow-hidden rounded-2xl border border-primary/12 bg-white shadow-[0_16px_40px_rgba(11,31,58,0.12)]">
            <div className="grid md:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[320px] md:min-h-[520px]">
                <ProjectImage
                  key={`${featuredProject.id}-${featuredProject.images[0]?.url ?? "default-featured"}`}
                  src={featuredProject.images[0]?.url}
                  fallbackSrc={FEATURED_FALLBACK_IMAGE}
                  alt={featuredProject.images[0]?.caption || `${featuredProject.name} project image`}
                  sizes="(max-width: 768px) 100vw, 62vw"
                  className="object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#0B1F3A]/88 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white md:left-6 md:top-6">
                  {featuredProject.location}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/65">
                    Featured Delivery
                  </p>
                  <span className="rounded-full border border-primary/18 bg-primary/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary">
                    {featuredProject.status}
                  </span>
                </div>

                <h3 className="font-heading mt-3 text-2xl leading-tight text-primary md:text-3xl">
                  {featuredProject.name}
                </h3>
                <div className="mt-4 h-[2px] w-16 bg-accent/85" />

                <p className="mt-5 text-sm leading-7 text-text/82">{featuredProject.scope}</p>
                <p className="mt-4 text-sm leading-7 text-text/74">{featuredProject.impact}</p>

                {featuredProject.metrics.length > 0 ? (
                  <div className="mt-6 rounded-xl border border-primary/10 bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      Key Metrics
                    </p>
                    <ul className="mt-3 space-y-2">
                      {featuredProject.metrics.slice(0, 3).map((metric) => (
                        <li
                          key={`${featuredProject.id}-${metric.name}`}
                          className="flex items-start justify-between gap-3"
                        >
                          <span className="text-sm leading-6 text-text/78">{metric.name}</span>
                          <span className="shrink-0 text-sm font-semibold text-primary">
                            {formatMetricValue(metric.value, metric.unit)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {featuredProject.metrics.some(
                      (metric) => !isMetricValidated(metric.verification_status),
                    ) ? (
                      <p className="mt-3 text-[11px] tracking-[0.04em] text-text/60">
                        Data under technical validation
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        </FadeInSection>
      ) : null}

      {carouselProjects.length > 0 ? (
        <FadeInSection disableAnimation={disableAnimation} delay={0.08} className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Project Gallery
              </p>
              <h3 className="font-heading mt-1 text-2xl text-primary">Delivery Highlights</h3>
            </div>

            <div className="hidden items-center gap-2 md:flex print:hidden">
              <button
                type="button"
                aria-label="Scroll project carousel left"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition-colors hover:bg-primary/[0.03] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Scroll project carousel right"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition-colors hover:bg-primary/[0.03] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden print:hidden" ref={emblaRef}>
            <motion.div
              className="-ml-5 flex"
              initial={shouldAnimate ? "hidden" : false}
              whileInView={shouldAnimate ? "show" : undefined}
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.09, delayChildren: 0.03 } },
              }}
            >
              {carouselProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="min-w-0 flex-[0_0_100%] pl-5 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: "easeOut" },
                    },
                  }}
                >
                  <ProjectGalleryCard
                    project={project}
                    imageFallback={GALLERY_FALLBACK_IMAGES[index % GALLERY_FALLBACK_IMAGES.length]}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 print:hidden" aria-label="Project carousel indicators">
            {carouselProjects.map((project, index) => (
              <button
                key={`${project.id}-${index}`}
                type="button"
                aria-label={`Go to carousel slide ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all ${index === selectedSnap ? "w-6 bg-accent" : "w-3 bg-primary/25 hover:bg-primary/40"}`}
              />
            ))}
          </div>

          <div className="mt-4 hidden grid-cols-1 gap-4 print:grid print:grid-cols-2">
            {carouselProjects.map((project, index) => (
              <ProjectGalleryCard
                key={`${project.id}-print`}
                project={project}
                imageFallback={GALLERY_FALLBACK_IMAGES[index % GALLERY_FALLBACK_IMAGES.length]}
              />
            ))}
          </div>
        </FadeInSection>
      ) : null}
    </section>
  );
}
