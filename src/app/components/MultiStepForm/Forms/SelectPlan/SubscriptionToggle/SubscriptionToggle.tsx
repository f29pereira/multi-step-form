import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import styles from "./SubscriptionToggle.module.css";
import { useAppSelector } from "@/app/hooks";
import Toggle from "@/app/components/ui/Toggle/Toggle";

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
        <Toggle isLeftSelected={!isYearly} />
      </button>

      {/*Yearly text*/}
      <span className={`light-text ${styles.yearly}`}>
        {subsToggleDict.yearlyText}
      </span>
    </div>
  );
}
