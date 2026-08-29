import type { L } from "@/lib/i18n";

/**
 * Saytdagi har bir foto o'rni. Fayl `public/img/<kod>.jpg` ga tashlanadi -
 * shundan keyin o'zi chiqadi. Fayl yo'q bo'lsa kod va tavsif ko'rinib
 * turadi, sayt buzilmaydi.
 *
 * Raqamlar sahifadagi tartib bo'yicha. Har bir kod FAQAT bitta joyda
 * ishlatiladi - bitta rasm ikki bo'limda takrorlanmasin.
 */
export const PHOTO_SLOTS = [
  "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12",
  "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22",
] as const;

export type PhotoSlot = (typeof PHOTO_SLOTS)[number];

/** Har bir o'ringa qanday foto kerakligi - joyidagi kulrang blokda ko'rinadi. */
export const photoBrief: Record<PhotoSlot, L> = {
  // Bosh ekran - bitta surat ikki qatlamda (xira fon + ustidan aniq oyna).
  F1: { uz: "Tabassum, yaqin plan", ru: "Улыбка, крупный план" },

  // «Terapiya, breketlar...» bo'limining ikki yoni.
  F2: { uz: "Kabinet interyeri", ru: "Интерьер кабинета" },
  F3: { uz: "Qabulxona", ru: "Ресепшн" },

  // «Nima qilamiz» - to'qqizta xizmat, tartib bo'yicha.
  F4: { uz: "Davolash jarayoni", ru: "Процесс лечения" },
  F5: { uz: "Professional gigiena", ru: "Профессиональная гигиена" },
  F6: { uz: "Breketlar", ru: "Брекеты" },
  F7: { uz: "Elaynerlar", ru: "Элайнеры" },
  F8: { uz: "Implant", ru: "Имплант" },
  F9: { uz: "Koronka va vinir", ru: "Коронка и винир" },
  F10: { uz: "Jarrohlik kabineti", ru: "Хирургический кабинет" },
  F11: { uz: "Bolalar burchagi", ru: "Детский уголок" },
  F12: { uz: "Rentgen apparati", ru: "Рентген-аппарат" },

  // «Nimasi boshqacha» - to'rt qator, har biriga o'z surati.
  F13: { uz: "Reja va narx muhokamasi", ru: "Обсуждение плана и цены" },
  F14: { uz: "Bola qabulda", ru: "Ребёнок на приёме" },
  F15: { uz: "Klinika yo'lagi", ru: "Коридор клиники" },
  F16: { uz: "Karta bilan to'lov", ru: "Оплата картой" },

  // Oldin/keyin - bitta bemorning ikki surati.
  F17: { uz: "Davolashdan oldin", ru: "До лечения" },
  F18: { uz: "Davolashdan keyin", ru: "После лечения" },

  // Shifokorlar.
  F19: { uz: "1-shifokor", ru: "Врач 1" },
  F20: { uz: "2-shifokor", ru: "Врач 2" },
  F21: { uz: "3-shifokor", ru: "Врач 3" },
  F22: { uz: "4-shifokor", ru: "Врач 4" },

  // Manzil bo'limida xarita vidjeti turadi - u yerga foto kerak emas.

};
