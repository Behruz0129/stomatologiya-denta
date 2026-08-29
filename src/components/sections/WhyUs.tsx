"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Collapse } from "@/components/Collapse";
import { cn } from "@/lib/cn";
import { whyRows } from "@/data/content";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Akkordeon: bir vaqtda bitta qator ochiq turadi. Qator bosilganda
 * o'ng tomondagi foto ham almashadi - yangisi pastdan ko'tarilib chiqadi.
 * Fotolar ustma-ust turadi, faqat ko'rinishi almashadi: shu sabab
 * almashuv paytida joylashuv sakramaydi.
 */
export function WhyUs({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);

  return (
    <section id="nega" className="py-[60px] max-[620px]:py-10">
      <Container className="grid items-start gap-[clamp(1.6rem,4vw,3.4rem)] [grid-template-columns:1fr_0.85fr] max-[900px]:grid-cols-1">
        <div>
          <SectionHeading
            locale={locale}
            eyebrow={m.why.eyebrow}
            title={m.why.title}
            accent={m.why.titleAccent}
          />

          <div className="flex flex-col border-t border-line">
            {whyRows.map((row, i) => {
              const open = i === active;
              return (
                <Reveal key={row.title.uz} index={Math.min(i, 5)}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={open}
                      className="group flex w-full items-center gap-4 border-b border-line py-[1.15rem] text-left"
                    >
                      <span
                        className={cn(
                          "label transition-colors duration-500 ease-soft",
                          open && "text-ink",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-[1.05rem] transition-[translate,opacity] duration-500 ease-soft",
                          open
                            ? "translate-x-0"
                            : "opacity-55 group-hover:translate-x-1.5 group-hover:opacity-100",
                        )}
                      >
                        {row.title[locale]}
                      </span>
                    </button>
                  </h3>

                  <Collapse open={open} deps={locale}>
                    <p className="max-w-[46ch] pt-1 pb-[1.15rem] pl-[3.1rem] text-[0.9rem] text-muted">
                      {row.text[locale]}
                    </p>
                  </Collapse>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="sticky top-24 max-[900px]:static max-[900px]:order-first max-[900px]:mb-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] max-[900px]:aspect-[16/10]">
            {whyRows.map((row, i) => (
              <div
                key={row.photo + i}
                aria-hidden={i !== active}
                className={cn(
                  "absolute inset-0 transition-[opacity,translate] duration-700 ease-expo",
                  i === active
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-[7%] opacity-0",
                )}
              >
                <Photo
                  slot={row.photo}
                  locale={locale}
                  fill
                  bare
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
