import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import Icon from "@/components/ui/Icon";

export default function ArticleHero({ post }: { post: Post }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 pt-32 pb-16 text-white sm:pt-40 sm:pb-24">
      <Image src={post.image} alt="" fill preload sizes="100vw" className="-z-30 object-cover" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/60" />
      <span className="lattice pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black)]" />

      <div className="container-page max-w-4xl">
        <nav aria-label="ব্রেডক্রাম্ব" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            <li>
              <Link href="/" className="-my-2 inline-block py-2 hover:text-white">
                হোম
              </Link>
            </li>
            <li aria-hidden="true">
              <Icon name="arrow" className="size-3.5 text-white/40" />
            </li>
            <li>
              <Link href="/blog" className="-my-2 inline-block py-2 hover:text-white">
                ব্লগ
              </Link>
            </li>
            <li aria-hidden="true">
              <Icon name="arrow" className="size-3.5 text-white/40" />
            </li>
            <li aria-current="page" className="font-semibold text-gold-300">
              {post.category}
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-5xl">{post.title}</h1>
        <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">{post.excerpt}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
          <span className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-brand-600">
              <Icon name="user" className="size-4" />
            </span>
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="calendar" className="size-4 text-gold-400" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="clock" className="size-4 text-gold-400" /> {post.readTime} পড়া
          </span>
        </div>
      </div>
    </section>
  );
}
