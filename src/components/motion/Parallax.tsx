"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = { children: ReactNode; className?: string; speed?: number };

/** Moves a background layer slower than the page while its section is on screen. */
export default function Parallax({ children, className = "", speed = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const box = el.parentElement!.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;
      el.style.transform = `translate3d(0, ${(-box.top * speed).toFixed(1)}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 -z-30 will-change-transform ${className}`}
      style={{ transform: "scale(1.08)" }}
    >
      {children}
    </div>
  );
}
