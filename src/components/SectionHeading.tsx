type SectionHeadingProps = {
  number: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ number, title, description }: SectionHeadingProps) {
  return (
    <div className="rule mb-12 grid grid-cols-12 gap-4 pt-4">
      <span className="numeral col-span-4 text-6xl sm:col-span-2 sm:text-7xl">{number}</span>
      <div className="col-span-8 sm:col-span-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-md text-[var(--color-text-muted)]">{description}</p>}
      </div>
    </div>
  );
}
