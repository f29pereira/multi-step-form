import { ReactNode, Dispatch, SetStateAction } from "react";

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
 * @property formId        - (optional) associated form id
 * @property description   - button description
 * @property variant       - button color variant
 * @property handleOnClick - (optional) onClick function
 */
export type ButtonProps = {
  formId?: string;
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

/**
 * Props for the AddOn component
 * @property id        - add-on id
 * @property type      - type of add-on
 * @property price     - add-on price
 * @property toggle    - toggles the add-on id in the pickedAddOns state
 * @property isChecked - is the checkbox checked
 */
export type AddOnProps = Pick<AddOnDetails, "id" | "type" | "description"> & {
  price: number;
  toggle: (id: string) => void;
  isChecked: boolean;
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
 * @property formData            - state: multi-step form data and
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

/**
 * Type for the multi-step form data
 * @property isYearly - is a yearly subscription
 */
export type FormData = {
  isYearly: boolean;
  /*TO DO: Add form data for the steps: PersonalInfo, SelectPlan and PickAddOns*/
};
