import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Parallax from "@/components/motion/Parallax";
import HeroCard from "./HeroCard";
import HeroDonors from "./HeroDonors";
import heroImg from "../../../public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-950 pt-28 pb-24 lg:pt-32">
      <Parallax speed={0.25}>
        <Image
          src={heroImg}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/40" />
      <div className="lattice absolute inset-0 -z-10 [mask-image:linear-gradient(90deg,black,transparent_60%)]" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div className="max-w-2xl text-white">
          <span className="enter mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
            <Icon name="shield" className="size-4 text-gold-400" />
            সরকার-নিবন্ধিত অলাভজনক প্রতিষ্ঠান
          </span>

          <h1 className="enter enter-1 text-4xl leading-[1.15] font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
            একটি হাসি,{" "}
            <span className="relative inline-block whitespace-nowrap text-gold-400">
              একটি স্বপ্ন
              <svg viewBox="0 0 200 12" className="absolute -bottom-1 left-0 h-3 w-full" aria-hidden="true">
                <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            একসাথে বদলাই জীবন
          </h1>

          <p className="enter enter-2 mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            শিক্ষা, মানবসেবা ও দক্ষতা উন্নয়নে আমরা কাজ করছি দেশের ৬৪ জেলায়। আপনার প্রতিটি অনুদান পৌঁছে যায় সঠিক মানুষের কাছে —
            স্বচ্ছতা ও জবাবদিহিতার সাথে।
          </p>

          <div className="enter enter-3 mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Button href="#donate" size="lg" arrow className="max-sm:h-12 max-sm:gap-1.5 max-sm:px-2 max-sm:text-[15px] max-[374px]:text-sm max-[374px]:[&_svg]:hidden">
              এখনই দান করুন
            </Button>
            <Button
              href="#programs"
              variant="outline"
              size="lg"
              className="max-sm:h-12 max-sm:gap-1.5 max-sm:px-2 max-sm:text-[15px] max-[374px]:text-sm max-[374px]:[&_svg]:hidden"
            >
              <Icon name="play" className="size-5" />
              কার্যক্রম দেখুন
            </Button>
          </div>

          <HeroDonors />
        </div>

        <HeroCard />
      </div>

      <a
        href="#about"
        aria-label="নিচে যান"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/60 md:flex"
      >
        স্ক্রল করুন
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 pt-1.5">
          <span className="size-1.5 animate-bounce rounded-full bg-white/80" />
        </span>
      </a>
    </section>
  );
}
