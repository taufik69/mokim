"use client";

import { useState } from "react";
import { mapSrc } from "@/lib/contact";
import Icon from "@/components/ui/Icon";

/** The map ignores the pointer until tapped, so it never hijacks page scrolling. */
export default function MapEmbed() {
  const [active, setActive] = useState(false);

  return (
    <div
      id="map"
      onMouseLeave={() => setActive(false)}
      className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-50 shadow-card ring-1 ring-forest-900/5 sm:aspect-[16/10] lg:aspect-[4/3]"
    >
      <iframe
        src={mapSrc}
        title="অফিসের অবস্থান — গুগল ম্যাপ"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`size-full border-0 grayscale-[.3] transition-[filter] duration-500 ${active ? "pointer-events-auto grayscale-0" : "pointer-events-none"}`}
      />
      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 grid place-items-end bg-gradient-to-t from-forest-950/40 to-transparent p-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-900 shadow-lift transition-transform duration-300 group-hover:-translate-y-0.5">
            <Icon name="pin" className="size-4 text-brand-600" />
            ম্যাপ চালু করতে ট্যাপ করুন
          </span>
        </button>
      )}
    </div>
  );
}
