import styles from "./Step.module.css";
import type { StepProps } from "../../../types";

/**
 * Renders a circle with the step index
 *
 * - If the step is the current selected updates the circle style to .selected
 *
 * - For desktop screens: aditionally shows the text "STEP" plus index and name
 *
 * Props are defined in {@link StepProps}.
 */
export default function Step({
  stepIndex,
  stepIndexDesktop,
  stepName,
  isSelected,
}: StepProps) {
  return (
    <div className={styles.circleNameCont} data-testid="step">
      {/*Circle*/}
      <div
        className={`flex-center ${styles.circle} ${isSelected ? styles.selected : ""}`}
        data-testid="step-circle"
      >
        <span
          className={`bold-text ${styles.circleIndex}`}
          data-testid="mobile-step-index"
        >
          {stepIndex}
        </span>
      </div>

      {/*Index and name*/}
      <div className={styles.numberNameCont}>
        <span className={`lighter-text ${styles.stepIndex}`}>
          {stepIndexDesktop}
        </span>
        <span className={`bold-text ${styles.stepName}`}>{stepName}</span>
      </div>
    </div>
  );
}
