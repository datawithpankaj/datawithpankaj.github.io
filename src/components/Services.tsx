import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="05"
        title="Freelance & Contract Work"
        subtitle="Available for short-term engagements and consulting"
      />

      <div
        ref={ref}
        className={`grid gap-5 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors hover:border-[var(--color-accent)]"
          >
            <h3 className="font-semibold text-[var(--color-text)]">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] p-6 sm:flex-row sm:items-center">
        <p className="text-[var(--color-text)]">
          Have a data engineering problem to solve? Let's talk about scope, timeline, and fit.
        </p>
        <a
          href="#contact"
          className="flex-none rounded bg-[var(--color-accent)] px-5 py-2.5 font-mono text-sm font-semibold text-[#0a0e14]"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
