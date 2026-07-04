import type { ProjectItem } from "@/data/portfolio";
import { MediaFrame } from "./MediaFrame";
import { SectionHeading } from "./SectionHeading";

type CaseStudyChapterProps = {
  project: ProjectItem;
};

export function CaseStudyChapter({ project }: CaseStudyChapterProps) {
  return (
    <section id={project.id} className="scroll-mt-24 py-section">
      <SectionHeading
        label={project.role}
        title={project.title}
        description={project.brief}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-5">
          <MediaFrame label={`${project.title} media slot`} />
        </div>
      </div>
    </section>
  );
}
