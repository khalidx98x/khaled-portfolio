"use client";

import Image from "next/image";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { LogoItem } from "@/data/portfolio";

type ClientsProps = {
  logoSets: LogoItem[][];
};

const marqueeDuration = 20;

function LogoMark({ logo }: { logo: LogoItem }) {
  return (
    <li
      aria-hidden="true"
      className="group flex h-[4.4rem] w-48 shrink-0 items-center justify-center sm:h-[4.8rem] sm:w-56"
    >
      {logo.assetPath ? (
        <Image
          alt=""
          className="h-[3.95rem] w-full object-contain transition duration-300 group-hover:brightness-0 sm:h-[4.2rem]"
          draggable={false}
          height={84}
          src={logo.assetPath}
          unoptimized
          width={320}
        />
      ) : (
        <span className="whitespace-nowrap text-center font-libre text-[3.2rem] font-black uppercase leading-none tracking-[-0.03em] text-[#595959] transition-colors duration-300 group-hover:text-[#010101]">
          {logo.display}
          {logo.detail ? (
            <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.08em] sm:text-xs">
              {logo.detail}
            </span>
          ) : null}
        </span>
      )}
    </li>
  );
}

export function Clients({ logoSets }: ClientsProps) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  const logos = useMemo(() => logoSets.flat(), [logoSets]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      controls.stop();
      return;
    }

    controls.start({
      x: "-50%",
      transition: {
        duration: marqueeDuration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  }, [controls, isPaused, prefersReducedMotion]);

  return (
    <section
      aria-labelledby="clients-heading"
      className="relative left-1/2 w-screen -translate-x-1/2 bg-white pb-12 pt-6 font-libre sm:pb-16 sm:pt-8"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <h2
          className="text-center text-base font-medium uppercase tracking-[0.18em] text-[#010101]/70 sm:text-lg"
          id="clients-heading"
        >
          Folks I designed for
        </h2>

        <div
          className="relative mt-7 overflow-hidden sm:mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[100px] bg-gradient-to-r from-white to-transparent sm:w-[250px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[100px] bg-gradient-to-l from-white to-transparent sm:w-[250px]"
          />

          <motion.div
            animate={controls}
            className="flex w-max items-center"
            initial={{ x: "0%" }}
          >
            {[0, 1].map((setIndex) => (
              <ul
                className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
                key={setIndex}
              >
                {logos.map((logo) => (
                  <LogoMark key={`${logo.name}-${setIndex}`} logo={logo} />
                ))}
              </ul>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
