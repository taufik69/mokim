"use client";

import { useState, type FormEvent } from "react";
import { lifeTiers } from "@/lib/involve";
import Icon from "@/components/ui/Icon";
import { Field, FormSuccess, fieldClass, submitClass } from "@/components/ui/FormKit";

const bn = new Intl.NumberFormat("bn-BD");

export default function LifeForm() {
  const [tier, setTier] = useState(1);
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return <FormSuccess title="আবেদন জমা হয়েছে" text="এটি ডেমো — সদস্যপদের আবেদন কোথাও পাঠানো হয়নি।" onReset={() => setDone(false)} />;
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <fieldset className="grid gap-2">
        <legend className="mb-2 text-sm font-semibold">সদস্যপদের স্তর</legend>
        {lifeTiers.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-pressed={tier === i}
            onClick={() => setTier(i)}
            className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
              tier === i ? "border-brand-600 bg-brand-50 ring-2 ring-brand-600/20" : "border-forest-900/10 hover:border-brand-600/40"
            }`}
          >
            <span className="flex items-center gap-3">
              <span
                className={`grid size-5 place-items-center rounded-full border-2 ${
                  tier === i ? "border-brand-600 bg-brand-600 text-white" : "border-forest-900/20"
                }`}
              >
                {tier === i && <Icon name="check" className="size-3" />}
              </span>
              <span className="font-semibold">{t.name} সদস্য</span>
            </span>
            <span className="text-lg font-bold text-brand-600">৳{bn.format(t.amount)}</span>
          </button>
        ))}
      </fieldset>

      <Field label="পূর্ণ নাম" required>
        <input className={fieldClass} required placeholder="সনদে যে নাম থাকবে" />
      </Field>
      <Field label="মোবাইল বা ইমেইল" required>
        <input className={fieldClass} required placeholder="01XXXXXXXXX / you@mail.com" />
      </Field>

      <button type="submit" className={submitClass}>
        ৳{bn.format(lifeTiers[tier].amount)} — সদস্য হোন
        <Icon name="gift" className="size-5" />
      </button>
    </form>
  );
}
