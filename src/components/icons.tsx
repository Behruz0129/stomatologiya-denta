/*
 * Ikonkalar SVG bo'lishi kerak: matn belgilari (← → ↗) qurilmaga qarab
 * emoji ko'rinishida chiqib qolardi — ayniqsa telefonlarda.
 */

type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className ?? "size-[0.85em]"}
    >
      <path
        d="M3 9 9 3M9 3H4.2M9 3v4.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className ?? "size-4"}
    >
      <path
        d="M13 8H3M3 8l4.2-4.2M3 8l4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className ?? "size-4"}
    >
      <path
        d="M3 8h10M13 8l-4.2-4.2M13 8l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* --- Narx yo'nalishlari uchun ikonkalar --- */

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconExam({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className ?? "size-5"}>
      <circle cx="11" cy="11" r="6" {...S} />
      <path d="M15.5 15.5 20 20" {...S} />
    </svg>
  );
}

export function IconTooth({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className ?? "size-5"}>
      <path d="M12 5.2c-1.5-1.1-3.2-1.6-4.7-1.2C5.3 4.5 4 6.3 4 8.8c0 2.1.5 3.6 1.1 5.6.5 1.7.7 3.1.9 4.6.2 1.5.8 2.4 1.8 2.4 1.1 0 1.5-.9 1.8-2.6l.5-2.8c.2-1.1.6-1.7 1.9-1.7s1.7.6 1.9 1.7l.5 2.8c.3 1.7.7 2.6 1.8 2.6 1 0 1.6-.9 1.8-2.4.2-1.5.4-2.9.9-4.6.6-2 1.1-3.5 1.1-5.6 0-2.5-1.3-4.3-3.3-4.8-1.5-.4-3.2.1-4.7 1.2Z" {...S} />
    </svg>
  );
}

export function IconBraces({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className ?? "size-5"}>
      <path d="M3 12h18" {...S} />
      <rect x="4.5" y="8.5" width="4" height="7" rx="1.2" {...S} />
      <rect x="10" y="8.5" width="4" height="7" rx="1.2" {...S} />
      <rect x="15.5" y="8.5" width="4" height="7" rx="1.2" {...S} />
    </svg>
  );
}

export function IconCrown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className ?? "size-5"}>
      <path d="M4 17.5h16M4.5 17.5 3 7.5l4.5 3.2L12 5l4.5 5.7L21 7.5l-1.5 10" {...S} />
    </svg>
  );
}

export function IconScalpel({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className ?? "size-5"}>
      <path d="M4 20 9.5 14.5M20 4.5 12 12.5l-2.5-2.5 6-6a3.5 3.5 0 0 1 4.5 0Z" {...S} />
    </svg>
  );
}
