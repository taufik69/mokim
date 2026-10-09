"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Photo } from "@/lib/gallery";
import Icon from "@/components/ui/Icon";

const bn = new Intl.NumberFormat("bn-BD");

type Props = {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onMove: (index: number) => void;
};

export default function Lightbox({ photos, index, onClose, onMove }: Props) {
  const photo = photos[index];
  const go = (step: number) => onMove((index + step + photos.length) % photos.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onMove((index - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, photos.length, onClose, onMove]);

  const navBtn =
    "absolute top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-brand-600";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[60] flex animate-[fade-up_.25s_ease-out_both] flex-col bg-forest-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4 text-white sm:p-6">
        <p className="text-sm text-white/70">
          {bn.format(index + 1)} / {bn.format(photos.length)}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="বন্ধ করুন"
          className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white hover:text-forest-900"
        >
          <Icon name="close" className="size-6" />
        </button>
      </div>

      <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
        <Image key={photo.src + index} src={photo.src} alt={photo.alt} fill sizes="100vw" className="animate-[fade-up_.35s_ease-out_both] object-contain px-4 sm:px-20" />
        <button type="button" aria-label="আগের ছবি" onClick={() => go(-1)} className={`${navBtn} left-3 sm:left-6`}>
          <Icon name="arrow" className="size-5 rotate-180" />
        </button>
        <button type="button" aria-label="পরের ছবি" onClick={() => go(1)} className={`${navBtn} right-3 sm:right-6`}>
          <Icon name="arrow" className="size-5" />
        </button>
      </div>

      <div className="p-5 text-center text-white sm:p-8" onClick={(e) => e.stopPropagation()}>
        <span className="text-xs font-semibold text-gold-300">
          {photo.album} · {photo.date}
        </span>
        <p className="mt-1 text-lg font-semibold sm:text-xl">{photo.alt}</p>
      </div>
    </div>
  );
}
