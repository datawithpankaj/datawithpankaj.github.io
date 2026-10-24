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

// Cursor-reactive tilt: the circular portrait leans toward the pointer like a card
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
      <div
        className="h-full w-full"
        style={{ filter: "drop-shadow(0 20px 40px color-mix(in srgb, var(--color-accent) 35%, transparent))" }}
      >
        <div
          className="h-full w-full overflow-hidden rounded-full"
          style={{
            background: "linear-gradient(145deg, var(--color-accent), var(--color-accent-2))",
          }}
        >
          <img
            src="/photo/headshot-cutout.webp"
            alt="Pankaj Kumar"
            draggable={false}
            className="h-full w-full select-none object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
