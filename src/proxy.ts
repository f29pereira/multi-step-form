import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "pt"];
const defaultLocale = "en";

/**
 * Gets the preferred locale
 * @param request
 */
function getLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const localeFromCookie = getCookieLocale(cookieLocale);

  if (localeFromCookie) {
    return localeFromCookie;
  }

  // if NEXT_LOCALE cookie doesn't exist
  return getUserLanguagePreferences(request);
}

/**
 * Checks if the locale is already stored in a cookie, if so returns it
 * @param cookieLocale saved cookie locale
 */
const getCookieLocale = (cookieLocale: string | undefined) => {
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }
};

/**
 * Returns the best match, or the default locale, of the user’s language preferences in the browser
 * @param request
 */
const getUserLanguagePreferences = (request: NextRequest) => {
  const acceptedLanguageValue = request.headers.get("accept-language") ?? ""; // e.g 'en-US,en;q=0.5'

  const languages = new Negotiator({
    headers: { "accept-language": acceptedLanguageValue },
  }).languages();

  try {
    return match(languages, locales, defaultLocale);
  } catch {
    return defaultLocale;
  }
};

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

  if (pathnameHasLocale) {
    const response = NextResponse.next();
    const localeCode = pathname.split("/")[1];

    if (locales.includes(localeCode)) {
      // Update NEXT_LOCALE cookie with the current locale
      response.cookies.set("NEXT_LOCALE", localeCode, { path: "/" });
    }
    return response;
  }

  // Add locale and redirect
  const locale = getLocale(request);
  // The new URL is now /locale/(...)
  request.nextUrl.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });

  return response;
}

export const config = {
  matcher: [
    // Exclude API routes, static files and image optimizations
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
