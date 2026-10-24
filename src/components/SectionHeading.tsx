import Reveal from "./Reveal";

type SectionHeadingProps = {
  number: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ number, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div className="flex items-center gap-4">
        <span className="glass flex h-11 w-11 flex-none items-center justify-center rounded-full font-mono text-sm text-[var(--color-accent)]">
          {number}
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
      </div>
      {description && <p className="max-w-xs text-sm text-[var(--color-text-muted)] sm:text-right">{description}</p>}
    </Reveal>
  );
}
