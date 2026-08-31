import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import PhotoSlot from "./PhotoSlot";
import { profile } from "../data/content";

const SOCIALS = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

const INDEX = [
  { n: "01", href: "#about", label: "About" },
  { n: "02", href: "#experience", label: "Experience" },
  { n: "03", href: "#skills", label: "Skills" },
  { n: "04", href: "#projects", label: "Work" },
  { n: "05", href: "#services", label: "Freelance" },
  { n: "06", href: "#contact", label: "Contact" },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pt-20">
      <div className="animate-fade-up flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)]">
        <span>Portfolio / {new Date().getFullYear()}</span>
        <span className="flex items-center gap-2">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
          Available for work
        </span>
      </div>

      <h1 className="mt-6 text-[16vw] font-black leading-[0.85] tracking-tight text-[var(--color-text)] sm:text-8xl lg:text-9xl">
        Pankaj
        <br />
        Kumar
      </h1>
      <div className="mt-5 h-2 w-24" style={{ backgroundColor: "var(--color-accent)" }} />
      <p className="mt-6 font-mono text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
        Senior Data Engineer — {profile.location}
      </p>

      <div className="rule mt-10 grid grid-cols-12 gap-6 border-t pt-10">
        <div className="col-span-12 sm:col-span-8">
          <p className="max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">{profile.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-solid px-6 py-3 text-sm font-semibold uppercase tracking-wide">
              Let's collaborate
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline px-6 py-3 text-sm font-semibold uppercase tracking-wide">
              Resume
            </a>
            <div className="flex items-center gap-4 pl-1">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="text-[var(--color-text)] hover:text-[var(--color-accent)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-2">
          <PhotoSlot />
        </div>
      </div>

      <dl className="rule mt-14 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-4xl font-extrabold text-[var(--color-text)]">
              {stat.value}
              <span style={{ color: "var(--color-accent)" }}>{stat.suffix}</span>
            </dt>
            <dd className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--color-text-dim)]">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <div className="rule mt-14 border-t">
        {INDEX.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rule group flex items-center justify-between border-b py-3 text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span className="flex items-center gap-4">
              <span className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>{item.n}</span>
              <span className="text-lg font-semibold sm:text-xl">{item.label}</span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] group-hover:text-[var(--color-accent)]">
              Scroll ↓
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
