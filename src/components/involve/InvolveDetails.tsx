import Image from "next/image";
import type { InvolveDetail } from "@/lib/involve";
import Icon from "@/components/ui/Icon";

const bn = new Intl.NumberFormat("bn-BD");

export default function InvolveDetails({ detail, title }: { detail: InvolveDetail; title: string }) {
  return (
    <div className="grid gap-8">
      <figure className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-lift">
        <Image src={detail.image} alt={title} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        <span className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
          <Icon name="quote" className="size-8 text-gold-400" />
          <p className="mt-2 max-w-lg text-lg leading-snug font-semibold sm:text-2xl">{detail.quote}</p>
        </figcaption>
      </figure>

      <div>
        <h2 className="text-2xl font-bold sm:text-3xl">{title} হিসেবে যুক্ত হোন</h2>
        <p className="mt-3 leading-relaxed text-forest-900/75">{detail.intro}</p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest-900/5 sm:p-8">
        <h3 className="flex items-center gap-2 text-lg font-bold">
          <Icon name="sparkle" className="size-5 text-gold-500" /> আপনি যা পাবেন
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {detail.benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                <Icon name="check" className="size-3.5" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold">কীভাবে কাজ করে</h3>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {detail.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl bg-cream p-4 sm:block sm:p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-600 font-bold text-white">
                {bn.format(i + 1)}
              </span>
              <div>
                <p className="font-bold sm:mt-3">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
