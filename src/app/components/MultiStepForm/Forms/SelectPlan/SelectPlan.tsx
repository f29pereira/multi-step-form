"use client"; // Client Component

import styles from "./SelectPlan.module.css";
import { useState } from "react";
import { getPlansList } from "./SelectPlan.util";
import Plan from "./Plan/Plan";
import SubscriptionToggle from "./SubscriptionToggle/SubscriptionToggle";
import useFocus from "@/app/components/customHooks/useFocus";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";

/**
 * Renders the select plan form with:
 * - List of plans
 * - Subscription type toggle
 */
export default function SelectPlan() {
  /*context*/
  const { isYearly } = useMultiStepForm();

  /*state*/
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  /*ref*/
  const { elementRef } = useFocus<HTMLHeadingElement>();

  const plansList = getPlansList(isYearly);

  /**
   * Update selectedPlan state with the current selected plan
   * @param id plan id
   */
  const setCurrentPlan = (id: string) => {
    setSelectedPlan(id);
  };

  return (
    <div className="white-card-cont">
      <h1
        ref={elementRef}
        tabIndex={-1}
        className={styles.title}
        aria-label="Step 2 of 4, Select your plan"
      >
        Select your plan
      </h1>

      <p className="lighter-text form-description">
        You have the option of monthly or yearly billing.
      </p>

      <form action="">
        <fieldset>
          <legend className="sr-only">Select your plan</legend>

          {/*List of plans*/}
          <div className={styles.plansListCont}>
            {plansList.map((plan) => (
              <Plan
                key={plan.id}
                id={plan.id}
                type={plan.type}
                price={plan.price}
                selectedPlan={selectedPlan}
                setCurrentPlan={setCurrentPlan}
              />
            ))}
          </div>
        </fieldset>
      </form>

      {/*Subscription type toggle*/}
      <div className={styles.subsToggleCont}>
        <SubscriptionToggle />
      </div>
    </div>
  );
}
