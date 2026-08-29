# Rasm talablari

Fayllar `public/img/` ga tashlanadi. Nomi aynan `F1.jpg` ko'rinishida.
Rasm yo'q bo'lsa o'rnida kulrang blok va kodi turadi — sayt buzilmaydi.

Har bir kod **faqat bitta joyda** ishlatiladi — bitta rasm ikki bo'limda
takrorlanmaydi. Jami **F1–F24**.

## Hozirgi holat

- **Bor:** F1 … F12
- **Yetishmaydi:** F13 … F24

## Umumiy qoidalar

- **Format:** JPEG, sRGB. Kengligi 1600px dan oshmasin, hajmi ~400 KB.
- **Matn yo'q.** Rasm ustida yozuv, logotip, brend nomi bo'lmasin.
- **Nisbat muhim.** Sayt rasmni o'z o'rniga qarab qirqadi.
- **Rang.** Sayt foni deyarli oq, salgina sovuq (`#F2F5EF`). Rasmlar ham
  sovuq oq, kulrang, och kul-yashil bo'lsin. Iliq sarg'ish tus va HDR yo'q.
- **Markazda joy qoldiring.** Muhim narsa chetga tegib turmasin.

## Ro'yxat

| Kod | Qayerda | Nisbat | Tavsiya (px) | Nima ko'rinadi |
|-----|---------|--------|--------------|----------------|
| F1  | Bosh ekran (xira fon + oyna) | 4:5 | 1000×1250 | Tabassum, yaqin plan |
| F2  | Statement — chap | 4:5 | 1000×1250 | Kabinet interyeri |
| F3  | Statement — o'ng | 4:5 | 1000×1250 | Qabulxona |
| F4  | Xizmat 1 — kariyes va plomba | 3:4 | 1000×1330 | Davolash jarayoni |
| F5  | Xizmat 2 — gigiena | 4:3 | 1300×975 | Tish tozalash |
| F6  | Xizmat 3 — breketlar | 3:4 | 1000×1330 | Breketli tish |
| F7  | Xizmat 4 — elaynerlar | 4:3 | 1300×975 | Shaffof kappa |
| F8  | Xizmat 5 — implantatsiya | 3:4 | 1000×1330 | Implant |
| F9  | Xizmat 6 — koronka va vinir | 4:3 | 1300×975 | Koronka, vinir |
| F10 | Xizmat 7 — tish olish | 3:4 | 1000×1330 | Jarrohlik kabineti |
| F11 | Xizmat 8 — bolalar qabuli | 1:1 | 1300×1300 | Bolalar burchagi |
| F12 | Xizmat 9 — rentgen | 3:4 | 1000×1330 | Rentgen apparati |
| F13 | «Nimasi boshqacha» 1 — narx | 4:5 | 1000×1250 | Reja va narx muhokamasi |
| F14 | «Nimasi boshqacha» 2 — bolalar | 4:5 | 1000×1250 | Bola qabulda |
| F15 | «Nimasi boshqacha» 3 — bitta joyda | 4:5 | 1000×1250 | Klinika yo'lagi |
| F16 | «Nimasi boshqacha» 4 — to'lov | 4:5 | 1000×1250 | Karta bilan to'lov |
| F17 | Oldin/keyin — chap | 16:10 | 1600×1000 | Davolashdan oldin |
| F18 | Oldin/keyin — o'ng | 16:10 | 1600×1000 | Davolashdan keyin |
| F19 | Shifokor | 3:4 | 900×1200 | 1-shifokor |
| F20 | Shifokor | 3:4 | 900×1200 | 2-shifokor |
| F21 | Shifokor | 3:4 | 900×1200 | 3-shifokor |
| F22 | Shifokor | 3:4 | 900×1200 | 4-shifokor |
| F24 | Manzil | 16:10 | 1400×875 | Bino tashqi ko'rinishi |

## Sun'iy intellekt rasmi — chegara

Bular **haqiqiy** bo'lishi shart, generatsiya qilinmaydi:

- **F19–F22 (shifokorlar).** Haqiqiy xodimlarning surati bo'lishi shart.
  Ism ham, surat ham taxminiy bo'lmasin — bu shifokorga hurmatsizlik.
- **F17/F18 (oldin/keyin).** To'qilgan davolash natijasi tibbiy saytda
  jiddiy chalg'itish. Haqiqiy bemorning yozma roziligi bilan olingan
  surati kerak. Bo'lmasa — bo'limni olib tashlash kerak.
- **F24 (bino).** Manzil bo'limida turadi. Boshqa binoni o'ziniki deb
  ko'rsatib bo'lmaydi. Telefonda bir marta olsa yetadi.

**F14 (bola qabulda)** ham ehtiyot talab qiladi: agar unda haqiqiy bolaning
yuzi ko'rinsa — ota-onasidan yozma rozilik kerak. Sun'iy rasmda esa yuz
tanib bo'lmaydigan burchakdan olinsin.

## Promptlar

Har bir promptning oxiriga qo'shing:

```
photorealistic editorial photography, natural window light, cool off-white
and pale grey-green palette, soft shadows, calm and uncluttered,
unretouched texture, no text, no logos, no watermark, no brand names
```

