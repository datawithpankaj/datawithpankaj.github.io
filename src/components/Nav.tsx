import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Freelance" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-[var(--color-text)]">
          <span className="text-[var(--color-accent)]">~/</span>
          {profile.name.toLowerCase().replace(" ", "-")}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="group font-mono text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <span className="text-[var(--color-text-dim)] group-hover:text-[var(--color-accent)]">
                0{i + 1}.
              </span>{" "}
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-[var(--color-accent)] px-4 py-1.5 font-mono text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent-soft)]"
          >
            Resume
          </a>
        </div>

        <button
          className="text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-[var(--color-text-muted)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded border border-[var(--color-accent)] px-4 py-1.5 font-mono text-sm text-[var(--color-accent)]"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
