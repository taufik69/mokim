"use client";

import { useEffect, useState } from "react";
import { joinOptions } from "@/lib/site";
import { involveDetails, type InvolveId } from "@/lib/involve";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import RolePicker from "./RolePicker";
import InvolveDetails from "./InvolveDetails";
import DonorForm from "./DonorForm";
import LifeForm from "./LifeForm";
import VolunteerForm from "./VolunteerForm";
import CareerList from "./CareerList";

const ids = joinOptions.map((o) => o.id) as InvolveId[];
const panels: Record<InvolveId, { heading: string; node: React.ReactNode }> = {
  donor: { heading: "নিয়মিত দান সেট করুন", node: <DonorForm /> },
  life: { heading: "আজীবন সদস্যপদের আবেদন", node: <LifeForm /> },
  volunteer: { heading: "স্বেচ্ছাসেবক নিবন্ধন", node: <VolunteerForm /> },
  career: { heading: "চলমান নিয়োগ", node: <CareerList /> },
};

export default function InvolveHub() {
  const [active, setActive] = useState<InvolveId>("donor");

  // Deep links such as /get-involved#volunteer open the matching tab.
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1) as InvolveId;
      if (ids.includes(hash)) setActive(hash);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const choose = (id: InvolveId) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };
  const option = joinOptions.find((o) => o.id === active)!;

  return (
    <section className="lattice-light bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="যুক্ত হওয়ার উপায়"
          title={
            <>
              আপনার পথ <span className="text-brand-600">বেছে নিন</span>
            </>
          }
          text="অর্থ, সময় বা দক্ষতা — যেভাবে সুবিধা, সেভাবেই পাশে দাঁড়ান।"
        />
        <RolePicker active={active} onChange={choose} />

        <div
          id="involve-panel"
          role="tabpanel"
          key={active}
          className="mt-12 grid animate-[fade-up_.45s_ease-out_both] grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12"
        >
          <InvolveDetails detail={involveDetails[active]} title={option.title} />

          <aside className="order-first lg:sticky lg:top-28 lg:order-none lg:self-start">
            <div className="rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-forest-900/5 sm:p-8">
              <div className="mb-6 flex items-center gap-3 border-b border-forest-900/5 pb-5">
                <span className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${option.tone} text-white`}>
                  <Icon name={option.icon} className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-amber-brand">{option.title}</p>
                  <h3 className="text-xl font-bold">{panels[active].heading}</h3>
                </div>
              </div>
              {panels[active].node}
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
              <Icon name="shield" className="size-4 text-brand-600" /> আপনার তথ্য সম্পূর্ণ সুরক্ষিত থাকবে
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
