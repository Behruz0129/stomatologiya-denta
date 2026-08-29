import { SectionHeading } from "@/components/Section";
import { Photo } from "@/components/Photo";
import { ScrollTrack } from "@/components/ScrollTrack";
import { services, elasticColors } from "@/data/services";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Kartalar yon tomonga siljiydi, lekin bu alohida karusel emas: bo'lim
 * ekranga qadaladi va pastga skroll qilish ularni suradi. Shuning uchun
 * hamma rasm bir xil nisbatda va kartalar balandligi teng.
 */
export function Services({ locale }: { locale: Locale }) {
  return (
    <section id="xizmatlar">
      <ScrollTrack
        label={m.services.eyebrow[locale]}
        heading={
          <SectionHeading
            locale={locale}
            eyebrow={m.services.eyebrow}
            title={m.services.title}
            accent={m.services.titleAccent}
          />
        }
      >
        {services.map((service) => (
          <article
            key={service.photo}
            className="group flex w-[76vw] shrink-0 flex-col gap-5 min-[621px]:w-[42vw] min-[1081px]:w-[26vw] min-[1400px]:w-[340px]"
          >
            <Photo
              slot={service.photo}
              locale={locale}
              zoomOnHover
              sizes="(max-width: 620px) 76vw, (max-width: 1080px) 42vw, 26vw"
              className="aspect-[4/3]"
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
        ))}
      </ScrollTrack>
    </section>
  );
}
