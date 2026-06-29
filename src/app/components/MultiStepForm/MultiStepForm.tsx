"use client"; // Client Component

import styles from "./MultiStepForm.module.css";
import { useRef } from "react";
import StepsList from "./StepsList/StepsList";
import PersonalInfo from "./Forms/PersonalInfo/PersonalInfo";
import SelectPlan from "./Forms/SelectPlan/SelectPlan";
import PickAddOns from "./Forms/PickAddOns/PickAddOns";
import LastStep from "./Forms/LastStep/LastStep";
import Button from "../ui/Button/Button";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";

/**
 * Renders the multi-step user subscription form with:
 * - Steps List
 * - Current form
 * - Go Back and Next or Confirm buttons
 */
export default function MultiStepForm() {
  // MultiStepForm context
  const { currentStepIndex, goToPrevStep, isConfirmed, confirmSubscription } =
    useMultiStepForm();

  const stepsList = ["Your Info", "Select plan", "Add-ons", "Summary"];
  const formsList = [PersonalInfo, SelectPlan, PickAddOns, LastStep];
  const CurrentStep = formsList[currentStepIndex];

  // Current form ref
  const currentFormRef = useRef<HTMLFormElement>(null);

  /**
   * Submits the current form step
   */
  const submitForm = () => {
    currentFormRef.current?.requestSubmit();
  };

  return (
    <section className={styles.sectionCont}>
      <div className={styles.stepsCont}>
        <StepsList list={stepsList} currentStepIndex={currentStepIndex} />
      </div>

      <div className={styles.contentCont}>
        <div className={styles.formStepCont}>
          <CurrentStep formRef={currentFormRef} />
        </div>

        {!isConfirmed ? (
          /*Navigation buttons*/
          <div className={styles.navigationCont}>
            <div className={styles.buttonsCont}>
              {currentStepIndex > 0 ? (
                <Button
                  description="Go Back"
                  variant="transparentBtn"
                  handleOnClick={goToPrevStep}
                />
              ) : null}

              <div className={styles.nextConfirmBtnCont}>
                {currentStepIndex === stepsList.length - 1 ? (
                  <Button
                    description="Confirm"
                    variant="purpleBtn"
                    handleOnClick={confirmSubscription}
                  />
                ) : (
                  <Button
                    description="Next Step"
                    variant="blueBtn"
                    handleOnClick={() => {
                      submitForm();
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
