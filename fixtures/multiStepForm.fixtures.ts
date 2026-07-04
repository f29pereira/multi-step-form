import type {
  PlanDetails,
  MultiStepFormContextType,
  AddOnDetails,
  FormData,
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
 * Returns state mock with formData for the MultiStepFormContext
 */
export const createMultiStepFormContext = (): MultiStepFormContextType => {
  return {
    currentStepIndex: 0,
    goToNextStep: jest.fn(),
    goToPrevStep: jest.fn(),
    goToStep: jest.fn(),
    toggleSubscription: jest.fn(),
    formData: multiStepFormContext(),
    setFormData: jest.fn(),
    isConfirmed: false,
    confirmSubscription: jest.fn(),
  };
};

/**
 * Returns a mock for a completed Multi-step form
 */
export const multiStepFormContext = (): FormData => {
  return {
    isYearly: true,
    personalInfo: {
      name: "John Doe",
      email: "johndoe@email.com",
      phone: "123456789",
    },
    selectedPlanId: createPlan().id,
    selectedAddOns: ["1", "2", "3"],
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
export const FIXTURE_PLANS_LIST: PlanDetails[] = [
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
 * Returns a mocked add-on
 */
export const createAddOn = (): AddOnDetails => {
  return FIXTURE_ADD_ONS_LIST[0];
};

/**
 * List of mocked add-ons
 */
export const FIXTURE_ADD_ONS_LIST: AddOnDetails[] = [
  {
    id: "1",
    type: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: "2",
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: "3",
    type: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

/**
 * Mocked data for the Plan component
 */
export const FIXTURE_PLAN = {
  type: "Arcade",
  monthlyPlan: "$90/mon",
  yearlyPlan: "$90/yr",
  yearlyDiscount: "2 months free",
};

/**
 * Mocked data for the AddOn component
 */
export const FIXTURE_ADDON = {
  type: "Online service",
  description: "Access to multiplayer games",
  monthlyAddOn: "+$1/mon",
  yearlyAddOn: "+$10/yr",
};

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
  // SelectPlan component
  selectPlan: {
    title: "Step 2 of 4, Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  // PickAddOns component
  pickAddOns: {
    title: "Step 3 of 4, Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  // FinishSubscription component
  finishSubscription: {
    title: "Step 4 of 4, Finishing up",
    description: "Double-check everything looks OK before confirming.",
    changeBtn: "Change Plan",
    FIXTURE_PLAN,
    FIXTURE_ADD_ONS_LIST,
    yearlyTotal: "$140/yr",
    monthlyTotal: "$14/mo",
  },
};

/**
 * Mocked data for the StepsList component
 */
export const FIXTURE_STEPSLIST = {
  stepsList: ["Your Info", "Select plan", "Add-ons", "Summary"],
};

/**
 * Mocked data for the Step component
 */
export const FIXTURE_STEP = {
  stepIndex: 0,
  stepName: "Your Info",
};

/**
 * Mocked data for the MultiStepForm component
 */
export const FIXTURE_MULTISTEPFORM = {
  nextBtn: "Next Step",
  prevBtn: "Go Back",
  confirmBtn: "Confirm",
  personalInfo: {
    required: "This field is required",
    name: {
      minLength: "Must be at least 2 characters",
      maxLength: "Must be under 50 characters",
      invalid: "Can only contain letters or spaces",
    },
    email: {
      invalid: "Invalid Email Address",
    },
    phone: {
      invalid: "Invalid Phone Number",
    },
  },
  selectPlan: {
    required: "Select a plan to continue",
  },
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
