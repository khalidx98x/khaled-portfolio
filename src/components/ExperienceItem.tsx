import type { ExperienceItemData } from "@/data/portfolio";

type ExperienceItemProps = {
  item: ExperienceItemData;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="grid gap-3 border-t border-border py-6 md:grid-cols-12">
      <h3 className="text-xl font-semibold md:col-span-4">{item.role}</h3>
      <p className="text-muted md:col-span-3">{item.organization}</p>
      <p className="leading-7 text-muted md:col-span-5">{item.detail}</p>
    </article>
  );
}
