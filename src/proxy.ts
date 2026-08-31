import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { MAINTENANCE, maintenanceHtml } from "@/lib/maintenance";

export function proxy(request: NextRequest) {
  /*
   * Sayt vaqtinchalik yopiq bo'lsa hamma manzil shu sahifani beradi.
   *
   * Holat 503 va `Retry-After` ataylab: bu «sayt yo'q» emas, «hozircha
   * yopiq» degani. Shunda qidiruv tizimlari sahifalarni indeksdan olib
   * tashlamaydi, keyinroq qaytib keladi. Shu sababdan `noindex` ham
   * qo'yilmagan — u aynan teskari ta'sir qilardi.
   */
  if (MAINTENANCE) {
    return new NextResponse(maintenanceHtml(), {
      status: 503,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
        "retry-after": "3600",
      },
    });
  }

  /** Ildizga kelgan odam o'zbekcha versiyaga tushadi. */
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

/*
 * Yopiq holatda hamma manzil ushlanishi kerak, shuning uchun matcher keng.
 * Ochiq holatda yuqoridagi shart faqat `/` da ishlaydi, qolgani
 * `NextResponse.next()` bilan o'tib ketadi.
 *
 * `_next` va rasmlar chetda qoldirilgan: ular sahifa emas.
 */
export const config = {
  matcher: "/((?!_next/static|_next/image|img/|favicon.ico).*)",
};
