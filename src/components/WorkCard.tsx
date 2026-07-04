"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProjectItem } from "@/data/portfolio";

type WorkCardProps = {
  project: ProjectItem;
  index: number;
};

const ease = [0.2, 1, 0.3, 1] as const;

export function WorkCard({ project, index }: WorkCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      id={project.id}
      className="relative flex w-full scroll-mt-32 flex-col overflow-hidden rounded-[32px] bg-[#010101] font-libre text-white lg:min-h-[650px] lg:rounded-[40px]"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
      transition={{
        delay: prefersReducedMotion ? 0 : index * 0.08,
        duration: prefersReducedMotion ? 0 : 0.9,
        ease,
        type: "tween"
      }}
      viewport={{ amount: 0.1, margin: "-100px", once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-cover bg-right-bottom bg-no-repeat lg:block"
        style={{
          backgroundImage: `url("${project.media.src}")`,
          backgroundPosition: "right bottom",
          backgroundSize: "cover"
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-black/90 via-black/45 to-transparent lg:block"
      />

      <div className="relative z-10 flex w-full flex-col justify-between p-8 sm:p-10 lg:min-h-[650px] lg:w-[62%] lg:max-w-[39rem] lg:p-16">
        <div>
          <h3 className="max-w-3xl text-2xl font-bold leading-[1.1] tracking-tighter text-white sm:text-3xl lg:text-5xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 lg:mt-6 lg:text-lg">
            {project.brief}
          </p>

          <dl className="mt-8 grid max-w-xl grid-cols-2 gap-6 lg:mt-10 lg:gap-8">
            <div>
              <dt className="mb-2 text-[8px] font-medium uppercase tracking-widest text-white/40 lg:text-[10px]">
                Role
              </dt>
              <dd className="text-sm font-normal text-white/88 lg:text-base">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-[8px] font-medium uppercase tracking-widest text-white/40 lg:text-[10px]">
                Period
              </dt>
              <dd className="text-sm font-normal text-white/88 lg:text-base">
                {project.period}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 lg:mt-12">
          <ul className="flex flex-wrap gap-2.5 lg:gap-3">
            {project.tags.map((tag) => (
              <li
                className={
                  tag.highlight
                    ? "rounded-xl bg-[#FFD700] px-3 py-1.5 text-[11px] font-bold text-black sm:whitespace-nowrap lg:px-4 lg:py-2 lg:text-sm"
                    : "rounded-xl border border-white/5 bg-white/10 px-3 py-1.5 text-[11px] text-white sm:whitespace-nowrap lg:px-4 lg:py-2 lg:text-sm"
                }
                key={tag.label}
              >
                {tag.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-label={project.media.alt}
        className="relative h-[300px] w-full bg-cover bg-right-bottom bg-no-repeat lg:hidden"
        role="img"
        style={{
          backgroundImage: `url("${project.media.src}")`,
          backgroundPosition: "right bottom",
          backgroundSize: "cover"
        }}
      />
    </motion.article>
  );
}
