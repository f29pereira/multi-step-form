import "server-only";
import { Dictionary } from "../components/types";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

/**
 * Returns true if given local exists
 * @param locale
 */
export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

/**
 * Returns the localization dictionary by a given locale
 * @param locale
 */
export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
