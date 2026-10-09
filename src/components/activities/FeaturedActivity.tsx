import Image from "next/image";
import { featured } from "@/lib/activities";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedActivity() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="grid overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-forest-900/5 lg:grid-cols-2">
          <div className="group relative min-h-72 overflow-hidden lg:min-h-full">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-tr from-forest-950/50 to-transparent" />
            <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-gold-400 px-4 py-1.5 text-sm font-semibold text-forest-900 shadow-lift">
              <Icon name="sparkle" className="size-4" /> ফিচার্ড কার্যক্রম
            </span>
          </div>

          <div className="p-7 sm:p-10 lg:p-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-600">
              <Icon name="cap" className="size-4" /> শিক্ষা
            </span>
            <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-forest-900/75">{featured.text}</p>

            <dl className="mt-8 grid grid-cols-3 gap-3">
              {featured.facts.map((f) => (
                <div key={f.label} className="rounded-2xl bg-cream p-4 text-center">
                  <dd className="text-xl font-bold text-brand-600 sm:text-2xl">{f.value}</dd>
                  <dt className="mt-1 text-xs text-muted sm:text-sm">{f.label}</dt>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#donate" arrow>
                এই কার্যক্রমে দান করুন
              </Button>
              <Button href="#all" variant="soft">
                সব কার্যক্রম
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
