import Image from "next/image";
import { videos } from "@/lib/gallery";
import Icon from "@/components/ui/Icon";

export default function VideoGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {videos.map((v, i) => (
        <a
          key={v.title}
          href="#"
          className={`group animate-[fade-up_.5s_ease-out_both] ${i === 0 ? "sm:col-span-2" : ""}`}
          style={{ animationDelay: `${i * 70}ms` }}
        >
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-forest-900 shadow-card transition-shadow duration-300 group-hover:shadow-lift">
            <Image
              src={v.image}
              alt=""
              fill
              sizes={i === 0 ? "(min-width: 1024px) 900px, 100vw" : "(min-width: 1024px) 450px, 50vw"}
              className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
            <span
              className={`absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-brand-600 shadow-lift transition-transform duration-300 group-hover:scale-110 ${
                i === 0 ? "size-20" : "size-14"
              }`}
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
              <Icon name="play" className={`relative translate-x-0.5 ${i === 0 ? "size-8" : "size-6"}`} />
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-forest-950/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
              {v.length}
            </span>
            <span className="absolute inset-x-0 bottom-0 p-5 text-white">
              {i === 0 && (
                <span className="mb-2 inline-block rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-forest-900">
                  সর্বশেষ ভিডিও
                </span>
              )}
              <span className={`block font-bold ${i === 0 ? "text-2xl sm:text-3xl" : "text-lg"}`}>{v.title}</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
