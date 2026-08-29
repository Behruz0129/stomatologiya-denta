import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { stats } from "@/data/clinic";
import type { Locale } from "@/lib/i18n";

export function Stats({ locale }: { locale: Locale }) {
  return (
    <div className="border-y border-line">
      <Container>
        <div className="grid grid-cols-4 gap-[1.4rem] py-[2.1rem] max-[900px]:grid-cols-2 max-[900px]:gap-[1.6rem]">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.source.uz + stat.to}
              index={i}
              className="flex flex-col gap-[0.15rem]"
            >
              <b className="text-[clamp(2.1rem,7vw,2.6rem)] leading-[1.05] tracking-[-0.045em]">
                <CountUp
                  to={stat.to}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </b>
              <span className="text-[0.82rem] leading-snug text-ink-2">
                {stat.label[locale]}
              </span>
              <span className="label mt-[0.25rem] text-[0.62rem]">{stat.source[locale]}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
