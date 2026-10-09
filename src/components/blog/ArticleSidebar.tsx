import Image from "next/image";
import Link from "next/link";
import { posts, type Post } from "@/lib/blog";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import ShareButtons from "./ShareButtons";

export default function ArticleSidebar({ post }: { post: Post }) {
  const recent = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <aside className="grid min-w-0 gap-6 lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest-900/5">
        <p className="mb-4 font-bold">শেয়ার করুন</p>
        <ShareButtons title={post.title} />
      </div>

      <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-forest-900 p-7 text-white shadow-lift">
        <span className="lattice pointer-events-none absolute inset-0 -z-10" />
        <span className="pointer-events-none absolute -top-12 -right-12 -z-10 size-40 rounded-full bg-gold-400/25 blur-2xl" />
        <span className="grid size-12 place-items-center rounded-2xl bg-white/15">
          <Icon name="heart" className="size-6" />
        </span>
        <h3 className="mt-4 text-2xl leading-snug font-bold">
          চলুন একসাথে <span className="text-gold-400">পরিবর্তন</span> আনি
        </h3>
        <p className="mt-2 text-sm text-white/75">আপনার ছোট্ট দানেই এমন আরও গল্প লেখা হয়।</p>
        <div className="mt-6 grid gap-2">
          <Button href="/#donate" variant="gold" className="w-full">
            দান করুন
          </Button>
          <Button href="/get-involved#volunteer" variant="outline" className="w-full">
            স্বেচ্ছাসেবক হোন
          </Button>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest-900/5">
        <p className="mb-4 font-bold">সাম্প্রতিক লেখা</p>
        <ul className="grid gap-4">
          {recent.map((r) => (
            <li key={r.slug}>
              <Link href={`/blog/${r.slug}`} className="group flex gap-3">
                <span className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                  <Image src={r.image} alt="" fill sizes="64px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </span>
                <span className="min-w-0">
                  <span className="line-clamp-2 text-sm leading-snug font-semibold transition-colors group-hover:text-brand-600">
                    {r.title}
                  </span>
                  <span className="mt-1 block text-xs text-muted">{r.date}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
