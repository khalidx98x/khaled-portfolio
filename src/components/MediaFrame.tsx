type MediaFrameProps = {
  label: string;
  className?: string;
};

export function MediaFrame({ label, className = "" }: MediaFrameProps) {
  return (
    <div
      className={`flex aspect-[16/10] min-h-56 items-center justify-center border border-border bg-surface p-6 text-center text-sm font-medium uppercase tracking-[0.16em] text-muted shadow-soft ${className}`}
    >
      {label}
    </div>
  );
}
