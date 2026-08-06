"use client"; // Client Component

import styles from "./SelectPlan.module.css";
import type { SelectedPlan } from "@/app/components/types/context";
import type { FormStepProps } from "@/app/components/types";
import {
  getPlansWithLocalization,
  getPlansListBySubscription,
} from "./SelectPlan.utils";
import Plan from "./Plan/Plan";
import SubscriptionToggle from "./SubscriptionToggle/SubscriptionToggle";
import useFocus from "@/app/components/customHooks/useFocus";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import { FormProvider, useForm } from "react-hook-form";
import ErrorMessage from "@/app/components/shared/ErrorMessage/ErrorMessage";
import { useAppSelector } from "@/app/hooks";

/**
 * Renders the select plan form with:
 * - Main header
 * - Form description
 * - List of plans
 * - Subscription type toggle
 *
 * When submitting the form if no plan is selected, renders an error message
 *
 * Props are defined in {@link FormStepProps}.
 */
export default function SelectPlan({ formRef }: FormStepProps) {
  // Localization reducer
  const dictionary = useAppSelector((state) => state.localization.dictionary);
  const selectPlanDict = dictionary.selectPlan;

  // MultiStepForm context
  const { formData, setFormData, goToNextStep } = useMultiStepForm();

  // Main header Ref
  const { elementRef } = useFocus<HTMLHeadingElement>();

  // React Hook Form
  const methods = useForm<SelectedPlan>({
    defaultValues: {
      selectedPlanId: formData.selectedPlanId ?? "",
    },
  });

  // React Hook Form: context
  const {
    register,
    watch,
    formState: { errors },
  } = methods;

  // Data
  const plansList = getPlansWithLocalization(selectPlanDict);
  const currentPlansList = getPlansListBySubscription(
    plansList,
    formData.isYearly,
  );

  /**
   * Returns true if no plan is selected
   */
  const isInputInvalid = () => {
    return errors.selectedPlanId !== undefined;
  };

  /**
   * Submits the form and goes to the next form step
   * @param data selected plan id
   */
  const submit = (data: SelectedPlan) => {
    setFormData((prev) => ({ ...prev, selectedPlanId: data.selectedPlanId }));
    goToNextStep();
  };

  return (
    <div className="white-card-cont">
      {/*Main header*/}
      <h1
        ref={elementRef}
        tabIndex={-1}
        className={styles.title}
        aria-label={selectPlanDict.titleAriaLabel}
      >
        {selectPlanDict.title}
      </h1>

      {/*Form description*/}
      <p className={`lighter-text form-description ${styles.description}`}>
        {selectPlanDict.description}
      </p>

      <FormProvider {...methods}>
        <form
          ref={formRef}
          className={styles.form}
          onSubmit={methods.handleSubmit((data) => {
            submit(data);
          })}
        >
          {/*Error message*/}
          <div className={`flex-center ${styles.errorMsgCont}`}>
            <ErrorMessage
              id="plan-error"
              message={errors.selectedPlanId?.message}
            />
          </div>

          <fieldset
            aria-invalid={isInputInvalid()}
            aria-errormessage={isInputInvalid() ? "plan-error" : undefined}
          >
            <legend className="sr-only">{selectPlanDict.legend}</legend>

            {/*List of plans*/}
            <div className={styles.plansListCont} data-testid="plans-list">
              {currentPlansList.map((plan) => (
                <Plan
                  key={plan.id}
                  id={plan.id}
                  type={plan.type}
                  price={plan.price}
                  isInvalid={isInputInvalid()}
                />
              ))}
            </div>
          </fieldset>
        </form>
      </FormProvider>

      {/*Subscription type toggle*/}
      <div className={styles.subsToggleCont}>
        <SubscriptionToggle />
      </div>
    </div>
  );
}
