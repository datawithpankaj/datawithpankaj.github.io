import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { certifications, experience } from "../data/content";

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        number="02"
        title="Experience"
        description="Nearly six years across a Big Four consultancy, an IT services major, and a product-adjacent healthcare/retail team."
      />

      <div ref={ref} className={`rule border-t transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
        {experience.map((job, i) => (
          <div key={job.company + job.period} className="rule grid grid-cols-12 gap-x-6 gap-y-3 border-b py-10">
            <span className="col-span-4 font-mono text-sm text-[var(--color-text-dim)] sm:col-span-2">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="col-span-12 sm:col-span-10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-[var(--color-text)]">{job.role}</h3>
                <span className="font-mono text-sm text-[var(--color-text-dim)]">{job.period}</span>
              </div>
              <p className="mt-1 text-[var(--color-text-muted)]">
                {job.company}
                {job.companyContext ? ` · ${job.companyContext}` : ""}
              </p>

              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-[var(--color-text-muted)]">
                    <span className="mt-2.5 h-1 w-1 flex-none" style={{ backgroundColor: "var(--color-text-dim)" }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span key={tech} className="tag px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="rule mt-8 border-t pt-6">
          <p className="eyebrow">Certifications</p>
          <ul className="mt-3 space-y-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-2">
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noreferrer" className="link-underline text-[var(--color-text)]">
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
