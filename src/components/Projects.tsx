import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="04"
          title="Projects"
          subtitle="Personal projects, updated as they ship — add yours to src/data/content.ts"
        />

        <div
          ref={ref}
          className={`grid gap-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className={`flex flex-col rounded-lg border p-6 transition-colors ${
                project.comingSoon
                  ? "border-dashed border-[var(--color-border)] bg-transparent"
                  : "border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`rounded p-2 ${project.comingSoon ? "bg-[var(--color-border)]/40" : "bg-[var(--color-accent-soft)]"}`}>
                  <Sparkles size={18} className={project.comingSoon ? "text-[var(--color-text-dim)]" : "text-[var(--color-accent)]"} />
                </div>
                <div className="flex gap-3 text-[var(--color-text-muted)]">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" aria-label="Repository" className="hover:text-[var(--color-accent)]">
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label="Live link" className="hover:text-[var(--color-accent)]">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-4 font-semibold text-[var(--color-text)]">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-text-dim)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
