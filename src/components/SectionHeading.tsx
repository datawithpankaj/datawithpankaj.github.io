type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display mt-2 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">{title}</h2>
      </div>
      {description && (
        <p className="max-w-xs text-sm text-[var(--color-text-muted)] sm:text-right">{description}</p>
      )}
    </div>
  );
}
