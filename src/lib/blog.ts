export const blogCategories = ["সকল", "ইভেন্ট", "ত্রাণ", "শিক্ষা", "স্বাস্থ্য", "মতামত"] as const;

export type BlogCategory = Exclude<(typeof blogCategories)[number], "সকল">;

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  author: string;
  image: string;
  body: Block[];
};

const sampleBody = (topic: string): Block[] => [
  { type: "p", text: `${topic} — এই আয়োজনের পেছনে ছিল দীর্ঘ প্রস্তুতি, স্থানীয় মানুষের অংশগ্রহণ আর স্বেচ্ছাসেবকদের অক্লান্ত পরিশ্রম। মাঠ পর্যায়ের অভিজ্ঞতা থেকে আমরা দেখেছি, সঠিক পরিকল্পনা ও স্বচ্ছতা থাকলে ছোট উদ্যোগও বড় পরিবর্তন আনতে পারে।` },
  { type: "h2", text: "কেন এই উদ্যোগ" },
  { type: "p", text: "প্রত্যন্ত এলাকায় অনেক পরিবার এখনো মৌলিক সুবিধা থেকে বঞ্চিত। তাদের প্রয়োজন বুঝতে আমাদের টিম আগে থেকেই জরিপ চালায় এবং স্থানীয় প্রতিনিধিদের সাথে আলোচনা করে অগ্রাধিকার ঠিক করে।" },
  { type: "quote", text: "সাহায্য তখনই অর্থবহ, যখন তা মানুষকে নিজের পায়ে দাঁড়াতে শেখায়।" },
  { type: "h2", text: "যা অর্জিত হয়েছে" },
  { type: "list", items: ["স্থানীয় স্বেচ্ছাসেবকদের নিয়ে বাস্তবায়ন কমিটি গঠন", "উপকারভোগীদের তালিকা যাচাই ও প্রকাশ", "সম্পূর্ণ ব্যয়ের হিসাব ওয়েবসাইটে প্রকাশ", "পরবর্তী ধাপের জন্য মূল্যায়ন প্রতিবেদন"] },
  { type: "p", text: "আপনার নিয়মিত সহযোগিতাই এই কাজগুলোকে সম্ভব করে তোলে। সামনের দিনগুলোতে আরও বেশি মানুষের কাছে পৌঁছাতে আমরা আপনাকে পাশে চাই।" },
];

