"use client"; // Client Component

import styles from "./ThemeSwitch.module.css";
import { useEffect } from "react";
import { IoMdMoon, IoMdSunny } from "@/app/lib/icons";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { toggleTheme } from "@/app/features/theme/themeSlice";
import Toggle from "../../ui/Toggle/Toggle";
import { setCookie } from "@/app/lib/utils";

/**
 * Renders the app theme switch with:
 * - Ligth theme icon
 * - Switch theme button
 * - Dark theme icon
 */
export default function ThemeSwitch() {
  // Localization reducer
  const dictionary = useAppSelector((state) => state.localization.dictionary);
  const themeSwitchDict = dictionary.themeSwitch;

  // Theme reducer
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Adds dark-theme class to the document body
    document.body.classList.toggle("dark-theme", isDarkTheme);

    // Saves cookie with current theme
    const theme = isDarkTheme ? "dark" : "light";
    setCookie("APP_THEME", theme, 31536000);
  }, [isDarkTheme]);

  return (
    <div className={`switchBtn ${styles.flexCont}`}>
      {/*Ligth theme icon*/}
      <IoMdSunny
        className={`${styles.icon} ${styles.lightIcon}`}
        aria-hidden="true"
      />

      {/*Switch theme button*/}
      <button
        className={styles.btn}
        onClick={() => {
          dispatch(toggleTheme());
        }}
        onMouseDown={(e) => e.preventDefault()}
        aria-label={`${themeSwitchDict.btnAriaLabel} ${isDarkTheme ? themeSwitchDict.light : themeSwitchDict.dark}`}
      >
        <Toggle isLeftSelected={!isDarkTheme} aria-hidden="true" />
      </button>

      {/*Dark theme icon*/}
      <IoMdMoon className={styles.icon} />
    </div>
  );
}
