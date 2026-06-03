import styles from "./StepsList.module.css";
import type { StepsListProps } from "../../types";
import Step from "../../shared/Step/Step";

/**
 * Renders the list of steps for the multi-step form
 */
export default function StepsList({ list, currentStepIndex }: StepsListProps) {
  return (
    <div className={styles.listCont}>
      {/*TO DO: Update stepName prop*/}
      {list.map((step, index) => (
        <Step
          key={index}
          stepIndex={index + 1}
          stepName="Test"
          isSelected={currentStepIndex === index}
        />
      ))}
    </div>
  );
}
