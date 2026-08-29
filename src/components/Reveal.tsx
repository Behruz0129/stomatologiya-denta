"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Guruh ichidagi tartib raqami — qo'shni elementlar ketma-ket ochiladi. */
  index?: number;
  /** Bir qadamga to'g'ri keladigan kechikish (ms). Bosh ekranda kattaroq. */
  step?: number;
};

const STEP_MS = 70;
const MAX_STEPS = 5;

/**
 * Ko'rinish maydoniga kirganda elementni ochadi.
 * Kechikish faqat qo'shnilar orasida beriladi: butun sahifa bo'ylab
 * berilsa, elementlar tartibsiz sakrab chiqadi.
 */
export function Reveal({ children, className, as, index = 0, step = STEP_MS }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      // Juda eski brauzer: darrov ochib qo'yamiz. setState emas, chunki
      // ochilishni CSS `data-shown` atributi boshqaradi.
      node.setAttribute("data-shown", "true");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setShown(true);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      data-shown={shown}
      style={{ "--reveal-delay": `${Math.min(index, MAX_STEPS) * step}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
