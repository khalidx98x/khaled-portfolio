"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionHeader({ title }: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex w-full items-center py-12 font-sans md:py-24"
      initial="hidden"
      viewport={{ amount: 0.1, margin: "-100px", once: true }}
      whileInView="visible"
    >
      <motion.h2
        className="text-xs font-black uppercase tracking-[0.25em] text-[#010101]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.2,
          ease
        }}
      >
        {title}
      </motion.h2>
      <motion.div
        aria-hidden="true"
        className="ml-10 h-px flex-1 origin-left bg-[#010101] opacity-10"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 }
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.2,
          ease
        }}
      />
    </motion.div>
  );
}
