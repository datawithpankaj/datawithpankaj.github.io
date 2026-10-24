import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { skillGroups } from "../data/content";

const SPAN: Record<string, string> = {
  "Programming": "sm:col-span-1",
  "Databricks & Streaming": "sm:col-span-2",
  "Cloud & Platforms": "sm:col-span-2",
  "Architecture & Modeling": "sm:col-span-1",
  "Governance & Quality": "sm:col-span-1",
  "GenAI & AI-Assisted Dev": "sm:col-span-2",
  "Tools & DevOps": "sm:col-span-4",
};

const FEATURED = new Set(["GenAI & AI-Assisted Dev"]);

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading number="03" title="Skills" description="Grouped the way I actually use them, not an alphabetical keyword dump." />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4" style={{ gridAutoFlow: "dense" }}>
        {skillGroups.map((group, i) => {
          const featured = FEATURED.has(group.label);
          return (
            <Reveal key={group.label} delay={0.04 * i} className={SPAN[group.label] ?? "sm:col-span-1"}>
              <TiltCard className={`h-full p-6 ${featured ? "glow-accent" : ""}`}>
                <h3 className={`text-sm font-semibold ${featured ? "gradient-text" : "text-[var(--color-text)]"}`}>
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag rounded-full px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]">
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
