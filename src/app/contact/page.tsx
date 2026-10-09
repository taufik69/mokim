import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactSection from "@/components/contact/ContactSection";
import ContactFaq from "@/components/contact/ContactFaq";

export const metadata: Metadata = {
  title: "যোগাযোগ — সবুজ সেবা ফাউন্ডেশন",
  description:
    "ফোন, হোয়াটসঅ্যাপ, ইমেইল বা ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন। অফিসের ঠিকানা, সময় ও সাধারণ প্রশ্নের উত্তর।",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        crumb="যোগাযোগ"
        title="আমরা শুনতে প্রস্তুত"
        text="প্রশ্ন, পরামর্শ কিংবা সহায়তার প্রয়োজন — যেকোনো মাধ্যমে জানান, আমরা দ্রুত সাড়া দিই।"
        image="/images/volunteer.jpg"
      />
      <ContactChannels />
      <ContactSection />
      <ContactFaq />
    </>
  );
}
