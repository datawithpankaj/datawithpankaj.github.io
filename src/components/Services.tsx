import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

const SPAN: Record<string, string> = {
  "Lakehouse Builds": "sm:col-span-2",
  "GenAI-Assisted Data Workflows": "sm:col-span-3",
};

const FEATURED = new Set(["GenAI-Assisted Data Workflows"]);

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
        className={`grid grid-cols-1 gap-5 transition-all duration-700 sm:grid-cols-3 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {services.map((service) => {
          const featured = FEATURED.has(service.title);
          return (
            <div
              key={service.title}
              className={`rounded-3xl p-6 ${SPAN[service.title] ?? "sm:col-span-1"} ${
                featured ? "gradient-border" : "glass glass-hover"
              }`}
            >
              <h3 className="font-display font-semibold text-[var(--color-text)]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{service.description}</p>
            </div>
          );
        })}
      </div>

      <div className="glass-light mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl p-6 sm:flex-row sm:items-center">
        <p className="font-display text-lg font-semibold text-slate-900">
          Have a data engineering problem to solve? Let's talk about scope, timeline, and fit.
        </p>
        <a
          href="#contact"
          className="gradient-fill flex-none rounded-full px-5 py-2.5 font-mono text-sm font-semibold text-[#05050b]"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