export const posts: Post[] = [
  { slug: "youth-career-workshop", title: "তরুণদের নিয়ে দিনব্যাপী ক্যারিয়ার কর্মশালা সম্পন্ন", excerpt: "শতাধিক শিক্ষার্থী সিভি তৈরি, সাক্ষাৎকার প্রস্তুতি ও উদ্যোক্তা হওয়ার পথ নিয়ে হাতে-কলমে শিখলেন।", category: "ইভেন্ট", date: "১২ সেপ্টেম্বর, ২০২৬", readTime: "৪ মিনিট", author: "যোগাযোগ বিভাগ", image: "/images/volunteer.jpg", body: sampleBody("তরুণদের ক্যারিয়ার কর্মশালা") },
  { slug: "flood-relief-north", title: "উত্তরাঞ্চলে ১০,০০০ পরিবারে খাদ্যসহায়তা", excerpt: "বন্যা-পরবর্তী সংকটে স্বেচ্ছাসেবকদের নিরলস পরিশ্রমে প্রত্যন্ত চরে পৌঁছেছে খাদ্য ও বিশুদ্ধ পানি।", category: "ত্রাণ", date: "৫ সেপ্টেম্বর, ২০২৬", readTime: "৫ মিনিট", author: "ত্রাণ ইউনিট", image: "/images/relief.jpg", body: sampleBody("উত্তরাঞ্চলের বন্যা ত্রাণ") },
  { slug: "village-library", title: "গ্রামের স্কুলে নতুন পাঠাগার উদ্বোধন", excerpt: "পাঁচ শতাধিক বই নিয়ে যাত্রা শুরু, আশপাশের তিনটি গ্রামের শিক্ষার্থীদের জন্য উন্মুক্ত।", category: "শিক্ষা", date: "২৮ আগস্ট, ২০২৬", readTime: "৩ মিনিট", author: "শিক্ষা বিভাগ", image: "/images/books.jpg", body: sampleBody("গ্রামীণ পাঠাগার উদ্বোধন") },
  { slug: "medical-camp-bhola", title: "চরাঞ্চলে ফ্রি মেডিকেল ক্যাম্পে ২,০০০ রোগী", excerpt: "বিশেষজ্ঞ চিকিৎসকদের নিয়ে দুই দিনের ক্যাম্পে বিনামূল্যে চিকিৎসা, ওষুধ ও চোখের পরীক্ষা।", category: "স্বাস্থ্য", date: "১৯ আগস্ট, ২০২৬", readTime: "৪ মিনিট", author: "স্বাস্থ্য ইউনিট", image: "/images/smiles.jpg", body: sampleBody("চরাঞ্চলের মেডিকেল ক্যাম্প") },
  { slug: "community-school-day", title: "কমিউনিটি স্কুলে একদিন: শিশুদের চোখে স্বপ্ন", excerpt: "এক কক্ষের স্কুল থেকে কীভাবে বদলে যাচ্ছে একটি চরের শিশুদের ভবিষ্যৎ — মাঠ থেকে লেখা।", category: "শিক্ষা", date: "১০ আগস্ট, ২০২৬", readTime: "৬ মিনিট", author: "মাঠ প্রতিবেদক", image: "/images/learning.jpg", body: sampleBody("কমিউনিটি স্কুলের একটি দিন") },
  { slug: "why-regular-giving", title: "নিয়মিত দান কেন বেশি কার্যকর?", excerpt: "অল্প অল্প করে নিয়মিত দান কীভাবে দীর্ঘমেয়াদি প্রকল্পকে টেকসই করে — সহজ ভাষায় ব্যাখ্যা।", category: "মতামত", date: "২ আগস্ট, ২০২৬", readTime: "৫ মিনিট", author: "সম্পাদকীয়", image: "/images/change.jpg", body: sampleBody("নিয়মিত দানের গুরুত্ব") },
  { slug: "volunteer-training-camp", title: "স্বেচ্ছাসেবকদের জন্য তিন দিনের প্রশিক্ষণ ক্যাম্প", excerpt: "দুর্যোগকালীন উদ্ধার, প্রাথমিক চিকিৎসা ও দলগত কাজের ওপর নিবিড় প্রশিক্ষণ।", category: "ইভেন্ট", date: "২৪ জুলাই, ২০২৬", readTime: "৩ মিনিট", author: "স্বেচ্ছাসেবক সমন্বয়", image: "/images/hands.jpg", body: sampleBody("স্বেচ্ছাসেবক প্রশিক্ষণ ক্যাম্প") },
  { slug: "new-school-admission", title: "নতুন শিক্ষাবর্ষে ৬০০ শিশুর ভর্তি", excerpt: "ঝরে পড়া শিশুদের আবার স্কুলে ফেরাতে বাড়ি বাড়ি গিয়ে অভিভাবকদের সাথে কথা বলেছে আমাদের টিম।", category: "শিক্ষা", date: "১৫ জুলাই, ২০২৬", readTime: "৪ মিনিট", author: "শিক্ষা বিভাগ", image: "/images/group.jpg", body: sampleBody("নতুন শিক্ষাবর্ষে ভর্তি কার্যক্রম") },
  { slug: "winter-clothes-plan", title: "এবারের শীতবস্ত্র বিতরণের পরিকল্পনা", excerpt: "৪৫,০০০ কম্বলের লক্ষ্য নিয়ে কাজ শুরু — কোন জেলায়, কীভাবে ও কবে পৌঁছাবে সহায়তা।", category: "ত্রাণ", date: "৮ জুলাই, ২০২৬", readTime: "৩ মিনিট", author: "ত্রাণ ইউনিট", image: "/images/hero.jpg", body: sampleBody("শীতবস্ত্র বিতরণ পরিকল্পনা") },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
