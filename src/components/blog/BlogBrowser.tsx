"use client";

import { useState } from "react";
import { blogCategories, posts } from "@/lib/blog";
import Icon from "@/components/ui/Icon";
import FeaturedPost from "./FeaturedPost";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

const PER_PAGE = 6;
const bn = new Intl.NumberFormat("bn-BD");

export default function BlogBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("সকল");
  const [page, setPage] = useState(1);

  const q = query.trim();
  const filtering = q !== "" || category !== "সকল";
  const matches = posts.filter(
    (p) => (category === "সকল" || p.category === category) && (!q || p.title.includes(q) || p.excerpt.includes(q)),
  );
  // The newest post is featured on the unfiltered first page; the grid shows the rest.
  const [featured, ...rest] = matches;
  const gridPosts = filtering ? matches : rest;
  const totalPages = Math.ceil(gridPosts.length / PER_PAGE);
  const shown = gridPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const reset = (fn: () => void) => {
    fn();
    setPage(1);
  };

  return (
    <section className="lattice-light bg-cream py-12 sm:py-20">
      <div className="container-page">
        <div className="mb-10 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <label className="relative block lg:order-last lg:w-80">
            <span className="sr-only">ব্লগ খুঁজুন</span>
            <Icon name="search" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => reset(() => setQuery(e.target.value))}
              placeholder="লেখা খুঁজুন..."
              className="h-12 w-full rounded-2xl border border-forest-900/10 bg-white pr-4 pl-12 shadow-card transition focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15 focus:outline-none"
            />
          </label>
          <div role="group" aria-label="বিভাগ" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => reset(() => setCategory(c))}
                className={`h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  category === c ? "bg-brand-600 text-white shadow-glow" : "bg-white ring-1 ring-forest-900/10 hover:text-brand-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {!filtering && page === 1 && featured && <FeaturedPost post={featured} />}

        {filtering && (
          <p className="mb-6 text-sm text-muted" role="status">
            {bn.format(matches.length)}টি লেখা পাওয়া গেছে
          </p>
        )}

        {shown.length > 0 ? (
          <div key={`${category}-${q}-${page}`} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <div key={p.slug} className="animate-[fade-up_.5s_ease-out_both]" style={{ animationDelay: `${i * 60}ms` }}>
                <PostCard post={p} />
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-3xl bg-white p-12 text-center text-muted shadow-card">কোনো লেখা পাওয়া যায়নি। অন্য শব্দে খুঁজে দেখুন।</p>
        )}

        <Pagination page={page} total={totalPages} onChange={setPage} />
      </div>
    </section>
  );
}
