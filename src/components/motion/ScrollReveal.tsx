"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ROOTS = "main section .container-page, footer .container-page";
const MAX_STAGGER = 6;

function isGroup(el: HTMLElement) {
  const s = getComputedStyle(el);
  return s.display === "grid" || (s.display === "flex" && s.flexWrap === "wrap");
}

/** Picks reveal units: block children, or each card of a grid so they cascade in. */
function collect(el: HTMLElement, out: HTMLElement[]) {
  if (el.matches(".reveal, [data-no-reveal]")) return;
  const kids = Array.from(el.children) as HTMLElement[];
  if (el.querySelector(".reveal")) return kids.forEach((k) => collect(k, out));
  if (isGroup(el) && kids.length > 1 && kids.length <= 16) {
    kids.forEach((k, i) => {
      k.dataset.fxI = String(i % MAX_STAGGER);
      out.push(k);
    });
  } else out.push(el);
}

/**
 * Fades every section's content in as it scrolls into view, on every page,
 * without each section opting in. Content already on screen is left alone so
 * nothing flashes after hydration.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: HTMLElement[] = [];
    const hidden: HTMLElement[] = [];
    let io: IntersectionObserver | undefined;

    // Wait a frame so the router has restored/reset the scroll position.
    const raf = requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLElement>(ROOTS)
        .forEach((root) => (Array.from(root.children) as HTMLElement[]).forEach((c) => collect(c, targets)));

      const fold = window.innerHeight * 0.92;
      hidden.push(...targets.filter((el) => el.getBoundingClientRect().top > fold));

      const done = (e: TransitionEvent) => {
        const el = e.currentTarget as HTMLElement;
        if (e.target !== el) return;
        delete el.dataset.fx;
        delete el.dataset.fxI;
        el.removeEventListener("transitionend", done);
      };

      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.addEventListener("transitionend", done);
            el.dataset.fx = "in";
            io?.unobserve(el);
          }),
        { threshold: 0, rootMargin: "0px 0px -24px 0px" },
      );

      hidden.forEach((el) => {
        el.dataset.fx = "";
        io?.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      hidden.forEach((el) => {
        delete el.dataset.fx;
        delete el.dataset.fxI;
      });
    };
  }, [pathname]);

  return null;
}
