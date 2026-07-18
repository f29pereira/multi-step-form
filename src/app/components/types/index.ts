import { RefObject, ReactNode, Dispatch, SetStateAction } from "react";

/* ---------------------------------------------------- */
/* Components Props types                               */
/* ---------------------------------------------------- */

/**
 * Props for the form step components: PersonalInfo, SelectPlan, PickAddOns, LastStep
 * @property formRef - React ref for the current form step
 */
export type FormStepProps = {
  formRef: RefObject<HTMLFormElement | null>;
};

/**
 * Props for the Circle component
 * @property stepIndex        - index of the step
 * @property stepIndexDesktop - index of ste step (desktop only)
 * @property stepName         - name of the step
 * @property isSelected       - is the step selected
 */
export type StepProps = {
  stepIndex: number;
  stepIndexDesktop: string;
  stepName: string;
  isSelected: boolean;
};

/**
 * Props for the StepsList component
 * @property list             - list of steps
 * @property currentStepIndex - step index
 */
export type StepsListProps = {
  list: Array<string>;
  currentStepIndex: number;
};

/**
 * Props for the Button component
 * @property description   - button description
 * @property variant       - button color variant
 * @property fontSize      - (optional) button font size (small = 14px, default: base = 16px)
 * @property handleOnClick - (optional) onClick function
 */
export type ButtonProps = {
  description: string;
  variant: "transparentBtn" | "blueBtn" | "purpleBtn" | "whiteBtn";
  fontSize?: "small" | "base";
  handleOnClick?: () => void;
};

/**
 * Props for the Plan component
 * @property id        - plan id
 * @property type      - type of plan
 * @property price     - plan price
 * @property isInvalid - is the plan invalid
 */
export type PlanProps = Pick<PlanDetails, "id" | "type"> & {
  price: PlanPricing;
  isInvalid: boolean;
};

/**
 * Props for the AddOn component
 * @property id        - add-on id
 * @property type      - type of add-on
 * @property price     - add-on price
 */
export type AddOnProps = Pick<AddOnDetails, "id" | "type" | "description"> & {
  price: number;
};

/**
 * Props for the ErrorMessage component
 * @property id      - id to be associated with the input
 * @property message - text with error message
 */
export type ErrorMessageProps = {
  id: string;
  message?: string;
};

/* ---------------------------------------------------- */
/* Context Provider related types                       */
/* ---------------------------------------------------- */

/**
 * Type for React children
 * @property children  - single or list of React children
 */
export type ReactChildrenType = {
  children: ReactNode;
};

/**
 * Type for the MultiStepContext
 * @property currentStepIndex    - state: current form step index
 * @property goToNextStep        - goes to the next form step
 * @property goToPrevStep        - goes to the previous form step
 * @property toggleSubscription  - toggle between yearly and monthly subscription
 * @property formData            - state: multi-step form data
 * @property setFormData         - state setter: multi-step form data
 * @property isConfirmed         - state: is the subscription confirmed by the user
 * @property confirmSubscription - confirms the user's subscription
 */
export type MultiStepFormContextType = {
  currentStepIndex: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  goToStep: (stepIndex: number) => void;
  toggleSubscription: () => void;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  isConfirmed: boolean;
  confirmSubscription: () => void;
};

/**
 * Type for the multi-step form data
 * @property isYearly       - is a yearly subscription
 * @property personalInfo   - user's personal data
 * @property selectedPlanId - user's selected plan id
 * @property selectedAddOns - user's selected add-on ids
 */
export type FormData = Pick<SelectedPlan, "selectedPlanId"> &
  Pick<SelectedAddOns, "selectedAddOns"> & {
    isYearly: boolean;
    personalInfo: PersonalInfoFields;
  };

/**
 * Type for the user's personal data
 * @property name  - name
 * @property email - email address
 * @property phone - phone number
 */
export type PersonalInfoFields = {
  name: string;
  email: string;
  phone: string;
};

/**
 * Type for the user's selected plan
 * @property id - plan id
 */
export type SelectedPlan = {
  selectedPlanId: string;
};

/**
 * Type for the user's selected add-ons
 * @property selectedAddOns - list of add-on ids
 */
export type SelectedAddOns = {
  selectedAddOns: string[];
};

/* ---------------------------------------------------- */
/* Redux Toolkit related types                          */
/* ---------------------------------------------------- */

/**
 * Type for the Redux store
 * @property children   - single or list of React children
 * @property locale     - current locale code
 * @property dictionary - locatization dictionary
 */
export type StoreProviderProps = {
  children: ReactNode;
  localeCode: LocaleCode;
  dictionary: Dictionary;
};

/**
 * Type for the localization slice
 * @property locale     - current locale code
 * @property dictionary - locatization dictionary
 */
export type LocalizationState = Pick<
  StoreProviderProps,
  "localeCode" | "dictionary"
>;

/* ---------------------------------------------------- */
/* Localization related types                           */
/* ---------------------------------------------------- */

/**
 * Type for the localization dictionary
 * @property step               - step keyword
 * @property stepsList          - list of step names
 * @property navigation         - form navigation
 * @property subscription       - yearly and monthly keywords for the subscription prices
 * @property personalInfo       - PersonalInfo component dictionary
 * @property selectPlan         - SelectPlan component dictionary
 * @property subscriptionToggle - SubscriptionToggle component dictionary
 * @property pickAddOns         - PickAddOns component dictionary
 * @property pickAddOns         - ThankYou component dictionary
 */
