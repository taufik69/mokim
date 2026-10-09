import { principles } from "@/lib/about";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const bn = new Intl.NumberFormat("bn-BD", { minimumIntegerDigits: 2 });

export default function Principles() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="নীতি ও আদর্শ"
          title={
            <>
              যে নীতিতে আমরা <span className="text-brand-600">অটল</span>
            </>
          }
          text="প্রতিটি সিদ্ধান্ত ও প্রকল্প এই দশটি মূলনীতির আলোকে নেওয়া হয়।"
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p}
              delay={(i % 4) * 70}
              className="group flex items-start gap-4 rounded-2xl border border-forest-900/5 bg-white p-5 shadow-card transition-all duration-300 hover:border-brand-600/25 hover:shadow-lift sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-base font-bold text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                {bn.format(i + 1)}
              </span>
              <p className="pt-2 leading-relaxed text-forest-900/85">{p}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
