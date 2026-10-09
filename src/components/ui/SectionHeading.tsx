import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "center" | "left";
  dark?: boolean;
  action?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, text, align = "center", dark, action }: Props) {
  const centered = align === "center";
  return (
    <div
      className={`mb-10 flex flex-col gap-6 md:mb-14 ${
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-xl"}>
        <span
          className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
            dark ? "bg-white/10 text-gold-300" : "bg-brand-50 text-brand-600"
          }`}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
        <h2
          className={`text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl ${
            dark ? "text-white" : "text-forest-900"
          }`}
        >
          {title}
        </h2>
        {text && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-muted"}`}>{text}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
