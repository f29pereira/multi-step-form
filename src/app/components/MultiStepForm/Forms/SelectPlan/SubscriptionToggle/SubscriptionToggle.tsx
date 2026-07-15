import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import styles from "./SubscriptionToggle.module.css";

/**
 * Renders the monthly/yearly subscription toggle
 */
export default function SubscriptionToggle() {
  const { formData, toggleSubscription } = useMultiStepForm();
  const isYearly = formData.isYearly;

  return (
    <div className={`flex-center ${styles.mainCont}`}>
      <span className={`light-text ${styles.monthly}`}>Monthly</span>
      {/*Toggle Button*/}
      <button
        className={styles.toggleBtn}
        onClick={toggleSubscription}
        onMouseDown={(e) => e.preventDefault()}
        aria-label={`Monthly/Yearly toggle current selected: ${isYearly ? "Yearly" : "Monthly"}`}
      >
        {isYearly ? (
          <div className={styles.yearlySelected}>
            <div className={styles.circle}></div>
          </div>
        ) : (
          <div className={styles.monthlySelected}>
            <div className={styles.circle}></div>
          </div>
        )}
      </button>
      <span className={`light-text ${styles.yearly}`}>Yearly</span>
    </div>
  );
}
