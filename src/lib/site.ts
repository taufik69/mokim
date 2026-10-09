export const site = {
  name: "সবুজ সেবা",
  tagline: "FOUNDATION",
  fullName: "সবুজ সেবা ফাউন্ডেশন",
  email: "hello@example.org",
  phone: "+৮৮০ ১৭০০-০০০০০০",
  address: "ঢাকা, বাংলাদেশ",
};

export const navLinks = [
  { label: "হোম", href: "/" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "কার্যক্রম", href: "/activities" },
  { label: "তহবিল", href: "/#funds" },
  { label: "গ্যালারি", href: "/gallery" },
  { label: "যুক্ত হোন", href: "/get-involved" },
  { label: "ব্লগ", href: "/blog" },
  { label: "যোগাযোগ", href: "/contact" },
];

export const stats = [
  { value: 250000, suffix: "+", label: "উপকৃত মানুষ" },
  { value: 64, suffix: "", label: "জেলায় কার্যক্রম" },
  { value: 1200, suffix: "+", label: "স্বেচ্ছাসেবক" },
  { value: 98, suffix: "%", label: "অনুদান সরাসরি প্রকল্পে" },
];

export const pillars = [
  {
    icon: "cap",
    title: "শিক্ষা",
    text: "সুবিধাবঞ্চিত শিশুদের জন্য স্কুল, বৃত্তি, পাঠাগার ও দক্ষতাভিত্তিক প্রশিক্ষণ।",
  },
  {
    icon: "hands",
    title: "মানবসেবা",
    text: "দুর্যোগে ত্রাণ, বিশুদ্ধ পানি, চিকিৎসা সহায়তা ও দীর্ঘমেয়াদি পুনর্বাসন।",
  },
  {
    icon: "book",
    title: "সচেতনতা",
    text: "প্রকাশনা, কর্মশালা ও অনলাইন কোর্সে নৈতিক ও সামাজিক মূল্যবোধের চর্চা।",
  },
] as const;

export const joinOptions = [
  { id: "donor", icon: "heart", title: "নিয়মিত দাতা", text: "মাসিক অল্প অনুদানে বড় পরিবর্তন", tone: "from-brand-600 to-brand-700" },
  { id: "life", icon: "gift", title: "আজীবন সদস্য", text: "একবার যুক্ত হোন, সারাজীবন পাশে থাকুন", tone: "from-sky-500 to-blue-600" },
  { id: "volunteer", icon: "users", title: "স্বেচ্ছাসেবক", text: "সময় ও দক্ষতা দিয়ে মাঠে কাজ করুন", tone: "from-gold-400 to-amber-brand" },
  { id: "career", icon: "briefcase", title: "ক্যারিয়ার", text: "আমাদের টিমে পেশাদার হিসেবে যোগ দিন", tone: "from-violet-500 to-purple-700" },
] as const;
