import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
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

export function Prices({ locale }: { locale: Locale }) {
  return (
    <Section id="narxlar">
      <SectionHeading
        locale={locale}
        eyebrow={m.prices.eyebrow}
        title={m.prices.title}
        accent={m.prices.titleAccent}
        lede={m.prices.lede}
      />

      <div className="grid grid-cols-2 gap-x-[2.8rem] gap-y-4 max-[900px]:grid-cols-1 max-[900px]:gap-8">
        {priceGroups.map((group, i) => (
          <Reveal key={group.title.uz} index={i % 2}>
            <h3 className="border-b border-line-2 pb-[0.7rem] text-[0.95rem] font-medium">
              {group.title[locale]}
            </h3>

            {group.rows.map((row) => (
              <div
                key={row.name.uz}
                className="flex items-baseline gap-[0.7rem] border-b border-line py-[0.85rem]"
              >
                <span className="text-[0.98rem]">{row.name[locale]}</span>
                <span className="price-leader" />
                <span
                  className={
                    row.amount
                      ? "text-[0.95rem] whitespace-nowrap tabular-nums"
                      : "text-[0.9rem] whitespace-nowrap text-muted"
                  }
                >
                  {priceLabel(row, locale)}
                </span>
              </div>
            ))}
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-line-2 pt-[1.4rem]">
        <p className="max-w-[46ch] text-[0.9rem] text-muted">
          {m.prices.foot[locale]}
        </p>
        <a href={clinic.phoneHref} className="btn btn-dark">
          {m.prices.ask[locale]} <span className="arrow">&#8599;</span>
        </a>
      </Reveal>
    </Section>
  );
}
