"use client";

import { useState } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";

const targets: { icon: IconName; label: string; href: (url: string, title: string) => string }[] = [
  { icon: "facebook", label: "Facebook", href: (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  { icon: "linkedin", label: "LinkedIn", href: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  { icon: "chat", label: "WhatsApp", href: (u, t) => `https://wa.me/?text=${t}%20${u}` },
];

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const url = () => encodeURIComponent(window.location.href);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const btn =
    "grid size-11 place-items-center rounded-full bg-brand-50 text-brand-600 transition-colors duration-200 hover:bg-brand-600 hover:text-white";

  return (
    <div className="flex items-center gap-2">
      {targets.map((t) => (
        <button
          key={t.label}
          type="button"
          aria-label={`${t.label}-এ শেয়ার করুন`}
          onClick={() => window.open(t.href(url(), encodeURIComponent(title)), "_blank", "noopener,noreferrer")}
          className={btn}
        >
          <Icon name={t.icon} className="size-4" />
        </button>
      ))}
      <button type="button" aria-label="লিংক কপি করুন" onClick={copy} className={btn}>
        <Icon name={copied ? "check" : "link"} className="size-4" />
      </button>
      <span role="status" className="text-xs font-semibold text-brand-600">
        {copied ? "কপি হয়েছে" : ""}
      </span>
    </div>
  );
}
