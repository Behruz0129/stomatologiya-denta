"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Section";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { clinic } from "@/data/clinic";
import { m } from "@/messages";
import type { Locale } from "@/lib/i18n";
import { ArrowUpRight } from "@/components/icons";

const LINKS = [
  { href: "#xizmatlar", label: m.nav.services },
  { href: "#narxlar", label: m.nav.prices },
  { href: "#nega", label: m.nav.why },
  { href: "#jamoa", label: m.nav.team },
  { href: "#sharhlar", label: m.nav.reviews },
  { href: "#manzil", label: m.nav.visit },
];

export function Navbar({ locale }: { locale: Locale }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setStuck(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Menyu ochiq turganda orqa fon siljimasin va Escape uni yopsin. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper transition-colors duration-300",
        stuck || open ? "border-line" : "border-transparent",
      )}
    >
      <Container className="flex items-center gap-4 py-[0.95rem]">
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-[0.6rem] text-[1.08rem] font-semibold tracking-[-0.02em]"
        >
          <Logo />
          {clinic.name}
        </Link>

        <nav className="ml-auto flex gap-6 text-[0.93rem] max-[1080px]:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-[0.2rem] text-ink-2"
            >
              {link.label[locale]}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-soft group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 max-[1080px]:ml-auto">
          <LanguageSwitcher locale={locale} />

          <a
            href={clinic.phoneHref}
            className="text-[0.84rem] whitespace-nowrap max-[1080px]:hidden"
          >
            {clinic.phone}
          </a>

          <a
            href={clinic.phoneHref}
            className="btn btn-dark px-[1.1rem] py-[0.6rem] text-[0.88rem] max-[1080px]:hidden"
          >
            {m.nav.book[locale]}{" "}
            <ArrowUpRight className="arrow size-[0.85em]" />
          </a>

          {/* Gamburger — faqat tor ekranda */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={m.nav.menu[locale]}
            className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-line-2 max-[1080px]:flex"
          >
            {/* Chiziqlar `top` bilan emas, faqat transform bilan siljiydi:
                `top` jonlantirilmaydi va krestga aylanish sakrab qolardi. */}
            <span className="relative block h-[10px] w-[18px]">
              <span
                className={cn(
                  "absolute top-0 left-0 block h-px w-full bg-ink",
                  "transition-transform duration-500 ease-expo",
                  open && "translate-y-[4.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute top-[9px] left-0 block h-px w-full bg-ink",
                  "transition-transform duration-500 ease-expo",
                  open && "-translate-y-[4.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Menyu paneli.

          `hidden` emas: panel doim DOM da turadi va balandligi 0fr dan
          1fr ga o'sadi — shu bilan ochilishi ham, yopilishi ham silliq.
          Yopiq turganda `inert` uni klaviatura va skrindan olib qo'yadi. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "hidden bg-paper max-[1080px]:grid",
          "transition-[grid-template-rows,opacity] duration-500 ease-expo",
          open
            ? "grid-rows-[1fr] border-t border-line opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        {/* Chetlar (`py-5`) ichkariga olindi: ular tashqi elementda
            qolsa, qator `0fr` bo'lganda ham 40px joy egallardi. */}
        <div className="min-h-0 overflow-hidden">
          <Container className="flex flex-col gap-1 py-5">
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                /* Havolalar birin-ketin chiqadi; yopilganda esa hammasi
                 birdan ketadi, aks holda yopilish cho'zilib ketardi. */
                style={{ transitionDelay: open ? `${90 + i * 45}ms` : "0ms" }}
                className={cn(
                  "border-b border-line py-3 text-[1.05rem]",
                  "transition-[opacity,transform] duration-500 ease-expo",
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0",
                )}
              >
                {link.label[locale]}
              </a>
            ))}

            <div
              style={{
                transitionDelay: open ? `${90 + LINKS.length * 45}ms` : "0ms",
              }}
              className={cn(
                "mt-4 flex flex-col gap-2",
                "transition-[opacity,transform] duration-500 ease-expo",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
            >
              <a
                href={clinic.phoneHref}
                className="btn btn-dark justify-center"
              >
                {m.nav.book[locale]}{" "}
                <ArrowUpRight className="arrow size-[0.85em]" />
              </a>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost justify-center"
              >
                WhatsApp
              </a>
              <span className="mt-1 text-center text-[0.9rem] text-muted">
                {clinic.phone}
              </span>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
