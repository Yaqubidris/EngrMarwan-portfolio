"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

type ContactItem = {
  id: string;
  label: string;
  value: string;
  Icon: typeof MapPin;
  href?: string;
};

const contactItems: ContactItem[] = [
  {
    id: "office-address",
    label: "Office Address",
    value: "1, Dan Hausa Road, Kano",
    Icon: MapPin,
  },
  {
    id: "official-email",
    label: "Official Email",
    value: "info@kanoworkshousing.gov.ng",
    href: "mailto:info@kanoworkshousing.gov.ng",
    Icon: Mail,
  },
  {
    id: "phone-line",
    label: "Phone Line",
    value: "+234 xxx xxx xxxx",
    href: "tel:+2340000000000",
    Icon: Phone,
  },
  {
    id: "office-hours",
    label: "Office Hours",
    value: "Monday - Friday, 8:00 AM - 4:00 PM",
    Icon: Clock,
  },
];

export function MinistryContact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-24 bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A95B]">
            Public Engagement
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight !text-[#0F3D2E] md:text-[2.35rem]">
            Contact the Ministry
          </h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            Official contact channels for inquiries, correspondence, and public engagement with
            the Ministry of Works and Housing, Kano State.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid gap-4"
          >
            <article className="rounded-2xl border border-[#0F3D2E]/10 bg-white p-7 shadow-sm md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1B5A45]/80">
                Official Correspondence
              </p>
              <div className="mb-5 mt-3 h-[2px] w-12 bg-[#C8A95B]" />
              <p className="text-sm leading-8 text-slate-600 md:text-base">
                The Ministry of Works and Housing, Kano State, welcomes official inquiries,
                stakeholder engagement, and public correspondence through the appropriate channels
                below.
              </p>
            </article>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
              }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {contactItems.map((item) => {
                const content = (
                  <>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F3D2E]/5">
                      <item.Icon className="h-5 w-5 text-[#0F3D2E]" aria-hidden />
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#1B5A45]/80">
                      {item.label}
                    </p>
                    <div className="mb-3 mt-2 h-[2px] w-10 bg-[#C8A95B]" />
                    <p className="text-sm leading-7 text-slate-600">{item.value}</p>
                  </>
                );

                const cardClasses =
                  "rounded-2xl border border-[#0F3D2E]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6";

                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                    }}
                  >
                    {item.href ? (
                      <a href={item.href} className={`block ${cardClasses}`}>
                        {content}
                      </a>
                    ) : (
                      <article className={cardClasses}>{content}</article>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.04, ease: "easeOut" }}
            className="grid gap-3"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#1B5A45]/80">
              Office Location
            </p>
            <div className="h-[320px] overflow-hidden rounded-2xl border border-[#0F3D2E]/10 shadow-sm lg:h-full lg:min-h-[560px]">
              <iframe
                src="https://maps.google.com/maps?q=Dan%20Hausa%20Road%20Kano&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                title="Ministry office location map"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-500">
          For project-specific matters, stakeholders may also engage the relevant department
          through official ministry channels.
        </p>
      </div>
    </section>
  );
}
