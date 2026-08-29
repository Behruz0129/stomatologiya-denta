import type { L } from "@/lib/i18n";

export type PriceRow = {
  name: L;
  /** So'mda, bo'sh joysiz raqam. Aniq bo'lmasa - `note` ishlatiladi. */
  amount?: string;
  /** "dan / от" prefiksi. */
  from?: boolean;
  /** Raqam o'rniga chiqadigan matn. */
  note?: L;
};

export type PriceGroup = { title: L; rows: PriceRow[] };

const REQUEST: L = { uz: "so'rov bo'yicha", ru: "по запросу" };

/**
 * DIQQAT: raqamlar ochiq manbalardan olingan (2GIS kartochkasi, 03.01.2025 da
 * yangilangan; breketlar - Yandex Maps). Mijoz tasdiqlamaguncha sayt jonli
 * qilinmasin. Yangi ro'yxat kelganda faqat shu fayl o'zgaradi.
 */
export const priceGroups: PriceGroup[] = [
  {
    title: { uz: "Ko'rik", ru: "Осмотр" },
    rows: [
      {
        name: { uz: "Konsultatsiya", ru: "Консультация" },
        amount: "100 000",
      },
      { name: { uz: "Rentgen surati", ru: "Рентген-снимок" }, note: REQUEST },
    ],
  },
  {
    title: { uz: "Terapiya", ru: "Терапия" },
    rows: [
      {
        name: { uz: "Plombalash", ru: "Пломбирование" },
        amount: "300 000",
        from: true,
      },
      {
        name: {
          uz: "Kanal davolash (nerv olish)",
          ru: "Лечение каналов (удаление нерва)",
        },
        amount: "300 000",
      },
      {
        name: { uz: "Professional gigiena", ru: "Профессиональная гигиена" },
        amount: "300 000",
      },
    ],
  },
  {
    title: { uz: "Ortodontiya", ru: "Ортодонтия" },
    rows: [
      {
        name: { uz: "Breketlar, 2 jag'", ru: "Брекеты, 2 челюсти" },
        amount: "5 200 000",
      },
      { name: { uz: "Elaynerlar", ru: "Элайнеры" }, note: REQUEST },
    ],
  },
  {
    title: { uz: "Ortopediya", ru: "Ортопедия" },
    rows: [
      {
        name: { uz: "Sirkoniy koronka", ru: "Циркониевая коронка" },
        amount: "2 500 000",
      },
      { name: { uz: "Vinir E-Max", ru: "Винир E-Max" }, amount: "2 600 000" },
    ],
  },
  {
    title: { uz: "Jarrohlik", ru: "Хирургия" },
    rows: [
      {
        name: { uz: "Tish olish", ru: "Удаление зуба" },
        amount: "200 000",
        from: true,
      },
      {
        name: { uz: "Implantatsiya", ru: "Имплантация" },
        amount: "2 990 000",
      },
    ],
  },
  {
    title: { uz: "To'lov", ru: "Оплата" },
    rows: [
      {
        name: {
          uz: "Naqd va plastik karta",
          ru: "Наличные и пластиковая карта",
        },
        note: { uz: "bor", ru: "есть" },
      },
      {
        name: { uz: "Bo'lib to'lash", ru: "Рассрочка" },
        note: { uz: "8 oygacha", ru: "до 8 месяцев" },
      },
    ],
  },
];
