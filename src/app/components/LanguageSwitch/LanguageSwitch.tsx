"use client"; // Client Component

import { useAppSelector } from "@/app/hooks";
import styles from "./LanguageSwitch.module.css";
import clsx from "clsx";
import {
  getLocaleName,
  getUpperCaseLocale,
  LOCALE_CODES,
  getFormattedLocale,
} from "./LanguageSwitch.utils";
import useToggle from "../customHooks/useToggle";
import { useDispatch } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp, IoIosGlobe } from "@/app/lib/icons";
import { LocaleCode } from "../types";
import { setLocalization } from "@/app/features/localization/localizationSlice";
import { fetchLocaleDictionary } from "@/app/actions";

/**
 * Renders the language switch with:
 * - Current locale button
 * - List of languages pop-up
 */
export default function LanguageSwitch() {
  // Localization reducer
  const currentLocal = useAppSelector((state) => state.localization.localeCode);
  const dispatch = useDispatch();

  // Locales pop-up
  const { isToggled, toggle } = useToggle(false);

  /**
   * Updates the app language
   */
  const updateLanguage = async (localeCode: LocaleCode) => {
    const dict = await fetchLocaleDictionary(localeCode);

    dispatch(setLocalization({ localeCode: localeCode, dictionary: dict }));

    toggle(); // close the locales pop-up
  };

  return (
    <div className={styles.mainCont}>
      {/*Current locale button*/}
      <button
        className={clsx(styles.btn, {
          [styles.toggled]: isToggled,
        })}
        onClick={toggle}
        onMouseDown={(e) => e.preventDefault()}
        aria-haspopup="menu"
        aria-expanded={isToggled}
        aria-controls="languages-pop-up"
        aria-label={`Switch language, current selected ${getLocaleName(currentLocal)}`}
      >
        <div className={`${styles.flexCont} bold-text`}>
          <IoIosGlobe className={styles.icon} />

          <span>{getUpperCaseLocale(currentLocal)}</span>

          {isToggled ? (
            <IoIosArrowUp className={styles.icon} />
          ) : (
            <IoIosArrowDown className={styles.icon} />
          )}
        </div>
      </button>

      {/*List of languages pop-up*/}
      {isToggled ? (
        <ul className={styles.languages} id="languages-pop-up" role="menu">
          {LOCALE_CODES.filter((locale) => locale !== currentLocal).map(
            (locale, index) => (
              <li key={index}>
                <button
                  className={`bold-text ${styles.languageBtn}`}
                  onClick={() => {
                    updateLanguage(locale);
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  aria-label={getLocaleName(locale)}
                >
                  <span>{getFormattedLocale(locale)}</span>
                </button>
              </li>
            ),
          )}
        </ul>
      ) : null}
    </div>
  );
}
