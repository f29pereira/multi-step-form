"use client"; // Client Component

import { useState } from "react";

/**
 * Custom Hook: manages toggle value state with toggle function
 */
export default function useToggle(startValue: boolean) {
  const [isToggled, setIsToggled] = useState(startValue);

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  return { isToggled, toggle };
}
