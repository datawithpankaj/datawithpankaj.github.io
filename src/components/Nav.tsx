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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b" : "border-b border-transparent"
      }`}
      style={scrolled ? { borderBottomColor: "var(--color-glass-border)" } : undefined}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-base font-semibold text-[var(--color-text)]">
          <span className="gradient-text">Pankaj</span> Kumar
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-2)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="gradient-fill rounded-full px-5 py-2 font-mono text-sm font-semibold text-[#05050b] transition-transform hover:-translate-y-0.5"
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
        <div className="glass-strong border-t px-6 py-4 md:hidden" style={{ borderTopColor: "var(--color-glass-border)" }}>
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
              className="gradient-fill w-fit rounded-full px-5 py-2 font-mono text-sm font-semibold text-[#05050b]"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
