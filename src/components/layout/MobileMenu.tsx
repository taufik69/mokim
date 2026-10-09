"use client";

import Link from "next/link";
import { useEffect } from "react";
import { navLinks, site } from "@/lib/site";
import Icon from "@/components/ui/Icon";

type Props = { open: boolean; onClose: () => void };

export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const mq = window.matchMedia("(min-width: 1280px)");
    const onWide = () => mq.matches && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-2xl bg-white shadow-lift transition-all duration-300 ease-standard xl:hidden ${
        open ? "visible max-h-[calc(100dvh-96px)] opacity-100" : "invisible max-h-0 opacity-0"
      }`}
    >
      <div className="max-h-[calc(100dvh-96px)] overflow-y-auto p-4">
        <ul className="grid gap-1">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
              style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-forest-900 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
                <Icon name="arrowUpRight" className="size-4 opacity-40" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-forest-900/10 pt-4 text-sm">
          <a href={`tel:${site.phone}`} className="flex items-center gap-2 rounded-xl bg-cream p-3">
            <Icon name="phone" className="size-4 text-brand-600" /> কল করুন
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 rounded-xl bg-cream p-3">
            <Icon name="mail" className="size-4 text-brand-600" /> ইমেইল
          </a>
        </div>
      </div>
    </div>
  );
}
