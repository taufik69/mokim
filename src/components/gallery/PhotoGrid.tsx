import Image from "next/image";
import type { Photo } from "@/lib/gallery";
import Icon from "@/components/ui/Icon";

type Props = { photos: Photo[]; onOpen: (index: number) => void };

export default function PhotoGrid({ photos, onOpen }: Props) {
  if (photos.length === 0) {
    return <p className="rounded-3xl bg-white p-10 text-center text-muted shadow-card">এই অ্যালবামে এখনো কোনো ছবি নেই।</p>;
  }

  return (
    <ul className="columns-2 gap-3 sm:gap-4 md:columns-3">
      {photos.map((p, i) => (
        <li
          key={p.alt}
          className="mb-3 break-inside-avoid animate-[fade-up_.5s_ease-out_both] sm:mb-4"
          style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
        >
          <button
            type="button"
            onClick={() => onOpen(i)}
            aria-label={`${p.alt} — বড় করে দেখুন`}
            className={`group relative block w-full overflow-hidden rounded-2xl bg-brand-50 sm:rounded-3xl ${p.ratio}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-standard group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
            <span className="absolute top-3 right-3 grid size-9 scale-75 place-items-center rounded-full bg-white/90 text-brand-600 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <Icon name="eye" className="size-4" />
            </span>
            <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block text-xs font-semibold text-gold-300">{p.album}</span>
              <span className="mt-0.5 block text-sm leading-snug font-semibold sm:text-base">{p.alt}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
