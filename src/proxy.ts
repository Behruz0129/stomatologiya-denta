import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE } from "@/lib/i18n";

/** Ildizga kelgan odam o'zbekcha versiyaga tushadi. */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
