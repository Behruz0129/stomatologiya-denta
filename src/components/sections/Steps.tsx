import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { steps } from "@/data/content";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Yo'l chizig'i: keng ekranda doiradan o'ngga qarab gorizontal, tor
 * ekranda esa pastga qarab vertikal ketadi. Oxirgi qadamda chiziq yo'q —
 * u hech qayerga ulanmaydi.
 */
export function Steps({ locale }: { locale: Locale }) {
  return (
    <Section>
      <SectionHeading
        locale={locale}
        eyebrow={m.steps.eyebrow}
        title={m.steps.title}
        accent={m.steps.titleAccent}
      />

      <ol className="grid grid-cols-4 gap-x-6 gap-y-10 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1 max-[620px]:gap-y-0">
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          return (
            <Reveal
              as="li"
              index={i}
              step={110}
              key={step.title.uz}
              className="relative max-[620px]:pb-9"
            >
              <div className="flex items-center">
                <span className="grid size-[58px] shrink-0 place-items-center rounded-full border border-line-2 text-[0.95rem] tabular-nums max-[620px]:size-[48px] max-[620px]:text-[0.85rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {!last && (
                  <span className="h-px flex-1 bg-line max-[620px]:hidden" />
                )}
              </div>

              {/* Tor ekranda chiziq doiradan pastga tushadi. */}
              {!last && (
                <span className="absolute top-[48px] bottom-0 left-[23.5px] hidden w-px bg-line max-[620px]:block" />
              )}

              <h3 className="mt-8 text-[1.35rem] max-[620px]:mt-5 max-[620px]:ml-16 max-[620px]:text-[1.15rem]">
                {step.title[locale]}
              </h3>
              <p className="mt-3 max-w-[28ch] text-[0.9rem] text-muted max-[620px]:mt-2 max-[620px]:ml-16 max-[620px]:text-[0.86rem]">
                {step.text[locale]}
              </p>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
