"use client"; // Client Component

import styles from "./MultiStepForm.module.css";
import { useState } from "react";
import StepsList from "./StepsList/StepsList";

/**
 * Renders the multi-step user subscription form
 */
export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const stepsList = ["1", "2", "3", "4"];

  return (
    <section className={styles.sectionCont}>
      <div className={styles.stepsCont}>
        <StepsList list={stepsList} currentStepIndex={currentStep} />
      </div>

      {/*TO DO - add current form step*/}

      {/*TO DO - add steps navigation*/}
    </section>
  );
}
