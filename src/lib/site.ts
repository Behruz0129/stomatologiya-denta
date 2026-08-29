/**
 * Saytning manzili. Bitta joyda turadi: metadata, sitemap, robots va
 * OG havolalari shu yerdan oladi.
 *
 * Tartib:
 *  1. `NEXT_PUBLIC_SITE_URL` — qo'lda berilgan manzil (eng ustuvor).
 *  2. Vercel'ning o'z manzili — preview deploy'larda o'zi to'g'ri bo'ladi.
 *  3. Kelajakdagi asosiy domen.
 */
const FALLBACK = "https://denta-stomatologiya.uz";

const vercel = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercel ? `https://${vercel}` : FALLBACK)
).replace(/\/$/, "");
