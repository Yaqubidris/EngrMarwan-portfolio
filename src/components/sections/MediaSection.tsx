"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Mic, Newspaper } from "lucide-react";
import type { MediaItem } from "@/types/executive-profile";

type MediaSectionProps = {
  items: MediaItem[];
  disableAnimation?: boolean;
};

type MediaVisualProps = {
  src: string;
  alt: string;
};

const FEATURED_MEDIA_IMAGE = "/images/media/featured-media.jpg";

function formatMediaDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getMediaSnippet(item: MediaItem): string {
  if (/interview/i.test(item.type)) {
    return "An interview reference highlighting policy perspective, delivery priorities, and institutional direction.";
  }

  if (/article|news|press/i.test(item.type)) {
    return "A public reference documenting delivery activity, implementation progress, and infrastructure outcomes.";
  }

  return "A selected visibility reference aligned with infrastructure leadership and institutional engagement.";
}

function getMediaTypeIcon(type: string) {
  if (/interview/i.test(type)) {
    return Mic;
  }

  if (/award|recognition|honou?r/i.test(type)) {
    return BadgeCheck;
  }

  return Newspaper;
}

function MediaVisual({ src, alt }: MediaVisualProps) {
  return (
    <div className="relative min-h-[230px] overflow-hidden rounded-2xl bg-background md:min-h-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 48vw"
        className="object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/35 to-transparent" />
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
        Featured Reference
      </div>
    </div>
  );
}

export function MediaSection({ items, disableAnimation = false }: MediaSectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  const [featuredItem, ...otherItems] = items;
  const gridItems = otherItems.slice(0, 6);
  const recognitionItems = items.filter((item) => /award|recognition|honou?r/i.test(`${item.type} ${item.title}`));

  return (
    <section id="media-recognition" className="section-container pt-10 md:pt-12 print:pt-6">
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="section-kicker">Public Visibility</p>
        <h2 className="section-heading mt-2">Media &amp; Recognition</h2>
        <p className="text-text/76 mt-4 text-sm leading-7 md:text-base">
          Selected references, public mentions, and institutional acknowledgments.
        </p>
      </motion.div>

      {featuredItem ? (
        <motion.article
          initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.06, ease: "easeOut" }}
          className="mt-8 grid gap-6 rounded-2xl bg-white p-6 ring-1 ring-black/6 shadow-[0_12px_34px_rgba(11,31,58,0.1)] md:grid-cols-[1.05fr_0.95fr] md:p-7 print:shadow-none"
        >
          <MediaVisual src={FEATURED_MEDIA_IMAGE} alt={featuredItem.title} />

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
                {featuredItem.type}
              </span>
              <p className="text-text/62 text-xs uppercase tracking-[0.12em]">
                {formatMediaDate(featuredItem.date)}
              </p>
            </div>

            <h3 className="font-heading text-primary mt-4 text-2xl leading-tight md:text-[2rem]">
              {featuredItem.title}
            </h3>
            <div className="mt-4 h-[2px] w-16 bg-accent/85" />

            <p className="text-primary/80 mt-4 text-sm font-medium leading-7">{featuredItem.publisher}</p>
            <p className="text-text/78 mt-4 text-sm leading-7">{getMediaSnippet(featuredItem)}</p>
          </div>
        </motion.article>
      ) : null}

      {gridItems.length > 0 ? (
        <motion.div
          className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial={shouldAnimate ? "hidden" : false}
          whileInView={shouldAnimate ? "show" : undefined}
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
          }}
        >
          {gridItems.map((item) => {
            const Icon = getMediaTypeIcon(item.type);

            return (
              <motion.article
                key={`${item.title}-${item.date}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                whileHover={
                  shouldAnimate
                    ? { y: -4, transition: { duration: 0.22, ease: "easeOut" } }
                    : undefined
                }
                className="group rounded-2xl bg-white p-5 ring-1 ring-black/6 shadow-[0_8px_24px_rgba(11,31,58,0.08)] transition-all duration-300 hover:shadow-[0_14px_34px_rgba(11,31,58,0.14)] print:shadow-none"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1F3A]/6">
                    <Icon className="h-4.5 w-4.5 text-[#0B1F3A]" aria-hidden />
                  </div>
                  <span className="rounded-full bg-primary/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
                    {item.type}
                  </span>
                </div>

                <p className="text-text/62 mt-3 text-[11px] uppercase tracking-[0.12em]">
                  {item.publisher}
                </p>
                <h3 className="text-primary mt-2 text-lg font-semibold leading-7">{item.title}</h3>
                <div className="mt-3 h-px w-12 bg-accent/80" />
                <p className="text-text/76 mt-3 text-sm leading-7">{getMediaSnippet(item)}</p>
                <p className="text-text/58 mt-4 text-xs uppercase tracking-[0.1em]">
                  {formatMediaDate(item.date)}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      ) : null}

      {recognitionItems.length > 0 ? (
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-7 rounded-2xl bg-background p-4 ring-1 ring-primary/10 md:p-5"
        >
          <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.14em]">
            Institutional Recognition
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {recognitionItems.map((item) => (
              <span
                key={`${item.title}-${item.date}-recognition`}
                className="rounded-full bg-white px-3 py-1.5 text-xs text-text/78 ring-1 ring-primary/12"
              >
                {item.title}
              </span>
            ))}
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}
