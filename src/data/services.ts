import type { L } from "@/lib/i18n";
import type { PhotoSlot } from "@/data/photos";

export type Service = {
  photo: PhotoSlot;
  title: L;
  text: L;
  meta: L;
  /** Faqat breketlarda: rezinka ranglari. Sharhlarda eng ko'p eslangan detal. */
  elastics?: boolean;
};

export const services: Service[] = [
  {
    photo: "F4",
    title: { uz: "Kariyes va plomba", ru: "Кариес и пломба" },
    text: {
      uz: "Kariyes tozalanadi, plomba qo'yiladi va tishning shakli tiklanadi.",
      ru: "Кариес убирается, ставится пломба, форма зуба восстанавливается.",
    },
    meta: { uz: "1 tish", ru: "1 зуб" },
  },
  {
    photo: "F5",
    title: { uz: "Professional gigiena", ru: "Профессиональная гигиена" },
    text: {
      uz: "Tosh va qora karash olinadi, emalga kaltsiyli pasta suriladi.",
      ru: "Снимается зубной камень и налёт, на эмаль наносится кальцийсодержащая паста.",
    },
    meta: { uz: "1 seans", ru: "1 сеанс" },
  },
  {
    photo: "F6",
    title: { uz: "Breketlar", ru: "Брекеты" },
    text: {
      uz: "Metall va keramika breketlar. Har navbatda rezinka rangini o'zingiz tanlaysiz.",
      ru: "Металлические и керамические. Цвет резинок вы выбираете сами на каждом приёме.",
    },
    meta: { uz: "2 jag'", ru: "2 челюсти" },
    elastics: true,
  },
  {
    photo: "F7",
    title: { uz: "Elaynerlar", ru: "Элайнеры" },
    text: {
      uz: "Ko'rinmas shaffof kappalar — breketsiz tekislash.",
      ru: "Прозрачные капы — выравнивание без брекетов.",
    },
    meta: { uz: "Kurs", ru: "Курс" },
  },
  {
    photo: "F8",
    title: { uz: "Implantatsiya", ru: "Имплантация" },
    text: {
      uz: "Yo'q tish o'rniga suyakka implant o'rnatiladi, ustiga koronka qo'yiladi.",
      ru: "На место отсутствующего зуба в кость ставится имплант, сверху — коронка.",
    },
    meta: { uz: "1 implant", ru: "1 имплант" },
  },
  {
    photo: "F9",
    title: {
      uz: "Sirkoniy koronka va vinir",
      ru: "Циркониевые коронки и виниры",
    },
    text: {
      uz: "Sirkoniy koronkalar va E-Max keramika vinirlari.",
      ru: "Циркониевые коронки и керамические виниры E-Max.",
    },
    meta: { uz: "1 tish", ru: "1 зуб" },
  },
  {
    photo: "F10",
    title: { uz: "Tish olish", ru: "Удаление зуба" },
    text: {
      uz: "Oddiy va murakkab holatlar, aql tishi ham.",
      ru: "Простые и сложные случаи, включая зубы мудрости.",
    },
    meta: { uz: "1 tish", ru: "1 зуб" },
  },
  {
    photo: "F11",
    title: { uz: "Bolalar qabuli", ru: "Детский приём" },
    text: {
      uz: "Sut tishlari davolanadi, profilaktika qilinadi.",
      ru: "Лечим молочные зубы, проводим профилактику.",
    },
    meta: { uz: "Bolalar shifokori", ru: "Детский врач" },
  },
  {
    photo: "F12",
    title: { uz: "Rentgen va 3D tomografiya", ru: "Рентген и 3D-томография" },
    text: {
      uz: "Panoramik surat va 3D tomografiya — davolash rejasi shunga qarab tuziladi.",
      ru: "Панорамный снимок и 3D-томография — план лечения строится по ним.",
    },
    meta: { uz: "1 surat", ru: "1 снимок" },
  },
];

/** Breket rezinkalari - sahifadagi yagona rangli nuqta. */
export const elasticColors = [
  "#E4736B",
  "#F0B429",
  "#7FB069",
  "#5B8DEF",
  "#C084D8",
];
