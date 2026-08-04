"use client"; // Client Component

import styles from "./Plan.module.css";
import clsx from "clsx";
import type { PlanProps } from "@/app/components/types";
import { getPlanIcon } from "./Plan.util";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import { useFormContext } from "react-hook-form";
import { useAppSelector } from "@/app/hooks";
import { getFormattedPriceWithLabel } from "@/app/lib/utils";

/**
 * Renders a subscription plan with:
 * - Plan Icon
 * - Plan type
 * - Price (monthly or yearly value)
 * - Discount if applicable
 */
export default function Plan({ id, type, price, isInvalid }: PlanProps) {
  // Localization reducer
  const localeCode = useAppSelector((state) => state.localization.localeCode);
  const dictionary = useAppSelector((state) => state.localization.dictionary);
  const selectPlanDict = dictionary.selectPlan;

  // MultiStepForm context
  const { formData } = useMultiStepForm();

  const isYearly = formData.isYearly;

  // React Hook Form: context
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedPlanId = watch("selectedPlanId");
  const isSelected = id === selectedPlanId;

  // Data
  const icon = getPlanIcon(id);
  const formattedPrice = getFormattedPriceWithLabel(
    isYearly,
    price.value,
    localeCode,
    dictionary,
  );

  return (
    <label
      className={clsx(styles.planCont, {
        [styles.selected]: isSelected,
        [styles.errorInput]: isInvalid,
      })}
      data-testid="plan-label"
    >
      <input
        data-testid="plan-radio-input"
        className="sr-only"
        type="radio"
        value={id}
        {...register("selectedPlanId", {
          required: selectPlanDict.errorMessages.required,
        })}
      />

      {/*Plan Icon*/}
      <div>{icon}</div>

      <div className={styles.contentCont}>
        {/*Plan type*/}
        <span className={`bold-text ${styles.type}`}>{type}</span>

        {/*Price (monthly or yearly value)*/}
        <span className="sr-only">{formattedPrice.ariaLabel}</span>

        <span className={`light-text ${styles.value}`} aria-hidden="true">
          {formattedPrice.price}
        </span>

        {/*Discount*/}
        <span className="sr-only">{selectPlanDict.discount}</span>
        <span
          className={`lighter-text ${styles.discount}`}
          data-testid="plan-discount"
        >
          {price.discount}
        </span>
      </div>
    </label>
  );
}
