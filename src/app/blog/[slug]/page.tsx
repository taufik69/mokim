import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/blog";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleSidebar from "@/components/blog/ArticleSidebar";
import RelatedPosts from "@/components/blog/RelatedPosts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "লেখা পাওয়া যায়নি" };
  return {
    title: `${post.title} — সবুজ সেবা ফাউন্ডেশন`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <ArticleHero post={post} />
      <div className="py-12 sm:py-20">
        <div className="container-page grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          <ArticleBody post={post} />
          <ArticleSidebar post={post} />
        </div>
      </div>
      <RelatedPosts post={post} />
    </>
  );
}
