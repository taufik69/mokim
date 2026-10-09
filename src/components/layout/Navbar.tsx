"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import { buttonClass } from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        aria-label="প্রধান মেনু"
        className={`mx-auto flex h-16 max-w-[1240px] items-center gap-4 rounded-2xl px-3 transition-all duration-300 ease-standard sm:px-5 lg:h-[72px] ${
          solid ? "bg-white/90 shadow-lift backdrop-blur-md" : "bg-white/0"
        }`}
      >
        <Logo light={!solid} />

        <ul className="ml-auto hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-[15px] font-medium transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded after:bg-current after:transition-transform hover:after:scale-x-100 ${
                  solid ? "text-forest-900 hover:text-brand-600" : "text-white/90 hover:text-white"
                } ${link.href === pathname ? "after:scale-x-100" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 xl:ml-4">
          <div
            role="group"
            aria-label="ভাষা"
            className={`hidden overflow-hidden rounded-xl border text-sm font-semibold sm:flex ${
              solid ? "border-forest-900/10" : "border-white/30 text-white"
            }`}
          >
            <button type="button" aria-pressed="true" className="bg-brand-600/20 px-3 py-2">
              বাং
            </button>
            <button type="button" aria-pressed="false" className="px-3 py-2 hover:bg-black/5">
              EN
            </button>
          </div>
          <Link
            href="#"
            aria-label="লগইন"
            className="hidden size-10 place-items-center rounded-xl bg-gold-300 text-forest-900 transition-colors hover:bg-gold-400 sm:grid"
          >
            <Icon name="user" />
          </Link>
          <Link href="#donate" className={buttonClass("primary", "sm")}>
            দান করুন
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            className={`grid size-10 place-items-center rounded-xl xl:hidden ${
              solid ? "text-forest-900 hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
