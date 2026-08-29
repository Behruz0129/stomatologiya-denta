import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { services, elasticColors } from "@/data/services";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Referensdagi tartib: kartaning ramkasi ham, oq foni ham yo'q - faqat
 * yumaloq rasm, tagida nomi va qisqa ma'lumot. Rasmlarning balandligi
 * navbat bilan farq qiladi va satr `items-center` bo'lgani uchun pastroq
 * kartalar o'rtaga tekislanadi - pog'ona shundan hosil bo'ladi,
 * qo'lda surish kerak emas.
 */
const TALL = "aspect-[3/4]";
const SHORT = "aspect-[4/3.4]";

export function Services({ locale }: { locale: Locale }) {
  return (
    <Section id="xizmatlar">
      <SectionHeading
        locale={locale}
        eyebrow={m.services.eyebrow}
        title={m.services.title}
        accent={m.services.titleAccent}
      />

      <div className="grid grid-cols-3 items-center gap-5 max-[1080px]:grid-cols-2 max-[620px]:grid-cols-1">
        {services.map((service, i) => (
          <Reveal key={service.photo} index={i % 3}>
            <article className="group flex flex-col gap-5">
              <Photo
                slot={service.photo}
                locale={locale}
                zoomOnHover
                sizes="(max-width: 620px) 100vw, (max-width: 1080px) 50vw, 33vw"
                className={i % 2 === 1 ? SHORT : TALL}
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-[1.05rem]">{service.title[locale]}</h3>
                <p className="text-[0.88rem] text-muted">
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
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
