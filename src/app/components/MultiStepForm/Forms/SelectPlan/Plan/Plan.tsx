import styles from "./Plan.module.css";
import type { PlanProps } from "@/app/components/types";
import { getPlanIcon } from "./Plan.util";

/**
 * Renders a subscription plan with:
 * - Icon
 * - Plan type
 * - Price (monthly or yearly value)
 * - Discount if applicable
 */
export default function Plan({ type, price }: PlanProps) {
  const icon = getPlanIcon(type);

  return (
    <button className={styles.btn}>
      {/*Icon*/}
      <div>{icon}</div>

      <div className={styles.contentCont}>
        {/*Plan type*/}
        <span className={`bold-text ${styles.type}`}>{type}</span>

        {/*Price (monthly or yearly value)*/}
        <span className={`light-text ${styles.value}`}>{price.value}</span>

        {/*Discount*/}
        <span className={`lighter-text ${styles.discount}`}>
          {price.discount}
        </span>
      </div>
    </button>
  );
}
