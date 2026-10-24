import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading number="01" title="About" />

      <div className="grid grid-cols-12 gap-6">
        <Reveal className="col-span-12 sm:col-span-8" delay={0.05}>
          <div className="glass h-full rounded-3xl p-8">
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              I'm a Senior Data Engineer based in {profile.location}, with nearly six years spent
              designing and running Lakehouse platforms, streaming pipelines, and data warehouses
              for regulated industries: healthcare, banking, and telecom.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
              My work sits at the intersection of scale and reliability: pipelines processing
              millions of records a day, streaming systems running at sub-5-second latency, and
              data-quality frameworks that keep regulated data trustworthy. I'm Databricks
              certified, and I bring GenAI-assisted development (RAG, LLMs, AI coding tools) into
              day-to-day engineering work rather than treating it as a separate track.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Outside client work, I'm building out personal Lakehouse and GenAI-on-data projects.
              More on that in the Work section below.
            </p>
          </div>
        </Reveal>

        <div className="col-span-12 flex flex-col gap-6 sm:col-span-4">
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-6">
              <p className="eyebrow">Education</p>
              <p className="mt-3 font-semibold text-[var(--color-text)]">{education.degree}</p>
              <p className="text-sm text-[var(--color-text-muted)]">{education.note}</p>
              <p className="mt-1 text-sm text-[var(--color-text-dim)]">
                {education.school} · {education.period}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex-1">
            <div className="glass h-full rounded-3xl p-6">
              <p className="eyebrow">Based in</p>
              <p className="mt-3 text-[var(--color-text)]">{profile.location}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Open to remote &amp; freelance work</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
