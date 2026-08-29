import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { HeroPhoto } from "@/components/HeroPhoto";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section id="top" className="pt-5 pb-[60px]">
      <Container className="grid items-center gap-[clamp(2rem,5vw,4.5rem)] [grid-template-columns:1fr_0.92fr] max-[900px]:grid-cols-1">
        <div className="flex flex-col items-start gap-7">
          <Reveal index={0} step={130} className="inline-flex items-center gap-[0.55rem] rounded-full border border-line-2 px-[0.9rem] py-[0.4rem]">
            <span className="size-1.5 rounded-full bg-ink" />
            <span className="label">{m.hero.badge[locale]}</span>
          </Reveal>

          <Reveal as="h1" index={1} step={130} className="text-[clamp(2.4rem,4.6vw,3.5rem)]">
            {m.hero.titleStart[locale]}
            <span className="accent">{m.hero.titleAccent[locale]}</span>
            {m.hero.titleEnd[locale]}
          </Reveal>

          <Reveal as="p" index={2} step={130} className="max-w-[42ch] text-[0.95rem] text-muted">
            {m.hero.lede[locale]}
          </Reveal>

          <Reveal index={3} step={130} className="flex flex-wrap gap-[0.7rem]">
            <a href={clinic.phoneHref} className="btn btn-dark">
              {m.nav.book[locale]} <span className="arrow">&#8599;</span>
            </a>
            <a href="#narxlar" className="btn btn-ghost">
              {m.hero.seePrices[locale]}
            </a>
          </Reveal>
        </div>

        <Reveal index={4} step={130}>
          <HeroPhoto locale={locale} />
        </Reveal>
      </Container>
    </section>
  );
}
