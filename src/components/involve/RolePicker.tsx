import { joinOptions } from "@/lib/site";
import type { InvolveId } from "@/lib/involve";
import Icon from "@/components/ui/Icon";

type Props = { active: InvolveId; onChange: (id: InvolveId) => void };

export default function RolePicker({ active, onChange }: Props) {
  return (
    <div role="tablist" aria-label="যুক্ত হওয়ার উপায়" className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {joinOptions.map((o) => {
        const on = active === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="tab"
            aria-selected={on}
            aria-controls="involve-panel"
            onClick={() => onChange(o.id)}
            className={`group relative overflow-hidden rounded-3xl p-4 text-left transition-all duration-300 sm:p-6 ${
              on
                ? `bg-gradient-to-br ${o.tone} -translate-y-1 text-white shadow-lift`
                : "bg-white text-forest-900 shadow-card ring-1 ring-forest-900/5 hover:-translate-y-1 hover:shadow-lift"
            }`}
          >
            <span
              className={`absolute -top-8 -right-8 size-28 rounded-full border-[14px] transition-transform duration-500 group-hover:scale-125 ${
                on ? "border-white/15" : "border-brand-50"
              }`}
            />
            <span
              className={`relative grid size-11 place-items-center rounded-2xl transition-colors sm:size-14 ${
                on ? "bg-white/20" : "bg-brand-50 text-brand-600"
              }`}
            >
              <Icon name={o.icon} className="size-6 sm:size-7" />
            </span>
            <span className="relative mt-4 block text-base font-bold sm:mt-6 sm:text-xl">{o.title}</span>
            <span className={`relative mt-1 hidden text-sm sm:block ${on ? "text-white/80" : "text-muted"}`}>{o.text}</span>
            {on && (
              <span className="absolute top-4 right-4 grid size-6 place-items-center rounded-full bg-white text-brand-600">
                <Icon name="check" className="size-3.5" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
