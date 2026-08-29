import { Container } from "@/components/Section";
import { Logo } from "@/components/Logo";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";

const SECTIONS = [
  { href: "#xizmatlar", label: m.nav.services },
  { href: "#narxlar", label: m.nav.prices },
  { href: "#nega", label: m.nav.why },
  { href: "#jamoa", label: m.nav.team },
  { href: "#sharhlar", label: m.nav.reviews },
  { href: "#manzil", label: m.nav.visit },
];

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-[3.4rem] pb-8 text-[#a9aea7]">
      <Container>
        <div className="grid gap-8 [grid-template-columns:1.4fr_1fr_1fr] max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          <div>
            <a
              href="#top"
              className="mb-[0.9rem] flex items-center gap-[0.6rem] text-[1.08rem] font-semibold tracking-[-0.02em] text-white"
            >
              <Logo invert />
              {clinic.name}
            </a>
            <p className="max-w-[34ch] text-[0.9rem] text-dim">
              {m.footer.about[locale]}
            </p>
          </div>

          <div>
            <h2 className="mb-[0.8rem] label text-dim">
              {m.footer.sections[locale]}
            </h2>
            <div className="flex flex-col gap-[0.45rem] text-[0.92rem]">
              {SECTIONS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-250 hover:text-white"
                >
                  {item.label[locale]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-[0.8rem] label text-dim">
              {m.footer.contact[locale]}
            </h2>
            <div className="flex flex-col gap-[0.45rem] text-[0.92rem]">
              <a href={clinic.phoneHref} className="hover:text-white">
                {clinic.phone}
              </a>
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
              <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
              <a href={clinic.yandex} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Yandex Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[2.6rem] flex flex-wrap justify-between gap-x-6 gap-y-[0.6rem] border-t border-white/12 pt-[1.3rem] text-[0.78rem] text-dim">
          <span>© {year} {clinic.name}</span>
          <span>{m.footer.disclaimer[locale]}</span>
        </div>
      </Container>
    </footer>
  );
}
