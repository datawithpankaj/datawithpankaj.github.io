import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

const REDUCE_MOTION =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A glass card that tilts in 3D toward the cursor and carries a soft light
// "glare" that tracks the pointer, like light catching glass. Used for
// skill groups and project cards — the signature interaction of this theme.
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(400px circle at ${x}% ${y}%, color-mix(in srgb, var(--color-accent) 25%, transparent), transparent 70%)`,
  );

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (REDUCE_MOTION || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 14);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => glareOpacity.set(1)}
      onMouseLeave={handleLeave}
      className={`glass relative overflow-hidden rounded-2xl ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: glareBackground, opacity: glareOpacity }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
