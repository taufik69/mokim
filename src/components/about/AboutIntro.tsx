import Image from "next/image";
import { aboutIntro, mission } from "@/lib/about";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function AboutIntro() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <a
            href="#"
            aria-label="পরিচিতি ভিডিও দেখুন"
            className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift"
          >
            <Image
              src="/images/volunteer.jpg"
              alt="মাঠে কর্মরত স্বেচ্ছাসেবক"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
            <span className="absolute inset-0 m-auto grid size-20 place-items-center rounded-full bg-white/90 text-brand-600 shadow-lift transition-transform duration-300 group-hover:scale-110">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
              <Icon name="play" className="relative size-8 translate-x-0.5" />
            </span>
            <span className="absolute bottom-5 left-5 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
              ২ মিনিটে আমাদের গল্প
            </span>
          </a>
          <div className="absolute -right-3 -bottom-8 hidden rounded-2xl bg-gold-400 p-5 text-forest-900 shadow-lift sm:block">
            <p className="text-3xl font-bold">১২+</p>
            <p className="text-sm font-medium">বছরের পথচলা</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-600">
            <span className="size-1.5 rounded-full bg-current" /> আমাদের পরিচয়
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">{aboutIntro.title}</h2>
          {aboutIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-forest-900/75">
              {p}
            </p>
          ))}
          <dl className="mt-8 grid grid-cols-3 divide-x divide-forest-900/10 rounded-2xl bg-cream py-5">
            {aboutIntro.highlights.map((h) => (
              <div key={h.label} className="text-center">
                <dt className="text-sm text-muted">{h.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-brand-600">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="container-page mt-20 grid gap-5 md:grid-cols-3">
        {mission.map((m, i) => (
          <Reveal
            key={m.title}
            delay={i * 100}
            className="group rounded-3xl border border-forest-900/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/20 hover:shadow-lift"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
              <Icon name={m.icon} className="size-7" />
            </span>
            <h3 className="mt-5 text-xl font-bold">{m.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{m.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
