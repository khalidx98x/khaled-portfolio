"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll
} from "framer-motion";
import type { NavItem } from "@/data/portfolio";

type HeaderProps = {
  name: string;
  nav: NavItem[];
  resumeHref?: string;
  linkedInHref?: string;
};

const easing = [0.2, 1, 0.3, 1] as const;
const scrollOffset = 132;
const defaultLinkedInHref = "https://www.linkedin.com/in/khaled-a-4074a5184/";
const defaultResumeHref = "/resume.pdf";

function createCubicBezierEasing(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const sampleCurveX = (time: number) =>
    3 * x1 * (1 - time) * (1 - time) * time +
    3 * x2 * (1 - time) * time * time +
    time * time * time;
  const sampleCurveY = (time: number) =>
    3 * y1 * (1 - time) * (1 - time) * time +
    3 * y2 * (1 - time) * time * time +
    time * time * time;
  const sampleCurveDerivativeX = (time: number) =>
    3 * x1 * (1 - time) * (1 - time) +
    6 * (x2 - x1) * (1 - time) * time +
    3 * (1 - x2) * time * time;

  return (progress: number) => {
    if (progress <= 0 || progress >= 1) {
      return progress;
    }

    let time = progress;

    for (let index = 0; index < 6; index += 1) {
      const x = sampleCurveX(time) - progress;
      const derivative = sampleCurveDerivativeX(time);

      if (Math.abs(x) < 0.00001 || derivative === 0) {
        break;
      }

      time = Math.min(1, Math.max(0, time - x / derivative));
    }

    return sampleCurveY(time);
  };
}

const scrollEaseOut = createCubicBezierEasing(0.19, 1, 0.22, 1);

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function Header({
  name,
  nav,
  resumeHref = defaultResumeHref,
  linkedInHref = defaultLinkedInHref
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(nav[0]?.href ?? "");
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const current = sections.reduce<HTMLElement | null>((active, section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= scrollOffset + 32) {
          return section;
        }

        return active;
      }, null);

      setActiveHref(current ? `#${current.id}` : "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [nav]);

  const scrollToAnchor = (href: string) => {
    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    const startY = window.scrollY;
    const targetY =
      target.getBoundingClientRect().top + window.scrollY - scrollOffset;
    const distance = targetY - startY;
    const duration = prefersReducedMotion ? 0 : 850;
    const startTime = window.performance.now();

    setActiveHref(href);
    setIsScrolled(targetY > 50);

    if (duration === 0) {
      window.scrollTo(0, targetY);
      window.history.pushState(null, "", href);
      return;
    }

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startY + distance * scrollEaseOut(progress));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.history.pushState(null, "", href);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    setIsOpen(false);
    scrollToAnchor(href);
  };

  const transition = {
    duration: prefersReducedMotion ? 0 : 0.6,
    ease: easing,
    type: "tween" as const
  };

  return (
    <header className="fixed left-0 top-0 z-[1000] flex w-full justify-center pt-6 lg:pt-8">
      <motion.nav
        aria-label="Primary navigation"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255,255,255,0.7)"
            : "rgba(255,255,255,0)",
          borderColor: isScrolled
            ? "rgba(0,0,0,0.1)"
            : "rgba(0,0,0,0)",
          borderRadius: isScrolled ? 999 : 0,
          boxShadow: isScrolled
            ? "0 10px 30px -10px rgba(0,0,0,0.05)"
            : "0 10px 30px -10px rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
          maxWidth: isScrolled ? "92vw" : "1300px",
          minWidth: isScrolled ? "min(850px, 92vw)" : "0px",
          paddingBottom: isScrolled ? 0 : 32,
          paddingLeft: isScrolled ? 32 : 40,
          paddingRight: isScrolled ? 32 : 40,
          paddingTop: isScrolled ? 0 : 32,
          width: isScrolled ? "fit-content" : "92vw"
        }}
        className="box-border flex h-auto min-h-14 items-center justify-between border font-libre text-[#010101] will-change-[width,padding,border-radius,background-color,backdrop-filter] lg:grid lg:grid-cols-[1fr_auto_1fr]"
        initial={false}
        transition={transition}
      >
        <a
          aria-label="Khaled Abdalqader homepage"
          className="min-w-0 truncate text-sm tracking-tighter focus-visible:rounded-full"
          href="#top"
        >
          <span className="font-bold">{name}</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                aria-current={activeHref === item.href ? "page" : undefined}
                aria-label={`Navigate to ${item.label}`}
                className={`rounded-full px-1 py-1 text-sm font-medium transition-opacity duration-[600ms] ease-[cubic-bezier(0.2,1,0.3,1)] hover:opacity-100 focus-visible:opacity-100 ${
                  activeHref === item.href
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center justify-end gap-2">
          <a
            aria-label="Download Khaled Abdalqader's resume"
            className="hidden rounded-full border border-[#010101] px-4 py-2 text-sm font-semibold transition-all duration-[600ms] ease-[cubic-bezier(0.2,1,0.3,1)] hover:bg-[#010101] hover:text-white focus-visible:bg-[#010101] focus-visible:text-white sm:inline-flex"
            download
            href={resumeHref}
          >
            Resume
          </a>
          <a
            aria-label="Visit Khaled's LinkedIn Profile"
            className="hidden h-9 w-9 items-center justify-center rounded-full transition-all duration-[600ms] ease-[cubic-bezier(0.2,1,0.3,1)] hover:opacity-60 focus-visible:opacity-60 sm:inline-flex"
            href={linkedInHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 items-center rounded-full border border-[#010101] px-4 text-sm font-semibold transition-all duration-[600ms] ease-[cubic-bezier(0.2,1,0.3,1)] hover:bg-[#010101] hover:text-white focus-visible:bg-[#010101] focus-visible:text-white lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            Menu
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-[calc(100%+0.5rem)] w-[90vw] rounded-[28px] border border-black/[0.08] bg-white/80 p-4 font-sans text-[#010101] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] backdrop-blur-xl lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            transition={transition}
          >
            <ul className="grid gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    aria-current={activeHref === item.href ? "page" : undefined}
                    aria-label={`Navigate to ${item.label}`}
                    className={`block rounded-full px-4 py-3 text-sm font-semibold transition-all duration-[600ms] ease-[cubic-bezier(0.2,1,0.3,1)] hover:bg-black/[0.04] hover:opacity-100 focus-visible:bg-black/[0.04] focus-visible:opacity-100 ${
                      activeHref === item.href
                        ? "bg-black/[0.04] opacity-100"
                        : "opacity-70"
                    }`}
                    href={item.href}
                    onClick={(event) => handleAnchorClick(event, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
