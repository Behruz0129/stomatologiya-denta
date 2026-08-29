import { SectionHeading } from "@/components/Section";
import { Photo } from "@/components/Photo";
import { ScrollTrack } from "@/components/ScrollTrack";
import { Reveal } from "@/components/Reveal";
import { team } from "@/data/content";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

/*
 * Xizmatlar bilan bir xil harakat: bo'lim qadaladi, pastga skroll
 * kartalarni yon tomonga suradi. Sichqoncha bilan kengaytirish olib
 * tashlandi — bir bo'limda ikki xil harakat chalkashtirardi.
 */
export function Team({ locale }: { locale: Locale }) {
  return (
    <section id="jamoa">
      <ScrollTrack
        label={m.team.eyebrow[locale]}
        heading={
          <SectionHeading
            locale={locale}
            eyebrow={m.team.eyebrow}
            title={m.team.title}
            accent={m.team.titleAccent}
          />
        }
      >
        {team.map((doctor) => (
          <figure
            key={doctor.photo}
            className="flex w-[62vw] shrink-0 flex-col gap-3 min-[621px]:w-[34vw] min-[1081px]:w-[calc((100%-60px)/4)]"
          >
            <Photo
              slot={doctor.photo}
              locale={locale}
              sizes="(max-width: 620px) 62vw, (max-width: 1080px) 34vw, 22vw"
              className="aspect-[3/4]"
            />
            <figcaption className="flex flex-col gap-0.5">
              <b className="text-[1.02rem] font-medium max-[620px]:text-[0.96rem]">
                {doctor.name[locale]}
              </b>
              <span className="label">{doctor.role[locale]}</span>
            </figcaption>
          </figure>
        ))}
      </ScrollTrack>

      <div className="mx-auto w-[min(var(--container-frame),100%-2.5rem)]">
        <Reveal
          as="p"
          className="max-w-[54ch] border-t border-line pt-[1.3rem] pb-[60px] text-[0.9rem] text-muted"
        >
          {m.team.admin[locale]}
        </Reveal>
      </div>
    </section>
  );
}
