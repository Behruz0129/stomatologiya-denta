import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Statement } from "@/components/sections/Statement";
import { Services } from "@/components/sections/Services";
import { Prices } from "@/components/sections/Prices";
import { WhyUs } from "@/components/sections/WhyUs";
import { Results } from "@/components/sections/Results";
import { Steps } from "@/components/sections/Steps";
import { Team } from "@/components/sections/Team";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { Visit } from "@/components/sections/Visit";
import type { Locale } from "@/lib/i18n";

/** Ikkala til uchun bitta sahifa — farq faqat `locale` da. */
export function SitePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <Stats locale={locale} />
        <Statement locale={locale} />
        <Services locale={locale} />
        <Prices locale={locale} />
        <WhyUs locale={locale} />
        <Results locale={locale} />
        <Steps locale={locale} />
        <Team locale={locale} />
        <Reviews locale={locale} />
        <Faq locale={locale} />
        <Visit locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
