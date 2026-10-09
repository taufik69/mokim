import Icon from "@/components/ui/Icon";

const bn = new Intl.NumberFormat("bn-BD");

type Props = { page: number; total: number; onChange: (page: number) => void };

export default function Pagination({ page, total, onChange }: Props) {
  if (total <= 1) return null;
  const btn = "grid size-11 place-items-center rounded-xl text-sm font-semibold transition-all duration-200";

  return (
    <nav aria-label="পৃষ্ঠা" className="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        aria-label="আগের পৃষ্ঠা"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={`${btn} bg-white ring-1 ring-forest-900/10 hover:text-brand-600 disabled:opacity-40`}
      >
        <Icon name="arrow" className="size-4 rotate-180" />
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-current={page === n ? "page" : undefined}
          onClick={() => onChange(n)}
          className={`${btn} ${page === n ? "bg-brand-600 text-white shadow-glow" : "bg-white ring-1 ring-forest-900/10 hover:text-brand-600"}`}
        >
          {bn.format(n)}
        </button>
      ))}
      <button
        type="button"
        aria-label="পরের পৃষ্ঠা"
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        className={`${btn} bg-white ring-1 ring-forest-900/10 hover:text-brand-600 disabled:opacity-40`}
      >
        <Icon name="arrow" className="size-4" />
      </button>
    </nav>
  );
}
