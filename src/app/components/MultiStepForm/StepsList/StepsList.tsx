import styles from "./StepsList.module.css";
import type { StepsListProps } from "../../types";
import Step from "../../shared/Step/Step";

/**
 * Renders the list of steps for the multi-step form
 *
 * Props are defined in {@link StepsListProps}.
 */
export default function StepsList({ list, currentStepIndex }: StepsListProps) {
  return (
    <div className={styles.listCont} aria-hidden="true">
      {list.map((step, index) => (
        <Step
          key={index}
          stepIndex={index + 1}
          stepName={step}
          isSelected={currentStepIndex === index}
        />
      ))}
    </div>
  );
}
