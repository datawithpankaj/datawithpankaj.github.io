import { useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";

type InteractivePhotoProps = {
  className?: string;
};

const REDUCE_MOTION =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const RESET: CSSProperties = {
  transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
};

// Cursor-reactive tilt: the cutout leans toward the pointer like a card
// tracking a light source, then eases back to flat on mouse leave.
export default function InteractivePhoto({ className = "" }: InteractivePhotoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>(RESET);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (REDUCE_MOTION) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${(-y * 16).toFixed(2)}deg) rotateY(${(x * 16).toFixed(2)}deg) scale(1.04)`,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle(RESET)}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ ...style, transformStyle: "preserve-3d" }}
    >
      <img
        src="/photo/headshot-cutout.webp"
        alt="Pankaj Kumar"
        draggable={false}
        className="h-full w-full select-none object-contain object-bottom"
        style={{ filter: "grayscale(1) contrast(1.12) drop-shadow(0 24px 32px var(--color-shadow-photo))" }}
      />
    </div>
  );
}
