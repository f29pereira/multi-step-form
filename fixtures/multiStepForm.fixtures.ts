import type {
  PlanDetails,
  MultiStepFormContextType,
} from "@/app/components/types";

/**
 * Returns an initial state mock for the MultiStepFormContext
 */
export const createEmptyMultiStepFormContext = (): MultiStepFormContextType => {
  return {
    currentStepIndex: 0,
    goToNextStep: jest.fn(),
    goToPrevStep: jest.fn(),
    goToStep: jest.fn(),
    toggleSubscription: jest.fn(),
    formData: {
      isYearly: true,
      personalInfo: { name: "", email: "", phone: "" },
      selectedPlanId: "",
      selectedAddOns: [],
    },
    setFormData: jest.fn(),
    isConfirmed: false,
    confirmSubscription: jest.fn(),
  };
};

/**
 * Returns a mocked plan
 */
export const createPlan = (): PlanDetails => {
  return FIXTURE_PLANS_LIST[0];
};

/**
 * List of mocked subscription plans
 */
const FIXTURE_PLANS_LIST: PlanDetails[] = [
  {
    id: "1",
    type: "Arcade",
    monthlyPlan: {
      value: 9,
    },
    yearlyPlan: {
      value: 90,
      discount: "2 months free",
    },
  },
  {
    id: "2",
    type: "Advanced",
    monthlyPlan: {
      value: 12,
    },
    yearlyPlan: {
      value: 120,
      discount: "2 months free",
    },
  },
  {
    id: "3",
    type: "Pro",
    monthlyPlan: {
      value: 15,
    },
    yearlyPlan: {
      value: 150,
      discount: "2 months free",
    },
  },
];

/**
 * Mocked data for the Form steps
 */
export const FIXTURE_FORM_STEPS = {
  // PersonalInfo component
  personalInfo: {
    title: "Step 1 of 4, Personal info",
    description: "Please provide your name, email address, and phone number.",
    nameInputLabel: "Name",
    emailInputLabel: "Email Address",
    phoneInputLabel: "Phone Number",
  },
  // TO DO: Add mocked data for SelectPlan, PickAddOns, LastStep
};

/**
 * Mocked data for the SubscriptionToggle component
 */
export const FIXTURE_SUBSCRIPTIONTOGGLE = {
  monthly: "Monthly",
  yearly: "Yearly",
  btnDescription: "Monthly/Yearly toggle current selected:",
};

/**
 * Mocked data for the ThankYou component
 */
export const FIXTURE_THANKYOU = {
  title: "Thank you!",
  description:
    "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loregaming.com.",
};
