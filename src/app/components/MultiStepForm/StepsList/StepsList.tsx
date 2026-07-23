import styles from "./StepsList.module.css";
import type { StepsListProps } from "../../types";
import Step from "./Step/Step";
import { useAppSelector } from "@/app/hooks";

/**
 * Renders the list of steps for the multi-step form
 *
 * Props are defined in {@link StepsListProps}.
 */
export default function StepsList({ list, currentStepIndex }: StepsListProps) {
  // Localization reducer
  const dictionary = useAppSelector((state) => state.localization.dictionary);

  /**
   * Returns the desktop only step index
   * @param stepIndex - step index
   */
  const getDesktopIndex = (stepIndex: number) => {
    const step = dictionary.step.toUpperCase();

    return `${step} ${stepIndex + 1}`;
  };

  return (
    <div
      className={styles.listCont}
      aria-hidden="true"
      data-testid="steps-list"
    >
      {list.map((step, index) => (
        <Step
          key={index}
          stepIndex={index + 1}
          stepIndexDesktop={getDesktopIndex(index)}
          stepName={dictionary.stepsList[index].name}
          isSelected={currentStepIndex === index}
        />
      ))}
    </div>
  );
}
