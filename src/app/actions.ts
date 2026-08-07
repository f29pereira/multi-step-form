"use server";

import type { LocaleCode } from "./components/types/localization";
import { getDictionary } from "./[lang]/dictionaries";

/**
 * Fetches the dictionary for a given locale code
 * @param localeCode - locale code
 */
export const fetchLocaleDictionary = async (localeCode: LocaleCode) => {
  return getDictionary(localeCode);
};
