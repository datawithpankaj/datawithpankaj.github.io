import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

// Cycled cover-panel gradients for real project cards, in the spirit of a
// colorful mockup header — swap for an actual screenshot once one exists.
const COVERS = [
  "linear-gradient(135deg, #fde68a, #fca5a5)",
  "linear-gradient(135deg, #a7f3d0, #93c5fd)",
  "linear-gradient(135deg, #ddd6fe, #fbcfe8)",
];

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="Personal projects, added as they ship — edit src/data/content.ts to add yours."
      />

      <div
        ref={ref}
        className={`grid gap-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {projects.map((project, i) => (
          <article key={project.title} className={`card overflow-hidden ${project.comingSoon ? "border-dashed" : "card-hover"}`}>
            <div
              className="flex h-36 items-center justify-center"
              style={{
                background: project.comingSoon ? "repeating-linear-gradient(135deg, #f4f4f5, #f4f4f5 10px, #ffffff 10px, #ffffff 20px)" : COVERS[i % COVERS.length],
              }}
            >
              <span className="pill flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-text)]">
                <Sparkles size={18} />
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display font-semibold text-[var(--color-text)]">{project.title}</h3>
                {project.comingSoon ? (
                  <span className="tag flex-none px-2.5 py-0.5 text-xs text-[var(--color-text-dim)]">Soon</span>
                ) : (
                  <span className="tag flex-none px-2.5 py-0.5 text-xs" style={{ color: "var(--color-accent)", borderColor: "var(--color-accent)" }}>
                    {project.link ? "Live" : "Repo"}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag px-2.5 py-0.5 font-mono text-xs text-[var(--color-text-dim)]">
                    {tag}
                  </span>
                ))}
              </div>

              {(project.repo || project.link) && (
                <div className="mt-5 flex gap-3">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="pill inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[var(--color-text)]">
                      <GithubIcon size={14} /> GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="pill inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[var(--color-text)]">
                      <ExternalLink size={14} /> View live
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
