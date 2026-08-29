"use client";

import { useRef, useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { reviews } from "@/data/content";
import { clinic } from "@/data/clinic";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";
import { ArrowUpRight } from "@/components/icons";

/*
 * Keng ekranda to'qqizta sharh oddiy panjarada, qatoriga uchtadan.
 *
 * Tor ekranda ular qalab qo'yilgan kartalardek turadi: orqadagilar biroz
 * burilgan va pastga surilgan, shuning uchun ularning cheti ko'rinib
 * qoladi. Shaffoflik bilan xiralashtirilmaydi — burchagi ko'rinib turgani
 * ortida yana sharh borligini o'zi aytadi. Ustidagi kartani yonga tashlab
 * yuborsa keyingisi chiqadi; nuqtalar ham xuddi shu ishni qiladi.
 */
const STACK = [
  "translateY(0) rotate(0deg) scale(1)",
  "translateY(15px) rotate(-2.4deg) scale(0.975)",
  "translateY(28px) rotate(1.8deg) scale(0.95)",
];

/** Shu masofadan uzoqqa surilsa karta uchib ketadi, aks holda joyiga qaytadi. */
const THROW_PX = 64;
/** Uchib ketish animatsiyasi. Karta almashishi shundan keyin bo'ladi. */
const FLY_MS = 260;

export function Reviews({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  /** Ko'rilgan kartalar. Hammasi ko'rilgach havola chiqadi. */
  const [seen, setSeen] = useState<number[]>([0]);
  const isNarrow = useMediaQuery("(max-width: 900px)");

  const drag = useRef({ id: -1, x0: 0, dx: 0, el: null as HTMLElement | null });

  const go = (next: number) => {
    const i = (next + reviews.length) % reviews.length;
    setActive(i);
    setSeen((prev) => (prev.includes(i) ? prev : [...prev, i]));
  };

  /* Sudralish har kadrda chiziladi, shuning uchun React holati emas —
     to'g'ridan-to'g'ri DOM. */
  const paint = (el: HTMLElement, dx: number) => {
    el.style.transform = `translate(${dx}px, ${Math.abs(dx) * 0.04}px) rotate(${
      dx * 0.045
    }deg)`;
    el.style.opacity = String(Math.max(0.35, 1 - Math.abs(dx) / 520));
  };

  /* Qo'lda yozilgan stillar olib tashlanadi — keyingi chizishda ularni
     yana React qo'yadi. */
  const clear = (el: HTMLElement) => {
    el.style.transition = "";
    el.style.transform = "";
    el.style.opacity = "";
  };

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (!isNarrow || drag.current.id !== -1) return;
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    el.style.transition = "none";
    drag.current = { id: e.pointerId, x0: e.clientX, dx: 0, el };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (d.id !== e.pointerId || !d.el) return;
    d.dx = e.clientX - d.x0;
    paint(d.el, d.dx);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (d.id !== e.pointerId || !d.el) return;
    const { el, dx } = d;
    drag.current = { id: -1, x0: 0, dx: 0, el: null };

    if (Math.abs(dx) < THROW_PX) {
      el.style.transition = `transform ${FLY_MS}ms var(--ease-soft)`;
      el.style.transform = STACK[0];
      el.style.opacity = "1";
      window.setTimeout(() => clear(el), FLY_MS);
      return;
    }

    const dir = Math.sign(dx);
    el.style.transition = `transform ${FLY_MS}ms ease-in, opacity ${FLY_MS}ms ease-in`;
    el.style.transform = `translate(${dir * 460}px, 40px) rotate(${dir * 16}deg)`;
    el.style.opacity = "0";
    window.setTimeout(() => {
      clear(el);
      go(active + (dir < 0 ? 1 : -1));
    }, FLY_MS);
  };

  const allSeen = seen.length === reviews.length;

  return (
    <Section id="sharhlar">
      <SectionHeading
        locale={locale}
        eyebrow={m.reviews.eyebrow}
        title={m.reviews.title}
        accent={m.reviews.titleAccent}
      />

      <Reveal>
        <div className="grid max-[900px]:grid-cols-1 min-[901px]:grid-cols-3 min-[901px]:gap-[1.1rem]">
          {reviews.map((review, i) => {
            const offset = (i - active + reviews.length) % reviews.length;
            const depth = Math.min(offset, STACK.length - 1);
            const top = offset === 0;

            return (
              <figure
                key={review.author.uz}
                aria-hidden={!top ? true : undefined}
                onPointerDown={top ? onPointerDown : undefined}
                onPointerMove={top ? onPointerMove : undefined}
                onPointerUp={top ? onPointerUp : undefined}
                onPointerCancel={top ? onPointerUp : undefined}
                style={{
                  transform: STACK[depth],
                  zIndex: STACK.length - depth,
                }}
                className={cn(
                  "flex flex-col gap-[1.1rem] rounded-[var(--radius-card)] border border-line bg-card p-7",
                  "max-[900px]:col-start-1 max-[900px]:row-start-1",
                  "max-[900px]:transition-transform max-[900px]:duration-500 max-[900px]:ease-soft",
                  top && "max-[900px]:cursor-grab max-[900px]:touch-pan-y",
                  !top && "pointer-events-none",
                  offset > 2 && "max-[900px]:opacity-0",
                  "min-[901px]:static min-[901px]:!transform-none min-[901px]:opacity-100",
                )}
              >
                <span
                  aria-hidden
                  className="h-4 font-serif text-[2.4rem] leading-[0.6] text-line-2"
                >
                  &ldquo;
                </span>
                <blockquote className="text-base text-ink-2 max-[620px]:text-[0.95rem]">
                  {review.text[locale]}
                </blockquote>
                <figcaption className="mt-auto flex flex-col gap-[0.15rem] border-t border-line pt-[0.7rem]">
                  <b className="text-[0.93rem] font-semibold">
                    {review.author[locale]}
                  </b>
                  <span className="label">{review.source[locale]}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Nuqtalar — faqat tor ekranda. Qalangan kartalar 28px pastga
            chiqadi, shuning uchun oraliq shuncha kattaroq. */}
        <div className="mt-14 flex flex-col items-center gap-3 min-[901px]:hidden">
          <div className="flex justify-center gap-[0.4rem]">
            {reviews.map((review, i) => (
              <button
                key={review.author.uz}
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1}`}
                aria-current={i === active}
                className={cn(
                  "h-2 rounded-full transition-all duration-400 ease-soft",
                  i === active ? "w-6 bg-ink" : "w-2 bg-line-2",
                )}
              />
            ))}
          </div>
          <span
            aria-hidden
            className={cn(
              "label transition-opacity duration-500 ease-soft",
              allSeen && "opacity-0",
            )}
          >
            {m.reviews.swipe[locale]}
          </span>
        </div>
      </Reveal>

      {/* Hamma sharh ko'rilgach — Yandex'dagi qolganlariga havola. Keng
          ekranda kartalar birdaniga ko'rinadi, u yerda havola doim turadi.
          Tor ekranda esa ochilmaguncha joy ham egallamaydi: shuning uchun
          oddiy `opacity` emas, qator balandligi 0fr dan 1fr ga o'sadi.
          Eskiroq brauzer buni jonlantirmaydi, ochilishi baribir ishlaydi. */}
      <div
        className={cn(
          "mt-8 max-[900px]:grid",
          "max-[900px]:transition-[grid-template-rows,opacity,margin] max-[900px]:duration-700 max-[900px]:ease-soft",
          allSeen
            ? "max-[900px]:grid-rows-[1fr]"
            : "max-[900px]:pointer-events-none max-[900px]:mt-0 max-[900px]:grid-rows-[0fr] max-[900px]:opacity-0",
        )}
      >
        <div className="max-[900px]:overflow-hidden">
          <a
            href={clinic.yandexReviews}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-between gap-5 rounded-[var(--radius-card)] border border-line bg-card",
              "px-7 py-6 transition-colors duration-300 ease-soft hover:border-line-2",
              "max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-4",
            )}
          >
            <span className="flex flex-col gap-[0.3rem]">
              <b className="text-[1.05rem] font-semibold">
                {m.reviews.all[locale]}
              </b>
              <span className="text-[0.88rem] text-ink-2">
                {m.reviews.allLead[locale]}
              </span>
            </span>
            <span className="btn btn-ghost shrink-0 max-[620px]:w-full max-[620px]:justify-center">
              Yandex Maps <ArrowUpRight className="arrow size-[0.85em]" />
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
