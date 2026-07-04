"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type HeroProps = {
  headlineLines: string[];
  subtitle: string;
  typewriterWords: string[];
};

const ease = [0.2, 1, 0.3, 1] as const;
const typeDelay = 1450;
const typingSpeed = 58;
const deletingSpeed = 34;
const holdDuration = 1200;

const revealTransition = {
  duration: 0.8,
  ease,
  type: "tween" as const
};

function useTypewriter(words: string[], shouldStart: boolean) {
  const stableWords = useMemo(
    () => (words.length > 0 ? words : ["Web Apps."]),
    [words]
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    const currentWord = stableWords[wordIndex] ?? stableWords[0];
    const isComplete = characterCount === currentWord.length;
    const isEmpty = characterCount === 0;
    const delay = isDeleting
      ? deletingSpeed
      : isComplete
        ? holdDuration
        : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % stableWords.length);
        return;
      }

      setCharacterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, isDeleting, shouldStart, stableWords, wordIndex]);

  return (stableWords[wordIndex] ?? stableWords[0]).slice(0, characterCount);
}

export function Hero({ headlineLines, subtitle, typewriterWords }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [canType, setCanType] = useState(false);
  const shouldType = Boolean(prefersReducedMotion) || canType;
  const typedWord = useTypewriter(typewriterWords, shouldType);
  const firstLine = headlineLines[0] ?? "Senior Product Designer";
  const secondLine = headlineLines[1] ?? "Specializing in";

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = window.setTimeout(() => setCanType(true), typeDelay);
    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-screen flex-col items-center justify-center bg-white px-5 py-32 text-center font-libre text-[#010101] md:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <h1
          className="text-[clamp(3rem,6vw,4.75rem)] font-bold leading-tight tracking-[-0.055em] text-[#010101]"
          id="hero-heading"
        >
          <span className="block overflow-hidden pb-2">
            <motion.span
              animate={{ y: 0 }}
              className="block"
              initial={{ y: prefersReducedMotion ? 0 : "110%" }}
              transition={revealTransition}
            >
              {firstLine}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-3 text-center">
            <motion.span
              animate={{ y: 0 }}
              className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:flex-nowrap"
              initial={{ y: prefersReducedMotion ? 0 : "110%" }}
              transition={{
                ...revealTransition,
                delay: prefersReducedMotion ? 0 : 0.12
              }}
            >
              <span>{secondLine}</span>
              <span className="inline-flex items-center justify-start text-left text-[#010101]">
                <span>
                  {prefersReducedMotion
                    ? typewriterWords[0] ?? "Web Apps."
                    : typedWord}
                </span>
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0, 1] }}
                  aria-hidden="true"
                  className="ml-1 inline-block text-[#010101]"
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity
                  }}
                >
                  |
                </motion.span>
              </span>
            </motion.span>
          </span>
        </h1>

        <span className="mt-8 block overflow-hidden">
          <motion.p
            animate={{ opacity: 0.7, y: 0 }}
            className="mx-auto max-w-4xl text-xl font-normal leading-relaxed text-[#010101] md:text-2xl"
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 32
            }}
            transition={{
              ...revealTransition,
              delay: prefersReducedMotion ? 0 : 0.28
            }}
          >
            {subtitle}
          </motion.p>
        </span>
      </div>
    </section>
  );
}
