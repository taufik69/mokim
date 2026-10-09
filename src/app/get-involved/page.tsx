import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import InvolveHub from "@/components/involve/InvolveHub";
import Faq from "@/components/involve/Faq";

export const metadata: Metadata = {
  title: "যুক্ত হোন — সবুজ সেবা ফাউন্ডেশন",
  description: "নিয়মিত দাতা, আজীবন সদস্য, স্বেচ্ছাসেবক বা পেশাদার হিসেবে আমাদের সাথে যুক্ত হোন।",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageBanner
        crumb="যুক্ত হোন"
        title="আমাদের সাথে যুক্ত হোন"
        text="অর্থ, সময় কিংবা দক্ষতা — আপনার প্রতিটি অবদান কারও জীবনে আলো জ্বালায়।"
        image="/images/hands.jpg"
        tone="cream"
      />
      <InvolveHub />
      <Faq />
    </>
  );
}
