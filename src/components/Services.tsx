import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading number="05" title="Freelance" description="Available for short-term engagements and consulting." />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.05 * i}>
            <TiltCard className="h-full p-6">
              <h3 className="font-semibold text-[var(--color-text)]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{service.description}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-6">
        <div className="relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-3xl p-8 sm:flex-row sm:items-center" style={{ backgroundImage: "linear-gradient(110deg, var(--color-accent), var(--color-accent-2))" }}>
          <p className="text-lg font-semibold text-[#0a0a0f]">Have a data engineering problem to solve? Let's talk about scope, timeline, and fit.</p>
          <a href="#contact" className="flex-none rounded-full bg-[#0a0a0f] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white">
            Get in touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}
