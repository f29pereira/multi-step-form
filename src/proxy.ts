import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "pt"];
const defaultLocale = "en";

/**
 * Gets the preferred locale
 * @param request
 */
function getLocale(request: NextRequest) {
  // TO DO: add locale cookies logic
  return defaultLocale;
}

/**
 * Returns the current pathname if it has a locale or redirects to new URL with the locale
 * @param request
 */
export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // The new URL is now /en/(...)
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Exclude API routes, static files and image optimizations
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
