"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { clinic } from "@/data/clinic";

/**
 * Yandex Maps vidjeti. Rasm emas, jonli xarita: odam uni kattalashtira
 * oladi va shu yerdan marshrut ola oladi.
 *
 * Lekin u sahifa ochilishi bilan yuklanmaydi. Vidjet o'zi bilan ~350 KB
 * skript va o'ttizdan ortiq begona cookie olib keladi — bularning hammasi
 * sahifa ochilish tezligiga va Lighthouse'ning "Best Practices" bahosiga
 * tushadi, holbuki ziyoratchilarning ko'pi xaritani umuman ochmaydi.
 * Shuning uchun avval o'zimizning panel turadi, bosilgandagina iframe
 * qo'yiladi.
 */
const SRC =
  "https://yandex.uz/map-widget/v1/org/stomatologiya_denta/5867957547/" +
  "?ll=69.282692%2C41.326951" +
  "&panorama%5Bdirection%5D=282.472961%2C0.527042" +
  "&panorama%5Bfull%5D=true" +
  "&panorama%5Bpoint%5D=69.283001%2C41.326999" +
  "&panorama%5Bspan%5D=72.604757%2C53.681656" +
  "&z=16";

type Props = {
  title: string;
  /** Tugma matni: "Xaritani yuklash". */
  action: string;
  /** Tugma tagidagi izoh: xarita qayerdan kelishi. */
  note: string;
};

export function YandexMap({ title, action, note }: Props) {
  const [asked, setAsked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden rounded-[var(--radius-card)] border border-line bg-fill">
      {asked && (
        <iframe
          src={SRC}
          title={title}
          allowFullScreen
          onLoad={() => setLoaded(true)}
          className={cn(
            "absolute inset-0 size-full border-0 transition-opacity duration-700 ease-soft",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}

      {/* Bosilmaguncha — o'zimizning panel; bosilgandan keyin xarita
          chizilguncha o'sha panel yuklanish holatiga o'tadi. */}
      <div
        aria-hidden={loaded}
        className={cn(
          "absolute inset-0 grid place-items-center bg-fill transition-opacity duration-500 ease-soft",
          loaded && "pointer-events-none opacity-0",
        )}
      >
        {asked ? (
          <div className="flex flex-col items-center gap-3">
            <span className="relative block size-7">
              <span className="absolute inset-0 rounded-full border border-line-2" />
              <span className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-ink [animation-duration:1.1s]" />
            </span>
            <span className="label">{clinic.name}</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 px-6 text-center">
            <span className="label">{clinic.name}</span>
            <button
              type="button"
              onClick={() => setAsked(true)}
              className="btn btn-ghost bg-card"
            >
              {action}
            </button>
            <span className="text-[0.8rem] text-ink-2">{note}</span>
          </div>
        )}
      </div>
    </div>
  );
}
