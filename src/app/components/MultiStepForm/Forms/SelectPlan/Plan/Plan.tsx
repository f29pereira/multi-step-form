"use client"; // Client Component
import styles from "./Plan.module.css";
import type { PlanProps } from "@/app/components/types";
import { getPlanIcon, formatPlanPrice } from "./Plan.util";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";

/**
 * Renders a subscription plan with:
 * - Plan Icon
 * - Plan type
 * - Price (monthly or yearly value)
 * - Discount if applicable
 */
export default function Plan({
  id,
  type,
  price,
  selectedPlan,
  setCurrentPlan,
}: PlanProps) {
  const { isYearly } = useMultiStepForm();

  const icon = getPlanIcon(type);

  return (
    <label
      className={`${styles.planCont} ${selectedPlan === id ? styles.selected : ""}`}
    >
      <input
        className="sr-only"
        type="radio"
        name="plan"
        onChange={() => {
          setCurrentPlan(id);
        }}
        checked={selectedPlan === id}
      />

      {/*Plan Icon*/}
      <div>{icon}</div>

      <div className={styles.contentCont}>
        {/*Plan type*/}
        <span className={`bold-text ${styles.type}`}>{type}</span>

        {/*Price (monthly or yearly value)*/}
        <span className="sr-only">{`Price ${price.value} dollars per ${isYearly ? "year" : "month"}`}</span>

        <span className={`light-text ${styles.value}`} aria-hidden="true">
          {formatPlanPrice(isYearly, price.value)}
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
