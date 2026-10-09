import Icon from "@/components/ui/Icon";

export default function ChannelCard() {
  return (
    <div className="relative isolate hidden overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-forest-900 p-6 text-white shadow-card lg:block">
      <span className="lattice pointer-events-none absolute inset-0 -z-10" />
      <span className="pointer-events-none absolute -top-10 -right-10 -z-10 size-32 rounded-full bg-gold-400/25 blur-2xl" />
      <span className="grid size-12 place-items-center rounded-2xl bg-white/15">
        <Icon name="youtube" className="size-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold">আমাদের ইউটিউব চ্যানেল</h3>
      <p className="mt-1 text-sm leading-relaxed text-white/75">মাঠের নতুন ভিডিও সবার আগে দেখতে সাবস্ক্রাইব করুন।</p>
      <a
        href="#"
        className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-gold-400 text-sm font-semibold text-forest-900 transition-colors hover:bg-gold-500"
      >
        সাবস্ক্রাইব করুন
        <Icon name="arrowUpRight" className="size-4" />
      </a>
    </div>
  );
}
