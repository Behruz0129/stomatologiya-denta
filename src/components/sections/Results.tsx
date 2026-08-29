import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfter";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function Results({ locale }: { locale: Locale }) {
  return (
    <Section>
      <SectionHeading
        locale={locale}
        center
        eyebrow={m.results.eyebrow}
        title={m.results.title}
        accent={m.results.titleAccent}
      />

      <Reveal>
        <BeforeAfterSlider locale={locale} />
      </Reveal>
    </Section>
  );
}
