import { posts, type Post } from "@/lib/blog";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "./PostCard";

export default function RelatedPosts({ post }: { post: Post }) {
  const others = posts.filter((p) => p.slug !== post.slug);
  // Same category first, then fill with the newest of the rest.
  const related = [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, 3);

  return (
    <section className="lattice-light bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="আরও পড়ুন"
          title="সম্পর্কিত লেখা"
          action={
            <Button href="/blog" variant="dark" arrow>
              সব লেখা
            </Button>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
