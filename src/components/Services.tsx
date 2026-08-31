import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

const SPAN: Record<string, string> = {
  "Lakehouse Builds": "sm:col-span-2",
  "GenAI-Assisted Data Workflows": "sm:col-span-3",
};

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Freelance"
        title="Contract & freelance work"
        description="Available for short-term engagements and consulting."
      />

      <div
        ref={ref}
        className={`grid grid-cols-1 gap-4 transition-all duration-700 sm:grid-cols-3 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {services.map((service) => (
          <div key={service.title} className={`card card-hover p-6 ${SPAN[service.title] ?? "sm:col-span-1"}`}>
            <h3 className="font-display font-semibold text-[var(--color-text)]">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl bg-[var(--color-text)] p-6 sm:flex-row sm:items-center">
        <p className="font-display text-lg font-semibold" style={{ color: "var(--color-bg)" }}>
          Have a data engineering problem to solve? Let's talk about scope, timeline, and fit.
        </p>
        <a href="#contact" className="inline-flex flex-none items-center gap-2 rounded-full bg-[var(--color-bg)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)]">
          Get in touch
        </a>
      </div>
    </section>
  );
}
