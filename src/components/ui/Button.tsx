import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import Icon from "./Icon";

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-glow",
  gold: "bg-gold-400 text-forest-900 hover:bg-gold-500",
  outline: "border border-white/40 text-white backdrop-blur-sm hover:border-white hover:bg-white/10",
  soft: "bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white",
  dark: "bg-forest-900 text-white hover:bg-forest-800",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
} as const;

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function buttonClass(variant: keyof typeof variants = "primary", size: keyof typeof sizes = "md") {
  return `group inline-flex items-center justify-center gap-2 rounded-xl whitespace-nowrap font-semibold transition-all duration-250 ease-standard active:scale-[.98] ${variants[variant]} ${sizes[size]}`;
}

export default function Button({ variant, size, arrow, className = "", children, ...rest }: Props) {
  return (
    <Link className={`${buttonClass(variant, size)} ${className}`} {...rest}>
      {children}
      {arrow && <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}