Salbiy prompt:

```
text, watermark, logo, brand name, warm orange cast, HDR, oversaturated,
plastic skin, waxy teeth, distorted teeth, extra fingers, deformed hands,
cartoon, illustration, 3d render, fisheye, cluttered background
```

### F13 — reja va narx muhokamasi · 4:5

```
Vertical 4:5. A dentist in a white coat sitting at a desk beside a
patient, pointing at a treatment plan on a monitor, both seen from behind
and to the side, faces not identifiable, calm modern clinic office,
daylight from a window, 50mm
```

### F14 — bola qabulda · 4:5

```
Vertical 4:5. A child sitting in a dental chair while a dentist in a white
coat examines gently, seen from behind the dentist's shoulder, child's
face not identifiable, bright friendly clinic room, soft daylight, 50mm
```

### F15 — klinika yo'lagi · 4:5

```
Vertical 4:5. Corridor of a small modern dental clinic with several open
treatment room doors along one side, off-white walls, light floor,
daylight from the far end, no people, tidy and quiet, 28mm
```

### F16 — karta bilan to'lov · 4:5

```
Vertical 4:5. Close-up of hands paying with a bank card at a card
terminal on a clinic reception counter, light surface, soft daylight,
shallow depth of field, faces not visible, no brand markings on the
terminal
```

### F24 — bino tashqi ko'rinishi · 16:10 (faqat vaqtinchalik)

```
Horizontal 16:10. Ground floor entrance of a small medical clinic on a
city street, glass door and windows, light stone facade, daytime, soft
overcast light, no signage text, 35mm
```

### F1–F12 (allaqachon bor — qayta yasash kerak bo'lsa)

- **F1 · 4:5** — `Vertical 4:5. Extreme close-up of a natural adult smile, healthy white teeth, relaxed lips, soft diffused daylight, macro 100mm at f/4, shallow depth of field, blurred neutral background, real skin texture`
- **F2 · 4:5** — `Vertical 4:5. Interior of a small modern dental clinic operatory, dental chair and unit, off-white walls, large window with daylight, tidy and minimal, no people, 35mm`
- **F3 · 4:5** — `Vertical 4:5. Reception counter of a small modern dental clinic, light surface, one small plant and a monitor, soft daylight from the side, no people, no signage, 35mm`
- **F4 · 3:4** — `Vertical 3:4. Over-the-shoulder view of a dental treatment in progress, dentist in a white coat and mask, patient reclined in a modern dental chair, faces not identifiable, calm modern clinic, soft daylight, 50mm`
- **F5 · 4:3** — `Horizontal 4:3. Close-up of professional teeth cleaning, ultrasonic scaler tip beside white teeth, gloved hands, fine water mist, macro 100mm, clean even clinical light`
- **F6 · 3:4** — `Vertical 3:4. Macro close-up of metal braces on upper teeth with coloured elastic ligatures, healthy pink gums, crisp orthodontic detail, 100mm macro, soft even lighting`
- **F7 · 4:3** — `Horizontal 4:3. Clear orthodontic aligner held between gloved fingertips, transparent thermoplastic with visible tooth shapes, soft studio light, pale grey-green background, macro`
- **F8 · 3:4** — `Vertical 3:4. Dental implant components on a clean surface: titanium implant screw, abutment and ceramic crown beside an anatomical jaw model, soft studio light, pale neutral background, macro`
- **F9 · 4:3** — `Horizontal 4:3. Row of thin ceramic dental veneers and one zirconia crown on a white dental lab bench, glossy porcelain surface detail, soft directional light, macro`
- **F10 · 3:4** — `Vertical 3:4. Modern dental surgery room, dental chair under an overhead operating light, tidy stainless steel instrument tray, off-white walls, daylight from a window, no people, 35mm`
- **F11 · 1:1** — `Square 1:1. Bright children's corner in a dental clinic waiting area, small wooden table and chairs, soft cushions, a few simple toys, daylight from a window, cheerful but calm, no people, 35mm`
- **F12 · 3:4** — `Vertical 3:4. Modern panoramic dental X-ray machine in a clean clinic room, off-white walls, soft daylight, no people, no brand markings, 35mm`

## Shifokor portretlari (F19–F22) — suratga olish tartibi

Beshalasi bir kunda, bir joyda olinsin:

- **Fon:** klinikaning bir tekis oq yoki sutrang devori.
- **Yorug'lik:** katta deraza yonida, yon tomondan. Vspishka yo'q.
- **Kadr:** beldan yuqori, tik **3:4**, yuz kadrning yuqori uchdan birida.
- **Kiyim:** hammasi oq xalatda — qator bir xil ko'rinsin.
- **Texnika:** telefon yetadi, portret rejimini o'chiring.
- Har biridan 3–4 kadr oling.

## Oldin/keyin (F17, F18)

Ikkalasi **bitta bemorning** surati bo'lishi shart va bir xil sharoitda
olinsin: bir xil masofa va burchak, bir xil yorug'lik, bir xil kadr, va
bemordan **yozma rozilik**. Shunday juftlik bo'lmasa — bo'limni olib
tashlash kerak.
