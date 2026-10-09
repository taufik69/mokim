import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import Icon from "@/components/ui/Icon";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-600 backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="flex items-center gap-3 text-xs text-muted">
            <span className="flex items-center gap-1">
              <Icon name="calendar" className="size-3.5" /> {post.date}
            </span>
            <span className="size-1 rounded-full bg-forest-900/20" />
            <span>{post.readTime} পড়া</span>
          </p>
          <h3 className="mt-3 line-clamp-2 text-lg leading-snug font-bold transition-colors group-hover:text-brand-600 sm:text-xl">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
            পড়ুন
            <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
