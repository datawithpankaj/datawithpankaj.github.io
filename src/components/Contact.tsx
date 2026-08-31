import { useState } from "react";
import type { FormEvent } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";

// Set VITE_FORMSPREE_ID in a .env file (see README) once you've created a
// Formspree form. Until then the form falls back to a mailto link.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
const FORM_ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      const form = e.currentTarget;
      const data = new FormData(form);
      const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
      const body = encodeURIComponent(String(data.get("message") ?? ""));
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="06" title="Get In Touch" subtitle="Freelance work, full-time roles, or just a hello" />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-[var(--color-text-muted)]">
              Whether it's a freelance data engineering project, a full-time role, or a question
              about something I built — I read every message.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)]"
              >
                <Mail size={18} />
                <span className="font-mono text-sm">{profile.email}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)]"
              >
                <LinkedinIcon size={18} />
                <span className="font-mono text-sm">linkedin.com/in/mepankajkumar</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)]"
              >
                <GithubIcon size={18} />
                <span className="font-mono text-sm">github.com/datawithpankaj</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs text-[var(--color-text-dim)]">
                  name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs text-[var(--color-text-dim)]">
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs text-[var(--color-text-dim)]">
                message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="resize-none rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 rounded bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-semibold text-[#0a0e14] disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="mt-3 text-sm text-[var(--color-accent)]">Thanks — message sent. I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-400">
                Something went wrong — email me directly at {profile.email}.
              </p>
            )}
            {!FORM_ENDPOINT && (
              <p className="mt-3 text-xs text-[var(--color-text-dim)]">
                Submitting opens your email client (form backend not yet configured — see README).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
