import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    // Klinika fotolari og'ir JPG bo'ladi - AVIF/WebP bilan yengillashadi.
    formats: ["image/avif", "image/webp"],

    // Ishlab chiqish paytida optimallashtirish o'chiriladi: Next
    // optimallashtirilgan nusxani URL bo'yicha keshlaydi, fayl o'zgarsa
    // ham URL o'sha bo'lgani uchun eski rasm chiqaverardi. O'chirilganda
    // fayl to'g'ridan-to'g'ri beriladi va yangilanishi darrov ko'rinadi.
    unoptimized: isDev,
    minimumCacheTTL: isDev ? 0 : 60 * 60 * 24 * 30,
  },

  async headers() {
    const headers = [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];

    if (isDev) {
      // Brauzer ham keshlamasin - refresh bosilganda yangi fayl kelsin.
      headers.push({
        source: "/img/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      });
    }

    return headers;
  },
};

export default nextConfig;
