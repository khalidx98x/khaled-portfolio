import { SectionLabel } from "./SectionLabel";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-3">
        <SectionLabel>{label}</SectionLabel>
      </div>
      <div className="max-w-3xl md:col-span-8 md:col-start-5">
        <h2 className="text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 text-base leading-7 text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
