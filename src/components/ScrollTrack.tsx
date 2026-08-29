"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Bo'limga yetganda u ekranga qadaladi va pastga skroll qilish kartalarni
 * yon tomonga suradi; kartalar tugagach sahifa odatdagidek davom etadi.
 *
 * Faqat tor ekran uchun: u yerda gorizontal skrollli karusel barmoq bilan
 * sahifani pastga aylantirishga xalaqit berardi. Endi bitta harakat bor.
 *
 * Qadalgan blokning balandligi kontentga teng (ekran balandligiga emas) —
 * aks holda bo'lim atrofida katta bo'sh joy qolardi.
 */
const MIN_PIN = 200;

/*
 * Kartalar bo'lim ekran tepasiga qadalguncha - u hali o'rtada turganda -
 * sura boshlaydi. Aks holda hech narsa qimirlamay turib, keyin birdan
 * yon tomonga otilardi.
 *
 * Ulush ekran balandligidan olinadi, lekin gorizontal ortiqchaning
 * yarmidan oshmaydi: qisqa treklarda butun harakat qadalishdan oldin
 * tugab qolmasin.
 */
const LEAD_VH = 0.5;
const LEAD_MAX_SHARE = 0.45;

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
  const sticky = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  const [overflow, setOverflow] = useState(0);
  const [stickyHeight, setStickyHeight] = useState(0);
  /** Qadalishdan oldin sarflanadigan skroll — harakatning boshlanishi. */
  const [lead, setLead] = useState(0);

  const pinned = overflow >= MIN_PIN && stickyHeight > 0;

  useEffect(() => {
    const trackEl = track.current;
    const stickyEl = sticky.current;
    if (!trackEl || !stickyEl) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const measure = () => {
      if (reduced) {
        setOverflow(0);
        return;
      }
      const over = Math.max(trackEl.scrollWidth - trackEl.clientWidth, 0);
      setOverflow(over);
      setStickyHeight(stickyEl.offsetHeight);
      setLead(
        Math.round(
          Math.min(window.innerHeight * LEAD_VH, over * LEAD_MAX_SHARE),
        ),
      );
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(trackEl);
    ro.observe(stickyEl);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (!pinned) {
      if (track.current) track.current.style.transform = "";
      return;
    }

    let frame: number | null = null;

    const paint = () => {
      frame = null;
      const outerEl = outer.current;
      const trackEl = track.current;
      if (!outerEl || !trackEl) return;

      const passed = Math.min(
        Math.max(lead - outerEl.getBoundingClientRect().top, 0),
        overflow,
      );
      trackEl.style.transform = `translate3d(${-passed}px, 0, 0)`;
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
  }, [pinned, overflow, lead]);

  return (
    <div
      ref={outer}
      className="relative"
      style={
        pinned ? { height: stickyHeight + overflow - lead } : undefined
      }
    >
      <div
        ref={sticky}
        className={
          pinned
            ? "sticky top-0 overflow-hidden py-[60px] max-[620px]:py-10"
            : "py-[60px] max-[620px]:py-10"
        }
      >
        <div className="mx-auto w-[min(var(--container-frame),100%-2.5rem)]">
          {heading}
        </div>

        {/* Trek doim bitta qatorda — o'ralgan bo'lsa gorizontal ortiqchani
            o'lchab bo'lmaydi va qadash hech qachon yoqilmaydi. */}
        <div className={pinned ? "overflow-hidden" : "overflow-x-auto"}>
          <div
            ref={track}
            role="group"
            aria-label={label}
            className="mx-auto flex w-[min(var(--container-frame),100%-2.5rem)] flex-nowrap gap-4 will-change-transform"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
