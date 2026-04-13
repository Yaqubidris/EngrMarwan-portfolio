"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import type { ExecutiveProfile } from "@/types/executive-profile";

type ContactSectionProps = {
  data: ExecutiveProfile["sections"]["contact"];
  disableAnimation?: boolean;
};

type ContactCard = {
  id: string;
  label: string;
  value: string;
  Icon: typeof Mail;
  href?: string;
};

export function ContactSection({ data, disableAnimation = false }: ContactSectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !(disableAnimation || reduceMotion);

  const contactCards: ContactCard[] = [
    {
      id: "contact-email",
      label: "Email",
      value: data.email,
      Icon: Mail,
      href: `mailto:${data.email}`,
    },
    {
      id: "contact-phone",
      label: "Phone / Office Line",
      value: data.phone?.trim() || "Official line available through office registry",
      Icon: Phone,
      href: data.phone?.trim() ? `tel:${data.phone.replace(/[^+\d]/g, "")}` : undefined,
    },
    {
      id: "contact-office",
      label: "Office Address",
      value: data.office,
      Icon: MapPin,
    },
  ];

  return (
    <section id={data.id} className="section-container pb-24 pt-10 md:pt-12 print:pb-8 print:pt-6">
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="section-kicker">Professional Contact</p>
        <h2 className="section-heading mt-2">Engagement &amp; Inquiries</h2>
        <p className="text-text/76 mt-4 text-sm leading-7 md:text-base">
          For official engagements, infrastructure consultations, and professional inquiries.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-[1.05fr_0.95fr]"
        initial={shouldAnimate ? "hidden" : false}
        whileInView={shouldAnimate ? "show" : undefined}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.04,
            },
          },
        }}
      >
        <motion.article
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
          }}
          className="rounded-2xl bg-white p-7 ring-1 ring-black/6 shadow-[0_10px_30px_rgba(11,31,58,0.08)] print:p-5 print:shadow-none"
        >
          <p className="text-primary/65 text-xs font-semibold uppercase tracking-[0.14em]">
            Engagement Context
          </p>
          <h3 className="font-heading mt-3 text-2xl leading-tight text-primary">Official Correspondence</h3>
          <div className="mt-4 h-[2px] w-14 bg-accent/85" />
          <p className="text-text/80 mt-5 text-sm leading-7 md:text-base md:leading-8">
            Engagements are coordinated through the Office of the Commissioner for Works and
            Housing for institutional meetings, infrastructure consultations, and policy-aligned
            technical dialogue.
          </p>
          {data.points.length > 0 ? (
            <ul className="mt-5 space-y-2">
              {data.points.slice(0, 3).map((point) => (
                <li
                  key={point}
                  className="rounded-lg bg-background px-3 py-2 text-sm leading-6 text-text/75 ring-1 ring-primary/10"
                >
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </motion.article>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
          }}
          className="grid gap-4"
        >
          {contactCards.map((card) => {
            const CardContent = (
              <>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F3A]/5">
                  <card.Icon className="h-5 w-5 text-[#0B1F3A]" aria-hidden />
                </div>
                <p className="text-text/60 text-[11px] font-semibold uppercase tracking-[0.14em]">
                  {card.label}
                </p>
                <div className="mt-3 h-[2px] w-12 bg-accent/85" />
                <p className="mt-3 text-sm leading-7 text-primary md:text-[0.96rem]">{card.value}</p>
              </>
            );

            const cardClassName =
              "group rounded-2xl bg-white p-5 ring-1 ring-black/6 shadow-[0_8px_24px_rgba(11,31,58,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(11,31,58,0.12)] print:shadow-none";

            if (card.href) {
              return (
                <a key={card.id} href={card.href} className={cardClassName}>
                  {CardContent}
                </a>
              );
            }

            return (
              <article key={card.id} className={cardClassName}>
                {CardContent}
              </article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
