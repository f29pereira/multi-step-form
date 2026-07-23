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
 * @property stepIndexDesktop - index of the step (desktop only)
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
