"use client"; // Client Component

import { createContext, useState } from "react";
import type {
  ReactChildrenType,
  MultiStepFormContextType,
  FormData,
} from "../types";
import { PLANS_LIST } from "../MultiStepForm/Forms/SelectPlan/SelectPlan.utils";
import { getPlanById } from "../MultiStepForm/Forms/SelectPlan/SelectPlan.utils";

export const MultiStepFormContext = createContext<
  MultiStepFormContextType | undefined
>(undefined);

/**
 * Provides the context to be able to toggle the subscription type
 */
export default function MultiStepFormProvider({ children }: ReactChildrenType) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const [formData, setFormData] = useState<FormData>({
    isYearly: true,
    personalInfo: { name: "", email: "", phone: "" },
    selectedPlanId: "",
    selectedAddOns: [],
  });

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  /**
   * Goes to the next form step
   */
  const goToNextStep = () => {
    setCurrentStepIndex((prev) => prev + 1);
  };

  /**
   * Goes back to the previous form step and, if the subscription is confirmed, cancells it
   */
  const goToPrevStep = () => {
    if (isConfirmed) {
      setIsConfirmed(false);
    }

    setCurrentStepIndex((prev) => prev - 1);
  };

  /**
   * Goes to a form step for a given index
   */
  const goToStep = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex);
  };

  /**
   * Toogles between monthly or yearly subscripton
   */
  const toggle = () => {
    setFormData((prev) => ({ ...prev, isYearly: !prev.isYearly }));
  };

  /**
   * Confirms the user's subscription
   */
  const confirmSubscription = () => {
    const plan = getPlanById(
      PLANS_LIST,
      formData.selectedPlanId,
      formData.isYearly,
    );

    if (plan) {
      setIsConfirmed(true);
    }
  };

  return (
    <MultiStepFormContext
      value={{
        currentStepIndex: currentStepIndex,
        goToNextStep: goToNextStep,
        goToPrevStep: goToPrevStep,
        goToStep: goToStep,
        toggleSubscription: toggle,
        formData: formData,
        setFormData: setFormData,
        isConfirmed: isConfirmed,
        confirmSubscription: confirmSubscription,
      }}
    >
      {children}
    </MultiStepFormContext>
  );
}
