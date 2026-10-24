import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Freelance" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "glass" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-extrabold uppercase tracking-widest text-[var(--color-text)]">
          Pankaj Kumar
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="link-underline text-sm text-[var(--color-text)]">
              {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary rounded-full px-4 py-2 text-xs uppercase tracking-wide">
            Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button className="text-[var(--color-text)]" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className="relative h-px w-full" style={{ backgroundColor: "var(--color-border)" }} aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: `${progress}%`,
            backgroundImage: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
            transition: "width 100ms linear",
          }}
        />
      </div>

      {open && (
        <div className="glass border-t border-[var(--color-border)] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-[var(--color-text)]">
                {link.label}
              </a>
            ))}
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary w-fit rounded-full px-4 py-2 text-xs uppercase tracking-wide">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
