import type { LocaleCode } from "../../types/localization";

/**
 * Returns the language name and given language code inside parentheses
 * @param localeCode - locale code
 */
export const getFormattedLocale = (localeCode: LocaleCode) => {
  return `${getLocaleName(localeCode)} (${localeCode})`;
};

/**
 * Returns the uppercase localde code
 * @param localeCode - locale code
 */
export const getUpperCaseLocale = (localeCode: LocaleCode) => {
  return localeCode.toUpperCase();
};

/**
 * Returns the language name by a given locale code
 * @param localeCode - locale code
 */
export const getLocaleName = (localeCode: LocaleCode) => {
  switch (localeCode) {
    case "en":
      return "English";
    case "pt":
      return "Português";
  }
};

/**
 * List of available locale codes
 */
export const LOCALE_CODES: LocaleCode[] = ["en", "pt"];
