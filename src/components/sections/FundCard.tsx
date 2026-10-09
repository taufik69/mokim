import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

const taka = new Intl.NumberFormat("bn-BD");

type Props = {
  image: string;
  title: string;
  text: string;
  raised: number;
  goal: number;
  donors: number;
};

export default function FundCard({ image, title, text, raised, goal, donors }: Props) {
  const percent = Math.min(Math.round((raised / goal) * 100), 100);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
          <Icon name="users" className="size-3.5 text-brand-600" />
          {taka.format(donors)} দাতা
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>

        <div className="mt-6 mb-6">
          <div className="h-2 overflow-hidden rounded-full bg-brand-50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-500 transition-[width] duration-1000"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="mt-3 flex items-end justify-between text-sm">
            <div>
              <p className="text-muted">সংগৃহীত</p>
              <p className="text-base font-bold text-brand-600">৳ {taka.format(raised)}</p>
            </div>
            <div className="text-right">
              <p className="text-muted">লক্ষ্য</p>
              <p className="font-semibold">৳ {taka.format(goal)}</p>
            </div>
          </div>
        </div>

        <Button href="#donate" className="mt-auto w-full">
          দান করুন · {taka.format(percent)}%
        </Button>
      </div>
    </article>
  );
}
