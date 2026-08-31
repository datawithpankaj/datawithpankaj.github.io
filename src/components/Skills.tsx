import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/content";

// Bento sizing, keyed by group label — sized roughly to each group's item
// count so the grid reads as intentional rather than uniform rows.
const SPAN: Record<string, string> = {
  "Programming": "sm:col-span-1",
  "Databricks & Streaming": "sm:col-span-2",
  "Cloud & Platforms": "sm:col-span-1",
  "Architecture & Modeling": "sm:col-span-1",
  "Governance & Quality": "sm:col-span-1",
  "GenAI & AI-Assisted Dev": "sm:col-span-2",
  "Tools & DevOps": "sm:col-span-4",
};

const FEATURED = new Set(["GenAI & AI-Assisted Dev"]);

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Skills" title="What I work with" description="Grouped the way I actually use them, not an alphabetical keyword dump." />

      <div
        ref={ref}
        className={`grid grid-cols-1 gap-4 transition-all duration-700 sm:grid-cols-4 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {skillGroups.map((group) => {
          const featured = FEATURED.has(group.label);
          return (
            <div
              key={group.label}
              className={`card p-6 ${SPAN[group.label] ?? "sm:col-span-1"} ${
                featured ? "border-2" : "card-hover"
              }`}
              style={featured ? { borderColor: "var(--color-accent)" } : undefined}
            >
              <h3 className="font-display text-sm font-semibold" style={{ color: featured ? "var(--color-accent)" : "var(--color-text)" }}>
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
