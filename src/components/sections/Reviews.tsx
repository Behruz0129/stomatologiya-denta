"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { reviews } from "@/data/content";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";
import { ArrowUpRight } from "@/components/icons";

/*
 * Keng ekranda uchala sharh yonma-yon turadi.
 *
 * Tor ekranda ular qalab qo'yilgan kartalardek turadi: orqadagilar biroz
 * burilgan va pastga surilgan, shuning uchun ularning cheti ko'rinib
 * qoladi. Shaffoflik bilan xiralashtirilmaydi — burchagi ko'rinib turgani
 * ortida yana sharh borligini o'zi aytadi.
 */
const STACK = [
  "translateY(0) rotate(0deg) scale(1)",
  "translateY(15px) rotate(-2.4deg) scale(0.975)",
  "translateY(28px) rotate(1.8deg) scale(0.95)",
];

export function Reviews({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);

  return (
    <Section id="sharhlar">
      <SectionHeading
        locale={locale}
        eyebrow={m.reviews.eyebrow}
        title={m.reviews.title}
        accent={m.reviews.titleAccent}
      />

      <Reveal>
        <div className="relative min-h-[360px] max-[900px]:mb-4 min-[901px]:grid min-[901px]:min-h-0 min-[901px]:grid-cols-3 min-[901px]:gap-[1.1rem]">
          {reviews.map((review, i) => {
            const offset = (i - active + reviews.length) % reviews.length;
            const depth = Math.min(offset, STACK.length - 1);

            return (
              <figure
                key={review.author.uz}
                aria-hidden={offset !== 0 ? true : undefined}
                style={{
                  transform: STACK[depth],
                  zIndex: STACK.length - depth,
                }}
                className={cn(
                  "flex flex-col gap-[1.1rem] rounded-[var(--radius-card)] border border-line bg-card p-7",
                  "max-[900px]:absolute max-[900px]:inset-x-0 max-[900px]:top-0",
                  "max-[900px]:transition-transform max-[900px]:duration-500 max-[900px]:ease-soft",
                  offset !== 0 && "pointer-events-none",
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

        {/* Nuqtalar — faqat tor ekranda */}
        <div className="mt-8 flex justify-center gap-2 min-[901px]:hidden">
          {reviews.map((review, i) => (
            <button
              key={review.author.uz}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${i + 1}`}
              aria-current={i === active}
              className={cn(
                "h-2 rounded-full transition-all duration-400 ease-soft",
                i === active ? "w-6 bg-ink" : "w-2 bg-line-2",
              )}
            />
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <a
          href={clinic.yandexReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost max-[620px]:w-full max-[620px]:justify-center"
        >
          {m.reviews.all[locale]} <ArrowUpRight className="arrow size-[0.85em]" />
        </a>
      </Reveal>
    </Section>
  );
}
