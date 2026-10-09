"use client";

import { useState } from "react";
import { contactFaqs } from "@/lib/contact";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "./FaqItem";

export default function ContactFaq() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(0);
  const group = contactFaqs[tab];

  return (
    <section className="bg-cream py-20 sm:py-28 lattice-light">
      <div className="container-page max-w-4xl">
        <SectionHeading
          eyebrow="জিজ্ঞাসা"
          title="সচরাচর জিজ্ঞাসিত প্রশ্ন"
          text="উত্তর না পেলে উপরের ফর্মে লিখুন বা সরাসরি কল করুন।"
        />

        <div
          role="tablist"
          aria-label="প্রশ্নের বিষয়"
          className="-mx-4 mb-8 flex snap-x gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {contactFaqs.map((g, i) => (
            <button
              key={g.topic}
              type="button"
              role="tab"
              id={`faq-tab-${i}`}
              aria-selected={tab === i}
              aria-controls="faq-panel"
              onClick={() => {
                setTab(i);
                setOpen(0);
              }}
              className={`h-11 shrink-0 snap-start rounded-full px-5 text-sm font-semibold transition-all duration-300 ease-out-soft active:scale-95 ${
                tab === i
                  ? "bg-brand-600 text-white shadow-glow"
                  : "bg-white text-forest-900 ring-1 ring-forest-900/10 hover:text-brand-600"
              }`}
            >
              {g.topic}
            </button>
          ))}
        </div>

        <div
          id="faq-panel"
          role="tabpanel"
          aria-labelledby={`faq-tab-${tab}`}
          key={tab}
          className="grid gap-3 animate-enter"
        >
          {group.items.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
