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
      className="relative min-h-[650px] w-full scroll-mt-32 overflow-hidden rounded-[40px] bg-[#010101] bg-cover bg-right-bottom bg-no-repeat font-libre text-white"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
      style={{
        backgroundImage: `url("${project.media.src}")`,
        backgroundPosition: "right bottom",
        backgroundSize: "cover"
      }}
      transition={{
        delay: prefersReducedMotion ? 0 : index * 0.08,
        duration: prefersReducedMotion ? 0 : 0.9,
        ease,
        type: "tween"
      }}
      viewport={{ amount: 0.22, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent"
      />

      <div className="relative z-10 flex min-h-[650px] w-full max-w-[39rem] flex-col justify-between p-16 lg:w-[62%]">
        <div>
          <h3 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tighter text-white lg:text-5xl">
            {project.title}
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {project.brief}
          </p>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-8">
            <div>
              <dt className="mb-2 text-[10px] font-medium uppercase tracking-widest text-white/40">
                Role
              </dt>
              <dd className="text-base font-normal text-white/88">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-[10px] font-medium uppercase tracking-widest text-white/40">
                Period
              </dt>
              <dd className="text-base font-normal text-white/88">
                {project.period}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-12">
          <ul className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <li
                className={
                  tag.highlight
                    ? "rounded-xl bg-[#FFD700] px-4 py-2 text-sm font-bold text-black sm:whitespace-nowrap"
                    : "rounded-xl border border-white/5 bg-white/10 px-4 py-2 text-sm text-white sm:whitespace-nowrap"
                }
                key={tag.label}
              >
                {tag.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
