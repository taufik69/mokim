import { funds } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FundCard from "./FundCard";

export default function Funds() {
  return (
    <section id="funds" className="lattice-light bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="অনুদান তহবিল"
          title="আপনার পছন্দের তহবিলে দান করুন"
          text="প্রতিটি তহবিলের অগ্রগতি সরাসরি দেখুন — কত সংগ্রহ হলো, কতজন পাশে দাঁড়ালেন।"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {funds.map((f, i) => (
            <Reveal key={f.title} delay={i * 120} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <FundCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
