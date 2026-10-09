"use client";

import { useEffect, useRef, useState } from "react";

const bn = new Intl.NumberFormat("bn-BD");

type Props = { value: number; suffix?: string; duration?: number };

export default function CountUp({ value, suffix = "", duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setCurrent(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={`${bn.format(value)}${suffix}`}>
      {bn.format(current)}
      {suffix}
    </span>
  );
}
