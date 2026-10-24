import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// Soft blurred gradient orbs behind the hero that drift at different speeds
// as the page scrolls — the parallax depth cue for the whole theme.
export default function ParallaxField() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const slow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        style={reduce ? undefined : { y: slow, opacity: fade }}
        className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full blur-[110px]"
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 55%, transparent)" }} />
      </motion.div>
      <motion.div
        style={reduce ? undefined : { y: fast, opacity: fade }}
        className="absolute right-[-10rem] top-1/3 h-[24rem] w-[24rem] rounded-full blur-[110px]"
        animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="h-full w-full rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-accent-2) 45%, transparent)" }} />
      </motion.div>
    </div>
  );
}
