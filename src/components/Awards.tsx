"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { AwardSectionData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

type AwardsProps = {
  award: AwardSectionData;
};

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export function Awards({ award }: AwardsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-24 bg-[#ffffff] px-5 pb-section font-sans text-[#010101] md:px-8"
      id="awards-recognition"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader title="Awards" />
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial="hidden"
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              ease
            }}
            variants={containerVariants}
            viewport={{ amount: 0.35, once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="max-w-3xl text-4xl font-black leading-[0.94] tracking-tighter text-[#010101] md:text-6xl md:-tracking-wider"
              transition={{
                duration: prefersReducedMotion ? 0 : 0.9,
                ease
              }}
              variants={textVariants}
            >
              {award.headline}
            </motion.h2>
            <motion.p
              className="mt-8 max-w-2xl text-xl leading-relaxed text-[#010101]/80"
              transition={{
                duration: prefersReducedMotion ? 0 : 0.9,
                ease
              }}
              variants={textVariants}
            >
              {award.body.map((part) =>
                part.strong ? (
                  <strong className="font-black text-[#010101]" key={part.text}>
                    {part.text}
                  </strong>
                ) : (
                  <span key={part.text}>{part.text}</span>
                )
              )}
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto grid w-full max-w-sm grid-cols-2 items-center gap-x-10 gap-y-12 md:max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1.2,
              ease
            }}
            viewport={{ amount: 0.35, once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            {award.imagePaths.map((imagePath, index) => (
              <div
                className="relative mx-auto h-24 w-24 md:h-32 md:w-32"
                key={imagePath}
              >
                <Image
                  alt={`${award.imageAlt} ${index + 1}`}
                  className="object-contain"
                  fill
                  sizes="128px"
                  src={imagePath}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
