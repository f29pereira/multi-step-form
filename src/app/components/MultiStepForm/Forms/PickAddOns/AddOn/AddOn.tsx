"use client"; // Client Component

import styles from "./AddOn.module.css";
import clsx from "clsx";
import type { AddOnProps } from "@/app/components/types";
import { formatYearlyOrMonthlyPrice } from "@/app/lib/utils";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import { useFormContext } from "react-hook-form";

/**
 * Renders a add-on with:
 * - Checkbox input
 * - Add-on type
 * - Add-on description
 * - Price (monthly or yearly value)
 */
export default function AddOn({ id, type, description, price }: AddOnProps) {
  // MultiStepForm context
  const { formData } = useMultiStepForm();
  const isYearly = formData.isYearly;

  // React Hook Form: context
  const { register, watch } = useFormContext();

  const selectedIds: string[] = watch("selectedAddOns");
  const isSelected = selectedIds.includes(id);

  return (
    <label
      htmlFor={`add-on-${id}`}
      className={clsx(styles.addOnCont, {
        [styles.selected]: isSelected,
      })}
    >
      <div className={styles.flexCenter}>
        <div className={styles.checkboxWrapper}>
          {/*Checkbox*/}
          <input
            data-testid="add-on-input"
            type="checkbox"
            id={`add-on-${id}`}
            value={id}
            className={`${styles.checkbox}`}
            {...register("selectedAddOns")}
          />

          {/*Checkmark*/}
          {isSelected ? (
            <span className={`flex-center ${styles.checkmark}`}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 9"
                aria-hidden="true"
              >
                <path d="m1 4 3.433 3.433L10.866 1" />
              </svg>
            </span>
          ) : null}
        </div>

        <div className={styles.typeDescCont}>
          {/*Type*/}
          <span className={`bold-text ${styles.type}`}>{type}</span>

          {/*Description*/}
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      {/*Price (monthly or yearly value)*/}
      <span className="sr-only">{`Plus ${price} dollars per ${isYearly ? "year" : "month"}`}</span>
      <span className={`lighter-text ${styles.price}`}>
        {`+${formatYearlyOrMonthlyPrice(isYearly, price)}`}
      </span>
    </label>
  );
}
