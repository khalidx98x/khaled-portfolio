import type { MetricItem } from "@/data/portfolio";

type MetricProps = {
  metric: MetricItem;
};

export function Metric({ metric }: MetricProps) {
  return (
    <div className="border-t border-border pt-4">
      <dt className="text-3xl font-semibold leading-none md:text-4xl">
        {metric.value}
      </dt>
      <dd className="mt-2 text-sm leading-5 text-muted">{metric.label}</dd>
    </div>
  );
}
