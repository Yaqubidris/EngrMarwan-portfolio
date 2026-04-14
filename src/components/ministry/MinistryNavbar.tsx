"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Ministry", href: "#about-ministry" },
  { label: "Projects", href: "#projects" },
  { label: "Departments", href: "#departments" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const LOGO_PATH = "/images/ministry/kano-logo.png";

export function MinistryNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-[#103B2E]/10 bg-white/96 backdrop-blur"
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:px-12 xl:px-16">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#103B2E]/8 ring-1 ring-[#103B2E]/15">
            {!logoError ? (
              <Image
                src={LOGO_PATH}
                alt="Kano State seal"
                fill
                className="object-contain p-1"
                sizes="44px"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#103B2E]">
                KS
              </span>
            )}
          </div>
          <span className="flex flex-col leading-none">
            <span className="text-[0.88rem] font-semibold text-[#103B2E] sm:text-[0.92rem]">
              Ministry of Works and Housing
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#1F2937]/68">
              Kano State
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Ministry navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-[11px] font-medium uppercase tracking-[0.11em] text-[#1F2937]/75 transition-colors duration-300 hover:text-[#103B2E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#103B2E]/18 text-[#103B2E] lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="ministry-mobile-nav"
          aria-label={menuOpen ? "Close ministry menu" : "Open ministry menu"}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      <motion.div
        id="ministry-mobile-nav"
        className="overflow-hidden border-t border-[#103B2E]/10 bg-white px-5 sm:px-6 lg:hidden"
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <nav className="py-3" aria-label="Ministry mobile navigation">
          <ul className="space-y-1.5">
            {NAV_ITEMS.map((item) => (
              <li key={`${item.href}-mobile`}>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-2.5 text-sm text-[#1F2937]/82 transition-colors duration-300 hover:bg-[#103B2E]/5 hover:text-[#103B2E]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
}
