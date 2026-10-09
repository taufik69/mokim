import { positions } from "@/lib/involve";
import { site } from "@/lib/site";
import Icon from "@/components/ui/Icon";

export default function CareerList() {
  return (
    <div className="grid gap-4">
      <p className="text-sm font-semibold text-muted">খোলা পদ ({positions.length})</p>
      <ul className="grid gap-3">
        {positions.map((p) => (
          <li key={p.title}>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(p.title)}`}
              className="group flex items-center gap-4 rounded-2xl border border-forest-900/10 p-4 transition-all duration-300 hover:border-brand-600/40 hover:bg-brand-50/50 hover:shadow-card"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name="briefcase" className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold">{p.title}</span>
                <span className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Icon name="pin" className="size-3.5" /> {p.place}
                  </span>
                  <span>{p.type}</span>
                  <span className="font-semibold text-amber-brand">শেষ: {p.deadline}</span>
                </span>
              </span>
              <Icon name="arrowUpRight" className="size-5 shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-2 rounded-2xl bg-cream p-5 text-sm leading-relaxed">
        <p className="font-semibold">আপনার উপযুক্ত পদ খুঁজে পাননি?</p>
        <p className="mt-1 text-muted">
          সিভি পাঠিয়ে রাখুন <a href={`mailto:${site.email}`} className="font-semibold text-brand-600">{site.email}</a> ঠিকানায় — উপযুক্ত পদ খুললে আমরা যোগাযোগ করব।
        </p>
      </div>
    </div>
  );
}
