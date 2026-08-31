import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, services } from "../data/content";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="rule border-t px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-[var(--color-text)]">{profile.name}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Building reliable data platforms across healthcare, banking, and telecom.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
              <GithubIcon size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
              <LinkedinIcon size={16} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Navigation</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline text-sm text-[var(--color-text-muted)]">
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
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline mt-4 inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            Download Resume
          </a>
        </div>
      </div>

      <div className="rule mx-auto mt-10 max-w-6xl border-t pt-6 text-sm text-[var(--color-text-dim)]">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
