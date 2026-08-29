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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper transition-colors duration-300",
        stuck ? "border-line" : "border-transparent",
      )}
    >
      <Container className="flex items-center gap-[1.4rem] py-[0.95rem]">
        <Link
          href="#top"
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

        <LanguageSwitcher locale={locale} />

        <a
          href={clinic.phoneHref}
          className="text-[0.84rem] whitespace-nowrap max-[620px]:hidden"
        >
          {clinic.phone}
        </a>

        <a
          href={clinic.phoneHref}
          className="btn btn-dark px-[1.1rem] py-[0.6rem] text-[0.88rem]"
        >
          {m.nav.book[locale]} <span className="arrow">↗</span>
        </a>
      </Container>
    </header>
  );
}
