import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t px-6 py-8" style={{ borderTopColor: "var(--color-glass-border)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-[var(--color-text-dim)] sm:flex-row">
        <p className="font-mono">
          Built by {profile.name} · React + Vite + Tailwind
        </p>
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
