"use client"; // Client Component
import { useEffect, useRef } from "react";

/**
 * Custom Hook: makes the element focusable when rendered
 */
export default function useFocus<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    elementRef.current?.focus();
  }, []);

  return { elementRef };
}
