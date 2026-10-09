import Link from "next/link";
import { site } from "@/lib/site";
import Logo from "@/components/ui/Logo";
import Icon, { type IconName } from "@/components/ui/Icon";

const columns = [
  { title: "প্রতিষ্ঠান", links: ["আমাদের সম্পর্কে", "কার্যক্রম", "ব্লগ", "গ্যালারি"] },
  { title: "যুক্ত হোন", links: ["নিয়মিত দাতা", "আজীবন সদস্য", "স্বেচ্ছাসেবক", "ক্যারিয়ার"] },
  { title: "সহায়তা", links: ["যোগাযোগ", "শর্তাবলি", "গোপনীয়তা নীতি", "রিফান্ড নীতি"] },
];

const hrefs: Record<string, string> = {
  "আমাদের সম্পর্কে": "/about",
  কার্যক্রম: "/activities",
  ব্লগ: "/blog",
  গ্যালারি: "/gallery",
  "নিয়মিত দাতা": "/get-involved#donor",
  "আজীবন সদস্য": "/get-involved#life",
  স্বেচ্ছাসেবক: "/get-involved#volunteer",
  ক্যারিয়ার: "/get-involved#career",
  যোগাযোগ: "/contact",
};

const socials: { icon: IconName; label: string }[] = [
  { icon: "facebook", label: "Facebook" },
  { icon: "youtube", label: "YouTube" },
  { icon: "linkedin", label: "LinkedIn" },
];

const contacts: { icon: IconName; text: string }[] = [
  { icon: "pin", text: site.address },
  { icon: "phone", text: site.phone },
  { icon: "mail", text: site.email },
];

export default function Footer() {
  return (
    <footer className="lattice relative overflow-hidden bg-forest-950 text-white/75">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="container-page relative grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr] lg:py-20">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm leading-relaxed">
            শিক্ষা, মানবসেবা ও সামাজিক উন্নয়নের মাধ্যমে একটি ন্যায়ভিত্তিক ও সহমর্মী সমাজ গড়ার লক্ষ্যে আমরা কাজ করি।
          </p>
          <ul className="mt-6 grid gap-3 text-sm">
            {contacts.map((c) => (
              <li key={c.text} className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg bg-white/5 text-gold-400">
                  <Icon name={c.icon} className="size-4" />
                </span>
                {c.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-semibold text-white">{col.title}</h3>
              <ul className="grid gap-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href={hrefs[l] ?? "#"} className="transition-colors hover:text-gold-400">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm sm:flex-row">
        <p>© ২০২৬ {site.fullName} — সর্বস্বত্ব সংরক্ষিত।</p>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-full bg-white/5 transition-colors hover:bg-brand-600 hover:text-white"
            >
              <Icon name={s.icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
