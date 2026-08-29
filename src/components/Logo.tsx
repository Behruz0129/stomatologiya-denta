import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Klinika logotipi — `public/logo.svg` (119x93, yotiq, foni shaffof).
 *
 * SVG optimallashtirishga muhtoj emas va Next uni optimizatordan
 * o'tkazishi uchun alohida ruxsat kerak bo'lardi, shuning uchun
 * `unoptimized` bilan o'z holicha beriladi.
 *
 * Logotip to'q rangda (#272727 va qora). To'q fonda ko'rinmay qolmasligi
 * uchun `invert` bilan oqartiriladi — belgi bir rangli bo'lgani uchun
 * `brightness(0) invert(1)` uni toza oq qiladi.
 */
export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  /** To'q fon uchun: logotipni oq qiladi. */
  invert?: boolean;
}) {
  return (
    <Image
      src="/logo.svg"
      alt=""
      width={119}
      height={93}
      priority
      unoptimized
      draggable={false}
      className={cn("h-7 w-auto", invert && "brightness-0 invert", className)}
    />
  );
}
