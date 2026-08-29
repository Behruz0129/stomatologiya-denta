import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { YandexMap } from "@/components/YandexMap";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { L, Locale } from "@/lib/i18n";

function Row({
  label,
  children,
  locale,
}: {
  label: L;
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <div className="flex flex-col gap-[0.2rem]">
      <span className="label">
        {label[locale]}
      </span>
      <span className="text-[1.02rem]">{children}</span>
    </div>
  );
}

export function Visit({ locale }: { locale: Locale }) {
  return (
    <section id="manzil" className="bg-band py-[60px] max-[620px]:py-10">
      <Container>
        <SectionHeading
          locale={locale}
          eyebrow={m.visit.eyebrow}
          title={m.visit.title}
          accent={m.visit.titleAccent}
        />

        <div className="grid items-stretch gap-[clamp(1.6rem,3vw,2.6rem)] [grid-template-columns:0.9fr_1.1fr] max-[900px]:grid-cols-1">
          <Reveal className="flex flex-col gap-[1.4rem] rounded-[var(--radius-card)] border border-line bg-card p-[clamp(1.6rem,3vw,2.4rem)]">
            <Row label={m.visit.address} locale={locale}>
              {clinic.address[locale].split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Row>
            <Row label={m.visit.landmark} locale={locale}>
              {clinic.landmark[locale]}
            </Row>
            <Row label={m.visit.hours} locale={locale}>
              {clinic.hours[locale]}
            </Row>
            <Row label={m.visit.phone} locale={locale}>
              <a href={clinic.phoneHref} className="tabular-nums">
                {clinic.phone}
              </a>
            </Row>

            <div className="mt-auto flex flex-wrap gap-[0.6rem]">
              <a href={clinic.phoneHref} className="btn btn-dark">
                {m.visit.call[locale]}
              </a>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                WhatsApp
              </a>
              <a
                href={clinic.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {m.visit.openMap[locale]}
              </a>
            </div>
          </Reveal>

          <Reveal className="max-[900px]:order-first">
            <YandexMap title={m.visit.title[locale] + m.visit.titleAccent[locale]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
