import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = "a, button, input, textarea, [role='button']";

// Precision dot-and-ring cursor: the dot tracks the pointer exactly, the
// ring eases toward it with a short lag, and both grow/fill with the accent
// color over links and buttons. Desktop-only (pointer: fine) — touch
// devices keep their native behavior untouched.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor");
    setActive(true);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    function place(el: HTMLDivElement | null, x: number, y: number) {
      if (el) el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      place(dotRef.current, mouseX, mouseY);
      if (reduceMotion) {
        ringX = mouseX;
        ringY = mouseY;
        place(ringRef.current, ringX, ringY);
      }
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest(HOVER_SELECTOR));
    }

    function loop() {
      if (!reduceMotion) {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        place(ringRef.current, ringX, ringY);
      }
      raf = requestAnimationFrame(loop);
    }

    place(dotRef.current, mouseX, mouseY);
    place(ringRef.current, ringX, ringY);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: hovering ? "var(--color-accent)" : "var(--color-text)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          borderColor: hovering ? "var(--color-accent)" : "var(--color-border)",
          backgroundColor: hovering ? "var(--color-accent-soft)" : "transparent",
        }}
      />
    </>
  );
}
