"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  amount?: number;
  disableAnimation?: boolean;
};

export function FadeInSection({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 14,
  once = true,
  amount = 0.2,
  disableAnimation = false,
}: FadeInSectionProps) {
  const reduceMotion = useReducedMotion();

  if (disableAnimation || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
