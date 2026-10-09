import Image from "next/image";
import type { Block, Post } from "@/lib/blog";
import Icon from "@/components/ui/Icon";

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold sm:text-3xl">
          {b.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-8 rounded-3xl border-l-4 border-gold-400 bg-cream p-6 sm:p-8">
          <Icon name="quote" className="size-7 text-gold-500" />
          <p className="mt-2 text-xl leading-snug font-semibold sm:text-2xl">{b.text}</p>
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="my-6 grid gap-3">
          {b.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                <Icon name="check" className="size-3.5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="mb-5">
          {b.text}
        </p>
      );
  }
}

export default function ArticleBody({ post }: { post: Post }) {
  return (
    <article className="min-w-0">
      <figure className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift">
        <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
      </figure>
      <div className="text-base leading-[1.9] text-forest-900/85 sm:text-lg">{post.body.map(renderBlock)}</div>
      <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-forest-900/10 pt-6 text-sm">
        <span className="font-semibold">বিভাগ:</span>
        <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600">{post.category}</span>
      </div>
    </article>
  );
}
