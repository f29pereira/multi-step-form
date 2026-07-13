import "server-only";
import { Dictionary } from "../components/types";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

/**
 * Returns true if given local exists
 * @param locale - locale code
 */
export const hasLocale = (localeCode: string): localeCode is Locale =>
  localeCode in dictionaries;

/**
 * Returns the localization dictionary by a given locale
 * @param locale - locale code
 */
export const getDictionary = async (localeCode: Locale): Promise<Dictionary> =>
  dictionaries[localeCode]();
