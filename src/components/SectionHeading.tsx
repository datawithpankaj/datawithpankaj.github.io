type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="glass flex h-10 w-10 flex-none items-center justify-center rounded-full font-mono text-sm font-semibold">
        <span className="gradient-text">{index}</span>
      </span>
      <div>
        <h2 className="font-display text-2xl font-bold text-[var(--color-text)] sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-[var(--color-text-muted)]">{subtitle}</p>}
      </div>
      <div className="ml-2 h-px flex-1 bg-[var(--color-glass-border)]" />
    </div>
  );
}
