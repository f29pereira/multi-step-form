import { ReactNode } from "react";

/* ---------------------------------------------------- */
/* Components Props types                               */
/* ---------------------------------------------------- */

/**
 * Props for the Circle component
 * @property stepIndex  - number of the step
 * @property stepName   - name of the step
 * @property isSelected - is the step selected
 */
export type StepProps = {
  stepIndex: number;
  stepName: string;
  isSelected: boolean;
};

/**
 * Props for the StepsList component
 * @property list             - list of steps
 * @property currentStepIndex - step index
 * @property stepName         - name of the step
 */
export type StepsListProps = {
  list: Array<string>;
  currentStepIndex: number;
};

/**
 * Props for the Button component
 * @property description   - button description
 * @property variant       - button color variant
 * @property handleOnClick - button onClick function
 */
export type ButtonProps = {
  description: string;
  variant: "transparentBtn" | "blueBtn" | "purpleBtn";
  handleOnClick?: () => void;
};
