import { hours } from "@/lib/contact";
import Icon, { type IconName } from "@/components/ui/Icon";
import MapEmbed from "./MapEmbed";

const socials: { icon: IconName; label: string }[] = [
  { icon: "facebook", label: "Facebook" },
  { icon: "youtube", label: "YouTube" },
  { icon: "linkedin", label: "LinkedIn" },
];

export default function ContactAside() {
  return (
    <aside className="grid content-start gap-5 lg:sticky lg:top-28 lg:self-start">
      <MapEmbed />

      <div className="rounded-3xl bg-cream p-6 sm:p-7">
        <h3 className="flex items-center gap-2 text-lg font-bold">
          <Icon name="clock" className="size-5 text-brand-600" />
          অফিস সময়
        </h3>
        <dl className="mt-4 divide-y divide-forest-900/10 text-sm">
          {hours.map((h) => (
            <div key={h.day} className="flex justify-between gap-4 py-3">
              <dt className="text-muted">{h.day}</dt>
              <dd className={`font-semibold ${h.time === "বন্ধ" ? "text-red-500" : ""}`}>{h.time}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex items-center justify-between gap-4 rounded-3xl bg-forest-950 p-6 text-white sm:p-7">
        <p className="font-semibold">
          সামাজিক মাধ্যমে
          <span className="block text-sm font-normal text-white/60">নিয়মিত আপডেট পেতে</span>
        </p>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="grid size-10 place-items-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
            >
              <Icon name={s.icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
