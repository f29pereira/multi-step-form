import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { LocalizationState } from "@/app/components/types";

const initialState: LocalizationState = {
  localeCode: "en",
  dictionary: {
    step: "",
    stepsList: [],
  },
};

/**
 * Localization slice
 */
export const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    setLocalization: (state, action: PayloadAction<LocalizationState>) => {
      state.localeCode = action.payload.localeCode;
      state.dictionary = action.payload.dictionary;
    },
  },
});

export const { setLocalization } = localizationSlice.actions;
export default localizationSlice.reducer;
