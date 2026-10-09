import { photos, videos } from "@/lib/gallery";
import Icon, { type IconName } from "@/components/ui/Icon";

export type Mode = "photo" | "video";

const bn = new Intl.NumberFormat("bn-BD");
const modes: { id: Mode; label: string; icon: IconName; count: number }[] = [
  { id: "photo", label: "ছবি", icon: "eye", count: photos.length },
  { id: "video", label: "ভিডিও", icon: "play", count: videos.length },
];

type Props = { mode: Mode; onChange: (mode: Mode) => void };

export default function ModeToggle({ mode, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="গ্যালারির ধরন"
      className="grid grid-cols-2 gap-1 rounded-2xl bg-white p-1.5 shadow-card ring-1 ring-forest-900/5"
    >
      {modes.map((m) => (
        <button
          key={m.id}
          type="button"
          role="tab"
          aria-selected={mode === m.id}
          onClick={() => onChange(m.id)}
          className={`flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 sm:text-base ${
            mode === m.id ? "bg-brand-600 text-white shadow-glow" : "text-muted hover:text-brand-600"
          }`}
        >
          <Icon name={m.icon} className="size-5" />
          {m.label}
          <span className="text-xs opacity-70">({bn.format(m.count)})</span>
        </button>
      ))}
    </div>
  );
}
