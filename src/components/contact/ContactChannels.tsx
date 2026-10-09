import { channels } from "@/lib/contact";
import Icon from "@/components/ui/Icon";

export default function ContactChannels() {
  return (
    <section aria-label="যোগাযোগের মাধ্যম" className="relative z-10 -mt-14 sm:-mt-20">
      <div className="container-page">
        <ul data-no-reveal className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {channels.map((c, i) => (
            <li key={c.title} className={`enter enter-${i + 1}`}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col items-start gap-3 rounded-2xl bg-white p-4 sm:flex-row sm:gap-4 shadow-lift ring-1 ring-forest-900/5 transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:ring-brand-600/30 active:scale-[.98] sm:p-6"
              >
                <span className="grid size-11 shrink-0 sm:size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <span className="w-full min-w-0">
                  <span className="block text-sm text-muted">{c.title}</span>
                  <span className="block font-semibold [overflow-wrap:anywhere] text-forest-900 sm:truncate transition-colors group-hover:text-brand-600">
                    {c.value}
                  </span>
                  <span className="mt-1 hidden text-xs text-muted sm:block">{c.note}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
