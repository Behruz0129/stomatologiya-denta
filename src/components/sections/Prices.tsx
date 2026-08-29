"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { priceGroups, type PriceGroup, type PriceRow } from "@/data/prices";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";
import { ArrowUpRight } from "@/components/icons";

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

/**
 * Bitta yo'nalish kartochkasi.
 *
 * Nuqtali chiziqlar olib tashlandi: narx o'ng tomonda alohida yorliqda
 * turadi, qatorlar esa faqat bo'shliq bilan ajraladi. Shu sabab ro'yxat
 * jadvalga emas, menyuga o'xshaydi va tezroq o'qiladi.
 */
function GroupCard({ group, locale }: { group: PriceGroup; locale: Locale }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-card p-6 max-[620px]:p-5">
      <h3 className="label">{group.title[locale]}</h3>

      <div className="flex flex-col gap-3">
        {group.rows.map((row) => (
          <div
            key={row.name.uz}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-[0.97rem] leading-snug max-[620px]:text-[0.92rem]">
              {row.name[locale]}
            </span>
            <span
              className={cn(
                "shrink-0 rounded-full px-3 py-1 text-[0.86rem] whitespace-nowrap tabular-nums",
                row.amount
                  ? "bg-fill text-ink"
                  : "border border-line text-muted",
              )}
            >
              {priceLabel(row, locale)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Prices({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);

  return (
    <Section id="narxlar">
      <SectionHeading
        locale={locale}
        eyebrow={m.prices.eyebrow}
        title={m.prices.title}
        accent={m.prices.titleAccent}
        lede={m.prices.lede}
      />

      {/* Keng ekran: hamma yo'nalish bir vaqtda ko'rinadi */}
      <div className="grid grid-cols-3 gap-5 max-[1080px]:grid-cols-2 max-[900px]:hidden">
        {priceGroups.map((group, i) => (
          <Reveal key={group.title.uz} index={i % 3}>
            <GroupCard group={group} locale={locale} />
          </Reveal>
        ))}
      </div>

      {/* Tor ekran: yo'nalishni tanlab olasiz */}
      <Reveal className="min-[901px]:hidden">
        <div
          role="tablist"
          aria-label={m.prices.eyebrow[locale]}
          className="-mx-[1.25rem] flex gap-2 overflow-x-auto px-[1.25rem] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {priceGroups.map((group, i) => (
            <button
              key={group.title.uz}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-[0.88rem] transition-colors duration-300 ease-soft",
                i === active
                  ? "border-ink bg-ink text-white"
                  : "border-line-2 text-ink-2",
              )}
            >
              {group.title[locale]}
            </button>
          ))}
        </div>

        <div className="mt-5">
          <GroupCard group={priceGroups[active]} locale={locale} />
        </div>
      </Reveal>

      <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-[1.4rem]">
        <p className="max-w-[46ch] text-[0.9rem] text-muted max-[620px]:text-[0.85rem]">
          {m.prices.foot[locale]}
        </p>
        <a
          href={clinic.phoneHref}
          className="btn btn-dark max-[620px]:w-full max-[620px]:justify-center"
        >
          {m.prices.ask[locale]}{" "}
          <ArrowUpRight className="arrow size-[0.85em]" />
        </a>
      </Reveal>
    </Section>
  );
}
