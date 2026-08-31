import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { certifications, experience } from "../data/content";

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Nearly six years across a Big Four consultancy, an IT services major, and a product-adjacent healthcare/retail team."
      />

      <div
        ref={ref}
        className={`divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {experience.map((job, i) => (
          <div key={job.company + job.period} className="grid gap-4 py-10 sm:grid-cols-[3rem_1fr] sm:gap-8">
            <span className="font-mono text-sm text-[var(--color-text-dim)]">{String(i + 1).padStart(2, "0")}</span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold text-[var(--color-text)]">{job.role}</h3>
                <span className="font-mono text-sm text-[var(--color-text-dim)]">{job.period}</span>
              </div>
              <p className="mt-1 text-[var(--color-text-muted)]">
                {job.company}
                {job.companyContext ? ` — ${job.companyContext}` : ""}
              </p>

              <ul className="mt-5 space-y-3">
                {job.bullets.map((bullet, bi) => (
                  <li key={bi} className="border-l-2 pl-4 text-[var(--color-text-muted)]" style={{ borderColor: "var(--color-border)" }}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span key={tech} className="tag px-3 py-1 text-xs text-[var(--color-text-muted)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="card mt-10 p-6">
          <p className="eyebrow">Certifications</p>
          <ul className="mt-3 space-y-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-2">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-text)] underline decoration-[var(--color-border-hover)] underline-offset-4 hover:text-[var(--color-accent)]"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <span className="text-[var(--color-text)]">{cert.name}</span>
                )}
                <span className="font-mono text-sm text-[var(--color-text-dim)]">{cert.year}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
