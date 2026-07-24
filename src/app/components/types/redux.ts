// Redux Toolkit related types

import { ReactNode } from "react";
import type { LocaleCode, Dictionary } from "./localization";

/**
 * Type for the Redux store
 * @property children   - single or list of React children
 * @property locale     - current locale code
 * @property dictionary - locatization dictionary
 * @property isDarkTheme - is the dark mode theme active
 */
export type StoreProviderProps = {
  children: ReactNode;
  localeCode: LocaleCode;
  dictionary: Dictionary;
  isDarkTheme: boolean;
};

/**
 * Type for the localization slice
 * @property locale     - current locale code
 * @property dictionary - locatization dictionary
 */
export type LocalizationState = Pick<
  StoreProviderProps,
  "localeCode" | "dictionary"
>;

/**
 * Type for the theme slice
 * @property isDarkTheme - is the dark mode theme active
 */
export type ThemeState = Pick<StoreProviderProps, "isDarkTheme">;
