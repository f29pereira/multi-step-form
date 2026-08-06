import { createSlice } from "@reduxjs/toolkit";
import type { ThemeState } from "@/app/components/types/redux";

const initialState: ThemeState = {
  isDarkTheme: false,
};

/**
 * App theme slice
 */
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
