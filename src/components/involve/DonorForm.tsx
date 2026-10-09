"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";
import { Choice, Field, FormSuccess, fieldClass, submitClass } from "@/components/ui/FormKit";

const bn = new Intl.NumberFormat("bn-BD");
const plans = {
  দৈনিক: [10, 20, 50, 100, 200],
  সাপ্তাহিক: [100, 200, 500, 1000, 2000],
  মাসিক: [500, 1000, 2000, 5000, 10000],
} as const;
const methods = ["বিকাশ", "নগদ", "কার্ড"] as const;

type Plan = keyof typeof plans;

export default function DonorForm() {
  const [plan, setPlan] = useState<Plan>("মাসিক");
  const [amount, setAmount] = useState(1000);
  const [method, setMethod] = useState<(typeof methods)[number]>("বিকাশ");
  const [done, setDone] = useState(false);

  const pickPlan = (p: Plan) => {
    setPlan(p);
    setAmount(plans[p][1]);
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return <FormSuccess title="ধন্যবাদ!" text="এটি একটি ডেমো ফর্ম — কোনো লেনদেন হয়নি।" onReset={() => setDone(false)} />;
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="grid grid-cols-3 rounded-xl bg-cream p-1">
        {(Object.keys(plans) as Plan[]).map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={plan === p}
            onClick={() => pickPlan(p)}
            className={`h-11 rounded-lg text-sm font-semibold transition ${plan === p ? "bg-white text-brand-600 shadow-card" : "text-muted"}`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {plans[plan].map((a) => (
          <Choice key={a} active={amount === a} onClick={() => setAmount(a)} className="h-11">
            ৳{bn.format(a)}
          </Choice>
        ))}
        <input
          type="number"
          min={10}
          required
          aria-label="অন্য পরিমাণ"
          placeholder="অন্য ৳"
          value={(plans[plan] as readonly number[]).includes(amount) ? "" : amount || ""}
          onChange={(e) => setAmount(+e.target.value)}
          className={`${fieldClass} h-11 px-2 text-center text-sm`}
        />
      </div>

      <Field label="আপনার নাম">
        <input className={fieldClass} placeholder="নাম লিখুন" />
      </Field>
      <Field label="মোবাইল বা ইমেইল" required hint="রসিদ ও হালনাগাদ এখানে পাঠানো হবে">
        <input className={fieldClass} required placeholder="01XXXXXXXXX / you@mail.com" />
      </Field>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">পেমেন্ট মাধ্যম</legend>
        <div className="grid grid-cols-3 gap-2">
          {methods.map((m) => (
            <Choice key={m} active={method === m} onClick={() => setMethod(m)} className="h-11">
              {m}
            </Choice>
          ))}
        </div>
      </fieldset>

      <button type="submit" className={submitClass}>
        {plan} ৳{bn.format(amount || 0)} দান শুরু করুন
        <Icon name="heart" className="size-5" />
      </button>
    </form>
  );
}
