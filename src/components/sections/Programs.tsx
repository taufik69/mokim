import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/content";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Programs() {
  return (
    <section id="programs" className="bg-white pb-20 sm:pb-28">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="চলমান কার্যক্রম"
          title="যেখানে আপনার অনুদান কাজ করছে"
          text="প্রতিটি প্রকল্প মাঠ পর্যায়ে নিয়মিত তদারকি করা হয় এবং ফলাফল প্রকাশ করা হয়।"
          action={
            <Button href="/activities" variant="primary" arrow>
              সব কার্যক্রম
            </Button>
          }
        />

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {programs.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              delay={i * 120}
              className="group w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto"
            >
              <Link
                href="/activities"
                className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 82vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-forest-900">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    বিস্তারিত দেখুন
                    <Icon name="arrowUpRight" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
