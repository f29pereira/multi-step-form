"use client"; // Client Component

import useFocus from "@/app/components/customHooks/useFocus";
import styles from "./FinishSubscription.module.css";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import { getPlanById } from "../../SelectPlan/SelectPlan.utils";
import { getSelectedAddOns } from "../../PickAddOns/PickAddOns.utils";
import { formarYearlyOrMonthlyPrice } from "@/app/lib/utils";
import { PlanProps } from "@/app/components/types";
import { getSubscriptionTotal } from "./FinishSubscription.utils";

/**
 * Renders the subscription confirmation screen with:
 * - Main header
 * - Form data: selected plan and add-ons list
 * - Subscription total
 */
export default function FinishSubscription() {
  // MultiStepForm context
  const { formData, goToStep } = useMultiStepForm();

  const isYearly = formData.isYearly;
  const selectedPlan = getPlanById(
    formData.selectedPlanId,
    isYearly,
  ) as PlanProps;
  const selectedAddOns = getSelectedAddOns(formData.selectedAddOns, isYearly);
  const total = getSubscriptionTotal(selectedPlan, selectedAddOns);

  // Main header Ref
  const { elementRef } = useFocus<HTMLHeadingElement>();

  return (
    <div className={"white-card-cont"}>
      <h1
        ref={elementRef}
        tabIndex={-1}
        className={styles.title}
        aria-label="Step 4 of 4, Finishing up"
      >
        Finishing up
      </h1>

      <p className="lighter-text form-description">
        Double-check everything looks OK before confirming.
      </p>

      {/*Selected user's plan and add-ons*/}
      <div className={styles.formDataCont}>
        {/*Plan type*/}
        <h2 className={styles.title}>
          {`${selectedPlan?.type} (${isYearly ? "Yearly" : "Monthly"})`}
        </h2>

        <div className="flex-space-between">
          <button
            className={`light-text ${styles.greyText} ${styles.linkBtn}`}
            onClick={() => goToStep(1)}
          >
            <span className="light-text">
              Change <span className="sr-only">Plan</span>
            </span>
          </button>

          {/*Plan price*/}
          <span className="sr-only">{`Price ${selectedPlan?.price} dollars per ${isYearly ? "year" : "month"}`}</span>

          <span className={`bold-text ${styles.planPrice}`} aria-hidden="true">
            {formarYearlyOrMonthlyPrice(isYearly, selectedPlan.price.value)}
          </span>
        </div>

        <div className={styles.flexCol}>
          <p className="sr-only">Selected Add-Ons</p>

          {/*Add-ons list*/}
          {selectedAddOns.length > 0 ? (
            <>
              <hr className={styles.divider} aria-hidden="true" />
              {selectedAddOns.map((addOn) => (
                <div
                  key={addOn?.id}
                  className={`flex-space-between ${styles.addOn}`}
                >
                  {/*Add-On type*/}
                  <span className={`lighter-text ${styles.greyText}`}>
                    {addOn.type}
                  </span>
                  {/*Add-On price*/}
                  <span
                    className={`light-text ${styles.blueText}`}
                    aria-hidden="true"
                  >
                    {`+${formarYearlyOrMonthlyPrice(isYearly, addOn.price)}`}
                  </span>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>

      {/*Subscription total*/}
      <div className={`flex-space-between ${styles.totalCont}`}>
        <span className={styles.greyText}>
          Total {`(per ${isYearly ? "year" : "month"})`}
        </span>
        <span className="sr-only">{`Plus ${12} dollars per ${isYearly ? "year" : "month"}`}</span>
        <span className={`bold-text ${styles.totalPrice}`} aria-hidden="true">
          {formarYearlyOrMonthlyPrice(isYearly, total)}
        </span>
      </div>
    </div>
  );
}
