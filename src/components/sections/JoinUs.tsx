import Link from "next/link";
import { joinOptions } from "@/lib/site";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function JoinUs() {
  return (
    <section id="join" className="pb-20 sm:pb-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="যুক্ত হোন"
          title="আপনিও হতে পারেন পরিবর্তনের অংশ"
          text="নিজের সুবিধামতো উপায় বেছে নিন — অর্থ, সময় বা দক্ষতা দিয়ে।"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {joinOptions.map((o, i) => (
            <Reveal key={o.title} delay={i * 90}>
              <Link
                href={`/get-involved#${o.id}`}
                className={`group relative flex h-full min-h-56 flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${o.tone} p-7 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift`}
              >
                <span className="absolute -top-10 -right-10 size-36 rounded-full border-[18px] border-white/10 transition-transform duration-500 group-hover:scale-125" />
                <span className="grid size-14 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm">
                  <Icon name={o.icon} className="size-7" />
                </span>
                <h3 className="mt-auto pt-8 text-xl font-bold">{o.title}</h3>
                <p className="mt-1 text-sm text-white/80">{o.text}</p>
                <Icon
                  name="arrowUpRight"
                  className="absolute right-6 bottom-7 size-6 opacity-0 transition-all duration-300 group-hover:opacity-100"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
