import { stats } from "@/lib/site";
import CountUp from "@/components/ui/CountUp";

export default function Stats() {
  return (
    <section aria-label="আমাদের প্রভাব" className="relative z-10 -mt-16 px-4">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-forest-900/5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-6 text-center sm:p-8 ${i % 2 === 0 ? "border-r" : ""} ${
              i < 2 ? "border-b lg:border-b-0" : ""
            } border-forest-900/5 lg:border-r lg:last:border-r-0`}
          >
            <p className="text-3xl font-bold text-brand-600 sm:text-4xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted sm:text-base">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
