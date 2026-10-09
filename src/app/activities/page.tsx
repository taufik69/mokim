import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import FeaturedActivity from "@/components/activities/FeaturedActivity";
import ActivityGrid from "@/components/activities/ActivityGrid";
import JoinUs from "@/components/sections/JoinUs";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "আমাদের কার্যক্রম — সবুজ সেবা ফাউন্ডেশন",
  description:
    "শিক্ষা, মানবসেবা, দক্ষতা উন্নয়ন ও স্বাস্থ্য খাতে আমাদের নিয়মিত ও মৌসুমি কার্যক্রম।",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageBanner
        crumb="কার্যক্রম"
        title="আমাদের কার্যক্রম"
        text="শিক্ষা থেকে ত্রাণ, প্রশিক্ষণ থেকে স্বাস্থ্যসেবা — দেশের ৬৪ জেলায় চলছে আমাদের কাজ।"
        image="/images/relief.jpg"
      />
      <FeaturedActivity />
      <ActivityGrid />
      <Newsletter />
      <div className="pt-20 sm:pt-28">
        <JoinUs />
      </div>
    </>
  );
}
