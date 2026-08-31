import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="animate-fade-up">
          <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-[var(--color-text-muted)] sm:text-sm">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--color-accent-2)]" />
            Available for full-time roles &amp; freelance projects
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-[var(--color-text)] sm:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            <span className="gradient-text">I build data pipelines</span>
            <br />
            that scale.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="gradient-fill rounded-full px-6 py-3 font-mono text-sm font-semibold text-[#05050b] transition-transform hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="glass glass-hover rounded-full px-6 py-3 font-mono text-sm text-[var(--color-text)]"
            >
              Hire Me
            </a>

            <div className="glass ml-2 flex items-center gap-4 rounded-full px-4 py-2.5 text-[var(--color-text-muted)]">
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--color-accent-2)]">
                <Mail size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-accent-2)]">
                <LinkedinIcon size={18} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-accent-2)]">
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="glass glass-hover rounded-2xl px-5 py-5">
              <p className="font-display text-3xl font-bold text-[var(--color-text)]">
                {stat.value}
                <span className="gradient-text">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-accent-2)]"
        aria-label="Scroll to About"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
