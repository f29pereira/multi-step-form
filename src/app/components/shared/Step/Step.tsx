import styles from "./Step.module.css";
import type { StepProps } from "../../types";

/**
 * Renders a circle with the step index
 *
 * - If the step is the current selected updates the circle style to .selected
 *
 * - For desktop screens: aditionally shows the text "STEP" plus index and name
 *
 * Props are defined in {@link StepProps}.
 */
export default function Step({ stepIndex, stepName, isSelected }: StepProps) {
  return (
    <div className={styles.circleNameCont}>
      {/*Circle*/}
      <div
        className={`flex-center ${styles.circle} ${isSelected ? styles.selected : ""}`}
      >
        <span className={`bold-text ${styles.circleIndex}`}>{stepIndex}</span>
      </div>

      {/*Index and name*/}
      <div className={styles.numberNameCont}>
        <span className={styles.stepIndex}>STEP {stepIndex}</span>
        <span className={`bold-text ${styles.stepName}`}>{stepName}</span>
      </div>
    </div>
  );
}
