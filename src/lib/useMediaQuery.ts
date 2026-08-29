"use client";

import { useSyncExternalStore } from "react";

/**
 * Media-so'rov natijasi.
 *
 * Serverda doim `false` qaytaradi — ya'ni serverda keng ekran varianti
 * chiziladi va brauzerda kerak bo'lsa almashadi. Shu sabab hidratsiya
 * mos keladi va JavaScript ishlamasa ham keng ekran varianti qoladi.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
