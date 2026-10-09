export const albums = ["সবগুলো", "ত্রাণ বিতরণ", "শিক্ষা", "স্বেচ্ছাসেবক", "স্বাস্থ্য ও পানি", "ইভেন্ট"] as const;

export type Album = Exclude<(typeof albums)[number], "সবগুলো">;

export type Photo = {
  src: string;
  alt: string;
  album: Album;
  date: string;
  /** Tailwind aspect class; mixes portrait and landscape for the masonry rhythm. */
  ratio: string;
};

export const photos: Photo[] = [
  { src: "/images/hero.jpg", alt: "হাসিমুখে গ্রামের শিশুরা", album: "শিক্ষা", date: "সেপ্টেম্বর ২০২৬", ratio: "aspect-[4/5]" },
  { src: "/images/relief.jpg", alt: "বন্যাদুর্গত এলাকায় খাদ্য বিতরণ", album: "ত্রাণ বিতরণ", date: "আগস্ট ২০২৬", ratio: "aspect-[4/3]" },
  { src: "/images/learning.jpg", alt: "কমিউনিটি স্কুলে পাঠচক্র", album: "শিক্ষা", date: "আগস্ট ২০২৬", ratio: "aspect-[3/2]" },
  { src: "/images/volunteer.jpg", alt: "ইভেন্টে দায়িত্বরত স্বেচ্ছাসেবক", album: "স্বেচ্ছাসেবক", date: "জুলাই ২০২৬", ratio: "aspect-[3/4]" },
  { src: "/images/hands.jpg", alt: "একতার প্রতীক — হাতে হাত", album: "ইভেন্ট", date: "জুলাই ২০২৬", ratio: "aspect-square" },
  { src: "/images/group.jpg", alt: "নতুন স্কুলে ভর্তি হওয়া শিক্ষার্থীরা", album: "শিক্ষা", date: "জুন ২০২৬", ratio: "aspect-[4/3]" },
  { src: "/images/change.jpg", alt: "ছোট অনুদান, বড় পরিবর্তন", album: "ইভেন্ট", date: "জুন ২০২৬", ratio: "aspect-[4/5]" },
  { src: "/images/smiles.jpg", alt: "পানি প্রকল্প এলাকার শিশুরা", album: "স্বাস্থ্য ও পানি", date: "মে ২০২৬", ratio: "aspect-[4/3]" },
  { src: "/images/books.jpg", alt: "পাঠাগারের জন্য নতুন বই", album: "শিক্ষা", date: "মে ২০২৬", ratio: "aspect-[3/2]" },
  { src: "/images/relief.jpg", alt: "শীতবস্ত্র প্যাকিং", album: "স্বেচ্ছাসেবক", date: "জানুয়ারি ২০২৬", ratio: "aspect-[3/4]" },
  { src: "/images/smiles.jpg", alt: "মেডিকেল ক্যাম্পে অপেক্ষারত শিশুরা", album: "স্বাস্থ্য ও পানি", date: "ডিসেম্বর ২০২৫", ratio: "aspect-square" },
  { src: "/images/hands.jpg", alt: "ত্রাণ দলের প্রস্তুতি সভা", album: "ত্রাণ বিতরণ", date: "নভেম্বর ২০২৫", ratio: "aspect-[4/3]" },
];

export const videos = [
  { title: "আপনার অনুদান কোথায় যায়", length: "৪:১২", image: "/images/relief.jpg" },
  { title: "একটি কমিউনিটি স্কুলের গল্প", length: "৬:৩০", image: "/images/learning.jpg" },
  { title: "স্বেচ্ছাসেবকদের একটি দিন", length: "৩:৪৫", image: "/images/volunteer.jpg" },
  { title: "বিশুদ্ধ পানি, সুস্থ জীবন", length: "৫:০৮", image: "/images/smiles.jpg" },
  { title: "বার্ষিক কার্যক্রম ২০২৫", length: "৮:২০", image: "/images/hero.jpg" },
  { title: "ছোট দান, বড় প্রভাব", length: "২:৫৫", image: "/images/change.jpg" },
];
