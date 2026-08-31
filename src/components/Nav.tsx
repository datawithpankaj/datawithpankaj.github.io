import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    if (!open) return;
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="rule sticky top-0 z-50 border-b bg-[var(--color-bg)]">
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
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-solid px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            Resume
          </a>
        </div>

        <button className="text-[var(--color-text)] md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="rule border-t px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-[var(--color-text)]">
                {link.label}
              </a>
            ))}
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-solid w-fit px-4 py-2 text-xs font-semibold uppercase tracking-wide">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
