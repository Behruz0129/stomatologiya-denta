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
