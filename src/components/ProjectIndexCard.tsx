import type { ProjectItem } from "@/data/portfolio";

type ProjectIndexCardProps = {
  project: ProjectItem;
};

export function ProjectIndexCard({ project }: ProjectIndexCardProps) {
  return (
    <a
      href={`#${project.id}`}
      className="group block border-t border-border py-6 transition-colors hover:text-accent focus-visible:text-accent"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {project.role}
      </span>
      <div className="mt-3 flex items-start justify-between gap-6">
        <h3 className="max-w-2xl text-2xl font-semibold leading-tight md:text-3xl">
          {project.title}
        </h3>
        <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        {project.brief}
      </p>
    </a>
  );
}