export type Dictionary = {
  step: string;
  stepsList: {
    name: string;
  }[];
  navigation: NavigationDictionary;
  subscription: {
    yearly: SubscriptionDictionary;
    monthly: SubscriptionDictionary;
  };
  personalInfo: PersonalInfoDictionary;
  selectPlan: SelectPlanDictionary;
  subscriptionToggle: SubscriptionToggleDictionary;
  pickAddOns: PickAddOnsDictionary;
  finishSubscription: FinishSubscriptionDictionary;
  thankYou: ThankYouDictionary;
};

/**
 * Type for the form navigation
 * @property goBackBtn  - go back button description
 * @property nextStep   - next step button description
 * @property confirmBtn - confirm button description
 */
export type NavigationDictionary = {
  goBackBtn: string;
  nextStep: string;
  confirmBtn: string;
};

/**
 * Type for the form localization
 * @property titleAriaLabel - aria-label for the form title
 * @property title          - form title
 * @property description    - form description
 */
export type FormDictionary = {
  titleAriaLabel: string;
  title: string;
  description: string;
};

/**
 * Type for the subscription localization
 * @property long  - long keyword
 * @property short - short keyword
 */
export type SubscriptionDictionary = {
  long: string;
  short: string;
};

/**
 * Type for the PersonalInfo component localization
 * @property title             - form title
 * @property description       - form description
 * @property nameLabel         - name label
 * @property emailAddressLabel - email address label
 * @property phoneNumberLabel  - phone number label
 * @property errorMessages     - form error messages
 */
export type PersonalInfoDictionary = FormDictionary & {
  nameLabel: string;
  emailAddressLabel: string;
  phoneNumberLabel: string;
  errorMessages: PersonalInfoErrorMessagesDictionary;
};

/**
 * Type for the PersonalInfo component error messages localization
 * @property required     - required field error message
 * @property minLength    - name field min lenght error message
 * @property maxLength    - name field max lenght error message
 * @property invalid      - invalid name field error message
 * @property emailAddress - invalid email address field error message
 * @property phoneNumber  - invalid phone number field error message
 */
export type PersonalInfoErrorMessagesDictionary = {
  required: string;
  name: {
    minLength: string;
    maxLength: string;
    invalid: string;
  };
  emailAddress: string;
  phoneNumber: string;
};

/**
 * Type for the SelectPlan component localization
 * @property legend        - fieldset legend
 * @property discount      - discount keyword
 * @property plans         - list of plans with type and discount
 * @property errorMessages - form error messages
 */
export type SelectPlanDictionary = FormDictionary & {
  legend: string;
  discount: string;
  plans: {
    type: string;
    discount: string;
  }[];
  errorMessages: SelectPlanErrorMessagesDictionary;
};

/**
 *  Type for the SelectPlan component error messages localization
 *  @property required - required field error message
 */
export type SelectPlanErrorMessagesDictionary = {
  required: string;
};

/**
 * Type for the SubscriptionToggle component localization
 * @property monthlyText    - monthly text
 * @property toggleBtnLabel - label for the toggle button
 * @property yearlyText     - yearly text
 */
export type SubscriptionToggleDictionary = {
  monthlyText: string;
  toggleBtnLabel: string;
  yearlyText: string;
};

/**
 * Type for the PickAddOns component localization
 * @property legend        - fieldset legend
 * @property addOns        - list of add-ons with type and description
 */
export type PickAddOnsDictionary = FormDictionary & {
  legend: string;
  addOns: {
    type: string;
    description: string;
  }[];
};

/**
 * Type for the FinishSubscription component localization
 * @property changePlanLink  - change plan link
 * @property changePlanLabel - change plan link label
 * @property addOnsLabel     - list of add-ons label
 * @property total           - total text and yearly/monthly text
 */
export type FinishSubscriptionDictionary = FormDictionary & {
  changePlanLink: string;
  changePlanLabel: string;
  addOnsLabel: string;
  total: {
    text: string;
    yearly: string;
    monthly: string;
  };
};

/**
 * Type for the ThankYou component localization
 * @property title   - main title
 * @property message - thank you message
 */
export type ThankYouDictionary = {
  title: string;
  message: string;
};

/* ---------------------------------------------------- */
/* Other component related types                        */
/* ---------------------------------------------------- */

/**
 * Type for the subscription plan details
 * @property id          - plan id
 * @property type        - type of plan
 * @property monthlyPlan - monthly plan value and discont
 * @property yearlyPlan  - yearly plan value and discont
 */
export type PlanDetails = {
  id: string;
  type: string;
  monthlyPlan: PlanPricing;
  yearlyPlan: PlanPricing;
};

/**
 * Type for the subscription plan pricing
 * @property value    - plan value
 * @property discount - plan current discont
 */
export type PlanPricing = {
  value: number;
  discount?: string;
};

/**
 * Type for the add-on pricing
 * @property id           - add-on id
 * @property type         - type of add-on
 * @property monthlyPrice - monthly add-on price
 * @property yearlyPrice  - yearly add-on price
 */
export type AddOnDetails = {
  id: string;
  type: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

/**
 * Type for the locale codes
 */
export type LocaleCode = "en" | "pt";
