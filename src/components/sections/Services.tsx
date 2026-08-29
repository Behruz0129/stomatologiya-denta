"use client";

import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { ScrollTrack } from "@/components/ScrollTrack";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { services, elasticColors } from "@/data/services";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";
import type { Service } from "@/data/services";

/*
 * Keng ekranda — pog'onali to'r: rasm nisbatlari navbatlashadi va satr
 * `items-center` bo'lgani uchun pastroq kartalar o'rtaga tekislanadi.
 *
 * Tor ekranda — bo'lim qadaladi va pastga skroll kartalarni yon tomonga
 * suradi. To'qqizta kartani ustma-ust qo'yish o'rniga shunday qulayroq.
 */
function Card({
  service,
  locale,
  aspect,
}: {
  service: Service;
  locale: Locale;
  aspect: string;
}) {
  return (
    <article className="group flex h-full flex-col gap-4">
      <Photo
        slot={service.photo}
        locale={locale}
        zoomOnHover
        sizes="(max-width: 900px) 82vw, 33vw"
        className={aspect}
      />

      <div className="flex flex-col gap-1.5">
        <h3 className="text-[1.05rem] max-[620px]:text-[1.02rem]">
          {service.title[locale]}
        </h3>
        <p className="text-[0.88rem] text-muted max-[620px]:text-[0.86rem]">
          {service.text[locale]}
        </p>

        <div className="mt-1 flex items-center gap-2">
          {service.elastics ? (
            <span className="flex items-center gap-[5px]">
              {elasticColors.map((color) => (
                <span
                  key={color}
                  className="size-[9px] rounded-full"
                  style={{ background: color }}
                />
              ))}
            </span>
          ) : (
            <span className="size-[5px] rounded-full bg-ink" />
          )}
          <span className="label">{service.meta[locale]}</span>
        </div>
      </div>
    </article>
  );
}

export function Services({ locale }: { locale: Locale }) {
  const narrow = useMediaQuery("(max-width: 900px)");

  const heading = (
    <SectionHeading
      locale={locale}
      eyebrow={m.services.eyebrow}
      title={m.services.title}
      accent={m.services.titleAccent}
    />
  );

  if (narrow) {
    return (
      <section id="xizmatlar">
        <ScrollTrack heading={heading} label={m.services.eyebrow[locale]}>
          {services.map((service) => (
            <div key={service.photo} className="w-[82vw] shrink-0">
              <Card service={service} locale={locale} aspect="aspect-[4/3]" />
            </div>
          ))}
        </ScrollTrack>
      </section>
    );
  }

  return (
    <Section id="xizmatlar">
      {heading}
      <div className="grid grid-cols-3 items-center gap-5">
        {services.map((service, i) => (
          <Reveal key={service.photo} index={i % 3}>
            <Card
              service={service}
              locale={locale}
              aspect={i % 2 === 1 ? "aspect-[4/3.4]" : "aspect-[3/4]"}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
