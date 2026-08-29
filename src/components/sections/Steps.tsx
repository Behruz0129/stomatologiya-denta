import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { steps } from "@/data/content";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Gorizontal yo'l chizig'i: har bir katakda doira, undan o'ngga qarab
 * ingichka chiziq ketadi va keyingi doiraga ulanadi. Karta yoki ramka
 * yo'q - faqat doira, chiziq va matn.
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

      <ol className="grid grid-cols-4 gap-x-6 gap-y-12 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
        {steps.map((step, i) => (
          <Reveal as="li" index={i} step={110} key={step.title.uz}>
            <div className="flex items-center">
              <span className="grid size-[58px] shrink-0 place-items-center rounded-full border border-line-2 text-[0.95rem] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Chiziq katakning o'ng chetigacha boradi - keyingi doiraga ulanadi. */}
              <span className="h-px flex-1 bg-line max-[620px]:hidden" />
            </div>

            <h3 className="mt-8 text-[1.35rem]">{step.title[locale]}</h3>
            <p className="mt-3 max-w-[28ch] text-[0.9rem] text-muted">
              {step.text[locale]}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
