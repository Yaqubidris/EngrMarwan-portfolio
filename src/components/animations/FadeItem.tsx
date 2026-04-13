"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  disableAnimation?: boolean;
};

export function FadeItem({
  children,
  className,
  y = 12,
  duration = 0.55,
  disableAnimation = false,
}: FadeItemProps) {
  const reduceMotion = useReducedMotion();

  if (disableAnimation || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
