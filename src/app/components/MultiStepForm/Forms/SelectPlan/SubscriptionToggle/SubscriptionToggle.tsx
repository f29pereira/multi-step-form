import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import styles from "./SubscriptionToggle.module.css";
import { useAppSelector } from "@/app/hooks";

/**
 * Renders the monthly/yearly subscription toggle
 */
export default function SubscriptionToggle() {
  // Localization reducer
  const dictionary = useAppSelector((state) => state.localization.dictionary);
  const subsToggleDict = dictionary.subscriptionToggle;

  // MultiStepForm context
  const { formData, toggleSubscription } = useMultiStepForm();
  const isYearly = formData.isYearly;

  return (
    <div className={`flex-center ${styles.mainCont}`}>
      {/*Monthly text*/}
      <span className={`light-text ${styles.monthly}`}>
        {subsToggleDict.monthlyText}
      </span>

      {/*Toggle Button*/}
      <button
        className={styles.toggleBtn}
        onClick={toggleSubscription}
        onMouseDown={(e) => e.preventDefault()}
        aria-label={`${subsToggleDict.toggleBtnLabel} ${
          isYearly ? subsToggleDict.yearlyText : subsToggleDict.monthlyText
        }`}
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

      {/*Yearly text*/}
      <span className={`light-text ${styles.yearly}`}>
        {subsToggleDict.yearlyText}
      </span>
    </div>
  );
}
