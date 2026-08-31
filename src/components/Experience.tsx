import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { certifications, experience } from "../data/content";

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03" title="Experience" />

      <div
        ref={ref}
        className={`relative transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-[var(--color-border)] sm:left-[9px]" />

        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.company + job.period} className="relative pl-8 sm:pl-10">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] sm:h-5 sm:w-5" />

              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                  {job.role} <span className="text-[var(--color-accent)]">@ {job.company}</span>
                </h3>
                <span className="font-mono text-sm text-[var(--color-text-dim)]">{job.period}</span>
              </div>

              {job.companyContext && (
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{job.companyContext}</p>
              )}

              <ul className="mt-4 space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-[var(--color-text-muted)]">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--color-accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {certifications.length > 0 && (
        <div className="mt-16 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h3 className="font-mono text-sm text-[var(--color-accent)]">certifications</h3>
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
