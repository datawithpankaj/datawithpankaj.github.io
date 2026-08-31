import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import PhotoSlot from "./PhotoSlot";
import { profile } from "../data/content";

const SOCIALS = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-32 sm:pt-40">
      <div className="animate-fade-up flex items-center justify-between gap-4">
        <span className="pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-[var(--color-text-muted)] sm:text-sm">
          <span className="pulse-dot h-2 w-2 rounded-full" style={{ backgroundColor: "var(--color-status)" }} />
          Available for full-time roles &amp; freelance projects
        </span>

        <div className="hidden flex-col gap-3 sm:flex">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="pill flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="relative mt-6 grid items-center gap-8 lg:mt-4 lg:grid-cols-[1fr_auto_1fr]">
        <h1 className="font-display text-[15vw] font-bold leading-[0.95] text-[var(--color-text)] sm:text-7xl lg:col-span-3 lg:row-start-1 lg:text-[6.4vw] lg:leading-[0.92]">
          <span className="block lg:inline">Pankaj</span>{" "}
          <span className="text-outline block lg:inline">Kumar</span>
        </h1>

        <div className="order-first mx-auto w-40 sm:w-52 lg:order-none lg:col-start-2 lg:row-start-1 lg:mx-0 lg:w-56 lg:justify-self-center">
          <PhotoSlot className="rounded-[2rem]" />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
            Senior Data Engineer
          </p>
          <p className="mt-2 max-w-lg text-[var(--color-text-muted)]">{profile.tagline}.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href="#contact" className="pill-solid inline-flex items-center gap-2 px-5 py-3 text-sm font-medium">
            Let's collaborate
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="pill inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[var(--color-text)]"
          >
            <Download size={15} />
            Resume
          </a>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 sm:hidden">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="pill flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text-muted)]"
          >
            <Icon size={17} />
          </a>
        ))}
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-8 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-display text-3xl font-bold text-[var(--color-text)]">
              {stat.value}
              <span style={{ color: "var(--color-accent)" }}>{stat.suffix}</span>
            </dt>
            <dd className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
