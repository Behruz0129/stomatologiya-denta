"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { cn } from "@/lib/cn";
import { team } from "@/data/content";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Kartalar pastki chiziqqa tekislanadi (`items-end`), shuning uchun faol
 * karta yuqoriga qarab o'sadi - pastga emas. Yonidagilar esa shu chiziqdan
 * bir oz ko'tarilib turadi, natijada qator "pastdan tepaga" qaraydi.
 *
 * Kenglik va balandlik alohida boshqariladi: `aspect-ratio` bo'lsa kenglik
 * ortishi bilan balandlik ham ortib, karta haddan tashqari kattayib
 * ketardi.
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

      <div className="team-row flex items-end gap-5 max-[900px]:grid max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
        {team.map((doctor, i) => {
          const isActive = i === active;
          return (
            <div
              key={doctor.photo}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{ flexGrow: isActive ? ACTIVE_GROW : IDLE_GROW }}
              className="flex min-w-0 basis-0 flex-col gap-3 transition-[flex-grow] duration-[650ms] ease-soft max-[900px]:basis-auto"
            >
              <Reveal index={i}>
                <div
                  style={{
                    height: isActive ? ACTIVE_H : IDLE_H,
                    marginBottom: isActive ? 0 : 18,
                  }}
                  className="transition-[height,margin-bottom] duration-[650ms] ease-soft max-[900px]:!mb-0 max-[900px]:!h-auto"
                >
                  <Photo
                    slot={doctor.photo}
                    locale={locale}
                    sizes="(max-width: 900px) 50vw, 40vw"
                    className="h-full max-[900px]:aspect-[3/4]"
                  />
                </div>
              </Reveal>

              {/* Faqat faol shifokorning ma'lumoti. Joyi doim band -
                  shuning uchun almashganda pastdagi matn sakramaydi. */}
              <div
                className={cn(
                  "flex min-h-[3rem] flex-col gap-0.5 transition-opacity duration-500 ease-soft",
                  isActive ? "opacity-100" : "opacity-0 max-[900px]:opacity-100",
                )}
              >
                <b className="text-[1.02rem] font-medium">
                  {doctor.name[locale]}
                </b>
                <span className="label">{doctor.role[locale]}</span>
              </div>
            </div>
          );
        })}
      </div>

      <Reveal
        as="p"
        className="mt-4 max-w-[54ch] border-t border-line pt-[1.3rem] text-[0.9rem] text-muted"
      >
        {m.team.admin[locale]}
      </Reveal>
    </Section>
  );
}
