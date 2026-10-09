import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import BlogBrowser from "@/components/blog/BlogBrowser";

export const metadata: Metadata = {
  title: "ব্লগ — সবুজ সেবা ফাউন্ডেশন",
  description: "মাঠের গল্প, ইভেন্টের খবর, ত্রাণ ও শিক্ষা কার্যক্রমের হালনাগাদ এবং মতামত।",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        crumb="ব্লগ"
        title="মাঠ থেকে গল্প"
        text="ইভেন্ট, ত্রাণ, শিক্ষা আর স্বেচ্ছাসেবকদের অভিজ্ঞতা — আমাদের কাজের সর্বশেষ খবর।"
        image="/images/learning.jpg"
        tone="cream"
      />
      <BlogBrowser />
    </>
  );
}
