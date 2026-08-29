import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "uz" ? 1 : 0.9,
    // Har ikkala til bir sahifaning ikki ko'rinishi ekanini bildiradi.
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((code) => [code, `${SITE_URL}/${code}`]),
      ),
    },
  }));
}
