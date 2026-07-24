"use client"; // Client Component
import { useRef } from "react";
import { Provider } from "react-redux";
import type { StoreProviderProps } from "./components/types/redux";
import { makeStore, AppStore } from "./lib/store";

/**
 * Creates and provides the Redux store
 */
export default function StoreProvider({
  children,
  localeCode,
  dictionary,
  isDarkTheme,
}: StoreProviderProps) {
  const storeRef = useRef<AppStore>(undefined);
  // eslint-disable-next-line react-hooks/refs
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore({
      localization: {
        localeCode: localeCode,
        dictionary: dictionary,
      },
      theme: { isDarkTheme },
    });
  }

  // eslint-disable-next-line react-hooks/refs
  return <Provider store={storeRef.current}>{children}</Provider>;
}
