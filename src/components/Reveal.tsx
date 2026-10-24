import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Adds a subtle 3D tilt-up-into-place on entrance, on top of the fade/slide. */
  tilt?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

// Shared scroll-reveal entrance: fades and slides up once, the first time
// the element crosses into view. Used everywhere instead of hand-rolled
// IntersectionObserver + CSS class toggling.
export default function Reveal({ children, className, delay = 0, y = 32, tilt = false }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotateX: tilt ? -8 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      style={tilt ? { transformPerspective: 800 } : undefined}
    >
      {children}
    </motion.div>
  );
}
