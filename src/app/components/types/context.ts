// Context Provider related types

import { ReactNode, Dispatch, SetStateAction } from "react";

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
