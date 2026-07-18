"use client"; // Client Component

import styles from "./MultiStepForm.module.css";
import { useRef } from "react";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import StepsList from "./StepsList/StepsList";
import PersonalInfo from "./Forms/PersonalInfo/PersonalInfo";
import SelectPlan from "./Forms/SelectPlan/SelectPlan";
import PickAddOns from "./Forms/PickAddOns/PickAddOns";
import LastStep from "./Forms/LastStep/LastStep";
import Button from "../ui/Button/Button";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";
import { useAppSelector } from "@/app/hooks";

/**
 * Renders the multi-step user subscription form with:
 * - Steps List
 * - Current form
 * - Go Back and Next or Confirm buttons
 */
export default function MultiStepForm() {
  // Localization reducer
  const dictionary = useAppSelector((state) => state.localization.dictionary);
  const navigationDict = dictionary.navigation;

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
      <LanguageSwitch />

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
                  description={navigationDict.goBackBtn}
                  variant="transparentBtn"
                  handleOnClick={goToPrevStep}
                />
              ) : null}

              <div className={styles.nextConfirmBtnCont}>
                {currentStepIndex === stepsList.length - 1 ? (
                  <Button
                    description={navigationDict.confirmBtn}
                    variant="purpleBtn"
                    handleOnClick={confirmSubscription}
                  />
                ) : (
                  <Button
                    description={navigationDict.nextStep}
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
