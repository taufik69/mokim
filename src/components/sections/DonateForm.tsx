"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";

const presets = [500, 1000, 2000, 5000, 10000];
const bn = new Intl.NumberFormat("bn-BD");
const field =
  "h-12 w-full rounded-xl border border-forest-900/15 bg-white px-4 transition focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15 focus:outline-none";

export default function DonateForm() {
  const [monthly, setMonthly] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="grid h-full place-items-center text-center" role="status">
        <div>
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-50 text-brand-600">
            <Icon name="check" className="size-8" />
          </span>
          <h3 className="mt-4 text-2xl font-bold">জাযাকাল্লাহু খাইরান!</h3>
          <p className="mt-2 text-muted">এটি একটি ডেমো ফর্ম — কোনো লেনদেন হয়নি।</p>
          <button type="button" onClick={() => setDone(false)} className="mt-6 font-semibold text-brand-600">
            আবার দান করুন
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <h3 className="text-2xl font-bold">দ্রুত দান করুন</h3>

      <div role="radiogroup" aria-label="দানের ধরন" className="grid grid-cols-2 rounded-xl bg-cream p-1">
        {[false, true].map((m) => (
          <button
            key={String(m)}
            type="button"
            role="radio"
            aria-checked={monthly === m}
            onClick={() => setMonthly(m)}
            className={`h-11 rounded-lg font-semibold transition ${monthly === m ? "bg-white text-brand-600 shadow-card" : "text-muted"}`}
          >
            {m ? "মাসিক" : "এককালীন"}
          </button>
        ))}
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">পরিমাণ নির্বাচন করুন</legend>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(p)}
              className={`h-11 rounded-xl border text-sm font-semibold transition ${
                amount === p ? "border-brand-600 bg-brand-600 text-white" : "border-forest-900/15 hover:border-brand-600"
              }`}
            >
              ৳{bn.format(p)}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm font-semibold">
        অন্য পরিমাণ (৳)
        <input type="number" min={10} required value={amount} onChange={(e) => setAmount(+e.target.value)} className={field} />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        মোবাইল বা ইমেইল <span className="sr-only">(আবশ্যক)</span>
        <input type="text" required placeholder="01XXXXXXXXX / you@mail.com" className={`${field} font-normal`} />
      </label>

      <button
        type="submit"
        className="flex h-14 items-center justify-center gap-2 rounded-xl bg-brand-600 text-lg font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-glow active:scale-[.98]"
      >
        ৳{bn.format(amount || 0)} {monthly ? "মাসিক " : ""}দান করুন
        <Icon name="heart" className="size-5" />
      </button>
    </form>
  );
}
