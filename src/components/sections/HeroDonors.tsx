import Image from "next/image";

const avatars = [1, 2, 3, 4].map((n) => `/images/avatars/donor-${n}.jpg`);

export default function HeroDonors() {
  return (
    <div className="enter enter-4 mt-10 flex items-center gap-4">
      <div className="flex -space-x-3">
        {avatars.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full border-2 border-forest-950 object-cover ring-1 ring-white/20"
          />
        ))}
      </div>
      <p className="text-sm text-white/70">
        <strong className="block text-base text-white">১২,০০০+ নিয়মিত দাতা</strong>
        আমাদের সাথে আছেন
      </p>
    </div>
  );
}
