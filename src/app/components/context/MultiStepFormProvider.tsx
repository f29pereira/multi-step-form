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
  const [isYearly, setIsYearly] = useState<boolean>(true);

  /*TO DO: Add formData state*/

  /**
   * Toogles between monthly or yearly subscripton
   */
  const toggle = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <MultiStepFormContext
      value={{ isYearly: isYearly, toggleSubscription: toggle }}
    >
      {children}
    </MultiStepFormContext>
  );
}
