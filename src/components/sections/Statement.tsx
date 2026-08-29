import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function Statement({ locale }: { locale: Locale }) {
  return (
    <Section>
      {/*
       * Uch ustunli grid: fotolar matnning ikki yonida turadi va vertikal
       * markazlashadi. Ilgari ular `absolute top-0` edi - shuning uchun
       * bo'limdan tepaga chiqib ketardi.
       */}
      <Reveal className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-[clamp(1rem,4vw,3.5rem)] max-[900px]:grid-cols-1">
        <Photo
          slot="F2"
          locale={locale}
          sizes="20vw"
          className="aspect-[1/1.15] w-[clamp(130px,15vw,195px)] justify-self-end -rotate-5 max-[900px]:hidden"
        />

        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-[20ch] text-[clamp(1.45rem,4.6vw,2.6rem)]">
            <span className="accent">{m.statement.a[locale]}</span>
            {m.statement.b[locale]}
            <span className="accent">{m.statement.c[locale]}</span>
            {m.statement.d[locale]}
          </h2>

          <a href="#xizmatlar" className="btn btn-dark">
            {m.statement.cta[locale]} <span className="arrow">&#8599;</span>
          </a>
        </div>

        <Photo
          slot="F3"
          locale={locale}
          sizes="20vw"
          className="aspect-[1/1.15] w-[clamp(130px,15vw,195px)] justify-self-start rotate-4 max-[900px]:hidden"
        />
      </Reveal>
    </Section>
  );
}
