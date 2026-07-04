import type { ProjectItem } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { WorkCard } from "./WorkCard";

type WorkProps = {
  projects: ProjectItem[];
};

export function Work({ projects }: WorkProps) {
  return (
    <section
      id="selected-work"
      className="w-full scroll-mt-32 bg-white px-5 pb-section md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader title="Work" />
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, index) => (
            <WorkCard index={index} key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
