"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type NewsItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  fallbackImage: string;
};

const featuredNews: NewsItem = {
  id: "featured-news",
  category: "Press Release",
  title: "Commissioner Inspects Major Infrastructure Projects Across Kano State",
  description:
    "The ministry conducted a coordinated field review across key road and housing sites to reinforce project quality, implementation pace, and accountability in delivery.",
  date: "April 2026",
  image: "/images/ministry/news/featured-news.jpg",
  fallbackImage: "/images/projects/featured-project.jpg",
};

const secondaryNews: NewsItem[] = [
  {
    id: "news-urban-renewal",
    category: "Project Update",
    title: "Urban Renewal Program Expands to Additional Metropolitan Corridors",
    description:
      "Expansion works have advanced into additional corridors under the metropolitan renewal package.",
    date: "March 2026",
    image: "/images/ministry/news/urban-renewal.jpg",
    fallbackImage: "/images/projects/project-01.jpg",
  },
  {
    id: "news-housing-initiatives",
    category: "Housing Brief",
    title: "Housing Development Initiatives Progress in Lambu and Djanguza",
    description:
      "Housing implementation milestones were recorded across active sites in Lambu and Djanguza.",
    date: "March 2026",
    image: "/images/ministry/news/housing-initiatives.jpg",
    fallbackImage: "/images/projects/project-04.jpg",
  },
  {
    id: "news-monitoring-systems",
    category: "Policy Update",
    title: "Government Strengthens Road Infrastructure Monitoring Systems",
    description:
      "New monitoring protocols support improved project supervision, reporting integrity, and execution visibility.",
    date: "February 2026",
    image: "/images/ministry/news/monitoring-systems.jpg",
    fallbackImage: "/images/projects/project-03.jpg",
  },
];

type NewsImageProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  sizes: string;
};

function NewsImage({ src, fallbackSrc, alt, className, sizes }: NewsImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#0F3D2E]/8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0F3D2E]/70">
          News Visual
        </p>
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
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
          return;
        }
        setFailed(true);
      }}
    />
  );
}

export function MinistryNews() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="news" className="scroll-mt-24 bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#C8A95B]">Public Updates</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight !text-[#0F3D2E] md:text-[2.35rem]">
            News &amp; Media
          </h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            Latest updates, project highlights, and official communications from the Ministry of
            Works and Housing, Kano State.
          </p>
        </motion.div>

        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          className="relative mt-8 h-[420px] overflow-hidden rounded-2xl md:h-[480px]"
        >
          <NewsImage
            src={featuredNews.image}
            fallbackSrc={featuredNews.fallbackImage}
            alt={featuredNews.title}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

          <div className="absolute bottom-0 left-0 z-10 max-w-xl p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-[#C8A95B]">
              {featuredNews.category}
            </p>
            <h3 className="font-heading mt-3 text-2xl !text-white md:text-4xl">
              {featuredNews.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/85 md:text-base">
              {featuredNews.description}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.1em] text-white/70">
                {featuredNews.date}
              </span>
              <a
                href="#"
                className="text-sm font-semibold text-white transition-colors duration-300 hover:text-[#C8A95B]"
              >
                Read Full Story
              </a>
            </div>
          </div>
        </motion.article>

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
          {secondaryNews.map((item) => (
            <motion.article
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              className="rounded-2xl border border-[#0F3D2E]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                <NewsImage
                  src={item.image}
                  fallbackSrc={item.fallbackImage}
                  alt={item.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 48vw, 32vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#C8A95B]">{item.category}</p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-[#0F3D2E]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <p className="mt-4 text-xs text-slate-400">{item.date}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-[#0F3D2E] transition-colors duration-300 hover:text-[#1B5A45]"
          >
            View All News →
          </a>
        </div>
      </div>
    </section>
  );
}
