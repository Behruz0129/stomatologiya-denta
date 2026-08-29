import type { L } from "@/lib/i18n";
import type { PhotoSlot } from "@/data/photos";

/* ------------------------------------------------------------------ nega */

export const whyRows: { title: L; text: L; photo: PhotoSlot }[] = [
  {
    title: {
      uz: "Qo'shimcha to'lov chiqmaydi",
      ru: "Доплат сверху не появляется",
    },
    text: {
      uz: "Kelishilgan summa o'zgarmaydi. Qo'shimcha ish kerak bo'lsa, avval siz bilan gaplashamiz.",
      ru: "Согласованная сумма не меняется. Если нужна дополнительная работа — сначала обсуждаем с вами.",
    },
    photo: "F13",
  },
  {
    title: {
      uz: "Bolalar uchun alohida shifokor",
      ru: "Отдельный врач для детей",
    },
    text: {
      uz: "Bolalar bilan ishlaydigan shifokor va kutish uchun bolalar xonasi bor.",
      ru: "Есть врач, работающий с детьми, и детская комната для ожидания.",
    },
    photo: "F14",
  },
  {
    title: {
      uz: "Hamma bosqich bitta joyda",
      ru: "Все этапы в одном месте",
    },
    text: {
      uz: "Surat, davolash, jarrohlik va ortodontiya shu binoda — boshqa markazga yurmaysiz.",
      ru: "Снимки, лечение, хирургия и ортодонтия в одном здании — не нужно ездить в другой центр.",
    },
    photo: "F15",
  },
  {
    title: {
      uz: "Naqd, karta va bo'lib to'lash",
      ru: "Наличные, карта и рассрочка",
    },
    text: {
      uz: "To'lov usulini o'zingiz tanlaysiz.",
      ru: "Способ оплаты выбираете вы.",
    },
    photo: "F16",
  },
];

/* --------------------------------------------------------------- qadamlar */

export const steps: { title: L; text: L }[] = [
  {
    title: { uz: "Yozilish", ru: "Запись" },
    text: {
      uz: "Qo'ng'iroq qilasiz yoki WhatsApp'ga yozasiz — qulay vaqtni belgilaymiz.",
      ru: "Звоните или пишете в WhatsApp — подбираем удобное время.",
    },
  },
  {
    title: { uz: "Ko'rik", ru: "Осмотр" },
    text: {
      uz: "Shifokor ko'radi, kerak bo'lsa rentgen yoki 3D surat shu yerda olinadi.",
      ru: "Врач осматривает, при необходимости здесь же делаем рентген или 3D-снимок.",
    },
  },
  {
    title: { uz: "Reja va narx", ru: "План и цена" },
    text: {
      uz: "Nima qilinishi va qancha turishi aytiladi. Rozi bo'lsangiz — boshlaymiz.",
      ru: "Называем, что нужно сделать и сколько это стоит. Согласны — начинаем.",
    },
  },
  {
    title: { uz: "Davolash", ru: "Лечение" },
    text: {
      uz: "Belgilangan vaqtda qabul. Keyingi navbat shu yerda kelishiladi.",
      ru: "Приём в назначенное время. Следующий визит назначаем на месте.",
    },
  },
];

/* ------------------------------------------------------------------ jamoa */

/**
 * Ismlar va lavozimlar Yandex Maps sharhlaridan olingan (2025-2026).
 * Familiyalar hech qayerda yo'q. Mijoz tasdiqlagach to'ldiriladi.
 */
export const team: { photo: PhotoSlot; name: L; role: L }[] = [
  {
    photo: "F19",
    name: { uz: "Dmitriy", ru: "Дмитрий" },
    role: { uz: "Stomatolog", ru: "Стоматолог" },
  },
  {
    photo: "F20",
    name: { uz: "Abror", ru: "Аброр" },
    role: { uz: "Stomatolog", ru: "Стоматолог" },
  },
  {
    photo: "F21",
    name: { uz: "Laziz", ru: "Лазиз" },
    role: { uz: "Bolalar stomatologi", ru: "Детский стоматолог" },
  },
  {
    // TODO: to'rtinchi shifokorning ismi va yo'nalishi mijozdan olinsin.
    photo: "F22",
    name: { uz: "Ism kerak", ru: "Нужно имя" },
    role: { uz: "Stomatolog", ru: "Стоматолог" },
  },
];

