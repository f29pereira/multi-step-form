"use client"; // Client Component
import { useEffect } from "react";

/**
 * Custom Hook: Calls toggleFunc when espace key is pressed and the element is open
 */
export const useOnEscape = (isOpened: boolean, toggleFunc: () => void) => {
  useEffect(() => {
    if (!isOpened) {
      return;
    }

    const handleEscKey = (e: KeyboardEvent) => {
      if (isOpened && e.key === "Escape") {
        toggleFunc();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Clean-up function
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpened]);
};
