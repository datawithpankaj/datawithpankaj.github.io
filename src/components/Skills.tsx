import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/content";

// Bento sizing, keyed by group label — sized roughly to each group's item
// count so the grid reads as intentional rather than uniform rows. GenAI is
// called out as the featured/differentiating tile.
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
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="02" title="Skills & Tools" subtitle="Grouped the way I actually use them" />

      <div
        ref={ref}
        className={`grid grid-cols-1 gap-5 transition-all duration-700 sm:grid-cols-4 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {skillGroups.map((group) => {
          const featured = FEATURED.has(group.label);
          return (
            <div
              key={group.label}
              className={`glass-hover rounded-3xl p-6 ${SPAN[group.label] ?? "sm:col-span-1"} ${
                featured ? "gradient-border" : "glass"
              }`}
            >
              <h3 className={`font-display text-sm font-semibold ${featured ? "gradient-text" : "text-[var(--color-accent-2)]"}`}>
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="glass rounded-full px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]"
                  >
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
