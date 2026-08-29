"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { photoBrief, type PhotoSlot } from "@/data/photos";
import type { Locale } from "@/lib/i18n";

type Props = {
  slot: PhotoSlot;
  locale: Locale;
  className?: string;
  /** Birinchi ekrandagi fotolar uchun. */
  priority?: boolean;
  /** Karta hover'ida sekin kattalashsin. */
  zoomOnHover?: boolean;
  sizes?: string;
  /** Ota elementni to'liq qoplasin (`absolute inset-0`). */
  fill?: boolean;
  /** Ramka va yumaloq burchaksiz — ichki qatlam sifatida ishlatilganda. */
  bare?: boolean;
  /** Yorliq markazda emas, tepada tursin. */
  labelTop?: boolean;
};

/**
 * Foto o'rni. `public/img/<slot>.jpg` mavjud bo'lsa — foto, bo'lmasa
 * kulrang blok va o'sha o'ringa qanday foto kerakligi. Shu sabab sayt
 * rasmlar to'liq yig'ilmaguncha ham buzilmaydi.
 *
 * Joylashuv va ramka `className` orqali emas, prop orqali boshqariladi:
 * Tailwind'da bir-biriga qarama-qarshi sinflar (relative/absolute)
 * qaysi biri g'olib bo'lishi CSS tartibiga bog'liq bo'lib qoladi.
 */
export function Photo({
  slot,
  locale,
  className,
  priority = false,
  zoomOnHover = false,
  sizes = "(max-width: 900px) 100vw, 33vw",
  fill = false,
  bare = false,
  labelTop = false,
}: Props) {
  const [failed, setFailed] = useState(false);
  const brief = photoBrief[slot][locale];

  return (
    <div
      className={cn(
        "isolate overflow-hidden bg-fill",
        fill ? "absolute inset-0" : "relative",
        !bare && "rounded-[var(--radius-card)] border border-line",
        className,
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-x-0 px-4 text-center label",
          labelTop ? "top-7" : "top-1/2 -translate-y-1/2",
        )}
      >
        {slot}
        <span className="block text-[0.9em] text-[#a9aea7]">{brief}</span>
      </span>

      {!failed && (
        <Image
          src={`/img/${slot}.jpg`}
          alt={brief}
          fill
          sizes={sizes}
          priority={priority}
          draggable={false}
          onError={() => setFailed(true)}
          className={cn(
            "object-cover",
            zoomOnHover &&
              "transition-[scale] duration-[800ms] ease-soft group-hover:scale-[1.045]",
          )}
        />
      )}
    </div>
  );
}
