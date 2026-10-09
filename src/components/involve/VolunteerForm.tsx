"use client";

import { useState, type FormEvent } from "react";
import { districts, skills } from "@/lib/involve";
import Icon from "@/components/ui/Icon";
import { Choice, Field, FormSuccess, fieldClass, submitClass } from "@/components/ui/FormKit";

export default function VolunteerForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return <FormSuccess title="স্বাগতম!" text="এটি ডেমো — নিবন্ধন কোথাও পাঠানো হয়নি।" onReset={() => setDone(false)} />;
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <Field label="পূর্ণ নাম" required>
        <input className={fieldClass} required placeholder="নাম লিখুন" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="মোবাইল" required>
          <input className={fieldClass} required type="tel" placeholder="01XXXXXXXXX" />
        </Field>
        <Field label="বিভাগ" required>
          <select className={fieldClass} required defaultValue="">
            <option value="" disabled>
              নির্বাচন করুন
            </option>
            {districts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">যে কাজে আগ্রহী (একাধিক বাছতে পারেন)</legend>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Choice key={s} active={picked.includes(s)} onClick={() => toggle(s)} className="h-10 rounded-full px-4">
              {s}
            </Choice>
          ))}
        </div>
      </fieldset>

      <Field label="সপ্তাহে কত ঘণ্টা দিতে পারবেন?">
        <select className={fieldClass} defaultValue="২–৫ ঘণ্টা">
          <option>২ ঘণ্টার কম</option>
          <option>২–৫ ঘণ্টা</option>
          <option>৫–১০ ঘণ্টা</option>
          <option>১০ ঘণ্টার বেশি</option>
        </select>
      </Field>

      <button type="submit" className={submitClass}>
        স্বেচ্ছাসেবক হিসেবে নিবন্ধন
        <Icon name="users" className="size-5" />
      </button>
    </form>
  );
}
