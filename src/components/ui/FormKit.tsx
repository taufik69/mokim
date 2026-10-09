import type { ReactNode } from "react";
import Icon from "./Icon";

/** Shared input style — matches the emerald-ui "Input" pattern. */
export const fieldClass =
  "h-12 w-full rounded-xl border border-forest-900/15 bg-white px-4 font-normal transition focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15 focus:outline-none";

export const submitClass =
  "flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 text-lg font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-glow active:scale-[.98]";

type FieldProps = { label: string; required?: boolean; hint?: string; children: ReactNode };

export function Field({ label, required, hint, children }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      <span>
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs font-normal text-muted">{hint}</span>}
    </label>
  );
}

type ChoiceProps = { active: boolean; onClick: () => void; children: ReactNode; className?: string };

export function Choice({ active, onClick, children, className = "" }: ChoiceProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-xl border text-sm font-semibold transition-all duration-200 ${
        active ? "border-brand-600 bg-brand-600 text-white shadow-glow" : "border-forest-900/15 bg-white hover:border-brand-600 hover:text-brand-600"
      } ${className}`}
    >
      {children}
    </button>
  );
}

type SuccessProps = { title: string; text: string; onReset: () => void };

export function FormSuccess({ title, text, onReset }: SuccessProps) {
  return (
    <div role="status" className="grid place-items-center py-10 text-center">
      <span className="grid size-16 place-items-center rounded-full bg-brand-50 text-brand-600">
        <Icon name="check" className="size-8" />
      </span>
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="mt-2 max-w-xs text-muted">{text}</p>
      <button type="button" onClick={onReset} className="mt-6 font-semibold text-brand-600 hover:underline">
        আবার পূরণ করুন
      </button>
    </div>
  );
}
