import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { education, profile } from "../data/content";

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="About" title="A bit more context" />

      <div
        ref={ref}
        className={`grid gap-6 transition-all duration-700 md:grid-cols-5 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="card p-8 md:col-span-3">
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
            I'm a Senior Data Engineer based in {profile.location}, with nearly six years spent
            designing and running Lakehouse platforms, streaming pipelines, and data warehouses
            for regulated industries — healthcare, banking, and telecom.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
            My work sits at the intersection of scale and reliability: pipelines processing
            millions of records a day, streaming systems running at sub-5-second latency, and
            data-quality frameworks that keep regulated data trustworthy. I'm Databricks
            certified, and I bring GenAI-assisted development (RAG, LLMs, AI coding tools) into
            day-to-day engineering work rather than treating it as a separate track.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Outside client work, I'm building out personal Lakehouse and GenAI-on-data projects —
            more on that in the Work section below.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:col-span-2">
          <div className="card card-hover p-6">
            <p className="eyebrow">Education</p>
            <p className="mt-3 font-semibold text-[var(--color-text)]">{education.degree}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{education.note}</p>
            <p className="mt-2 text-sm text-[var(--color-text-dim)]">
              {education.school} · {education.period}
            </p>
          </div>

          <div className="card card-hover flex-1 p-6">
            <p className="eyebrow">Based in</p>
            <p className="mt-3 text-[var(--color-text)]">{profile.location}</p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">Open to remote &amp; freelance work</p>
          </div>
        </div>
      </div>
    </section>
  );
}
