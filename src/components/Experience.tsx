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
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-[var(--color-glass-border)] sm:left-[9px]" />

        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.company + job.period} className="relative pl-8 sm:pl-10">
              <span className="gradient-fill absolute left-0 top-7 h-4 w-4 rounded-full sm:h-5 sm:w-5" />

              <div className="glass glass-hover rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-display text-xl font-bold text-[var(--color-text)]">
                    {job.role} <span className="gradient-text">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-[var(--color-text-dim)]">{job.period}</span>
                </div>

                {job.companyContext && (
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{job.companyContext}</p>
                )}

                <ul className="mt-4 space-y-3">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-[var(--color-text-muted)]">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent-2)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {certifications.length > 0 && (
        <div className="glass mt-10 rounded-3xl p-6">
          <h3 className="font-mono text-sm text-[var(--color-accent-2)]">certifications</h3>
          <ul className="mt-3 space-y-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-2">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-text)] underline decoration-[var(--color-glass-border-hover)] underline-offset-4 hover:text-[var(--color-accent-2)]"
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
