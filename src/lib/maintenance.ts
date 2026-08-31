import { clinic } from "@/data/clinic";

/*
 * Saytni vaqtinchalik yopish.
 *
 * YOQISH/O'CHIRISH: quyidagi qatordagi `true` ni `false` ga o'zgartiring,
 * commit qilib push qiling — Vercel o'zi qayta yig'adi va sayt ochiladi.
 *
 * Vercel'dagi `MAINTENANCE` muhit o'zgaruvchisi ham ishlaydi: qiymati
 * "0" yoki "off" bo'lsa sayt ochiq qoladi. Ammo muhit o'zgaruvchisini
 * o'zgartirgandan keyin ham qayta deploy kerak, shuning uchun oddiy yo'l -
 * shu yerdagi qiymat.
 */
const ENABLED = true;

const override = process.env.MAINTENANCE?.trim().toLowerCase();

export const MAINTENANCE =
  override === "0" || override === "off" || override === "false"
    ? false
    : override === "1" || override === "on" || override === "true"
      ? true
      : ENABLED;

/**
 * Yopiq sayt sahifasi.
 *
 * Ataylab bitta faylning ichida: tashqi CSS, shrift yoki rasm so'ramaydi,
 * shuning uchun qolgan hamma narsa o'chib turganda ham ochiladi.
 *
 * Ikki tilda birdan — yopiq sahifada til tanlatib o'tirmaymiz.
 */
export function maintenanceHtml(): string {
  const digits = clinic.phone;

  return `<!doctype html>
<html lang="uz">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${clinic.name} — texnik tuzatishlar</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100svh;
    display: grid;
    place-items: center;
    padding: 24px;
    background: #f2f5ef;
    color: #000;
    font: 16px/1.6 "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  main {
    width: min(560px, 100%);
    background: #fff;
    border: 1px solid rgb(0 0 0 / 0.1);
    border-radius: 20px;
    padding: clamp(28px, 6vw, 44px);
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.08rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  .brand svg { display: block; }
  h1 {
    margin: 26px 0 10px;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 400;
    letter-spacing: -0.04em;
    line-height: 1.15;
  }
  p { margin: 0; color: rgb(0 0 0 / 0.66); }
  .ru {
    margin-top: 26px;
    padding-top: 22px;
    border-top: 1px solid rgb(0 0 0 / 0.1);
  }
  .ru h2 {
    margin: 0 0 10px;
    font-size: clamp(1.15rem, 4vw, 1.4rem);
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.2;
  }
  .actions {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  a.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: 999px;
    border: 1px solid rgb(0 0 0 / 0.16);
    font-size: 0.92rem;
    text-decoration: none;
    color: #000;
  }
  a.dark { background: #000; color: #fff; border-color: #000; }
  .label {
    margin-top: 26px;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgb(0 0 0 / 0.56);
  }
  @media (max-width: 420px) { a.btn { width: 100%; } }
</style>
</head>
<body>
<main>
  <div class="brand">
    <svg width="26" height="20" viewBox="0 0 119 93" fill="none" aria-hidden="true">
      <path d="M59.5 12c-7.4-6.6-18.1-8-26.3-3.3C25.6 13 21.5 21.4 22 30.4c.6 11.6 4.6 22.8 11.4 32.2l6.6 9.1c2.2 3 5.7 4.8 9.4 4.8 4.1 0 7.7-2.4 9.3-6.1l.8-1.9.8 1.9c1.6 3.7 5.2 6.1 9.3 6.1 3.7 0 7.2-1.8 9.4-4.8l6.6-9.1c6.8-9.4 10.8-20.6 11.4-32.2.5-9-3.6-17.4-11.2-21.7C77.6 4 66.9 5.4 59.5 12Z" stroke="#000" stroke-width="6" stroke-linejoin="round"/>
    </svg>
    ${clinic.name}
  </div>

  <h1>Saytda texnik tuzatishlar olib borilyapti</h1>
  <p>Tez orada qaytamiz. Klinika esa odatdagidek ishlayapti — qabulga
     telefon yoki WhatsApp orqali yozilishingiz mumkin.</p>

  <div class="ru">
    <h2>На сайте ведутся технические работы</h2>
    <p>Скоро вернёмся. Клиника работает как обычно — записаться можно
       по телефону или в WhatsApp.</p>
  </div>

  <div class="actions">
    <a class="btn dark" href="${clinic.phoneHref}">${digits}</a>
    <a class="btn" href="${clinic.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
  </div>

  <div class="label">${clinic.hours.uz}</div>
</main>
</body>
</html>`;
}
