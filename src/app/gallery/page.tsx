import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import GalleryBrowser from "@/components/gallery/GalleryBrowser";

export const metadata: Metadata = {
  title: "গ্যালারি — সবুজ সেবা ফাউন্ডেশন",
  description: "ছবি ও ভিডিওতে আমাদের ত্রাণ, শিক্ষা, স্বাস্থ্য ও স্বেচ্ছাসেবী কার্যক্রম।",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        crumb="গ্যালারি"
        title="ছবিতে আমাদের পথচলা"
        text="মাঠের প্রতিটি মুহূর্ত — ত্রাণ, শিক্ষা, হাসি আর আশার গল্প।"
        image="/images/group.jpg"
        tone="cream"
      />
      <GalleryBrowser />
    </>
  );
}
