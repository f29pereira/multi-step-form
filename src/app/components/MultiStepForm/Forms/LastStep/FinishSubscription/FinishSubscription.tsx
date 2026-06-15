"use client"; // Client Component

import useFocus from "@/app/components/customHooks/useFocus";
import styles from "./FinishSubscription.module.css";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";

/**
 * Renders the subscription confirmation screen with:
 * - Form data: selected plan and add-ons list
 * - Subscription total
 */
export default function FinishSubscription() {
  const { elementRef } = useFocus<HTMLHeadingElement>();

  const { isYearly, goToStep } = useMultiStepForm();

  /*TO DO: get form data from context*/

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

      {/*Form data*/}
      <div className={styles.formDataCont}>
        {/*Selected plan*/}
        {/*TO DO: get plan type from context*/}
        <h2 className={styles.title}>
          Plan name{`(${isYearly ? "Yearly" : "Monthly"})`}
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
          <span className="sr-only">{`Price ${0} dollars per ${isYearly ? "year" : "month"}`}</span>

          {/*TO DO: get plan price from context*/}
          <span
            className={`bold-text ${styles.planPrice}`}
            aria-hidden="true"
          ></span>
        </div>

        <hr className={styles.divider} aria-hidden="true" />

        {/*Selected add-ons*/}
        <div className={styles.flexCol}>
          <p className="sr-only">Selected Add-Ons</p>
          {/*TO DO: map the add-ons list data from context*/}
          <div className={`flex-space-between ${styles.addOn}`}>
            <span className={`lighter-text ${styles.greyText}`}>
              Add-on name
            </span>
            <span className="sr-only">{`Plus ${0} dollars per ${isYearly ? "year" : "month"}`}</span>
            <span
              className={`light-text ${styles.blueText}`}
              aria-hidden="true"
            >
              Add-on price
            </span>
          </div>
        </div>
      </div>

      {/*Subscription total*/}
      <div className={`flex-space-between ${styles.totalCont}`}>
        <span className={styles.greyText}>
          Total {`(per ${isYearly ? "year" : "month"})`}
        </span>
        <span className="sr-only">{`Plus ${12} dollars per ${isYearly ? "year" : "month"}`}</span>
        {/*TO DO: get total from context*/}
        <span className={`bold-text ${styles.totalPrice}`} aria-hidden="true">
          Total price
        </span>
      </div>
    </div>
  );
}
