"use client";

import { useState, type FormEvent } from "react";
import { topics } from "@/lib/contact";
import Icon from "@/components/ui/Icon";
import { Choice, Field, FormSuccess, fieldClass, submitClass } from "@/components/ui/FormKit";
import MessageField from "./MessageField";

export default function ContactForm() {
  const [topic, setTopic] = useState<string>(topics[0]);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("done"), 900);
  };

  if (state === "done") {
    return (
      <FormSuccess
        title="বার্তা পেয়েছি!"
        text="এটি ডেমো — বার্তা কোথাও পাঠানো হয়নি। আসল সাইটে ২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হবে।"
        onReset={() => setState("idle")}
      />
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <Field label="আপনার নাম" required>
        <input name="name" autoComplete="name" required className={fieldClass} placeholder="যেমন: আব্দুল করিম" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="মোবাইল নম্বর" required hint="ইংরেজি অঙ্কে, ১১ ডিজিট">
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            pattern="01[3-9][0-9]{8}"
            title="01 দিয়ে শুরু ১১ ডিজিটের নম্বর লিখুন"
            className={fieldClass}
            placeholder="01XXXXXXXXX"
          />
        </Field>
        <Field label="ইমেইল" hint="ঐচ্ছিক">
          <input name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">
          বিষয় <span className="text-red-500">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <Choice key={t} active={topic === t} onClick={() => setTopic(t)} className="h-10 rounded-full px-4">
              {t}
            </Choice>
          ))}
        </div>
        <input type="hidden" name="topic" value={topic} />
      </fieldset>

      <MessageField />

      <button
        type="submit"
        disabled={state === "sending"}
        className={`group ${submitClass} disabled:cursor-wait disabled:opacity-80`}
      >
        {state === "sending" ? (
          <span
            role="status"
            aria-label="পাঠানো হচ্ছে"
            className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
          />
        ) : (
          <>
            বার্তা পাঠান
            <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
