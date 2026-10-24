import { useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import InteractivePhoto from "./InteractivePhoto";
import AnimatedNumber from "./AnimatedNumber";
import LiveClock from "./LiveClock";
import ParallaxField from "./ParallaxField";
import Reveal from "./Reveal";
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

const EASE = [0.16, 1, 0.3, 1] as const;
const REDUCE_MOTION =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (REDUCE_MOTION || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 6);
    rotateX.set(-py * 6);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section id="top" className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-24 pt-14 sm:pt-24">
      <ParallaxField />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)]"
      >
        <span className="flex items-center gap-3">
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span className="hidden text-[var(--color-border-strong)] sm:inline">/</span>
          <LiveClock className="hidden sm:inline" />
        </span>
        <span className="glass flex items-center gap-2 rounded-full px-3 py-1.5">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-accent-2)" }} />
          Available for work
        </span>
      </motion.div>

      <div
        ref={stageRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative mt-10"
        style={{ perspective: 1200 }}
      >
        <motion.h1
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-[15vw] font-black leading-[0.92] tracking-tight sm:text-8xl lg:text-9xl"
        >
          <span className="block text-[var(--color-text)]">Pankaj</span>
          <span className="gradient-text block">Kumar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="pointer-events-none absolute bottom-[-1rem] right-0 hidden w-44 sm:block md:w-56 lg:w-64"
        >
          <div className="pointer-events-auto">
            <InteractivePhoto className="aspect-square" />
          </div>
        </motion.div>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-sm font-mono text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
          Senior Data Engineer · {profile.location}
          <span className="pulse-dot ml-1" style={{ color: "var(--color-accent)" }}>
            _
          </span>
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-12 gap-6 border-t border-[var(--color-border)] pt-10">
        <Reveal className="col-span-12 sm:col-span-8" delay={0.15}>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">{profile.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary rounded-full px-6 py-3 text-sm uppercase tracking-wide">
              Let's collaborate
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide">
              Resume
            </a>
            <div className="flex items-center gap-4 pl-1">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="col-span-6 sm:hidden">
          <InteractivePhoto className="aspect-square" />
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.05 * i} y={24}>
            <div className="glass rounded-2xl p-5">
              <dt className="gradient-text text-4xl font-extrabold">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--color-text-dim)]">{stat.label}</dd>
            </div>
          </Reveal>
        ))}
      </dl>

      <div className="mt-16 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {INDEX.map((item, i) => (
          <Reveal key={item.href} delay={0.03 * i} y={16}>
            <a href={item.href} className="group flex items-center justify-between py-4 text-[var(--color-text)]">
              <span className="flex items-center gap-4">
                <span className="font-mono text-sm text-[var(--color-accent)]">{item.n}</span>
                <span className="text-lg font-semibold transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                  {item.label}
                </span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] transition-colors group-hover:text-[var(--color-accent)]">
                Scroll ↓
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
