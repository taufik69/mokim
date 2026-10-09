import type { Metadata } from "next";
import { finance, goals } from "@/lib/about";
import PageBanner from "@/components/layout/PageBanner";
import AboutIntro from "@/components/about/AboutIntro";
import Certificates from "@/components/about/Certificates";
import Principles from "@/components/about/Principles";
import TabbedList from "@/components/about/TabbedList";
import Reports from "@/components/about/Reports";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে — সবুজ সেবা ফাউন্ডেশন",
  description:
    "আমাদের পরিচয়, লক্ষ্য, নীতি ও আদর্শ, আয়-ব্যয়ের নীতিমালা এবং মাসিক প্রতিবেদন।",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        crumb="আমাদের সম্পর্কে"
        title="আমাদের সম্পর্কে"
        text="এক যুগ ধরে মানুষের পাশে — স্বচ্ছতা, জবাবদিহিতা আর ভালোবাসা নিয়ে।"
        image="/images/hero.jpg"
      />
      <AboutIntro />
      <Certificates />
      <Principles />
      <TabbedList
        tone="cream"
        eyebrow="লক্ষ্য-উদ্দেশ্য"
        title="আমরা যা অর্জন করতে চাই"
        text="তিনটি মূল খাতে আমাদের দীর্ঘমেয়াদি লক্ষ্য।"
        tabs={goals}
      />
      <TabbedList
        eyebrow="আয়-ব্যয়ের নীতিমালা"
        title={
          <>
            প্রতিটি টাকার <span className="text-brand-600">স্বচ্ছ হিসাব</span>
          </>
        }
        text="অর্থ কোথা থেকে আসে এবং কোথায় যায় — সম্পূর্ণ খোলামেলা।"
        tabs={finance}
      />
      <Newsletter />
      <Reports />
    </>
  );
}
