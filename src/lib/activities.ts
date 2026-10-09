export const categories = ["সব", "শিক্ষা", "মানবসেবা", "দক্ষতা উন্নয়ন", "স্বাস্থ্য"] as const;

export type Category = Exclude<(typeof categories)[number], "সব">;

export type Activity = {
  slug: string;
  title: string;
  text: string;
  image: string;
  category: Category;
  type: "নিয়মিত" | "মৌসুমি";
  reach: string;
};

export const featured = {
  title: "প্রতিটি শিশুর জন্য স্কুল",
  text: "প্রত্যন্ত চর ও পাহাড়ি এলাকায় যেখানে কাছাকাছি কোনো স্কুল নেই, সেখানে আমরা এক কক্ষের কমিউনিটি স্কুল গড়ে তুলি। স্থানীয় শিক্ষক, বিনামূল্যে বই আর দুপুরের টিফিন — শিশুরা যেন ঝরে না পড়ে।",
  image: "/images/learning.jpg",
  facts: [
    { value: "৪২", label: "কমিউনিটি স্কুল" },
    { value: "৩,৬০০+", label: "শিক্ষার্থী" },
    { value: "৯৪%", label: "উপস্থিতির হার" },
  ],
};

export const activities: Activity[] = [
  {
    slug: "relief",
    title: "দুর্যোগে ত্রাণ ও পুনর্বাসন",
    text: "বন্যা, ঘূর্ণিঝড় ও অগ্নিকাণ্ডে ক্ষতিগ্রস্ত পরিবারের কাছে ৪৮ ঘণ্টার মধ্যে খাদ্য, আশ্রয় ও ওষুধ পৌঁছে দিই।",
    image: "/images/relief.jpg",
    category: "মানবসেবা",
    type: "নিয়মিত",
    reach: "৬০,০০০+ পরিবার",
  },
  {
    slug: "skills",
    title: "তরুণদের কারিগরি প্রশিক্ষণ",
    text: "কম্পিউটার, ইলেকট্রিক্যাল ও সেলাইয়ে তিন মাসের হাতে-কলমে প্রশিক্ষণ, শেষে চাকরি পেতে সহায়তা।",
    image: "/images/volunteer.jpg",
    category: "দক্ষতা উন্নয়ন",
    type: "নিয়মিত",
    reach: "৮,৫০০ প্রশিক্ষণার্থী",
  },
  {
    slug: "scholarship",
    title: "মেধাবৃত্তি কর্মসূচি",
    text: "অসচ্ছল পরিবারের মেধাবী শিক্ষার্থীদের মাসিক বৃত্তি ও মেন্টরিং, যাতে অর্থাভাবে পড়াশোনা থেমে না যায়।",
    image: "/images/smiles.jpg",
    category: "শিক্ষা",
    type: "নিয়মিত",
    reach: "১,২০০ বৃত্তি",
  },
  {
    slug: "water",
    title: "বিশুদ্ধ পানি প্রকল্প",
    text: "লবণাক্ত ও আর্সেনিক-প্রবণ এলাকায় গভীর নলকূপ ও পানি বিশুদ্ধকরণ প্ল্যান্ট স্থাপন।",
    image: "/images/hands.jpg",
    category: "স্বাস্থ্য",
    type: "নিয়মিত",
    reach: "৯০০+ নলকূপ",
  },
  {
    slug: "micro",
    title: "ক্ষুদ্র উদ্যোক্তা সহায়তা",
    text: "সুদমুক্ত পুঁজি, প্রশিক্ষণ ও বাজার সংযোগ দিয়ে নারী উদ্যোক্তাদের স্বাবলম্বী করে তোলা।",
    image: "/images/change.jpg",
    category: "দক্ষতা উন্নয়ন",
    type: "নিয়মিত",
    reach: "২,৩০০ উদ্যোক্তা",
  },
  {
    slug: "winter",
    title: "শীতবস্ত্র বিতরণ",
    text: "উত্তরাঞ্চলের শীতার্ত মানুষের জন্য কম্বল, সোয়েটার ও শিশুদের গরম কাপড় বিতরণ।",
    image: "/images/relief.jpg",
    category: "মানবসেবা",
    type: "মৌসুমি",
    reach: "৪৫,০০০ কম্বল",
  },
  {
    slug: "health-camp",
    title: "ফ্রি মেডিকেল ক্যাম্প",
    text: "বিশেষজ্ঞ চিকিৎসকদের নিয়ে গ্রামে গ্রামে বিনামূল্যে চিকিৎসা, ওষুধ ও প্রয়োজনে অপারেশনের ব্যবস্থা।",
    image: "/images/hero.jpg",
    category: "স্বাস্থ্য",
    type: "মৌসুমি",
    reach: "৩৫,০০০ রোগী",
  },
  {
    slug: "library",
    title: "গ্রামীণ পাঠাগার",
    text: "স্কুলভিত্তিক পাঠাগার ও ভ্রাম্যমাণ বইয়ের গাড়ি দিয়ে শিশুদের মধ্যে পড়ার অভ্যাস গড়ে তোলা।",
    image: "/images/learning.jpg",
    category: "শিক্ষা",
    type: "নিয়মিত",
    reach: "১২০ পাঠাগার",
  },
  {
    slug: "food",
    title: "খাদ্য সহায়তা কর্মসূচি",
    text: "বিধবা, বয়স্ক ও প্রতিবন্ধী মানুষের পরিবারে প্রতি মাসে নির্দিষ্ট খাদ্যপণ্যের প্যাকেট পৌঁছে দেওয়া।",
    image: "/images/smiles.jpg",
    category: "মানবসেবা",
    type: "নিয়মিত",
    reach: "৭,০০০ পরিবার",
  },
];
