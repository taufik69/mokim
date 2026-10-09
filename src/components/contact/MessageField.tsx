"use client";

import { useState } from "react";
import { Field, fieldClass } from "@/components/ui/FormKit";

const MAX = 600;
const bn = new Intl.NumberFormat("bn-BD");

export default function MessageField() {
  const [length, setLength] = useState(0);

  return (
    <Field label="বার্তা" required>
      <textarea
        name="message"
        required
        rows={5}
        maxLength={MAX}
        onChange={(e) => setLength(e.target.value.length)}
        className={`${fieldClass} h-auto resize-y py-3 leading-relaxed`}
        placeholder="কীভাবে সাহায্য করতে পারি, বিস্তারিত লিখুন…"
      />
      <span
        className={`-mt-1 text-right text-xs font-normal ${length > MAX * 0.9 ? "text-amber-brand" : "text-muted"}`}
      >
        {bn.format(length)} / {bn.format(MAX)}
      </span>
    </Field>
  );
}
