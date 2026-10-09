import Link from "next/link";
import Icon from "@/components/ui/Icon";

const amounts = ["৫০০", "১,০০০", "৫,০০০"];

export default function HeroCard() {
  const percent = 69;
  return (
    <div className="enter enter-3 relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
      <div className="absolute -top-6 -right-4 z-10 hidden animate-float rounded-2xl bg-gold-400 px-4 py-3 text-forest-900 shadow-lift sm:block">
        <p className="text-xs font-medium">আজকের অনুদান</p>
        <p className="text-xl font-bold">৳ ২,৪৫,৬০০</p>
      </div>

      <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl sm:p-7">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-brand-600">
            <Icon name="heart" className="size-5" />
          </span>
          <div>
            <p className="text-xs tracking-wide text-white/60 uppercase">চলমান ক্যাম্পেইন</p>
            <h2 className="text-lg font-semibold">জরুরি বন্যা ত্রাণ ২০২৬</h2>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm">
            <span className="text-white/70">সংগৃহীত</span>
            <span className="font-semibold">{percent}%</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-gold-400"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="font-semibold">৳ ৩৪,৫০,০০০</span>
            <span className="text-white/60">লক্ষ্য ৳ ৫০,০০,০০০</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {amounts.map((a, i) => (
            <Link
              key={a}
              href="#donate"
              className={`rounded-xl border py-2.5 text-center text-sm font-semibold transition-colors ${
                i === 1
                  ? "border-gold-400 bg-gold-400 text-forest-900"
                  : "border-white/20 hover:border-white/50 hover:bg-white/10"
              }`}
            >
              ৳ {a}
            </Link>
          ))}
        </div>

        <Link
          href="#donate"
          className="mt-4 flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 font-semibold transition-all hover:bg-brand-700 hover:shadow-glow"
        >
          ক্যাম্পেইনে দান করুন
          <Icon name="arrow" className="size-5" />
        </Link>

        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60">
          <Icon name="shield" className="size-4" />
          নিরাপদ পেমেন্ট · ট্যাক্স রেয়াত সুবিধা
        </p>
      </div>
    </div>
  );
}
