import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/content";

export default function Education() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Education" title="Where I studied" />

      <div
        ref={ref}
        className={`border-t border-[var(--color-border)] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="grid gap-4 py-10 sm:grid-cols-[3rem_1fr] sm:gap-8">
          <span className="font-mono text-sm text-[var(--color-text-dim)]">01</span>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-bold text-[var(--color-text)]">{education.degree}</h3>
              <span className="font-mono text-sm text-[var(--color-text-dim)]">{education.period}</span>
            </div>
            <p className="mt-1 text-[var(--color-text-muted)]">
              {education.school} — {education.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
