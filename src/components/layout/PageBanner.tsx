import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Parallax from "@/components/motion/Parallax";

type Props = {
  title: string;
  text?: string;
  image: string;
  crumb: string;
  /** Colour of the section below, so the bottom curve blends into it. */
  tone?: "white" | "cream";
};

export default function PageBanner({ title, text, image, crumb, tone = "white" }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 pt-36 pb-24 text-white sm:pt-44 sm:pb-32">
      <Parallax>
        <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-forest-950/90 via-forest-950/75 to-forest-950/95" />
      <span className="lattice pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <span className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />

      <div className="container-page text-center">
        <nav aria-label="ব্রেডক্রাম্ব" className="enter mb-5 flex justify-center">
          <ol className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
            <li>
              <Link href="/" className="-my-2 inline-block py-2 text-white/70 transition-colors hover:text-white">
                হোম
              </Link>
            </li>
            <li aria-hidden="true">
              <Icon name="arrow" className="size-3.5 text-white/40" />
            </li>
            <li aria-current="page" className="font-semibold text-gold-300">
              {crumb}
            </li>
          </ol>
        </nav>
        <h1 className="enter enter-1 text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="enter enter-2 mx-auto mt-5 max-w-2xl text-base text-balance text-white/75 sm:text-lg">{text}</p>}
      </div>

      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-px h-10 w-full sm:h-14 ${tone === "cream" ? "fill-cream" : "fill-white"}`}
      >
        <path d="M0 60V30C240 0 480 0 720 20s480 40 720 10v30Z" />
      </svg>
    </section>
  );
}
