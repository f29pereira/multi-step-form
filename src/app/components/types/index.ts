import { ReactNode } from "react";

/* ---------------------------------------------------- */
/* Components Props types                               */
/* ---------------------------------------------------- */

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
 * @property stepName         - name of the step
 */
export type StepsListProps = {
  list: Array<string>;
  currentStepIndex: number;
};

/**
 * Props for the Button component
 * @property description   - button description
 * @property variant       - button color variant
 * @property handleOnClick - button onClick function
 */
export type ButtonProps = {
  description: string;
  variant: "transparentBtn" | "blueBtn" | "purpleBtn";
  handleOnClick?: () => void;
};

/**
 * Props for the Plan component
 * @property type  - type of plan
 * @property price - plan price
 */
export type PlanProps = {
  type: PlanType;
  price: PlanPricing;
};

/**
 * Props for the SubscriptionToggle component
 * @property isYearly - is the a yearly subscription
 * @property toggle   - toggle between yearly and monthly subscription
 */
// TO DO - remove after context implementation
export type SubscriptionToggleProps = {
  isYearly: boolean;
  toggle: () => void;
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
 * @property isYearly           - is a yearly subscription
 * @property toggleSubscription - toggle between yearly and monthly subscription
 */
export type MultiStepFormContextType = {
  isYearly: boolean;
  toggleSubscription: () => void;
  /*TO DO: Add form data*/
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
 * @property type        - type of plan
 * @property monthlyPlan - monthly plan value and discont
 * @property yearlyPlan  - yearly plan value and discont
 */
export type PlanDetails = {
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
  value: string;
  discount?: string;
};
