"use client";

import Image from "next/image";
import { useState } from "react";

const LOGO_PATH = "/images/ministry/kano-logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Ministry", href: "#about-ministry" },
  { label: "Projects", href: "#projects" },
  { label: "Departments", href: "#departments" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export function MinistryFooter() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#0F3D2E] py-16 text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="flex items-start gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/18">
                {!logoError ? (
                  <Image
                    src={LOGO_PATH}
                    alt="Kano State logo"
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                    KS
                  </span>
                )}
              </div>
              <div>
                <p className="text-base font-semibold text-white">Ministry of Works and Housing</p>
                <p className="mt-1 text-sm text-white/70">Kano State</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Advancing infrastructure delivery and housing development across Kano State.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Quick Links
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors duration-300 hover:text-[#C8A95B]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Contact Summary
            </p>
            <div className="mt-4 space-y-2 text-sm leading-7 text-white/80">
              <p>1, Dan Hausa Road, Kano</p>
              <p>
                <a
                  href="mailto:info@kanoworkshousing.gov.ng"
                  className="transition-colors duration-300 hover:text-[#C8A95B]"
                >
                  info@kanoworkshousing.gov.ng
                </a>
              </p>
              <p>+234 xxx xxx xxxx</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-sm text-white/80">
              © 2026 Ministry of Works and Housing, Kano State
            </p>
            <p className="text-sm text-white/60">
              Designed &amp; Developed by{" "}
              <span className="text-[#C8A95B]">Classictech Solutionaries</span>
            </p>
          </div>
          <p className="mt-2 text-center text-sm text-white/60 md:text-right">
            +2348137215231 |{" "}
            <a
              href="mailto:idrisyakubu816@gmail.com"
              className="transition-colors duration-300 hover:text-[#C8A95B]"
            >
              idrisyakubu816@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
