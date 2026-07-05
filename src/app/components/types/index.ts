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
 * @property stepIndex  - number of the step
 * @property stepName   - name of the step
 * @property isSelected - is the step selected
 */
export type StepProps = {
  stepIndex: number;
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
 * @property handleOnClick - (optional) onClick function
 */
export type ButtonProps = {
  description: string;
  variant: "transparentBtn" | "blueBtn" | "purpleBtn";
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
/* Other component related types                        */
/* ---------------------------------------------------- */

/**
 * Type for the subscription plans
 */
export type PlanType = "Arcade" | "Advanced" | "Pro";

/**
 * Type for the subscription plan details
 * @property id          - plan id
 * @property type        - type of plan
 * @property monthlyPlan - monthly plan value and discont
 * @property yearlyPlan  - yearly plan value and discont
 */
export type PlanDetails = {
  id: string;
  type: PlanType;
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
 * Type for the add-ons
 */
export type AddOnType =
  | "Online service"
  | "Larger storage"
  | "Customizable profile";

/**
 * Type for the add-on pricing
 * @property id           - add-on id
 * @property type         - type of add-on
 * @property monthlyPrice - monthly add-on price
 * @property yearlyPrice  - yearly add-on price
 */
export type AddOnDetails = {
  id: string;
  type: AddOnType;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};
