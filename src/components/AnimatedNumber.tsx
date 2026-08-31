import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

type AnimatedNumberProps = {
  value: string;
  suffix: string;
  className?: string;
};

const REDUCE_MOTION =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

// Counts up from 0 to the leading integer in `value` once scrolled into
// view (e.g. "10M" -> animates 0..10, keeps the "M" tail static).
export default function AnimatedNumber({ value, suffix, className }: AnimatedNumberProps) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const tail = match ? match[2] : value;

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    if (REDUCE_MOTION) {
      setDisplay(target);
      return;
    }

    const duration = 1100;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(easeOutQuad(elapsed) * target));
      if (elapsed < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [visible, target]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {display}
      {tail}
      {suffix}
    </span>
  );
}
