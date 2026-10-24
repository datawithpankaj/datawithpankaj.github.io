import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading number="04" title="Work" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const hasDetail = !!(project.highlights?.length || project.kpis?.length || project.learned?.length);
          return (
            <Reveal key={project.title} delay={0.06 * i} className={hasDetail ? "sm:col-span-2 lg:col-span-3" : ""}>
              <TiltCard className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs text-[var(--color-accent)]">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`status-badge ${
                      project.comingSoon ? "status-queued" : project.link ? "status-live" : project.repo ? "status-repo" : "status-case-study"
                    }`}
                  >
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
                    <span key={tag} className="tag rounded-full px-2.5 py-0.5 text-xs text-[var(--color-text-dim)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {hasDetail && (
                  <details className="group mt-5 border-t border-[var(--color-border)] pt-4">
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
                                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: "var(--color-accent-2)" }} />
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
                                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: "var(--color-accent-2)" }} />
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
                          <dl className="mt-3 divide-y divide-[var(--color-border)]">
                            {project.kpis.map((kpi) => (
                              <div key={kpi.label} className="flex items-baseline justify-between gap-4 py-2">
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
                  <div className="mt-5 flex gap-4 border-t border-[var(--color-border)] pt-4">
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
                  <div className="mt-5 flex items-center gap-1.5 border-t border-[var(--color-border)] pt-4 font-mono text-xs text-[var(--color-text-dim)]">
                    <ArrowUpRight size={13} /> more coming soon
                  </div>
                )}
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
