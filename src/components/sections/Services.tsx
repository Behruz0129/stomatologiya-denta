import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Carousel } from "@/components/Carousel";
import { services, elasticColors } from "@/data/services";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Keng ekranda — pog'onali to'r: rasm nisbatlari navbatlashadi va satr
 * `items-center` bo'lgani uchun pastroq kartalar o'rtaga tekislanadi.
 *
 * Tor ekranda — gorizontal karusel: to'qqizta kartani ustma-ust
 * qo'yish o'rniga bittalab ko'rsatgan qulayroq. U yerda hamma rasm
 * bir xil nisbatda, shuning uchun kartalar balandligi ham teng.
 */


export function Services({ locale }: { locale: Locale }) {
  return (
    <Section id="xizmatlar">
      <SectionHeading
        locale={locale}
        eyebrow={m.services.eyebrow}
        title={m.services.title}
        accent={m.services.titleAccent}
      />

      <Carousel
        label={m.services.eyebrow[locale]}
        trackClassName="min-[1081px]:grid min-[1081px]:grid-cols-3 min-[1081px]:items-center min-[1081px]:gap-5 min-[1081px]:overflow-visible min-[1081px]:snap-none min-[1081px]:pb-0"
        controlsClassName="min-[1081px]:hidden"
      >
        {services.map((service, i) => (
          <Reveal
            key={service.photo}
            index={i % 3}
            className="w-[78%] shrink-0 snap-start min-[621px]:w-[46%] min-[1081px]:w-auto"
          >
            <article className="group flex h-full flex-col gap-5">
              <Photo
                slot={service.photo}
                locale={locale}
                zoomOnHover
                sizes="(max-width: 620px) 78vw, (max-width: 1080px) 46vw, 33vw"
                className={
                  i % 2 === 1
                    ? "aspect-[4/3] min-[1081px]:aspect-[4/3.4]"
                    : "aspect-[4/3] min-[1081px]:aspect-[3/4]"
                }
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-[1.05rem] max-[620px]:text-[1rem]">
                  {service.title[locale]}
                </h3>
                <p className="text-[0.88rem] text-muted max-[620px]:text-[0.84rem]">
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
      </Carousel>
    </Section>
  );
}
