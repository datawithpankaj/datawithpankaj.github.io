import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/content";

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="03" title="Skills" description="Grouped the way I actually use them, not an alphabetical keyword dump." />

      <div ref={ref} className={`rule border-t transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
        {skillGroups.map((group) => (
          <div key={group.label} className="rule grid grid-cols-12 gap-x-6 gap-y-3 border-b py-6">
            <h3 className="col-span-12 font-mono text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] sm:col-span-3">
              {group.label}
            </h3>
            <div className="col-span-12 flex flex-wrap gap-2 sm:col-span-9">
              {group.items.map((item) => (
                <span key={item} className="tag px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
