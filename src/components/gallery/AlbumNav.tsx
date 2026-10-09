import { albums } from "@/lib/gallery";

const bn = new Intl.NumberFormat("bn-BD");

type Props = {
  active: (typeof albums)[number];
  counts: Record<string, number>;
  onChange: (album: (typeof albums)[number]) => void;
};

export default function AlbumNav({ active, counts, onChange }: Props) {
  return (
    <nav aria-label="অ্যালবাম" className="min-w-0">
      <p className="mb-3 hidden text-sm font-semibold tracking-wide text-muted lg:block">অ্যালবাম</p>
      <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 lg:flex-col lg:gap-1 lg:rounded-3xl lg:bg-white lg:p-3 lg:shadow-card lg:ring-1 lg:ring-forest-900/5">
        {albums.map((a) => {
          const on = active === a;
          return (
            <li key={a} className="shrink-0">
              <button
                type="button"
                aria-pressed={on}
                onClick={() => onChange(a)}
                className={`flex h-11 w-full items-center justify-between gap-3 rounded-full px-4 text-sm font-semibold transition-all duration-300 lg:rounded-xl ${
                  on
                    ? "bg-brand-600 text-white shadow-glow"
                    : "bg-white text-forest-900 ring-1 ring-forest-900/10 hover:text-brand-600 lg:bg-transparent lg:ring-0 lg:hover:bg-brand-50"
                }`}
              >
                {a}
                <span
                  className={`grid h-6 min-w-6 place-items-center rounded-full px-1.5 text-xs ${
                    on ? "bg-white/20" : "bg-brand-50 text-brand-600"
                  }`}
                >
                  {bn.format(counts[a] ?? 0)}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
