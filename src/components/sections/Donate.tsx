import Image from "next/image";
import Icon from "@/components/ui/Icon";
import DonateForm from "./DonateForm";

const impacts = [
  { amount: "৳ ৫০০", text: "একটি শিশুর এক মাসের বই ও খাতা" },
  { amount: "৳ ২,০০০", text: "একটি পরিবারের এক সপ্তাহের খাবার" },
  { amount: "৳ ১০,০০০", text: "একটি গ্রামে বিশুদ্ধ পানির নলকূপ" },
];

export default function Donate() {
  return (
    <section id="donate" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-[2rem] bg-forest-900 shadow-lift lg:grid-cols-2">
          <div className="lattice relative isolate p-8 text-white sm:p-12">
            <Image
              src="/images/change.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="-z-20 object-cover opacity-25"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-700/90 to-forest-950/95" />
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-gold-300">
              <Icon name="sparkle" className="size-4" /> আপনার অনুদানের প্রভাব
            </span>
            <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
              ছোট্ট একটি দান,
              <br />
              <span className="text-gold-400">অনেক বড় পরিবর্তন</span>
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              অনুদান দেওয়ার পর রসিদ ও প্রকল্পের হালনাগাদ তথ্য সরাসরি আপনার ইমেইলে পৌঁছে যাবে।
            </p>
            <ul className="mt-8 grid gap-3">
              {impacts.map((i) => (
                <li key={i.amount} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span className="min-w-24 text-lg font-bold text-gold-400">{i.amount}</span>
                  <span className="text-sm text-white/80">{i.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 sm:p-12">
            <DonateForm />
          </div>
        </div>
      </div>
    </section>
  );
}
