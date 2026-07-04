import type { RecognitionItemData } from "@/data/portfolio";
import { MediaFrame } from "./MediaFrame";

type RecognitionItemProps = {
  item: RecognitionItemData;
};

export function RecognitionItem({ item }: RecognitionItemProps) {
  return (
    <article className="grid gap-5 border-t border-border pt-6 md:grid-cols-12">
      <div className="md:col-span-3">
        <MediaFrame label={item.badgeLabel} className="aspect-square min-h-0" />
      </div>
      <div className="md:col-span-8 md:col-start-5">
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="mt-3 leading-7 text-muted">{item.detail}</p>
      </div>
    </article>
  );
}
