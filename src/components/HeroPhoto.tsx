"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photoBrief } from "@/data/photos";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

const SLOT = "F1" as const;

/** Oyna konteynerning necha foizini egallaydi. */
const LENS = { width: 56, height: 50 } as const;

/** Sichqoncha yo'q paytdagi joyi. */
const HOME = { x: 22, y: 24 };

/** Har kadrda maqsadga qancha yaqinlashadi. Kichikroq = ravonroq izma-iz. */
const EASING = 0.16;

type Point = { x: number; y: number };

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

/**
 * Bosh ekrandagi foto: orqada xira nusxa, ustida aniq "oyna".
 *
 * Oyna sichqonchaga izma-iz ergashadi. Joylashuv React holatida emas -
 * to'g'ridan-to'g'ri DOM ga yoziladi: har kadrda komponentni qayta
 * chizish harakatni uzuq-yuluq qilardi. Har kadrda maqsad tomon
 * EASING ulushida siljiydi, shuning uchun harakat yumshoq.
 *
 * Oynaning balandligi konteynerga nisbatan foizda beriladi. Ilgari u
 * ichki blokka berilgan edi, ota elementning balandligi esa `auto` edi -
 * foiz hisoblanmay, blok yopilib qolgan va rasm ko'rinmay qolgandi.
 */
export function HeroPhoto({ locale }: { locale: Locale }) {
  const frame = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);
  const sharp = useRef<HTMLDivElement>(null);

  const target = useRef<Point>({ ...HOME });
  const current = useRef<Point>({ ...HOME });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const paint = () => {
      const { x, y } = current.current;
      if (lens.current) {
        lens.current.style.left = `${x}%`;
        lens.current.style.top = `${y}%`;
      }
      if (sharp.current) {
        sharp.current.style.left = `${-(x / LENS.width) * 100}%`;
        sharp.current.style.top = `${-(y / LENS.height) * 100}%`;
      }
    };

    const tick = () => {
      const c = current.current;
      const t = target.current;
      const dx = t.x - c.x;
      const dy = t.y - c.y;

      if (Math.abs(dx) < 0.03 && Math.abs(dy) < 0.03) {
        current.current = { ...t };
        paint();
        raf.current = null;
        return;
      }

      current.current = { x: c.x + dx * EASING, y: c.y + dy * EASING };
      paint();
      raf.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf.current === null) raf.current = requestAnimationFrame(tick);
    };

    const node = frame.current;
    if (!node) return;

    const onMove = (event: PointerEvent) => {
      const box = node.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width) * 100 - LENS.width / 2;
      const y = ((event.clientY - box.top) / box.height) * 100 - LENS.height / 2;
      target.current = {
        x: clamp(x, 0, 100 - LENS.width),
        y: clamp(y, 0, 100 - LENS.height),
      };
      start();
    };

    const onLeave = () => {
      target.current = { ...HOME };
      start();
    };

    paint();
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);

    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  const src = `/img/${SLOT}.jpg`;
  const alt = photoBrief[SLOT][locale];
  const ring = "shadow-[0_0_0_10px_#fff,var(--shadow-frame)]";

  return (
    <div
      ref={frame}
      className="relative aspect-[5/6] cursor-crosshair overflow-hidden rounded-[var(--radius-card)] bg-fill select-none"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        draggable={false}
        sizes="(max-width: 900px) 100vw, 45vw"
        className="scale-104 object-cover blur-[10px]"
      />

      <div
        ref={lens}
        aria-hidden
        className="absolute"
        style={{
          left: `${HOME.x}%`,
          top: `${HOME.y}%`,
          width: `${LENS.width}%`,
          height: `${LENS.height}%`,
        }}
      >
        <div className={`relative h-full overflow-hidden bg-white ${ring}`}>
          <div
            ref={sharp}
            className="absolute"
            style={{
              left: `${-(HOME.x / LENS.width) * 100}%`,
              top: `${-(HOME.y / LENS.height) * 100}%`,
              width: `${(100 / LENS.width) * 100}%`,
              height: `${(100 / LENS.height) * 100}%`,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority
              draggable={false}
              sizes="(max-width: 900px) 100vw, 45vw"
              /* Fon bilan bir xil kattalashtirish - ikkalasi ham markazga
                 nisbatan, shuning uchun oyna fonni aynan davom ettiradi. */
              className="scale-104 object-cover"
            />
          </div>
        </div>

        {/* Ramka tagidagi yozuv - oq halqa ikkalasini bitta kartaga qo'shadi. */}
        <div
          className={`label absolute inset-x-0 top-full bg-white px-2 py-[0.85rem] text-center text-ink ${ring}`}
        >
          {m.hero.lensCaption[locale]}
        </div>
      </div>
    </div>
  );
}
