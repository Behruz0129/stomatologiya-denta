/**
 * Saytning manzili. Bitta joyda turadi: metadata, sitemap, robots va
 * OG havolalari shu yerdan oladi.
 *
 * Tartib:
 *  1. `NEXT_PUBLIC_SITE_URL` — qo'lda berilgan manzil (eng ustuvor).
 *  2. Vercel'ning o'z manzili — preview deploy'larda o'zi to'g'ri bo'ladi.
 *  3. Kelajakdagi asosiy domen.
 *
 * Har bir qiymat tekshirib olinadi. Sabab: bu manzil `new URL(...)` ga
 * beriladi va noto'g'ri qiymat (masalan, `https://` siz yozilgan domen)
 * xato tashlab, saytni yig'ishni butunlay to'xtatadi. Bunday xato faqat
 * deploy paytida chiqadi — muhit o'zgaruvchisi lokalda boshqacha bo'ladi.
 */
const FALLBACK = "https://denta-stomatologiya.uz";

/** Qiymatni to'liq manzilga keltiradi; keltirib bo'lmasa - null. */
function normalise(value: string | undefined): string | null {
  if (!value) return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  const withScheme = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    return new URL(withScheme).origin;
  } catch {
    return null;
  }
}

export const SITE_URL =
  normalise(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalise(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) ??
  FALLBACK;
