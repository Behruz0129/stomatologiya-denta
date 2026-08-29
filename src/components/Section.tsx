import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";
import type { L, Locale } from "@/lib/i18n";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-[min(var(--container-frame),100%-2.5rem)] max-[620px]:w-[min(var(--container-frame),100%-2.5rem)]", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  band = false,
  children,
  className,
}: {
  id?: string;
  /** Kulrang fon — bo'limlar navbatlashib turishi uchun. */
  band?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-[60px] max-[620px]:py-10",
        band && "bg-band",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  lede,
  locale,
  center = false,
  className,
}: {
  eyebrow: L;
  /** Sarlavhaning oddiy qismi. */
  title: L;
  /** Serif kursivda ajratiladigan qismi. */
  accent: L;
  lede?: L;
  locale: Locale;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-10 flex max-w-[38ch] flex-col gap-3",
        center && "mx-auto max-w-[44ch] items-center text-center",
        className,
      )}
    >
      <span className="label">{eyebrow[locale]}</span>
      <h2 className="text-[clamp(1.65rem,5.4vw,3.15rem)]">
        {title[locale]}
        <span className="accent">{accent[locale]}</span>
      </h2>
      {lede && <p className="text-[0.9rem] text-muted">{lede[locale]}</p>}
    </Reveal>
  );
}
