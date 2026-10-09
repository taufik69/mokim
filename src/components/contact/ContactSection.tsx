import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";
import ContactAside from "./ContactAside";

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-10">
        <div className="rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-forest-900/5 sm:p-10">
          <SectionHeading
            align="left"
            eyebrow="বার্তা পাঠান"
            title="আপনার কথা আমাদের জানান"
            text="প্রশ্ন, পরামর্শ বা সহায়তার আবেদন — ফর্মটি পূরণ করুন, আমাদের টিম দ্রুত যোগাযোগ করবে।"
          />
          <div className="-mt-4">
            <ContactForm />
          </div>
        </div>
        <ContactAside />
      </div>
    </section>
  );
}
