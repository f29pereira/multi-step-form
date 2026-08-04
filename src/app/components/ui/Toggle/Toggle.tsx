import styles from "./Toggle.module.css";
import type { ToggleProps } from "../../types";

/**
 * Renders a circle indicating the currently selected left or right side
 *
 * Props are defined in {@link ToggleProps}.
 */
export default function Toggle({ isLeftSelected }: ToggleProps) {
  return (
    <div className={styles.mainCont}>
      {isLeftSelected ? (
        <div className={styles.leftSelected}>
          <div className={styles.circle}></div>
        </div>
      ) : (
        <div className={styles.rightSelected}>
          <div className={styles.circle}></div>
        </div>
      )}
    </div>
  );
}
