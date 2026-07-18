"use client"; // Client Component

import useFocus from "@/app/components/customHooks/useFocus";
import styles from "./FinishSubscription.module.css";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import {
  getPlanById,
  getPlansWithLocalization,
} from "../../SelectPlan/SelectPlan.utils";
import {
  getAddOnsWithLocalization,
  getSelectedAddOns,
} from "../../PickAddOns/PickAddOns.utils";
import {
  getFormattedPrice,
  getFormattedLabelPrice,
  formatCurrencyAsFullName,
} from "@/app/lib/utils";
import { PlanProps } from "@/app/components/types";
import { getSubscriptionTotal } from "./FinishSubscription.utils";
import { useAppSelector } from "@/app/hooks";

/**
 * Renders the subscription confirmation screen with:
 * - Main header
 * - Description
 * - Change plan button
 * - Form data: selected plan and add-ons list
 * - Subscription total
 */
export default function FinishSubscription() {
  // Localization reducer
  const localeCode = useAppSelector((state) => state.localization.localeCode);
  const dictionary = useAppSelector((state) => state.localization.dictionary);
  const pickAddOnsDict = dictionary.pickAddOns;
  const selectPlanDict = dictionary.selectPlan;
  const subscriptionToggle = dictionary.subscriptionToggle;
  const finishingUpDict = dictionary.finishSubscription;

  // MultiStepForm context
  const { formData, goToStep } = useMultiStepForm();
  const isYearly = formData.isYearly;

  // Main header Ref
  const { elementRef } = useFocus<HTMLHeadingElement>();

  // Data
  const selectedPlan = getPlanById(
    getPlansWithLocalization(selectPlanDict),
    formData.selectedPlanId,
    isYearly,
  ) as PlanProps;
  const addOnsList = getAddOnsWithLocalization(pickAddOnsDict);
  const selectedAddOns = getSelectedAddOns(
    addOnsList,
    formData.selectedAddOns,
    isYearly,
  );
  const total = getSubscriptionTotal(selectedPlan, selectedAddOns);

  return (
    <div className={"white-card-cont"}>
      {/*Main header*/}
      <h1
        ref={elementRef}
        tabIndex={-1}
        className={styles.title}
        aria-label={finishingUpDict.titleAriaLabel}
      >
        {finishingUpDict.title}
      </h1>

      {/*Form description*/}
      <p className="lighter-text form-description">
        {finishingUpDict.description}
      </p>

      {/*Selected user's plan and add-ons*/}
      <div className={styles.formDataCont}>
        {/*Plan type*/}
        <h2 className={styles.title}>
          {`${selectedPlan?.type} (${isYearly ? subscriptionToggle.yearlyText : subscriptionToggle.monthlyText})`}
        </h2>

        <div className="flex-space-between">
          <button
            className={`light-text ${styles.greyText} ${styles.linkBtn}`}
            onClick={() => goToStep(1)}
          >
            <span className="light-text">
              {finishingUpDict.changePlanLink}{" "}
              <span className="sr-only">{finishingUpDict.changePlanLabel}</span>
            </span>
          </button>

          {/*Plan price*/}
          <span className="sr-only">
            {getFormattedLabelPrice(
              isYearly,
              selectedPlan.price.value,
              localeCode,
              dictionary,
            )}
          </span>

          <span
            className={`bold-text ${styles.planPrice}`}
            aria-hidden="true"
            data-testid="plan-price"
          >
            {getFormattedPrice(
              isYearly,
              selectedPlan.price.value,
              localeCode,
              dictionary,
            )}
          </span>
        </div>

        <div className={styles.flexCol}>
          <p className="sr-only">{finishingUpDict.addOnsLabel}</p>

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
                  <span
                    className={`lighter-text ${styles.greyText}`}
                    data-testid="add-on-type"
                  >
                    {addOn.type}
                  </span>
                  {/*Add-On price*/}
                  <span
                    className={`light-text ${styles.blueText}`}
                    aria-hidden="true"
                    data-testid="add-on-price"
                  >
                    {`+${getFormattedPrice(
                      isYearly,
                      addOn.price,
                      localeCode,
                      dictionary,
                    )}`}
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
          {finishingUpDict.total.text}{" "}
          {`(${
            isYearly
              ? finishingUpDict.total.yearly
              : finishingUpDict.total.monthly
          })`}
        </span>
        <span className="sr-only">
          {formatCurrencyAsFullName(localeCode, total)}
        </span>
        <span
          className={`bold-text ${styles.totalPrice}`}
          aria-hidden="true"
          data-testid="total"
        >
          {getFormattedPrice(isYearly, total, localeCode, dictionary)}
        </span>
      </div>
    </div>
  );
}
