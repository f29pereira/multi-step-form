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
 * @property id              - plan id
 * @property type            - type of plan
 * @property price           - plan price
 * @property selectedId      - current selected plan id
 * @property setCurrentPlan  - updates the current selected plan
 */
export type PlanProps = Pick<PlanDetails, "id" | "type"> & {
  price: PlanPricing;
  selectedPlan: string;
  setCurrentPlan: (id: string) => void;
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
