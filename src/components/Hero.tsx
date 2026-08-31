import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="data-grid-bg relative flex min-h-screen items-center overflow-hidden border-b border-[var(--color-border)] pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="animate-fade-up">
          <p className="mb-5 flex items-center gap-2 font-mono text-sm text-[var(--color-accent)]">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            Available for full-time roles &amp; freelance projects
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-[var(--color-text)] sm:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            <span className="glow-text text-[var(--color-accent)]">I build data pipelines</span>
            <br />
            that scale.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-semibold text-[#0a0e14] transition-transform hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded border border-[var(--color-border-hover)] px-6 py-3 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Hire Me
            </a>

            <div className="ml-2 flex items-center gap-4 text-[var(--color-text-muted)]">
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--color-accent)]">
                <Mail size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-accent)]">
                <LinkedinIcon size={20} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-accent)]">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-8 sm:grid-cols-4">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-3xl font-bold text-[var(--color-text)]">
                {stat.value}
                <span className="text-[var(--color-accent)]">{stat.suffix}</span>
              </dt>
              <dd className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-accent)]"
        aria-label="Scroll to About"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
