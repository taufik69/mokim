"use client";

import Image from "next/image";
import { useState } from "react";
import { reports } from "@/lib/about";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const years = [...new Set(reports.map((r) => r.year))];

export default function Reports() {
  const [year, setYear] = useState(years[0]);
  const list = reports.filter((r) => r.year === year);

  return (
    <section className="lattice-light bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="প্রকাশনা"
          title="মাসিক প্রতিবেদন"
          text="প্রতি মাসের কাজ, আয়-ব্যয় ও প্রভাবের হিসাব — সবার জন্য উন্মুক্ত।"
        />

        <div role="group" aria-label="বছর নির্বাচন" className="mb-10 flex justify-center gap-2">
          {years.map((y) => (
            <button
              key={y}
              type="button"
              aria-pressed={year === y}
              onClick={() => setYear(y)}
              className={`h-10 rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                year === y
                  ? "bg-brand-600 text-white shadow-glow"
                  : "bg-white text-muted ring-1 ring-forest-900/10 hover:text-brand-600"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {list.map((r, i) => (
            <Reveal
              key={year + r.title}
              delay={i * 100}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <article
                className="group h-full overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={r.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-brand-700/85 via-forest-950/20 to-forest-950/80 p-4 text-white">
                    <span className="text-xs font-semibold tracking-[0.2em] text-gold-300">NEWSLETTER</span>
                    <p className="text-lg leading-tight font-bold sm:text-xl">{r.title}</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex h-12 items-center justify-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon name="download" className="size-4" /> ডাউনলোড (PDF)
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
