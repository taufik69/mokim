"use client";

import { useState } from "react";
import { activities, categories } from "@/lib/activities";
import SectionHeading from "@/components/ui/SectionHeading";
import ActivityCard from "./ActivityCard";

const bn = new Intl.NumberFormat("bn-BD");

export default function ActivityGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("সব");
  const list = active === "সব" ? activities : activities.filter((a) => a.category === active);
  const count = (c: (typeof categories)[number]) =>
    c === "সব" ? activities.length : activities.filter((a) => a.category === c).length;

  return (
    <section id="all" className="lattice-light bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="সকল কার্যক্রম"
          title="যেখানে আপনার অনুদান কাজ করছে"
          text="খাত অনুযায়ী বেছে নিন — প্রতিটি কার্যক্রমের অগ্রগতি ও প্রভাব নিয়মিত প্রকাশ করা হয়।"
        />

        <div
          role="group"
          aria-label="খাত অনুযায়ী ফিল্টার"
          className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              className={`flex h-11 shrink-0 items-center gap-2 rounded-full pr-2 pl-5 text-sm font-semibold transition-all duration-300 ${
                active === c
                  ? "bg-brand-600 text-white shadow-glow"
                  : "bg-white text-forest-900 ring-1 ring-forest-900/10 hover:text-brand-600 hover:ring-brand-600/30"
              }`}
            >
              {c}
              <span
                className={`grid h-7 min-w-7 place-items-center rounded-full px-1.5 text-xs ${
                  active === c ? "bg-white/20" : "bg-brand-50 text-brand-600"
                }`}
              >
                {bn.format(count(c))}
              </span>
            </button>
          ))}
        </div>

        <div key={active} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a, i) => (
            <div key={a.slug} className="animate-[fade-up_.5s_ease-out_both]" style={{ animationDelay: `${i * 70}ms` }}>
              <ActivityCard {...a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
