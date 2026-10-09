"use client";

import { useCallback, useMemo, useState } from "react";
import { albums, photos } from "@/lib/gallery";
import ModeToggle, { type Mode } from "./ModeToggle";
import AlbumNav from "./AlbumNav";
import PhotoGrid from "./PhotoGrid";
import VideoGrid from "./VideoGrid";
import Lightbox from "./Lightbox";
import ChannelCard from "./ChannelCard";

export default function GalleryBrowser() {
  const [mode, setMode] = useState<Mode>("photo");
  const [album, setAlbum] = useState<(typeof albums)[number]>("সবগুলো");
  const [open, setOpen] = useState<number | null>(null);

  const list = album === "সবগুলো" ? photos : photos.filter((p) => p.album === album);
  const counts = useMemo(() => {
    const c: Record<string, number> = { সবগুলো: photos.length };
    photos.forEach((p) => (c[p.album] = (c[p.album] ?? 0) + 1));
    return c;
  }, []);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="lattice-light bg-cream pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="container-page grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
        <aside className="flex min-w-0 flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <ModeToggle mode={mode} onChange={setMode} />
          {mode === "photo" ? <AlbumNav active={album} counts={counts} onChange={setAlbum} /> : <ChannelCard />}
        </aside>

        <div key={mode === "photo" ? album : "video"} className="min-w-0">
          {mode === "photo" ? <PhotoGrid photos={list} onOpen={setOpen} /> : <VideoGrid />}
        </div>
      </div>

      {open !== null && <Lightbox photos={list} index={open} onClose={close} onMove={setOpen} />}
    </section>
  );
}
