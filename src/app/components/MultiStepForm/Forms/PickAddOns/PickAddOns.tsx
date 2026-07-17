"use client"; // Client Component

import styles from "./PickAddOns.module.css";
import type { FormStepProps, SelectedAddOns } from "@/app/components/types";
import useFocus from "@/app/components/customHooks/useFocus";
import { getAddOnsWithLocalization } from "./PickAddOns.utils";
import { getAddOnsListBySubscription } from "./PickAddOns.utils";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import AddOn from "./AddOn/AddOn";
import { useForm, FormProvider } from "react-hook-form";
import { useAppSelector } from "@/app/hooks";

/**
 * Renders the pick add-ons form with:
 * - Main header
 * - Form description
 * - List of add-ons to check
 *
 * Props are defined in {@link FormStepProps}.
 */
export default function PickAddOns({ formRef }: FormStepProps) {
  // Localization reducer
  const dictionary = useAppSelector((state) => state.localization.dictionary);
  const pickAddOnsDict = dictionary.pickAddOns;

  // MultiStepForm context
  const { formData, setFormData, goToNextStep } = useMultiStepForm();
  const isYearly = formData.isYearly;

  // Main header Ref
  const { elementRef } = useFocus<HTMLHeadingElement>();

  // React Hook Form
  const methods = useForm<SelectedAddOns>({
    defaultValues: {
      selectedAddOns: formData.selectedAddOns ?? [],
    },
  });

  // React Hook Form: context
  const { register, watch } = methods;

  // Data
  const addOnsList = getAddOnsWithLocalization(pickAddOnsDict);
  const currentAddOnsList = getAddOnsListBySubscription(addOnsList, isYearly);

  /**
   * Submits the form and goes to the next form step
   * @param data selected plan id
   */
  const submit = (data: SelectedAddOns) => {
    setFormData((prev) => ({ ...prev, selectedAddOns: data.selectedAddOns }));
    goToNextStep();
  };

  return (
    <div className="white-card-cont">
      {/*Main header*/}
      <h1
        ref={elementRef}
        tabIndex={-1}
        className={styles.title}
        aria-label={pickAddOnsDict.titleAriaLabel}
      >
        {pickAddOnsDict.title}
      </h1>

      {/*Form description*/}
      <p className={`lighter-text ${styles.description}`}>
        {pickAddOnsDict.description}
      </p>

      <FormProvider {...methods}>
        <form
          ref={formRef}
          onSubmit={methods.handleSubmit((data) => {
            submit(data);
          })}
        >
          <fieldset>
            <legend className="sr-only">{pickAddOnsDict.legend}</legend>

            {/*List of add-ons*/}
            <div className={styles.addOnsListCont} data-testid="add-ons-list">
              {currentAddOnsList.map((addOn) => (
                <AddOn
                  key={addOn.id}
                  id={addOn.id}
                  type={addOn.type}
                  description={addOn.description}
                  price={addOn.price}
                />
              ))}
            </div>
          </fieldset>
        </form>
      </FormProvider>
    </div>
  );
}
