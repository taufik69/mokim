import Image from "next/image";
import { pillars } from "@/lib/site";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const promises = ["১০০% স্বচ্ছ হিসাব", "বার্ষিক অডিট রিপোর্ট", "মাঠ পর্যায়ে সরাসরি তদারকি"];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="আমরা কারা"
          title={
            <>
              মানুষের পাশে, <span className="text-brand-600">মানুষের জন্য</span>
            </>
          }
          text="তিনটি মূল স্তম্ভের ওপর দাঁড়িয়ে আমরা টেকসই পরিবর্তনের জন্য কাজ করি।"
        />

        <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="group relative min-h-[320px] overflow-hidden rounded-3xl lg:row-span-2">
            <Image
              src="/images/hands.jpg"
              alt="একতার প্রতীক হাতের ছাপ"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-5xl font-bold text-gold-400">১২+</p>
              <p className="mt-1 text-lg">বছর ধরে মানবসেবায়</p>
            </div>
          </Reveal>

          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className={`group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8 ${
                i === 0 ? "bg-brand-600 text-white" : i === 1 ? "bg-cream" : "bg-gold-300/40"
              } ${i === 2 ? "lg:col-span-2" : ""}`}
            >
              <span
                className={`grid size-14 place-items-center rounded-2xl ${
                  i === 0 ? "bg-white/15 text-gold-300" : "bg-white text-brand-600 shadow-card"
                }`}
              >
                <Icon name={p.icon} className="size-7" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">{p.title}</h3>
              <p className={`mt-2 leading-relaxed ${i === 0 ? "text-white/80" : "text-forest-900/70"}`}>{p.text}</p>
              {i === 2 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {promises.map((t) => (
                    <li key={t} className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm">
                      <Icon name="check" className="size-4 text-brand-600" /> {t}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#" variant="dark" arrow>
            আমাদের গল্প পড়ুন
          </Button>
        </div>
      </div>
    </section>
  );
}
