"use client";

import { Logo } from "@/components/branding/Logo";

const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Biography", href: "#biography" },
  { label: "Projects", href: "#signature-projects" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="no-print mt-14 bg-gradient-to-br from-[#0B1F3A] to-[#08182D] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
        <div className="grid gap-9 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div>
            <div className="flex items-start gap-4">
              <Logo variant="full" tone="light" size={76} className="shrink-0" />
              <div className="pt-1">
                <p className="font-heading text-lg leading-tight text-white">Engr. Marwan Ahmad</p>
                <p className="mt-2 text-sm leading-7 text-white/78">
                  Commissioner for Works and Housing, Kano State
                </p>
              </div>
            </div>
            <div className="mt-4 h-[2px] w-14 bg-[#C8A95B]/90" />
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/74">
              Engineering-led leadership for infrastructure delivery, housing growth, and public
              value.
            </p>
          </div>

          <div className="grid gap-6 md:justify-self-end md:text-right">
            <nav aria-label="Footer navigation">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">
                Navigation
              </p>
              <ul className="mt-3 flex flex-col gap-2 md:items-end">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm leading-7 text-white/80 transition-colors duration-300 hover:text-[#C8A95B]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">
                Project Contact
              </p>
              <div className="mt-3 space-y-1.5 text-sm leading-7 text-white/80">
                <p className="font-medium text-white">Idris Yakubu</p>
                <p>
                  <a
                    href="tel:+2348137215231"
                    className="transition-colors duration-300 hover:text-[#C8A95B]"
                  >
                    +2348137215231
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:idrisyakubu816@gmail.com"
                    className="transition-colors duration-300 hover:text-[#C8A95B]"
                  >
                    idrisyakubu816@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/14 pt-4">
          <div className="flex flex-col gap-1.5 text-xs tracking-[0.04em] text-white/62 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Executive Portfolio. All rights reserved.</p>
            <p>Designed and developed by ClassicTech Solutionaries</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
