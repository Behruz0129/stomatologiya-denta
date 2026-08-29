# Denta — stomatologiya sayti

Toshkent, Qiyot 51 (Minor metrosi ro'parasi) dagi «Denta» stomatologiyasi
uchun bir sahifali sayt. Ikki tilda: o'zbekcha (`/uz`) va ruscha (`/ru`).

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:8733
```

`npm run build` — prod yig'ish, `npm run start` — yig'ilganini ishga tushirish.

## Stek

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4.
Shriftlar `next/font` orqali o'z serverimizdan beriladi.

## Papkalar

```
src/
  app/[locale]/     sahifa va ildiz layout (html lang shu yerda)
  components/       umumiy komponentlar
  components/sections/  sahifa bo'limlari (Hero, Prices, ...)
  data/             kontent: xizmatlar, narxlar, jamoa, sharhlar, faktlar
  messages/         interfeys matnlari (sarlavha, tugma, izoh)
  lib/i18n.ts       tillar va `L` tipi
  proxy.ts          `/` dan `/uz` ga yo'naltirish
public/img/         F1.jpg ... F23.jpg — QAYSI-RASM.txt ga qarang
```

Matn o'zgartirish kerak bo'lsa — `src/data/` yoki `src/messages/`.
Komponentga tegish shart emas.

## Til

Har bir matn `L = { uz: string; ru: string }` tipida. Tarjimasi tushib
qolsa TypeScript xato beradi — sayt jimgina bir tilda qolib ketmaydi.

Til almashtirish manzil orqali (`/uz`, `/ru`), shuning uchun server darrov
to'g'ri tilni beradi va qidiruv tizimi ikkala versiyani ham ko'radi.

## Rasmlar

`public/img/` ga `F1.jpg` … `F23.jpg` nomi bilan tashlanadi. Qaysi kod
qayerga tegishli — `public/img/QAYSI-RASM.txt` da. Rasm yo'q bo'lsa
o'rnida kulrang blok va kod turadi, sayt buzilmaydi.

## Tekshirilishi kerak (mijoz bilan)

- `src/data/prices.ts` — narxlar 2GIS (03.01.2025) va Yandex Maps
  kartochkalaridan olingan, eskirgan bo'lishi mumkin.
- `src/data/content.ts` — shifokorlar ismi sharhlardan olingan,
  familiyalari yo'q.
- Kafolat muddati hech qayerda e'lon qilinmagan — shuning uchun saytda
  ham yozilmagan.
