import type { L } from "@/lib/i18n";

/** Interfeys matnlari: sarlavhalar, tugmalar, izohlar. */
export const m = {
  nav: {
    services: { uz: "Xizmatlar", ru: "Услуги" },
    prices: { uz: "Narxlar", ru: "Цены" },
    why: { uz: "Nega Denta", ru: "Почему Denta" },
    team: { uz: "Shifokorlar", ru: "Врачи" },
    reviews: { uz: "Sharhlar", ru: "Отзывы" },
    visit: { uz: "Manzil", ru: "Адрес" },
    book: { uz: "Qabulga yozilish", ru: "Записаться" },
  },

  hero: {
    badge: { uz: "Minor metrosidan 36 metr", ru: "36 метров от метро Минор" },
    titleStart: { uz: "Narxini ", ru: "Сначала цена, " },
    titleAccent: { uz: "oldindan", ru: "потом" },
    titleEnd: { uz: " bilib, keyin boshlaysiz", ru: " лечение" },
    lede: {
      uz: "Terapiya, breketlar va elaynerlar, implant, jarrohlik va bolalar qabuli. Ko'rikdan davolashgacha — bitta jamoa.",
      ru: "Терапия, брекеты и элайнеры, импланты, хирургия и детский приём. От осмотра до лечения — одна команда.",
    },
    seePrices: { uz: "Narxlarni ko'rish", ru: "Посмотреть цены" },
    lensCaption: {
      uz: "Chiroyli tabassumlar shu yerdan boshlanadi",
      ru: "Красивые улыбки начинаются здесь",
    },
  },

  statement: {
    a: { uz: "Terapiya, breketlar,", ru: "Терапия, брекеты," },
    b: { uz: " implant va ", ru: " импланты и " },
    c: { uz: "bolalar qabuli", ru: "детский приём" },
    d: {
      uz: " — butun oila bitta klinikada.",
      ru: " — вся семья в одной клинике.",
    },
    cta: { uz: "Xizmatlarni ko'rish", ru: "Посмотреть услуги" },
  },

  services: {
    eyebrow: { uz: "Xizmatlar", ru: "Услуги" },
    title: { uz: "Nima ", ru: "Что мы " },
    titleAccent: { uz: "qilamiz", ru: "делаем" },
  },

  prices: {
    eyebrow: { uz: "Narxlar", ru: "Цены" },
    title: { uz: "Qancha ", ru: "Сколько это " },
    titleAccent: { uz: "turadi", ru: "стоит" },
    lede: {
      uz: "Aniq summa ko'rikdan keyin, ish boshlanishidan oldin aytiladi.",
      ru: "Точная сумма называется после осмотра, до начала работы.",
    },
    // Pul birligi va "dan" so'zi: o'zbekchada qo'shimcha - "300 000 so'mdan",
    // ruschada oldindan keladi - "от 300 000 сум". Shu sabab ikkalasi alohida.
    currency: { uz: "so'm", ru: "сум" },
    fromSuffixUz: { uz: "dan", ru: "" },
    fromPrefixRu: { uz: "", ru: "от" },
    foot: {
      uz: "Narxlar so'mda. Kelishilgandan keyin qo'shimcha to'lov chiqmaydi.",
      ru: "Цены в сумах. После согласования доплат сверху не появляется.",
    },
    ask: { uz: "Aniq summani so'rash", ru: "Узнать точную сумму" },
  },

  why: {
    eyebrow: { uz: "Nega Denta", ru: "Почему Denta" },
    title: { uz: "Nimasi ", ru: "Чем мы " },
    titleAccent: { uz: "boshqacha", ru: "отличаемся" },
  },

  results: {
    eyebrow: { uz: "Natijalar", ru: "Результаты" },
    title: { uz: "Oldin va ", ru: "До и " },
    titleAccent: { uz: "keyin", ru: "после" },
    before: { uz: "Oldin", ru: "До" },
    after: { uz: "Keyin", ru: "После" },
    slider: { uz: "Oldin va keyin", ru: "До и после" },
  },

  steps: {
    eyebrow: { uz: "Qanday bo'ladi", ru: "Как это проходит" },
    title: { uz: "To'rt ", ru: "Четыре " },
    titleAccent: { uz: "qadam", ru: "шага" },
  },

  team: {
    eyebrow: { uz: "Jamoa", ru: "Команда" },
    title: { uz: "Kim ", ru: "Кто " },
    titleAccent: { uz: "qabul qiladi", ru: "принимает" },
    admin: {
      uz: "Qabulni administrator Tohir yozadi — qo'ng'iroqqa va yozuvga u javob beradi.",
      ru: "Записывает администратор Тахир — он отвечает на звонки и сообщения.",
    },
  },

  reviews: {
    eyebrow: { uz: "Sharhlar", ru: "Отзывы" },
    title: { uz: "Bemorlar ", ru: "Что говорят " },
    titleAccent: { uz: "nima deydi", ru: "пациенты" },
    all: { uz: "285 ta sharhning hammasi", ru: "Все 285 отзывов" },
  },

  faq: {
    eyebrow: { uz: "Savollar", ru: "Вопросы" },
    title: { uz: "Ko'p ", ru: "Частые " },
    titleAccent: { uz: "so'raladigan", ru: "вопросы" },
  },

  visit: {
    eyebrow: { uz: "Manzil", ru: "Адрес" },
    title: { uz: "Bizni ", ru: "Как нас " },
    titleAccent: { uz: "toping", ru: "найти" },
    address: { uz: "Manzil", ru: "Адрес" },
    landmark: { uz: "Mo'ljal", ru: "Ориентир" },
    hours: { uz: "Ish vaqti", ru: "Режим работы" },
    phone: { uz: "Telefon", ru: "Телефон" },
    call: { uz: "Qo'ng'iroq qilish", ru: "Позвонить" },
    openMap: { uz: "Xaritada ochish", ru: "Открыть на карте" },
  },

  footer: {
    about: {
      uz: "Stomatologiya. Toshkent, Qiyot 51.",
      ru: "Стоматология. Ташкент, Киёт 51.",
    },
    sections: { uz: "Bo'limlar", ru: "Разделы" },
    contact: { uz: "Aloqa", ru: "Контакты" },
    disclaimer: {
      uz: "Ma'lumotlar ochiq manbalardan — mijoz bilan tasdiqlanishi kerak.",
      ru: "Данные из открытых источников — требуют подтверждения клиентом.",
    },
  },

  meta: {
    title: {
      uz: "Denta — stomatologiya, Minor metrosi yonida",
      ru: "Denta — стоматология рядом с метро Минор",
    },
    description: {
      uz: "Toshkent, Qiyot 51. Terapiya, breket va elayner, implant, bolalar stomatologiyasi. Har kuni 10:00–20:00. Tel: +998 90 024 04 20",
      ru: "Ташкент, Киёт 51. Терапия, брекеты и элайнеры, импланты, детская стоматология. Ежедневно 10:00–20:00. Тел: +998 90 024 04 20",
    },
  },
} satisfies Record<string, Record<string, L>>;
