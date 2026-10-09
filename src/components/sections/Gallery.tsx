import Image from "next/image";
import { gallery } from "@/lib/content";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="গ্যালারি"
          title="ছবিতে আমাদের পথচলা"
          action={
            <Button href="/gallery" variant="dark" arrow>
              সব ছবি দেখুন
            </Button>
          }
        />
        <div className="grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.src + i}
              delay={i * 60}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${g.span} ${i === 0 ? "col-span-2" : ""}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-950/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-semibold text-white">{g.alt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
