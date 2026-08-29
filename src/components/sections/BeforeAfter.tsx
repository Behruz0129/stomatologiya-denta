"use client";

import { useRef, useState } from "react";
import { Photo } from "@/components/Photo";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/**
 * Oldin/keyin surgichi. Qiymat `clip-path` orqali qo'llanadi va
 * `requestAnimationFrame` bilan cheklanadi — sudrash silliq bo'lsin.
 */
export function BeforeAfterSlider({ locale }: { locale: Locale }) {
  const [value, setValue] = useState(50);
  const frame = useRef<number | null>(null);

  const onInput = (next: number) => {
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      setValue(next);
      frame.current = null;
    });
  };

  return (
    <div className="relative aspect-[16/10] touch-none overflow-hidden rounded-[var(--radius-card)] select-none max-[620px]:aspect-[4/5]">
      <Photo
        slot="F17"
        locale={locale}
        sizes="100vw"
        fill
        bare
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${value}%)` }}
      >
        <Photo
          slot="F18"
          locale={locale}
          sizes="100vw"
          fill
          bare
        />
      </div>

      <span className="absolute bottom-6 left-6 z-20 rounded-full bg-card px-4 py-2 label">
        {m.results.before[locale]}
      </span>
      <span className="absolute right-6 bottom-6 z-20 rounded-full bg-card px-4 py-2 label">
        {m.results.after[locale]}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        aria-label={m.results.slider[locale]}
        onChange={(event) => onInput(Number(event.target.value))}
        className="absolute inset-0 z-30 m-0 size-full cursor-ew-resize opacity-0"
      />

      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-card"
        style={{ left: `${value}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-card text-[0.8rem] shadow-frame">
          ↔
        </span>
      </div>
    </div>
  );
}
