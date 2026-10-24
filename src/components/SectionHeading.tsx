import type { CSSProperties } from "react";

type SectionHeadingProps = {
  number: string;
  title: string;
  description?: string;
};

// Cycles the four color-blocking accents across sections by their leading
// integer, so "02" and "02.1" (Education, a sub-section of Experience)
// share a color.
const CYCLE = ["var(--color-red)", "var(--color-blue)", "var(--color-yellow)", "var(--color-green)"];

function numeralColor(number: string) {
  const n = parseInt(number, 10);
  if (Number.isNaN(n) || n < 1) return CYCLE[0];
  return CYCLE[(n - 1) % CYCLE.length];
}

export default function SectionHeading({ number, title, description }: SectionHeadingProps) {
  return (
    <div className="rule mb-12 grid grid-cols-12 gap-4 pt-4">
      <span
        className="numeral col-span-4 text-6xl sm:col-span-2 sm:text-7xl"
        style={{ WebkitTextStrokeColor: numeralColor(number), textStrokeColor: numeralColor(number) } as CSSProperties}
      >
        {number}
      </span>
      <div className="col-span-8 sm:col-span-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-md text-[var(--color-text-muted)] sm:text-right">{description}</p>}
      </div>
    </div>
  );
}
