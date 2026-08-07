// Localization related types

/**
 * Type for the locale codes
 */
export type LocaleCode = "en" | "pt";

/**
 * Type for the localization dictionary
 * @propery  themeSwitch        - ThemeSwitch component dictionary
 * @propery  languageSwitch     - language switch button accessible text
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
  themeSwitch: ThemeSwitchDictionary;
  languageSwitch: string;
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
 * Type for the ThemeSwitch component localization
 * @property light        - light keyword
 * @property dark         - dark keyword
 * @property btnAriaLabel - theme switch button aria label
 */
export type ThemeSwitchDictionary = {
  light: string;
  dark: string;
  btnAriaLabel: string;
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
