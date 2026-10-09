import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import Icon from "@/components/ui/Icon";

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <article className="group mb-10">
      <Link
        href={`/blog/${post.slug}`}
        className="grid overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-forest-900/5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-80">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-forest-900 shadow-lift">
            <Icon name="sparkle" className="size-3.5" /> সর্বশেষ লেখা
          </span>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-10">
          <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">{post.category}</span>
          <h2 className="mt-4 text-2xl leading-snug font-bold transition-colors group-hover:text-brand-600 sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-brand-600 text-white">
                <Icon name="user" className="size-4" />
              </span>
              {post.author}
            </span>
            <span>{post.date}</span>
            <span>{post.readTime} পড়া</span>
          </div>
          <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-all group-hover:bg-brand-700 group-hover:shadow-glow">
            পুরো লেখা পড়ুন
            <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
