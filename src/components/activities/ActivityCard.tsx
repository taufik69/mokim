import Image from "next/image";
import Link from "next/link";
import type { Activity } from "@/lib/activities";
import Icon from "@/components/ui/Icon";

export default function ActivityCard({ title, text, image, category, type, reach }: Activity) {
  return (
    <article className="group h-full">
      <Link
        href="#"
        className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-forest-900">
            {category}
          </span>
          <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-900 backdrop-blur">
            <Icon name="users" className="size-3.5 text-brand-600" />
            {reach}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-amber-brand">
            <Icon name="calendar" className="size-3.5" />
            {type} কার্যক্রম
          </p>
          <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-brand-600">{title}</h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{text}</p>
          <span className="mt-5 flex items-center justify-between border-t border-forest-900/5 pt-4 text-sm font-semibold text-brand-600">
            বিস্তারিত দেখুন
            <span className="grid size-9 place-items-center rounded-full bg-brand-50 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
              <Icon name="arrowUpRight" className="size-4" />
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
