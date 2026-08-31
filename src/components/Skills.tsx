import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/content";

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="02" title="Skills & Tools" subtitle="Grouped the way I actually use them" />

        <div
          ref={ref}
          className={`grid gap-5 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition-colors hover:border-[var(--color-border-hover)]"
            >
              <h3 className="font-mono text-sm font-semibold text-[var(--color-accent)]">{group.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
