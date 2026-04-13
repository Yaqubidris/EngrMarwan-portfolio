"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
  disableAnimation?: boolean;
};

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.2,
  disableAnimation = false,
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();

  if (disableAnimation || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
