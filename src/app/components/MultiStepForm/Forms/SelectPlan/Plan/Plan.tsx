"use client"; // Client Component

import styles from "./Plan.module.css";
import clsx from "clsx";
import type { PlanProps } from "@/app/components/types";
import { getPlanIcon } from "./Plan.util";
import { formarYearlyOrMonthlyPrice } from "@/app/lib/utils";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import { useFormContext } from "react-hook-form";

/**
 * Renders a subscription plan with:
 * - Plan Icon
 * - Plan type
 * - Price (monthly or yearly value)
 * - Discount if applicable
 */
export default function Plan({ id, type, price, isInvalid }: PlanProps) {
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
  const icon = getPlanIcon(type);

  return (
    <label
      className={clsx(styles.planCont, {
        [styles.selected]: isSelected,
        [styles.errorInput]: isInvalid,
      })}
    >
      <input
        className="sr-only"
        type="radio"
        value={id}
        {...register("selectedPlanId", {
          required: "Select a plan to continue",
        })}
      />

      {/*Plan Icon*/}
      <div>{icon}</div>

      <div className={styles.contentCont}>
        {/*Plan type*/}
        <span className={`bold-text ${styles.type}`}>{type}</span>

        {/*Price (monthly or yearly value)*/}
        <span className="sr-only">{`Price ${price.value} dollars per ${isYearly ? "year" : "month"}`}</span>

        <span className={`light-text ${styles.value}`} aria-hidden="true">
          {formarYearlyOrMonthlyPrice(isYearly, price.value)}
        </span>

        {/*Discount*/}
        <span className="sr-only">Discount</span>
        <span className={`lighter-text ${styles.discount}`}>
          {price.discount}
        </span>
      </div>
    </label>
  );
}
