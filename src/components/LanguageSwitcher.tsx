import Link from "next/link";
import { cn } from "@/lib/cn";
import { LOCALES, LOCALE_LABEL, localePath, type Locale } from "@/lib/i18n";

/**
 * Har til - alohida manzil (`/` va `/ru`). Shu sabab server to'g'ri tilni
 * darrov beradi: sahifa avval bir tilda chiqib, keyin almashib ketmaydi.
 */
export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex overflow-hidden rounded-full border border-line-2">
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={localePath(code)}
            hrefLang={code}
            aria-current={active ? "true" : undefined}
            className={cn(
              "px-[0.68rem] py-[0.42rem] text-[0.72rem] tracking-[0.08em] transition-colors duration-250",
              active ? "bg-ink text-white" : "text-muted hover:text-ink",
            )}
          >
            {LOCALE_LABEL[code]}
          </Link>
        );
      })}
    </div>
  );
}
