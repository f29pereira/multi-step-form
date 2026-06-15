"use client"; // Client Component

import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import ThankYou from "./ThankYou/ThankYou";
import FinishSubscription from "./FinishSubscription/FinishSubscription";

/**
 * Renders the ThankYou component if the user's subscription is confirmed or the FinishSubscription component
 */
export default function LastStep() {
  const { isConfirmed } = useMultiStepForm();

  return <>{isConfirmed ? <ThankYou /> : <FinishSubscription />}</>;
}
