import { useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";

type InteractivePhotoProps = {
  className?: string;
};

const REDUCE_MOTION =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Material-style "flower" outline: a circle whose radius ripples 8 times,
// sampled into a polygon on a unit viewBox and used as a CSS mask so it scales
// with the box (and works inside display:none ancestors, unlike clipPath refs).
const FLOWER_PATH = Array.from({ length: 160 }, (_, i) => {
  const a = (i / 160) * Math.PI * 2;
  const r = 0.455 + 0.045 * Math.cos(8 * a);
  return `${(0.5 + r * Math.cos(a)).toFixed(4)},${(0.5 + r * Math.sin(a)).toFixed(4)}`;
});
const FLOWER_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><path d="M${FLOWER_PATH.join("L")}Z"/></svg>`,
)}")`;

const RESET: CSSProperties = {
  transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
};

// Cursor-reactive tilt: the flower-shaped portrait leans toward the pointer like a card
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
          className="h-full w-full"
          style={{
            WebkitMaskImage: FLOWER_MASK,
            maskImage: FLOWER_MASK,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
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
