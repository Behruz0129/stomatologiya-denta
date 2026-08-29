export const LOCALES = ["uz", "ru"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "uz";

/**
 * Bir matnning ikkala tildagi ko'rinishi. Kontent fayllaridagi har bir
 * matn shu tipda - shuning uchun tarjimasi tushib qolgan matn TypeScript
 * xatosi beradi, sayt jimgina bir tilda qolib ketmaydi.
 */
export type L = Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function t(locale: Locale, value: L): string {
  return value[locale];
}

/** Til uchun sahifa manzili: /uz va /ru. */
export function localePath(locale: Locale): string {
  return `/${locale}`;
}

export const LOCALE_LABEL: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
};
