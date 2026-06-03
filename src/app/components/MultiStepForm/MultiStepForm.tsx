"use client"; // Client Component

import styles from "./MultiStepForm.module.css";
import { useState } from "react";
import StepsList from "./StepsList/StepsList";
import Button from "../ui/Button/Button";

/**
 * Renders the multi-step user subscription form with:
 * - Steps List
 * - Current form
 * - Go Back and Next or Confirm buttons
 */
export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const stepsList = ["1", "2", "3", "4"];

  /**
   * Goes to the next form step
   */
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  /**
   * Goes back to the previous form step
   */
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <section className={styles.sectionCont}>
      <div className={styles.stepsCont}>
        <StepsList list={stepsList} currentStepIndex={currentStep} />
      </div>

      <div>
        {/*TO DO - add current form step*/}

        {/*Navigation buttons*/}
        <div className={styles.navigationCont}>
          {currentStep > 0 ? (
            <Button
              description="Go Back"
              variant="transparentBtn"
              handleOnClick={prevStep}
            />
          ) : null}

          <div className={styles.nextConfirmBtnCont}>
            {currentStep === 3 ? (
              <Button description="Confirm" variant="purpleBtn" />
            ) : (
              <Button
                description="Next Step"
                variant="blueBtn"
                handleOnClick={nextStep}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
