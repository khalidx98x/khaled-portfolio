"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { StackCategoryItem, StackToolItem } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

type StackProps = {
  categories: StackCategoryItem[];
};

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function ToolIcon({ tool }: { tool: StackToolItem }) {
  if (tool.iconPath) {
    return (
      <Image
        alt=""
        className="h-7 w-7 object-contain"
        height={28}
        src={tool.iconPath}
        width={28}
      />
    );
  }

  const { name } = tool;
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes("figma")) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
        <circle cx="9" cy="6" fill="#f24e1e" r="3" />
        <circle cx="15" cy="6" fill="#ff7262" r="3" />
        <circle cx="9" cy="12" fill="#a259ff" r="3" />
        <circle cx="15" cy="12" fill="#1abcfe" r="3" />
        <circle cx="9" cy="18" fill="#0acf83" r="3" />
      </svg>
    );
  }

  if (normalizedName.includes("adobe")) {
    return (
      <span className="text-lg font-black leading-none text-[#ff2f2f]">A</span>
    );
  }

  if (normalizedName.includes("framer")) {
    return (
      <span className="text-lg font-black leading-none text-[#010101]">F</span>
    );
  }

  if (normalizedName.includes("wordpress")) {
    return (
      <span className="text-lg font-black leading-none text-[#21759b]">W</span>
    );
  }

  if (normalizedName.includes("claude")) {
    return (
      <span className="text-lg font-black leading-none text-[#d97757]">✷</span>
    );
  }

  if (normalizedName.includes("chatgpt")) {
    return (
      <span className="text-lg font-black leading-none text-[#10a37f]">◎</span>
    );
  }

  if (normalizedName.includes("gemini")) {
    return (
      <span className="text-lg font-black leading-none text-[#4285f4]">✦</span>
    );
  }

  if (normalizedName.includes("jira")) {
    return (
      <span className="text-lg font-black leading-none text-[#2684ff]">▲</span>
    );
  }

  if (normalizedName.includes("google")) {
    return (
      <span className="text-lg font-black leading-none text-[#4285f4]">G</span>
    );
  }

  if (normalizedName.includes("microsoft")) {
    return (
      <span className="text-lg font-black leading-none text-[#2b88d8]">M</span>
    );
  }

  return <span className="text-sm font-black text-[#010101]">{name[0]}</span>;
}

function ToolPill({ tool }: { tool: StackToolItem }) {
  return (
    <motion.li
      className="inline-flex items-center gap-3 rounded-xl border border-white/5 bg-[#121212] px-3 py-2 text-sm font-semibold text-white"
      transition={{ damping: 20, stiffness: 300, type: "spring" }}
      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
    >
      <span className="grid h-8 w-8 place-items-center">
        <ToolIcon tool={tool} />
      </span>
      <span className="font-sans text-sm font-semibold text-white">
        {tool.name}
      </span>
    </motion.li>
  );
}

function StackCategory({
  category,
  index
}: {
  category: StackCategoryItem;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      transition={{
        delay: prefersReducedMotion ? 0 : index * 0.12,
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}
      variants={rowVariants}
      viewport={{ amount: 0.35, once: true }}
      whileInView="visible"
    >
      <div className="mb-6 flex items-center">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#010101]/40">
          {category.title}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-3">
        {category.tools.map((tool) => (
          <ToolPill key={tool.name} tool={tool} />
        ))}
      </ul>
    </motion.div>
  );
}

export function Stack({ categories }: StackProps) {
  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-24 bg-[#ffffff] px-5 pb-section font-sans text-[#010101] md:px-8"
      id="stack"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader title="Stack" />
        <div className="grid gap-12">
          {categories.map((category, index) => (
            <StackCategory
              category={category}
              index={index}
              key={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
