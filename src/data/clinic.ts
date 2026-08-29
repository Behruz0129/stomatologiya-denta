import type { L } from "@/lib/i18n";

/**
 * Klinika haqidagi qat'iy faktlar - bitta manba.
 * Har bir qiymat qayerdan olingani izohda ko'rsatilgan; mijoz tasdiqlagach
 * shu fayl yangilanadi, qolgan hamma joy o'zi to'g'rilanadi.
 */
export const clinic = {
  name: "Denta",

  // Yandex Maps, Google Maps va 2GIS - uchchalasida ham shu raqam.
  phone: "+998 90 024 04 20",
  phoneHref: "tel:+998900240420",
  whatsapp: "https://wa.me/998900240420",

  instagram: "https://www.instagram.com/denta_stomatologiya/",
  yandex: "https://yandex.uz/maps/org/stomatologiya_denta/5867957547/",
  yandexReviews:
    "https://yandex.uz/maps/org/stomatologiya_denta/5867957547/reviews/",

  address: {
    uz: "Toshkent, Yunusobod tumani,\nQiyot (Ц-5) massivi, 51, 1-qavat",
    ru: "Ташкент, Юнусабадский район,\nмассив Киёт (Ц-5), 51, 1 этаж",
  } satisfies L,

  landmark: {
    uz: "Minor metrosidan 36 m · «Minor» bekatidan 117 m",
    ru: "36 м от метро Минор · 117 м от остановки «Минор»",
  } satisfies L,

  hours: {
    uz: "Har kuni 10:00–20:00",
    ru: "Ежедневно 10:00–20:00",
  } satisfies L,
} as const;

/**
 * Sahifa tepasidagi to'rt raqam. Ataylab reyting poygasi emas:
 * ikkitasi ochiq baho, ikkitasi - tekshirib bo'ladigan qulaylik.
 *
 * Raqam sanab chiqishi uchun son va uning ko'rinishi alohida saqlanadi.
 */
export type Stat = {
  /** Sanab boriladigan son. */
  to: number;
  /** Verguldan keyingi xona soni. */
  decimals: number;
  /** Sondan keyin qo'shiladigan matn: "K", "/7", " m". */
  suffix?: string;
  label: L;
  source: L;
};

export const stats: Stat[] = [
  {
    to: 5,
    decimals: 1,
    label: { uz: '445 ta baho asosida', ru: 'на основе 445 оценок' },
    source: { uz: 'Yandex Maps', ru: 'Yandex Maps' },
  },
  {
    to: 24.7,
    decimals: 1,
    suffix: 'K',
    label: { uz: 'obunachi', ru: 'подписчиков' },
    source: { uz: 'Instagram', ru: 'Instagram' },
  },
  {
    to: 7,
    decimals: 0,
    suffix: '/7',
    label: {
      uz: 'dam olish kunisiz, 10:00–20:00',
      ru: 'без выходных, 10:00–20:00',
    },
    source: { uz: 'Ish vaqti', ru: 'Режим работы' },
  },
  {
    to: 36,
    decimals: 0,
    suffix: ' m',
    label: { uz: 'metro chiqishidan piyoda', ru: 'пешком от выхода метро' },
    source: { uz: 'Minor metrosi', ru: 'Метро Минор' },
  },
];
