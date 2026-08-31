import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="05" title="Freelance" description="Available for short-term engagements and consulting." />

      <div
        ref={ref}
        className={`grid grid-cols-1 gap-px transition-all duration-700 sm:grid-cols-3 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        style={{ backgroundColor: "var(--color-border-soft)" }}
      >
        {services.map((service) => (
          <div key={service.title} className="p-6" style={{ backgroundColor: "var(--color-bg)" }}>
            <h3 className="font-semibold text-[var(--color-text)]">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center" style={{ backgroundColor: "var(--color-text)" }}>
        <p className="text-lg font-semibold" style={{ color: "var(--color-bg)" }}>
          Have a data engineering problem to solve? Let's talk about scope, timeline, and fit.
        </p>
        <a href="#contact" className="flex-none px-5 py-2.5 text-sm font-semibold uppercase tracking-wide" style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
