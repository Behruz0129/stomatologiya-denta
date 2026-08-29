"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Carousel } from "@/components/Carousel";
import { team } from "@/data/content";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Keng ekranda — sichqoncha kelgan karta kengayadi, qolganlari torayadi
 * va doim bittasi ochiq turadi, shuning uchun bo'lim balandligi sakramaydi.
 *
 * Tor ekranda — karusel. Karta kengligi 72% qilib olingan va markazga
 * tekislanadi: yon tomonlarda qo'shni kartalarning bir qismi ko'rinib
 * turadi, ya'ni surish mumkinligi o'zidan ma'lum bo'ladi.
 */
const ACTIVE_GROW = 1.55;
const IDLE_GROW = 1;

const ACTIVE_H = "clamp(230px, 30vw, 380px)";
const IDLE_H = "clamp(165px, 21vw, 266px)";

export function Team({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);

  return (
    <Section id="jamoa">
      <SectionHeading
        locale={locale}
        eyebrow={m.team.eyebrow}
        title={m.team.title}
        accent={m.team.titleAccent}
      />

      <Carousel
        label={m.team.eyebrow[locale]}
        trackClassName="team-row scroll-px-[14%] min-[901px]:flex min-[901px]:items-end min-[901px]:overflow-visible min-[901px]:snap-none min-[901px]:scroll-px-0 min-[901px]:pb-0"
        controlsClassName="min-[901px]:hidden"
      >
        {team.map((doctor, i) => {
          const isActive = i === active;
          return (
            <div
              key={doctor.photo}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{ flexGrow: isActive ? ACTIVE_GROW : IDLE_GROW }}
              className="w-[72%] shrink-0 snap-center min-[901px]:w-auto min-[901px]:min-w-0 min-[901px]:shrink min-[901px]:basis-0"
            >
              <Reveal index={i} className="flex flex-col gap-3">
                <div
                  style={{
                    height: isActive ? ACTIVE_H : IDLE_H,
                    marginBottom: isActive ? 0 : 18,
                  }}
                  className="max-[900px]:!mb-0 max-[900px]:!h-auto min-[901px]:transition-[height,margin-bottom] min-[901px]:duration-[650ms] min-[901px]:ease-soft"
                >
                  <Photo
                    slot={doctor.photo}
                    locale={locale}
                    sizes="(max-width: 900px) 72vw, 40vw"
                    className="h-full max-[900px]:aspect-[3/4]"
                  />
                </div>

                <div
                  className={
                    "flex min-h-[3rem] flex-col gap-0.5 transition-opacity duration-500 ease-soft " +
                    (isActive ? "opacity-100" : "opacity-0 max-[900px]:opacity-100")
                  }
                >
                  <b className="text-[1.02rem] font-medium max-[620px]:text-[0.96rem]">
                    {doctor.name[locale]}
                  </b>
                  <span className="label">{doctor.role[locale]}</span>
                </div>
              </Reveal>
            </div>
          );
        })}
      </Carousel>

      <Reveal
        as="p"
        className="mt-2 max-w-[54ch] border-t border-line pt-[1.3rem] text-[0.9rem] text-muted"
      >
        {m.team.admin[locale]}
      </Reveal>
    </Section>
  );
}
