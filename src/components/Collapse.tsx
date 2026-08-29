"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Ochilib-yopiladigan blok: ichki balandlik o'lchanadi va `height`
 * piksellarda animatsiya qilinadi.
 *
 * `grid-template-rows: 0fr -> 1fr` usuli kodi qisqaroq, lekin u Safari'da
 * faqat 16.4 dan boshlab ishlaydi. Shu sabab o'lchovli variant tanlandi -
 * u eski brauzerlarda ham bir xil.
 *
 * O'lchov `ResizeObserver` bilan emas, ataylab: u har o'zgarishda qayta
 * o'lchab, tranzitsiyani boshidan qayta ishga tushirib yuborishi mumkin.
 * O'lchash ilk yuklanishda, oyna kengligi o'zgarganda va til almashganda
 * bo'ladi - shuning uchun yetarli.
 */
export function Collapse({
  open,
  children,
  deps,
}: {
  open: boolean;
  children: ReactNode;
  /** O'zgarganda balandlik qayta o'lchanadi (masalan, matn tili). */
  deps?: string;
}) {
  const inner = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const node = inner.current;
      if (node) setHeight(node.scrollHeight);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [deps]);

  return (
    <div
      aria-hidden={!open}
      style={{ height: open ? height : 0 }}
      className="overflow-hidden transition-[height] duration-[550ms] ease-expo"
    >
      <div ref={inner}>{children}</div>
    </div>
  );
}
