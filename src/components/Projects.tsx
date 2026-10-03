import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="04" title="Work" />

      <div
        ref={ref}
        className={`grid gap-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {projects.map((project, i) => {
          const hasDetail = !!(project.highlights?.length || project.kpis?.length || project.learned?.length);
          return (
            <article
              key={project.title}
              className={`flex flex-col border p-6 ${hasDetail ? "sm:col-span-2 lg:col-span-3" : ""}`}
              style={{
                borderColor: project.comingSoon ? "var(--color-border-soft)" : "var(--color-border)",
                borderStyle: project.comingSoon ? "dashed" : "solid",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs" style={{ color: "var(--color-accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow">
                  {project.comingSoon ? "Queued" : project.link ? "Live" : project.repo ? "Repo" : "Case Study"}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-[var(--color-text)]">{project.title}</h3>
              <p className="mt-2 max-w-3xl text-sm text-[var(--color-text-muted)]">{project.description}</p>

              {project.status && (
                <p className="mt-2 max-w-3xl font-mono text-xs" style={{ color: "var(--color-accent)" }}>
                  {project.status}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag px-2 py-0.5 text-xs text-[var(--color-text-dim)]">
                    {tag}
                  </span>
                ))}
              </div>

              {hasDetail && (
                <details className="group mt-5 border-t pt-4" style={{ borderColor: "var(--color-border-soft)" }}>
                  <summary className="flex cursor-pointer list-none items-center gap-1.5 font-mono text-xs text-[var(--color-text)] [&::-webkit-details-marker]:hidden">
                    <span className="inline-block w-3 text-center group-open:hidden">+</span>
                    <span className="hidden w-3 text-center group-open:inline">&minus;</span>
                    <span className="group-open:hidden">Case study details</span>
                    <span className="hidden group-open:inline">Collapse</span>
                  </summary>

                  <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto]">
                    <div className="space-y-6">
                      {!!project.highlights?.length && (
                        <div>
                          <p className="eyebrow">Engineering highlights</p>
                          <ul className="mt-3 space-y-2.5">
                            {project.highlights.map((h, hi) => (
                              <li key={hi} className="flex gap-3 text-sm text-[var(--color-text-muted)]">
                                <span className="mt-2 h-1 w-1 flex-none" style={{ backgroundColor: "var(--color-text-dim)" }} />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {!!project.learned?.length && (
                        <div>
                          <p className="eyebrow">What I learned</p>
                          <ul className="mt-3 space-y-2.5">
                            {project.learned.map((l, li) => (
                              <li key={li} className="flex gap-3 text-sm text-[var(--color-text-muted)]">
                                <span className="mt-2 h-1 w-1 flex-none" style={{ backgroundColor: "var(--color-text-dim)" }} />
                                <span>{l}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {!!project.kpis?.length && (
                      <div className="lg:w-72">
                        <p className="eyebrow">By the numbers</p>
                        <dl className="mt-3 divide-y" style={{ borderColor: "var(--color-border-soft)" }}>
                          {project.kpis.map((kpi) => (
                            <div key={kpi.label} className="flex items-baseline justify-between gap-4 border-b py-2" style={{ borderColor: "var(--color-border-soft)" }}>
                              <dt className="text-xs text-[var(--color-text-dim)]">{kpi.label}</dt>
                              <dd className="flex-none font-mono text-sm font-semibold text-[var(--color-text)]">{kpi.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {(project.repo || project.link) && (
                <div className="mt-5 flex gap-4 border-t pt-4" style={{ borderColor: "var(--color-border-soft)" }}>
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="link-underline flex items-center gap-1.5 text-xs text-[var(--color-text)]">
                      <GithubIcon size={13} /> GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="link-underline flex items-center gap-1.5 text-xs text-[var(--color-text)]">
                      <ExternalLink size={13} /> View live
                    </a>
                  )}
                </div>
              )}

              {project.comingSoon && (
                <div className="mt-5 flex items-center gap-1.5 border-t pt-4 font-mono text-xs text-[var(--color-text-dim)]" style={{ borderColor: "var(--color-border-soft)" }}>
                  <ArrowUpRight size={13} /> more coming soon
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
