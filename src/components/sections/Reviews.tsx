import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { reviews } from "@/data/content";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function Reviews({ locale }: { locale: Locale }) {
  return (
    <Section id="sharhlar">
      <SectionHeading
        locale={locale}
        eyebrow={m.reviews.eyebrow}
        title={m.reviews.title}
        accent={m.reviews.titleAccent}
      />

      <div className="grid grid-cols-3 gap-[1.1rem] max-[900px]:grid-cols-1">
        {reviews.map((review, i) => (
          <Reveal key={review.author.uz} index={i}>
            {/* Sharhlar Yandex Maps'dan so'zma-so'z — qisqartirilgan, o'zgartirilmagan. */}
            <figure className="flex h-full flex-col gap-[1.1rem] rounded-[var(--radius-card)] border border-line bg-card p-7">
              <span
                aria-hidden
                className="h-4 font-serif text-[2.4rem] leading-[0.6] text-line-2"
              >
                &ldquo;
              </span>
              <blockquote className="text-base text-ink-2">
                {review.text[locale]}
              </blockquote>
              <figcaption className="mt-auto flex flex-col gap-[0.15rem] border-t border-line pt-[0.7rem]">
                <b className="text-[0.93rem] font-semibold">
                  {review.author[locale]}
                </b>
                <span className="label">
                  {review.source[locale]}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-[1.6rem]">
        <a
          href={clinic.yandexReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          {m.reviews.all[locale]} <span className="arrow">↗</span>
        </a>
      </Reveal>
    </Section>
  );
}
