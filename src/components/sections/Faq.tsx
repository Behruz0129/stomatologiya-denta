"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Collapse } from "@/components/Collapse";
import { cn } from "@/lib/cn";
import { faq } from "@/data/content";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Ilgari bu `<details>` edi - u bir zumda ochilib yopilardi, oraliq
 * harakat yo'q. Endi balandlik o'lchanadi va silliq ochiladi
 * (`Collapse`). Bir nechta savol bir vaqtda ochiq turishi mumkin.
 */
export function Faq({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (i: number) =>
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i],
    );

  return (
    <Section>
      <SectionHeading
        locale={locale}
        center
        eyebrow={m.faq.eyebrow}
        title={m.faq.title}
        accent={m.faq.titleAccent}
      />

      <Reveal className="mx-auto max-w-[820px] border-t border-line-2">
        {faq.map((item, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={item.q.uz} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center gap-4 px-[0.2rem] py-5 text-left text-[1.03rem] font-medium"
                >
                  {item.q[locale]}
                  <span
                    className={cn(
                      "ml-auto text-muted transition-transform duration-500 ease-expo",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
              </h3>

              <Collapse open={isOpen} deps={locale}>
                <p className="max-w-[62ch] px-[0.2rem] pb-[1.4rem] text-[0.97rem] text-muted">
                  {item.a[locale]}
                </p>
              </Collapse>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}
