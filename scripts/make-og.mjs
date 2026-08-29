import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

/*
 * Ijtimoiy tarmoq kartochkasini (Open Graph) yasaydi.
 *
 * Nega skript: Next'ning `ImageResponse` faqat PNG chiqaradi, foto esa
 * PNG da bir necha barobar og'ir bo'ladi. Shuning uchun rasm bir marta
 * shu yerda yig'iladi va tayyor JPEG bo'lib turadi.
 *
 * Foto o'zgarsa qayta ishga tushiring:  npm run og
 */

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, "public", "img", "F1.jpg");
const OUT = path.join(ROOT, "src", "app", "opengraph-image.jpg");

const W = 1200;
const H = 630;
const BAR = 112;

const NAME = "Denta";
const DETAIL = "Qiyot 51, Toshkent · +998 90 024 04 20";

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const overlay = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
     <rect x="0" y="${H - BAR}" width="${W}" height="${BAR}" fill="#ffffff"/>
     <text x="56" y="${H - 34}"
           font-family="Helvetica, Arial, sans-serif" font-size="58"
           letter-spacing="-2" fill="#000000">${escape(NAME)}</text>
     <text x="${W - 56}" y="${H - 40}" text-anchor="end"
           font-family="Helvetica, Arial, sans-serif" font-size="27"
           fill="#4a4e49">${escape(DETAIL)}</text>
   </svg>`,
);

if (!fs.existsSync(SOURCE)) {
  console.error(`Manba topilmadi: ${SOURCE}`);
  process.exit(1);
}

await sharp(SOURCE)
  .resize(W, H, { fit: "cover", position: "attention" })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(OUT);

const kb = Math.round(fs.statSync(OUT).size / 1024);
console.log(`Tayyor: ${path.relative(ROOT, OUT)} — ${W}x${H}, ${kb} KB`);
