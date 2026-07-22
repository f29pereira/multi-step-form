import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { LocalizationState } from "@/app/components/types";

const initialState: LocalizationState = {
  localeCode: "en",
  dictionary: {
    languageSwitch: "",
    step: "",
    stepsList: [],
    navigation: {
      goBackBtn: "",
      nextStep: "",
      confirmBtn: "",
    },
    subscription: {
      yearly: {
        long: "",
        short: "",
      },
      monthly: {
        long: "",
        short: "",
      },
    },
    personalInfo: {
      titleAriaLabel: "",
      title: "",
      description: "",
      nameLabel: "",
      emailAddressLabel: "",
      phoneNumberLabel: "",
      errorMessages: {
        required: "",
        name: {
          minLength: "",
          maxLength: "",
          invalid: "",
        },
        emailAddress: "",
        phoneNumber: "",
      },
    },
    selectPlan: {
      titleAriaLabel: "",
      title: "",
      description: "",
      legend: "",
      discount: "",
      plans: [
        {
          type: "",
          discount: "",
        },
        {
          type: "",
          discount: "",
        },
        {
          type: "",
          discount: "",
        },
      ],
      errorMessages: {
        required: "",
      },
    },
    subscriptionToggle: {
      monthlyText: "",
      toggleBtnLabel: "",
      yearlyText: "",
    },
    pickAddOns: {
      titleAriaLabel: "",
      title: "",
      description: "",
      legend: "",
      addOns: [
        {
          type: "",
          description: "",
        },
        {
          type: "",
          description: "",
        },
        {
          type: "",
          description: "",
        },
      ],
    },
    finishSubscription: {
      titleAriaLabel: "",
      title: "",
      description: "",
      changePlanLink: "",
      changePlanLabel: "",
      addOnsLabel: "",
      total: {
        text: "",
        yearly: "",
        monthly: "",
      },
    },
    thankYou: {
      title: "",
      message: "",
    },
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
