import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { m } from "@/messages";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});



export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const active: Locale = isLocale(locale) ? locale : "uz";

  return {
    metadataBase: new URL(SITE_URL),
    title: m.meta.title[active],
    description: m.meta.description[active],
    alternates: {
      canonical: `/${active}`,
      languages: { uz: "/uz", ru: "/ru" },
    },
    // Rasm ataylab qo'lda ko'rsatilgan: `openGraph` shu yerda e'lon
    // qilingani uchun `app/opengraph-image.jpg` fayli o'zi qo'shilmaydi.
    openGraph: {
      title: m.meta.title[active],
      description: m.meta.description[active],
      locale: active === "uz" ? "uz_UZ" : "ru_RU",
      type: "website",
      url: `/${active}`,
      siteName: "Denta",
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Denta — stomatologiya, Toshkent, Qiyot 51",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.meta.title[active],
      description: m.meta.description[active],
      images: ["/opengraph-image.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang = isLocale(locale) ? locale : "uz";

  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${display.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
