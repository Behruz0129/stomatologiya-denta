"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import {
  priceGroups,
  type PriceGroup,
  type PriceIcon,
  type PriceRow,
} from "@/data/prices";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";
import {
  ArrowUpRight,
  IconBraces,
  IconCrown,
  IconExam,
  IconScalpel,
  IconTooth,
} from "@/components/icons";

const ICONS: Record<PriceIcon, (p: { className?: string }) => React.ReactNode> =
  {
    exam: IconExam,
    therapy: IconTooth,
    braces: IconBraces,
    crown: IconCrown,
    surgery: IconScalpel,
  };

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

function GroupCard({ group, locale }: { group: PriceGroup; locale: Locale }) {
  const Icon = ICONS[group.icon];

  return (
    <div className="flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-card p-6 max-[620px]:p-5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-fill text-ink">
          <Icon className="size-[18px]" />
        </span>
        <h3 className="text-[0.98rem]">{group.title[locale]}</h3>
      </div>

      <div className="flex flex-col gap-3">
        {group.rows.map((row) => (
          <div
            key={row.name.uz}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-[0.95rem] leading-snug">
              {row.name[locale]}
            </span>
            <span
              className={cn(
                "shrink-0 rounded-full px-3 py-1 text-[0.85rem] whitespace-nowrap tabular-nums",
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

      {/* Keng ekran: hamma yo'nalish bir vaqtda */}
      <div className="grid grid-cols-3 gap-4 max-[1080px]:grid-cols-2 max-[900px]:hidden">
        {priceGroups.map((group, i) => (
          <Reveal key={group.title.uz} index={i % 3}>
            <GroupCard group={group} locale={locale} />
          </Reveal>
        ))}
      </div>

      {/* Tor ekran: yo'nalishni tanlaysiz. Tugmalar o'raladi — yon tomonga
          surilib ketsa, ro'yxatning bir qismi ko'rinmay qolardi. */}
      <Reveal className="min-[901px]:hidden">
        <div
          role="tablist"
          aria-label={m.prices.eyebrow[locale]}
          className="flex flex-wrap gap-2"
        >
          {priceGroups.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <button
                key={group.title.uz}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.85rem] transition-colors duration-300 ease-soft",
                  i === active
                    ? "border-ink bg-ink text-white"
                    : "border-line-2 text-ink-2",
                )}
              >
                <Icon className="size-4" />
                {group.title[locale]}
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          <GroupCard group={priceGroups[active]} locale={locale} />
        </div>
      </Reveal>

      <Reveal className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <div className="flex max-w-[46ch] flex-col gap-1">
          <p className="text-[0.88rem] text-muted">{m.prices.foot[locale]}</p>
          <p className="text-[0.88rem] text-muted">
            {m.prices.payment[locale]}
          </p>
        </div>
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
