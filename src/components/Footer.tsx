import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, services } from "../data/content";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-[var(--color-text)]">{profile.name}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Building reliable data platforms across healthcare, banking, and telecom.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="pill flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-muted)]">
              <GithubIcon size={15} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="pill flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-muted)]">
              <LinkedinIcon size={15} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="pill flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-muted)]">
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Navigation</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Focus areas</p>
          <ul className="mt-3 space-y-2">
            {services.slice(0, 4).map((s) => (
              <li key={s.title} className="text-sm text-[var(--color-text-muted)]">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>{profile.email}</li>
            <li>{profile.location}</li>
          </ul>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="pill mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-[var(--color-text)]">
            Download Resume
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-dim)]">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
