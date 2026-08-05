"use client"; // Client Component

import clsx from "clsx";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/hooks";
import styles from "./LanguageSwitch.module.css";
import {
  getLocaleName,
  getUpperCaseLocale,
  LOCALE_CODES,
  getFormattedLocale,
} from "./LanguageSwitch.utils";
import { setCookie } from "@/app/lib/utils";
import useToggle from "../../customHooks/useToggle";
import { IoIosArrowDown, IoIosArrowUp, IoIosGlobe } from "@/app/lib/icons";
import type { LocaleCode } from "../../types/localization";
import { setLocalization } from "@/app/features/localization/localizationSlice";
import { fetchLocaleDictionary } from "./LanguageSwitch.utils";
import { useOnEscape } from "../../customHooks/useOnEscape";

/**
 * Renders the language switch with:
 * - Current locale button
 * - List of languages pop-up
 */
export default function LanguageSwitch() {
  // Localization reducer
  const localization = useAppSelector((state) => state.localization);
  const currentLocal = localization.localeCode;
  const dictionary = localization.dictionary;
  const dispatch = useDispatch();

  // Locales pop-up
  const { isToggled, toggle } = useToggle(false);

  // Locales close on Escape
  useOnEscape(isToggled, toggle);

  // Next.js hooks
  const router = useRouter();

  /**
   * Updates the app language
   */
  const updateLanguage = async (localeCode: LocaleCode) => {
    const dict = await fetchLocaleDictionary(localeCode);

    dispatch(setLocalization({ localeCode: localeCode, dictionary: dict }));

    setCookie("NEXT_LOCALE", localeCode, 31536000); // Save cookie

    router.replace(`/${localeCode}`); // Update locale URL param

    toggle(); // close the locales pop-up
  };

  return (
    <>
      {/*Current locale button*/}
      <button
        className={clsx("switchBtn", styles.btn, {
          [styles.toggled]: isToggled,
        })}
        onClick={toggle}
        onMouseDown={(e) => e.preventDefault()}
        aria-haspopup="menu"
        aria-expanded={isToggled}
        aria-controls="languages-pop-up"
        aria-label={`${dictionary.languageSwitch} ${getLocaleName(currentLocal)}`}
      >
        <div className={`${styles.flexCont} bold-text`}>
          <IoIosGlobe className={styles.icon} aria-hidden="true" />

          <span>{getUpperCaseLocale(currentLocal)}</span>

          {isToggled ? (
            <IoIosArrowUp className={styles.icon} aria-hidden="true" />
          ) : (
            <IoIosArrowDown className={styles.icon} aria-hidden="true" />
          )}
        </div>
      </button>

      {/*List of languages pop-up*/}
      {isToggled ? (
        <ul
          className={styles.languages}
          id="languages-pop-up"
          role="menu"
          data-testid="languages-pop-up"
        >
          {LOCALE_CODES.filter((locale) => locale !== currentLocal).map(
            (locale, index) => (
              <li key={index} className={styles.item}>
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
    </>
  );
}
