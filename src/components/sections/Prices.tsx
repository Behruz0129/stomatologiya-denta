"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { priceGroups, type PriceRow } from "@/data/prices";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/**
 * Narxni to'liq so'z bilan yozadi.
 *
 * Ikki tilning tartibi boshqacha, shuning uchun bitta shablon yetmaydi:
 *   o'zbekcha - "300 000 so'mdan" (qo'shimcha oxirida)
 *   ruscha    - "от 300 000 сум" (so'z oldinda)
 */
function priceLabel(row: PriceRow, locale: Locale): string {
  if (!row.amount) return row.note?.[locale] ?? "";

  const currency = m.prices.currency[locale];

  if (locale === "uz") {
    const suffix = row.from ? m.prices.fromSuffixUz.uz : "";
    return `${row.amount} ${currency}${suffix}`;
  }

  const prefix = row.from ? `${m.prices.fromPrefixRu.ru} ` : "";
  return `${prefix}${row.amount} ${currency}`;
}

/*
 * Narxlar bo'limlarga bo'lingan va bittalab ko'rsatiladi: butun ro'yxatni
 * aylantirib chiqish o'rniga kerakli bo'limni bosasiz. Har bo'limda
 * ikki-uch qator bo'lgani uchun hammasi bir ekranga sig'adi.
 */
export function Prices({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const group = priceGroups[active];

  return (
    <Section id="narxlar">
      <SectionHeading
        locale={locale}
        eyebrow={m.prices.eyebrow}
        title={m.prices.title}
        accent={m.prices.titleAccent}
        lede={m.prices.lede}
      />

      <Reveal>
        {/* Bo'lim tanlash */}
        <div
          role="tablist"
          aria-label={m.prices.eyebrow[locale]}
          className="-mx-[1.25rem] flex gap-2 overflow-x-auto px-[1.25rem] pb-1 [scrollbar-width:none] min-[901px]:mx-0 min-[901px]:flex-wrap min-[901px]:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {priceGroups.map((g, i) => (
            <button
              key={g.title.uz}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-[0.88rem] transition-colors duration-300 ease-soft",
                i === active
                  ? "border-ink bg-ink text-white"
                  : "border-line-2 text-ink-2 hover:border-ink",
              )}
            >
              {g.title[locale]}
            </button>
          ))}
        </div>

        {/* Tanlangan bo'lim */}
        <div className="mt-7 border-t border-line-2">
          {group.rows.map((row) => (
            <div
              key={row.name.uz}
              className="flex items-baseline gap-[0.7rem] border-b border-line py-[0.95rem]"
            >
              <span className="text-[0.98rem] max-[620px]:text-[0.92rem]">
                {row.name[locale]}
              </span>
              <span className="price-leader" />
              <span
                className={
                  row.amount
                    ? "text-[0.95rem] whitespace-nowrap tabular-nums max-[620px]:text-[0.9rem]"
                    : "text-[0.9rem] whitespace-nowrap text-muted max-[620px]:text-[0.85rem]"
                }
              >
                {priceLabel(row, locale)}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-line-2 pt-[1.4rem]">
        <p className="max-w-[46ch] text-[0.9rem] text-muted max-[620px]:text-[0.85rem]">
          {m.prices.foot[locale]}
        </p>
        <a href={clinic.phoneHref} className="btn btn-dark max-[620px]:w-full max-[620px]:justify-center">
          {m.prices.ask[locale]} <span className="arrow">↗</span>
        </a>
      </Reveal>
    </Section>
  );
}
