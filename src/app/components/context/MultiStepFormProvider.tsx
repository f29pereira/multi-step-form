"use client"; // Client Component
import { createContext, useState } from "react";
import type { ReactChildrenType, MultiStepFormContextType } from "../types";

export const MultiStepFormContext = createContext<
  MultiStepFormContextType | undefined
>(undefined);

/**
 * Provides the context to be able to toggle the subscription type
 */
export default function MultiStepFormProvider({ children }: ReactChildrenType) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const [isYearly, setIsYearly] = useState<boolean>(true);

  /*TO DO: Add formData state*/

  /**
   * Goes to the next form step
   */
  const goToNextStep = () => {
    setCurrentStepIndex((prev) => prev + 1);
  };

  /**
   * Goes back to the previous form step
   */
  const goToPrevStep = () => {
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
    setIsYearly((prev) => !prev);
  };

  return (
    <MultiStepFormContext
      value={{
        currentStepIndex: currentStepIndex,
        goToNextStep: goToNextStep,
        goToPrevStep: goToPrevStep,
        goToStep: goToStep,
        isYearly: isYearly,
        toggleSubscription: toggle,
      }}
    >
      {children}
    </MultiStepFormContext>
  );
}
