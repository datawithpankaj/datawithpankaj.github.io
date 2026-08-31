type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-[var(--color-accent)]">{index}</span>
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text)] sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-[var(--color-text-muted)]">{subtitle}</p>}
      </div>
      <div className="ml-4 h-px flex-1 bg-[var(--color-border)]" />
    </div>
  );
}
