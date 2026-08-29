"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Bo'limga yetganda u ekranga qadaladi va pastga skroll qilish kartalarni
 * yon tomonga suradi; kartalar tugagach sahifa odatdagidek davom etadi.
 *
 * Nega shunday: ilgari bu yerda gorizontal skrollli karusel turgan edi va
 * barmoq karusel ustiga tushganda sahifa pastga aylanmay qolardi — ikki
 * yo'nalish bir-biriga xalaqit berardi. Endi bitta harakat bor: pastga
 * skroll. Strelka ham, sudrash ham kerak emas.
 *
 * Tashqi blokning balandligi kartalarning gorizontal ortiqchasiga teng
 * qilib beriladi — shu sabab bir piksel pastga siljish bir piksel yon
 * tomonga siljishga to'g'ri keladi va harakat tabiiy tuyuladi.
 */

/**
 * Shundan kichik ortiqcha uchun qadash yoqilmaydi: bir necha o'nlab
 * piksel uchun bo'limni ushlab turish harakat emas, sakrash bo'lib
 * tuyuladi.
 */
const MIN_PIN = 240;

export function ScrollTrack({
  heading,
  children,
  label,
}: {
  heading: ReactNode;
  children: ReactNode;
  label: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  /** Gorizontal ortiqcha. 0 bo'lsa qadash umuman yoqilmaydi. */
  const [overflow, setOverflow] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const trackEl = track.current;
    const viewportEl = viewport.current;
    if (!trackEl || !viewportEl) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const measure = () => {
      if (reduced) {
        setOverflow(0);
        setPinned(false);
        return;
      }
      const extra = trackEl.scrollWidth - trackEl.clientWidth;
      setOverflow(Math.max(extra, 0));
      setPinned(extra >= MIN_PIN);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(trackEl);
    ro.observe(viewportEl);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (!pinned || overflow <= 0) {
      if (track.current) track.current.style.transform = "";
      return;
    }

    let frame: number | null = null;

    const paint = () => {
      frame = null;
      const outerEl = outer.current;
      const trackEl = track.current;
      if (!outerEl || !trackEl) return;

      const total = outerEl.offsetHeight - window.innerHeight;
      if (total <= 0) return;

      const passed = Math.min(Math.max(-outerEl.getBoundingClientRect().top, 0), total);
      const progress = passed / total;
      trackEl.style.transform = `translate3d(${-progress * overflow}px, 0, 0)`;
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [pinned, overflow]);

  return (
    <div
      ref={outer}
      className="relative"
      style={pinned ? { height: `calc(100svh + ${overflow}px)` } : undefined}
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden py-[60px]"
            : "py-[60px]"
        }
      >
        <div className="mx-auto w-[min(var(--container-frame),100%-2.5rem)]">
          {heading}
        </div>

        {/*
          Trek doim bitta qatorda turadi. Ilgari qadalmagan holatda u
          `flex-wrap` bilan chizilardi va shu sabab qulf hosil bo'lgandi:
          o'ralgan kartalarda gorizontal ortiqcha nol chiqib, qadash hech
          qachon yoqilmasdi.

          Qadash o'chirilgan bo'lsa (harakat kamaytirilgan) trek oddiy
          gorizontal skroll bilan qoladi.
        */}
        <div
          ref={viewport}
          className={pinned ? "overflow-hidden" : "overflow-x-auto"}
        >
          <div
            ref={track}
            role="group"
            aria-label={label}
            className="mx-auto flex w-[min(var(--container-frame),100%-2.5rem)] flex-nowrap gap-5 will-change-transform"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
