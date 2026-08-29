"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Gorizontal karusel.
 *
 * Siljish brauzerning o'z skrolliga qurilgan (`overflow-x: auto` +
 * `scroll-snap`), shuning uchun barmoq bilan surish o'zi ishlaydi va
 * sahifani pastga aylantirishga xalaqit bermaydi — bu JavaScript bilan
 * ushlab olingan sudrashda ko'p uchraydigan muammo.
 *
 * O'z-o'zidan siljimaydi. Strelka oxiriga yetganda boshiga qaytadi,
 * shuning uchun aylanish tugamaydi.
 */
export function Carousel({
  children,
  label,
  className,
  trackClassName,
  controlsClassName,
}: {
  children: ReactNode;
  /** Ekran o'quvchisi uchun nom. */
  label: string;
  className?: string;
  trackClassName?: string;
  /** Strelkalarni yashirish uchun (masalan, keng ekranda). */
  controlsClassName?: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  const step = () => {
    const el = track.current;
    if (!el) return 0;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    return first ? first.getBoundingClientRect().width + gap : el.clientWidth;
  };

  const move = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const atEnd = el.scrollLeft >= max - 2;
    const atStart = el.scrollLeft <= 2;

    // Oxiridan keyin boshiga, boshidan oldin oxiriga.
    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction === -1 && atStart) {
      el.scrollTo({ left: max, behavior: "smooth" });
      return;
    }

    el.scrollBy({ left: direction * step(), behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={track}
        role="group"
        aria-label={label}
        className={cn(
          "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          trackClassName,
        )}
      >
        {children}
      </div>

      <div className={cn("mt-5 flex justify-end gap-2", controlsClassName)}>
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="←"
          className="grid size-11 place-items-center rounded-full border border-line-2 transition-colors duration-300 hover:border-ink"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="→"
          className="grid size-11 place-items-center rounded-full border border-line-2 transition-colors duration-300 hover:border-ink"
        >
          →
        </button>
      </div>
    </div>
  );
}
