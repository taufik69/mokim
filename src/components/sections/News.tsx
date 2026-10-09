import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/blog";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function News() {
  const [lead, ...rest] = posts.slice(0, 3);
  return (
    <section id="news" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="সর্বশেষ খবর"
          title="মাঠ থেকে হালনাগাদ"
          action={
            <Button href="/blog" variant="soft" arrow>
              সব লেখা
            </Button>
          }
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal as="article" className="group">
            <Link href={`/blog/${lead.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600">
                  {lead.category}
                </span>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted">
                <Icon name="calendar" className="size-4" /> {lead.date}
              </p>
              <h3 className="mt-2 text-2xl font-bold transition-colors group-hover:text-brand-600">{lead.title}</h3>
              <p className="mt-2 text-muted">{lead.excerpt}</p>
            </Link>
          </Reveal>

          <div className="grid gap-6">
            {rest.map((n, i) => (
              <Reveal as="article" key={n.title} delay={(i + 1) * 120} className="group">
                <Link href={`/blog/${n.slug}`} className="grid gap-5 rounded-3xl p-3 transition-colors hover:bg-cream sm:grid-cols-[200px_1fr]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-auto">
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      sizes="(min-width: 640px) 200px, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="py-1">
                    <p className="flex items-center gap-2 text-sm text-muted">
                      <span className="font-semibold text-amber-brand">{n.category}</span> · {n.date}
                    </p>
                    <h3 className="mt-2 text-lg font-bold transition-colors group-hover:text-brand-600">{n.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted">{n.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
