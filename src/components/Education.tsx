import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading number="02.1" title="Education" />

      <Reveal>
        <TiltCard className="p-6 sm:p-8">
          <div className="grid gap-x-6 gap-y-3 sm:grid-cols-[3rem_1fr]">
            <span className="font-mono text-sm text-[var(--color-accent)]">01</span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-[var(--color-text)]">{education.degree}</h3>
                <span className="font-mono text-sm text-[var(--color-text-dim)]">{education.period}</span>
              </div>
              <p className="mt-1 text-[var(--color-text-muted)]">
                {education.school}, {education.note}
              </p>
            </div>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  );
}
