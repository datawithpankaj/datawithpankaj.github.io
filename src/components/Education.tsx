import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/content";

export default function Education() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="02.1" title="Education" />

      <div
        ref={ref}
        className={`rule grid grid-cols-12 gap-x-6 gap-y-3 border-t py-10 transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span className="col-span-4 font-mono text-sm text-[var(--color-text-dim)] sm:col-span-2">01</span>
        <div className="col-span-12 sm:col-span-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl font-bold text-[var(--color-text)]">{education.degree}</h3>
            <span className="font-mono text-sm text-[var(--color-text-dim)]">{education.period}</span>
          </div>
          <p className="mt-1 text-[var(--color-text-muted)]">
            {education.school}, {education.note}
          </p>
        </div>
      </div>
    </section>
  );
}
