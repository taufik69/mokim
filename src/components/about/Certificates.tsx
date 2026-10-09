import { certificates } from "@/lib/about";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certificates() {
  return (
    <section className="lattice-light bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="অনুমোদন ও সনদ"
          title="আইনি স্বীকৃতি ও নিবন্ধন"
          text="আমাদের সকল কার্যক্রম সরকারি নিবন্ধন ও আন্তর্জাতিক মানদণ্ড মেনে পরিচালিত।"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={i * 100}
              className={`group ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-gradient-to-br from-brand-50 to-gold-300/40">
                  <span className="absolute inset-6 rounded-xl border-2 border-dashed border-brand-600/20" />
                  <div className="relative w-3/5 rounded-lg bg-white p-4 text-center shadow-card transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105">
                    <Icon name="shield" className="mx-auto size-8 text-brand-600" />
                    <p className="mt-2 text-xs font-bold tracking-wide text-forest-900">CERTIFICATE</p>
                    <span className="mx-auto mt-2 block h-1 w-2/3 rounded bg-forest-900/10" />
                    <span className="mx-auto mt-1 block h-1 w-1/2 rounded bg-forest-900/10" />
                  </div>
                  <span className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600">
                    {c.year}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                  <a
                    href="#"
                    className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-50 font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                  >
                    <Icon name="download" className="size-5" /> ডাউনলোড
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
