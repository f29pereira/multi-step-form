import { MultiStepFormContext } from "../context/MultiStepFormProvider";
import { useContext } from "react";

/**
 * Custom Hook: allows access to the MultiStepFormContext
 */
export function useMultiStepForm() {
  const context = useContext(MultiStepFormContext);

  if (!context) {
    throw new Error(
      "useMultiStepForm must be used inside a MultiStepFormProvider",
    );
  }

  return context;
}
