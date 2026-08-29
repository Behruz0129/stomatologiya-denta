"use client";

import { useEffect, useRef } from "react";

const DURATION = 1400;

/** Oxiriga borib sekinlashadi - raqam "urilib" to'xtamaydi. */
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function format(value: number, decimals: number, suffix: string) {
  // O'zbek va rus tilida kasr vergul bilan yoziladi.
  return value.toFixed(decimals).replace(".", ",") + suffix;
}

/**
 * Ko'rinish maydoniga kirganda 0 dan berilgan songacha sanaydi.
 *
 * Raqam React holatida saqlanmaydi - to'g'ridan-to'g'ri DOM ga yoziladi.
 * Har kadrda komponentni qayta chizish ortiqcha yuk bo'lardi.
 *
 * Serverda va brauzerning birinchi chizishida yakuniy son turadi:
 * hidratsiya mos keladi va JavaScript ishlamasa ham to'g'ri raqam ko'rinadi.
 */
export function CountUp({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    node.textContent = format(0, decimals, suffix);

    let raf: number | null = null;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / DURATION, 1);
      node.textContent = format(to * easeOutExpo(progress), decimals, suffix);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    io.observe(node);

    return () => {
      io.disconnect();
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [to, decimals, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(to, decimals, suffix)}
    </span>
  );
}
