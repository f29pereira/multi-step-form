"use client"; // Client Component

import styles from "./PickAddOns.module.css";
import type { SelectedAddOns } from "@/app/components/types";
import useFocus from "@/app/components/customHooks/useFocus";
import { getAddOnsList } from "./PickAddOns.utils";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import AddOn from "./AddOn/AddOn";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

/**
 * Renders the pick add-ons form with:
 * - Main header
 * - Form description
 * - List of add-ons to check
 */
export default function PickAddOns() {
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
  const addOnsList = getAddOnsList(isYearly);

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
      <h1
        ref={elementRef}
        tabIndex={-1}
        className={styles.title}
        aria-label="Step 3 of 4, Pick add-ons"
      >
        Pick add-ons
      </h1>

      <p className={`lighter-text ${styles.description}`}>
        Add-ons help enhance your gaming experience.
      </p>

      <FormProvider {...methods}>
        <form
          id="current-form-step"
          onSubmit={methods.handleSubmit((data) => {
            submit(data);
          })}
        >
          <fieldset>
            <legend className="sr-only">Pick add-ons</legend>

            {/*List of add-ons*/}
            <div className={styles.addOnsListCont}>
              {addOnsList.map((addOn) => (
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
