"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { ScrollTrack } from "@/components/ScrollTrack";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn } from "@/lib/cn";
import { team } from "@/data/content";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Keng ekranda — sichqoncha kelgan karta kengayadi, qolganlari torayadi;
 * doim bittasi ochiq turadi, shuning uchun bo'lim balandligi sakramaydi.
 *
 * Tor ekranda — bo'lim qadaladi va pastga skroll kartalarni yon tomonga
 * suradi (xizmatlar bilan bir xil harakat).
 */
const ACTIVE_GROW = 1.55;
const IDLE_GROW = 1;
const ACTIVE_H = "clamp(230px, 30vw, 380px)";
const IDLE_H = "clamp(165px, 21vw, 266px)";

export function Team({ locale }: { locale: Locale }) {
  const narrow = useMediaQuery("(max-width: 900px)");
  const [active, setActive] = useState(0);

  const heading = (
    <SectionHeading
      locale={locale}
      eyebrow={m.team.eyebrow}
      title={m.team.title}
      accent={m.team.titleAccent}
    />
  );

  const admin = (
    <Reveal
      as="p"
      className="mt-7 max-w-[54ch] border-t border-line pt-[1.3rem] text-[0.9rem] text-muted"
    >
      {m.team.admin[locale]}
    </Reveal>
  );

  if (narrow) {
    return (
      <section id="jamoa">
        <ScrollTrack heading={heading} label={m.team.eyebrow[locale]}>
          {team.map((doctor) => (
            <figure
              key={doctor.photo}
              className="flex w-[76vw] shrink-0 flex-col gap-3"
            >
              <Photo
                slot={doctor.photo}
                locale={locale}
                sizes="76vw"
                className="aspect-[3/4]"
              />
              <figcaption className="flex flex-col gap-0.5">
                <b className="text-[1.02rem] font-medium">
                  {doctor.name[locale]}
                </b>
                <span className="label">{doctor.role[locale]}</span>
              </figcaption>
            </figure>
          ))}
        </ScrollTrack>

        <div className="mx-auto w-[min(var(--container-frame),100%-2.5rem)] pb-10">
          {admin}
        </div>
      </section>
    );
  }

  return (
    <Section id="jamoa">
      {heading}

      <div
        className="flex items-end gap-5"
        style={{ height: "calc(clamp(230px, 30vw, 380px) + 3.75rem)" }}
      >
        {team.map((doctor, i) => {
          const isActive = i === active;
          return (
            <div
              key={doctor.photo}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{ flexGrow: isActive ? ACTIVE_GROW : IDLE_GROW }}
              className="min-w-0 basis-0 transition-[flex-grow] duration-[650ms] ease-soft"
            >
              <Reveal index={i} className="flex flex-col gap-3">
                <div
                  style={{
                    height: isActive ? ACTIVE_H : IDLE_H,
                    marginBottom: isActive ? 0 : 18,
                  }}
                  className="transition-[height,margin-bottom] duration-[650ms] ease-soft"
                >
                  <Photo
                    slot={doctor.photo}
                    locale={locale}
                    sizes="40vw"
                    className="h-full"
                  />
                </div>

                <div
                  className={cn(
                    "flex min-h-[3rem] flex-col gap-0.5 transition-opacity duration-500 ease-soft",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                >
                  <b className="text-[1.02rem] font-medium">
                    {doctor.name[locale]}
                  </b>
                  <span className="label">{doctor.role[locale]}</span>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      {admin}
    </Section>
  );
}
