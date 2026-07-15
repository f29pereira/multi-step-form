"use server";

import type { LocaleCode } from "./components/types";
import { getDictionary } from "./[lang]/dictionaries";

/**
 * Fetches the dictionary for a given locale code
 * @param localeCode - local code
 */
export const fetchLocaleDictionary = async (localeCode: LocaleCode) => {
  return getDictionary(localeCode);
};
