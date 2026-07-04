"use client"; // Client Component

import type { FormStepProps } from "@/app/components/types";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import ThankYou from "./ThankYou/ThankYou";
import FinishSubscription from "./FinishSubscription/FinishSubscription";

/**
 * Renders the ThankYou component if the user's subscription is confirmed or the FinishSubscription component
 *
 * Props are defined in {@link FormStepProps}.
 */
export default function LastStep({ formRef }: FormStepProps) {
  const { isConfirmed } = useMultiStepForm();

  return <>{isConfirmed ? <ThankYou /> : <FinishSubscription />}</>;
}
