"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { reviews } from "@/data/content";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Keng ekranda uchala sharh yonma-yon turadi.
 *
 * Tor ekranda ular ustma-ust qalanadi: faoli tepada, keyingisi biroz
 * pastda va kichrayib ortida ko'rinadi — ya'ni yana sharh borligi
 * o'zidan ma'lum. Pastdagi nuqtalar bilan almashadi.
 *
 * Kartalar mutlaq joylashgani uchun konteynerga eng uzun sharh sig'adigan
 * balandlik berilgan.
 */
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
        <div className="relative min-h-[340px] max-[900px]:mb-2 min-[901px]:grid min-[901px]:min-h-0 min-[901px]:grid-cols-3 min-[901px]:gap-[1.1rem]">
          {reviews.map((review, i) => {
            const offset = (i - active + reviews.length) % reviews.length;
            return (
              <figure
                key={review.author.uz}
                aria-hidden={offset !== 0 ? true : undefined}
                style={{
                  transform:
                    offset === 0
                      ? "translateY(0) scale(1)"
                      : `translateY(${Math.min(offset, 2) * 14}px) scale(${1 - Math.min(offset, 2) * 0.04})`,
                  zIndex: reviews.length - Math.min(offset, 2),
                }}
                className={cn(
                  "flex flex-col gap-[1.1rem] rounded-[var(--radius-card)] border border-line bg-card p-7",
                  "max-[900px]:absolute max-[900px]:inset-x-0 max-[900px]:top-0",
                  "max-[900px]:transition-[transform,opacity] max-[900px]:duration-500 max-[900px]:ease-soft",
                  offset === 0
                    ? "max-[900px]:opacity-100"
                    : "pointer-events-none max-[900px]:opacity-40",
                  offset > 1 && "max-[900px]:opacity-0",
                  "min-[901px]:static min-[901px]:!translate-y-0 min-[901px]:!scale-100 min-[901px]:opacity-100",
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
        <div className="mt-6 flex justify-center gap-2 min-[901px]:hidden">
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
          {m.reviews.all[locale]} <span className="arrow">↗</span>
        </a>
      </Reveal>
    </Section>
  );
}
