"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ContactCapabilityItem } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

type ContactProps = {
  email?: string;
  portraitPath?: string;
  introTitle?: string;
  intro?: string[];
  location?: string;
  capabilities?: ContactCapabilityItem[];
};

const ease = [0.22, 1, 0.36, 1] as const;

const linkedInHref = "https://www.linkedin.com/in/khaled-a-4074a5184/";
const resumeHref = "/resume.pdf";
const secondaryLinks = [
  {
    ariaLabel: "Visit Khaled's LinkedIn Profile",
    href: linkedInHref,
    label: "LinkedIn",
    rel: "noopener noreferrer",
    target: "_blank"
  },
  {
    ariaLabel: "Download Khaled Abdalqader's resume",
    download: true,
    href: resumeHref,
    label: "Resume"
  }
];

const introContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const introItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease
    },
    y: 0
  }
};

export function Contact({
  email = "khalidalhajms@gmail.com",
  portraitPath,
  introTitle = "Sup!!",
  intro = [],
  location = "Based in Istanbul · Open to opportunities",
  capabilities = []
}: ContactProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer
      className="scroll-mt-24 bg-white px-5 pb-12 font-sans text-[#010101] md:px-8"
      id="contact"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader title="Contact" />
        <div className="grid gap-14 py-20 md:grid-cols-12 md:gap-20 md:py-24">
          <motion.aside
            className="md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1.1,
              ease
            }}
            viewport={{ amount: 0.35, once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative aspect-[4/5] max-h-[36rem] overflow-hidden rounded-[32px] bg-[#e9e8e6]">
              {portraitPath ? (
                <Image
                  alt="Portrait of Khaled Abdalqader"
                  className="object-cover object-[50%_62%]"
                  fill
                  priority={false}
                  sizes="(min-width: 768px) 38vw, 100vw"
                  src={portraitPath}
                />
              ) : (
                <div className="flex h-full items-center justify-center text-base font-black uppercase text-white">
                  Portrait
                </div>
              )}
            </div>
            <p className="mt-6 text-sm text-[#010101] opacity-40">{location}</p>
          </motion.aside>

          <motion.div
            className="text-center md:col-span-7 md:text-left"
            initial="hidden"
            variants={prefersReducedMotion ? undefined : introContainer}
            viewport={{ amount: 0.45, once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="text-5xl font-bold leading-[0.95] tracking-tighter text-[#010101] md:text-6xl"
              variants={prefersReducedMotion ? undefined : introItem}
            >
              {introTitle}
            </motion.h2>
            <div className="mt-9 grid gap-5 text-xl leading-8 text-[#010101]/72">
              {intro.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  variants={prefersReducedMotion ? undefined : introItem}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.a
              className="mt-8 inline-flex border-b border-black/10 pb-1 text-2xl font-medium text-[#010101] transition-colors duration-500 hover:border-[#010101] focus-visible:border-[#010101]"
              href={`mailto:${email}`}
              variants={prefersReducedMotion ? undefined : introItem}
            >
              {email}
            </motion.a>
            <motion.div
              className="mt-16 border-t border-black/10 pt-10"
              variants={prefersReducedMotion ? undefined : introItem}
            >
              <dl className="grid gap-x-16 gap-y-10 md:grid-cols-2">
                {capabilities.map((capability) => (
                  <div key={capability.title}>
                    <dt className="text-xs font-black uppercase tracking-[0.22em] text-[#010101]">
                      {capability.title}
                    </dt>
                    <dd className="mt-4 text-base leading-7 text-[#010101]/50">
                      {capability.items}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-8 flex w-full flex-col gap-8 border-t border-black/5 pt-10 md:mt-40 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold text-[#010101]">Khaled Abdalqader</p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs text-[#010101] opacity-40">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#28c76f]"
              />
              Available for new projects
            </p>
          </div>
          <nav aria-label="Secondary footer navigation">
            <ul className="flex flex-wrap gap-8">
              {secondaryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    aria-label={link.ariaLabel}
                    className="text-xs font-bold uppercase tracking-widest text-[#010101] transition-opacity duration-300 hover:opacity-50 focus-visible:opacity-50"
                    download={link.download}
                    href={link.href}
                    rel={link.rel}
                    target={link.target}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
