"use client"; // Client Component

import styles from "./MultiStepForm.module.css";
import { useState } from "react";
import StepsList from "./StepsList/StepsList";
import PersonalInfo from "./Forms/PersonalInfo/PersonalInfo";
import Button from "../ui/Button/Button";

/**
 * Renders the multi-step user subscription form with:
 * - Steps List
 * - Current form
 * - Go Back and Next or Confirm buttons
 */
export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  /*TO DO: Add formData state*/

  const stepsList = [
    "Personal Info",
    "Select your plan",
    "Pick add-ons",
    "Finishing Up",
  ];

  /*TO DO: Add other form components*/
  const formsList = [PersonalInfo];
  const CurrentStep = formsList[currentStep];

  /**
   * Goes to the next form step
   */
  const nextStep = () => {
    /*TO DO: Add form fields validation*/
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

      <div className={styles.contentCont}>
        <div className={styles.formStepCont}>
          <CurrentStep />
        </div>

        {/*Navigation buttons*/}
        <div className={styles.navigationCont}>
          <div className={styles.buttonsCont}>
            {currentStep > 0 ? (
              <Button
                description="Go Back"
                variant="transparentBtn"
                handleOnClick={prevStep}
              />
            ) : null}

            <div className={styles.nextConfirmBtnCont}>
              {currentStep === stepsList.length - 1 ? (
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
      </div>
    </section>
  );
}
