"use client";

import { useEffect, useMemo, useState } from "react";
import { Logo } from "@/components/branding/Logo";

type NavItem = {
  label: string;
  href: `#${string}`;
  sectionId: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "#overview", sectionId: "overview" },
  { label: "Biography", href: "#biography", sectionId: "biography" },
  { label: "Leadership", href: "#leadership", sectionId: "leadership" },
  { label: "Projects", href: "#signature-projects", sectionId: "signature-projects" },
  { label: "Impact", href: "#impact-dashboard", sectionId: "impact-dashboard" },
  { label: "Vision", href: "#vision", sectionId: "vision" },
  {
    label: "Modernization",
    href: "#modernization-opportunities",
    sectionId: "modernization-opportunities",
  },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export function PortfolioNavigation() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.sectionId), []);

  useEffect(() => {
    const timer = window.setTimeout(() => setHasLoaded(true), 20);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const visibilityById = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const visibleShare = entry.isIntersecting
            ? entry.intersectionRect.height / Math.max(window.innerHeight, 1)
            : 0;
          visibilityById.set(id, visibleShare);
        });

        let topId = sectionIds[0] ?? "overview";
        let topScore = 0;

        sectionIds.forEach((id) => {
          const score = visibilityById.get(id) ?? 0;
          if (score > topScore) {
            topScore = score;
            topId = id;
          }
        });

        if (topScore > 0.04) {
          setActiveSection((previous) => (previous === topId ? previous : topId));
        }
      },
      {
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0.05, 0.12, 0.2, 0.35, 0.5, 0.7],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileOpen(false);
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const desktopLinkClass = (sectionId: string) =>
    [
      "group relative inline-flex items-center px-2.5 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
      activeSection === sectionId
        ? "text-[#0B1F3A] font-semibold"
        : "text-text/68 hover:text-[#0B1F3A]",
    ].join(" ");

  const mobileLinkClass = (sectionId: string) =>
    [
      "block w-full rounded-md border px-3 py-3 text-sm tracking-[0.06em] transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
      activeSection === sectionId
        ? "border-[#C8A95B]/55 bg-[#0B1F3A]/[0.03] text-[#0B1F3A] font-semibold"
        : "border-transparent text-text/78 hover:border-primary/15 hover:text-[#0B1F3A]",
    ].join(" ");

  return (
    <header
      className={[
        "no-print sticky top-0 z-50 border-b border-primary/10 bg-white/90 backdrop-blur",
        "transition-all duration-500 ease-out",
        hasLoaded ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:px-10">
        <a href="#overview" className="flex items-center gap-3">
          <Logo variant="icon" tone="dark" size={38} />
          <span className="flex flex-col leading-none">
            <span className="text-primary text-sm font-semibold">Engr. Marwan Ahmad</span>
            <span className="text-text/65 mt-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
              Executive Portfolio
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={desktopLinkClass(item.sectionId)}
              aria-current={activeSection === item.sectionId ? "page" : undefined}
            >
              <span>{item.label}</span>
              <span
                className={[
                  "absolute bottom-1 left-2.5 h-px w-0 bg-[#C8A95B] transition-all duration-300",
                  "group-hover:w-[calc(100%-1.25rem)]",
                  activeSection === item.sectionId ? "w-[calc(100%-1.25rem)]" : "",
                ].join(" ")}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/15 text-primary md:hidden"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      <div
        className={[
          "overflow-hidden border-t border-primary/10 bg-white/95 px-6 md:hidden",
          "transition-all duration-300 ease-out",
          isMobileOpen ? "max-h-[420px] translate-y-0 py-3 opacity-100" : "max-h-0 -translate-y-2 py-0 opacity-0",
        ].join(" ")}
      >
        <nav id="mobile-navigation" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={mobileLinkClass(item.sectionId)}
                  aria-current={activeSection === item.sectionId ? "page" : undefined}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
