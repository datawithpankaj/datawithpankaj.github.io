import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="04" title="Work" description="Personal projects, added as they ship — edit src/data/content.ts to add yours." />

      <div
        ref={ref}
        className={`grid gap-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {projects.map((project, i) => (
          <article key={project.title} className="flex flex-col border p-6" style={{ borderColor: project.comingSoon ? "var(--color-border-soft)" : "var(--color-border)", borderStyle: project.comingSoon ? "dashed" : "solid" }}>
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-xs" style={{ color: "var(--color-accent)" }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="eyebrow">{project.comingSoon ? "Queued" : project.link ? "Live" : "Repo"}</span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-[var(--color-text)]">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag px-2 py-0.5 text-xs text-[var(--color-text-dim)]">
                  {tag}
                </span>
              ))}
            </div>

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
        ))}
      </div>
    </section>
  );
}
