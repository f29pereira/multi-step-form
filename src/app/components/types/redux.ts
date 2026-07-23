// Redux Toolkit related types

import { ReactNode } from "react";
import type { LocaleCode } from ".";
import type { Dictionary } from "./localization";

/**
 * Type for the Redux store
 * @property children   - single or list of React children
 * @property locale     - current locale code
 * @property dictionary - locatization dictionary
 */
export type StoreProviderProps = {
  children: ReactNode;
  localeCode: LocaleCode;
  dictionary: Dictionary;
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
