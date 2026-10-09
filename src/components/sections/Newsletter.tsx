"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";

const perks = ["মাসে একবার, কোনো স্প্যাম নয়", "প্রকল্পের ছবি ও হিসাব", "যেকোনো সময় আনসাবস্ক্রাইব"];

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section aria-label="নিউজলেটার" className="relative isolate overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-forest-900 py-20 text-white sm:py-28">
      <span className="lattice pointer-events-none absolute inset-0 -z-10" />
      <span className="pointer-events-none absolute -top-32 right-[10%] -z-10 size-96 rounded-full bg-gold-400/25 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-40 -left-24 -z-10 size-96 rounded-full border-[56px] border-white/5" />
      <span className="pointer-events-none absolute top-12 left-1/2 -z-10 hidden size-40 rounded-full border-2 border-dashed border-gold-400/30 lg:block" />

      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-gold-300 backdrop-blur-sm">
            <Icon name="mail" className="size-4" /> নিউজলেটার
          </span>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            প্রতিটি প্রকল্পের খবর <span className="text-gold-400">সবার আগে</span> পান
          </h2>
          <ul className="mt-6 grid gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-white/85">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/15">
                  <Icon name="check" className="size-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 text-forest-900 shadow-2xl ring-8 ring-white/10 sm:p-8 lg:justify-self-end lg:w-full lg:max-w-md">
          {sent ? (
            <div role="status" className="py-6 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Icon name="check" className="size-7" />
              </span>
              <p className="mt-4 text-xl font-bold">সাবস্ক্রাইব সম্পন্ন!</p>
              <p className="mt-1 text-sm text-muted">এটি ডেমো — কোনো ইমেইল পাঠানো হয়নি।</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4">
              <p className="text-lg font-bold">আপনার ইমেইল দিন</p>
              <label htmlFor="nl-email" className="sr-only">
                ইমেইল
              </label>
              <div className="relative">
                <Icon name="mail" className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted" />
                <input
                  id="nl-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-14 w-full rounded-xl border border-forest-900/15 pr-4 pl-12 transition focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-gold-400 text-lg font-semibold transition-all hover:bg-gold-500 active:scale-[.98]"
              >
                সাবস্ক্রাইব করুন
                <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="flex items-center gap-2 text-xs text-muted">
                <Icon name="shield" className="size-4 text-brand-600" />
                আপনার তথ্য কখনো তৃতীয় পক্ষকে দেওয়া হবে না।
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
