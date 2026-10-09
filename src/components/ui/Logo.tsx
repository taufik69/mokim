import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={site.fullName}>
      <svg viewBox="0 0 48 48" className="size-10 shrink-0 sm:size-11" aria-hidden="true">
        <rect width="48" height="48" rx="14" fill="#008e48" />
        <path d="M24 9c-6 7-9 12-9 17a9 9 0 0 0 18 0c0-5-3-10-9-17Z" fill="#e8b65d" />
        <path d="M24 39V22m0 6 5-4m-5 8-5-4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
      <span className="leading-none">
        <span className={`block text-lg font-bold ${light ? "text-white" : "text-brand-600"}`}>{site.name}</span>
        <span className="block text-[10px] font-semibold tracking-[0.2em] text-amber-brand">{site.tagline}</span>
      </span>
    </Link>
  );
}