/* ---------------------------------------------------------------- sharhlar */

/**
 * Yandex Maps'dan so'zma-so'z. Har til uchun o'sha tildagi haqiqiy sharh
 * olingan - tarjima qilinmagan.
 */
export type Review = { text: L; author: L; source: L };

export const reviews: Review[] = [
  {
    text: {
      uz: "Shu klinikada tishlarimni davolatim, aql tishlarimni oldirdim va breket qoydirdim. Hammasi juda zor. Klinika atmosferasi va vrachlari juda e'tiborli va shirinso'z.",
      ru: "Отдельно понравилось, что заранее озвучили стоимость и никаких неожиданных доплат не было.",
    },
    author: { uz: "Risolat Boboyeva", ru: "khesea" },
    source: {
      uz: "Yandex Maps · 15.10.2025",
      ru: "Yandex Maps · 09.06.2026",
    },
  },
  {
    text: {
      uz: "Biz ancha qidirib yaxshi mutaxassislarni ahiri Dentaga murojaat qildik juda a'lo darajada meni va oyila a'zolarimni tishlarini davolashdi.",
      ru: "Уже год лечусь у врача Лазиза. С ним страх стоматологов прошёл: спокойно объясняет, спрашивает об ощущениях и работает не спеша.",
    },
    author: { uz: "Zafar Soipov", ru: "Мадина Кадырова" },
    source: {
      uz: "Yandex Maps · 27.11.2025",
      ru: "Yandex Maps · 15.11.2025",
    },
  },
  {
    text: {
      uz: "Отдельно понравилось, что заранее озвучили стоимость и никаких неожиданных доплат не было.",
      ru: "В этой клинике нет текучки, все врачи работают по много лет, врачи все профессионалы своего дела, ну и цены конечно же приемлемые.",
    },
    author: { uz: "khesea", ru: "gulsina" },
    source: {
      uz: "Yandex Maps · 09.06.2026",
      ru: "Yandex Maps · 23.07.2025",
    },
  },
];

/* --------------------------------------------------------------------- faq */

export const faq: { q: L; a: L }[] = [
  {
    q: { uz: "Qachon ochiqsiz?", ru: "Когда вы работаете?" },
    a: {
      uz: "Har kuni 10:00 dan 20:00 gacha, dam olish kunlarisiz. Bayram kunlarida jadval o'zgarishi mumkin — telefonda aniqlashtiring.",
      ru: "Каждый день с 10:00 до 20:00, без выходных. В праздники график может меняться — уточните по телефону.",
    },
  },
  {
    q: { uz: "Qanday borsam bo'ladi?", ru: "Как до вас добраться?" },
    a: {
      uz: "Minor metrosidan 36 metr, metro ro'parasida, bekat orqasida, birinchi liniyada. Manzil: Qiyot (Ц-5) massivi, 51, 1-qavat. Klinika oldida avtoturargoh bor.",
      ru: "36 метров от метро Минор, напротив метро, за остановкой, на первой линии. Адрес: массив Киёт (Ц-5), 51, 1 этаж. Рядом с клиникой есть парковка.",
    },
  },
  {
    q: { uz: "Bolalarni qabul qilasizmi?", ru: "Принимаете ли вы детей?" },
    a: {
      uz: "Ha. Bolalar bilan ishlaydigan alohida shifokor bor, kutish uchun esa bolalar xonasi ajratilgan.",
      ru: "Да. Есть отдельный врач, работающий с детьми, и детская комната для ожидания.",
    },
  },
  {
    q: {
      uz: "Karta bilan yoki bo'lib to'lasa bo'ladimi?",
      ru: "Можно оплатить картой или в рассрочку?",
    },
    a: {
      uz: "Naqd pul, plastik karta va bo'lib to'lash — uchalasi ham bor.",
      ru: "Наличные, пластиковая карта и рассрочка — доступны все три способа.",
    },
  },
  {
    q: {
      uz: "Oldindan yozilish shartmi?",
      ru: "Обязательна ли запись заранее?",
    },
    a: {
      uz: "Yozilib kelganingiz ma'qul — unda navbat kutmaysiz. Qo'ng'iroq qiling yoki WhatsApp orqali yozing.",
      ru: "Лучше записаться заранее — тогда не придётся ждать в очереди. Позвоните или напишите в WhatsApp.",
    },
  },
];
