import { useId } from "react";
import Icon from "@/components/ui/Icon";

type Props = { q: string; a: string; open: boolean; onToggle: () => void };

/** Accordion row whose answer slides open by animating grid rows from 0fr to 1fr. */
export default function FaqItem({ q, a, open, onToggle }: Props) {
  const id = useId();
  return (
    <div
      className={`rounded-2xl bg-white ring-1 ring-forest-900/5 transition-shadow duration-300 ${open ? "shadow-lift" : "shadow-card"}`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold sm:p-6 sm:text-lg"
        >
          {q}
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300 ease-out-soft ${
              open ? "rotate-45 bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
            }`}
          >
            <Icon name="close" className="size-4 rotate-45" />
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows] duration-500 ease-out-soft ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6 sm:pb-6">{a}</p>
        </div>
      </div>
    </div>
  );
}
