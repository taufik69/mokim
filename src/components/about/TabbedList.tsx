"use client";

import { useId, useState, type ReactNode } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Tab = { icon: IconName; label: string; items: readonly string[] };

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  tabs: readonly Tab[];
  tone?: "white" | "cream";
};

export default function TabbedList({ eyebrow, title, text, tabs, tone = "white" }: Props) {
  const [active, setActive] = useState(0);
  const [switched, setSwitched] = useState(false);
  const id = useId();
  const tab = tabs[active];

  return (
    <section className={`py-20 sm:py-28 ${tone === "cream" ? "lattice-light bg-cream" : "bg-white"}`}>
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />

        <Reveal className="mx-auto max-w-4xl">
          <div
            role="tablist"
            aria-label={eyebrow}
            className="mx-auto mb-6 grid w-full max-w-2xl grid-cols-3 gap-1 rounded-2xl bg-white p-1.5 shadow-card ring-1 ring-forest-900/5"
          >
            {tabs.map((t, i) => (
              <button
                key={t.label}
                id={`${id}-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={`${id}-panel`}
                onClick={() => {
                  setActive(i);
                  setSwitched(true);
                }}
                className={`flex flex-col items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-sm font-semibold transition-all duration-300 sm:flex-row sm:text-base ${
                  active === i
                    ? "bg-brand-600 text-white shadow-glow"
                    : "text-muted hover:bg-brand-50 hover:text-brand-600"
                }`}
              >
                <Icon name={t.icon} className="size-5" />
                {t.label}
              </button>
            ))}
          </div>

          <div
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${active}`}
            className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest-900/5 sm:p-10"
          >
            <ul key={active} className="grid gap-4 sm:grid-cols-2">
              {tab.items.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 ${switched ? "animate-[fade-up_.45s_ease-out_both]" : ""}`}
                  style={switched ? { animationDelay: `${i * 60}ms` } : undefined}
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  <span className="leading-relaxed text-forest-900/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
