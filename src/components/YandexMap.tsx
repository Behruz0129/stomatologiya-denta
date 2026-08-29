import { clinic } from "@/data/clinic";

/**
 * Yandex Maps vidjeti. Rasm emas, jonli xarita: odam uni kattalashtira
 * oladi va shu yerdan marshrut ola oladi.
 *
 * `loading="lazy"` — vidjet Yandex'dan yuklanadi, sahifaning ochilishini
 * kechiktirmasin: u ancha pastda va odam u yergacha tushmasligi ham mumkin.
 */
const SRC =
  "https://yandex.uz/map-widget/v1/org/stomatologiya_denta/5867957547/" +
  "?ll=69.282692%2C41.326951" +
  "&panorama%5Bdirection%5D=282.472961%2C0.527042" +
  "&panorama%5Bfull%5D=true" +
  "&panorama%5Bpoint%5D=69.283001%2C41.326999" +
  "&panorama%5Bspan%5D=72.604757%2C53.681656" +
  "&z=16";

export function YandexMap({ title }: { title: string }) {
  return (
    <div className="relative h-full min-h-[340px] overflow-hidden rounded-[var(--radius-card)] bg-fill">
      <iframe
        src={SRC}
        title={title}
        loading="lazy"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />

      {/* Yandex talab qiladigan havolalar. Vidjet ortida turadi. */}
      <span className="sr-only">
        <a href={clinic.yandex} target="_blank" rel="noopener noreferrer">
          Denta — Yandex Maps
        </a>
      </span>
    </div>
  );
}
