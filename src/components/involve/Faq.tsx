import { faqs } from "@/lib/involve";
import { site } from "@/lib/site";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="জিজ্ঞাসা"
            title="সাধারণ প্রশ্ন ও উত্তর"
            text="আরও কিছু জানার থাকলে সরাসরি আমাদের সাথে যোগাযোগ করুন।"
          />
          <div className="-mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 rounded-2xl bg-cream p-4 transition-colors hover:bg-brand-50">
              <span className="grid size-11 place-items-center rounded-xl bg-white text-brand-600 shadow-card">
                <Icon name="phone" className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted">হেল্পলাইন</span>
                <span className="font-semibold">{site.phone}</span>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl bg-cream p-4 transition-colors hover:bg-brand-50">
              <span className="grid size-11 place-items-center rounded-xl bg-white text-brand-600 shadow-card">
                <Icon name="mail" className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted">ইমেইল</span>
                <span className="font-semibold">{site.email}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="grid gap-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl bg-white shadow-card ring-1 ring-forest-900/5 transition-shadow open:shadow-lift"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold sm:p-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
                  <Icon name="close" className="size-4 rotate-45" />
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6 sm:pb-6">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
