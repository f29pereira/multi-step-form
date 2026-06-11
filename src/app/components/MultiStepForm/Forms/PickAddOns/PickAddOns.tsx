"use client"; // Client Component

import styles from "./PickAddOns.module.css";
import useFocus from "@/app/components/customHooks/useFocus";
import { getAddOnsList } from "./PickAddOns.util";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import AddOn from "./AddOn/AddOn";
import { useState } from "react";

/**
 * Renders the pick add-ons form with:
 * - List of add-ons to check
 */
export default function PickAddOns() {
  /*context*/
  const { isYearly } = useMultiStepForm();

  /*ref*/
  const { elementRef } = useFocus<HTMLHeadingElement>();

  // TO DO: add state to MultiStepForm context
  const [pickedAddOns, setPickedAddOns] = useState<string[]>([]);

  const addOnsList = getAddOnsList(isYearly);

  /**
   * Toggles the add-on id in the pickedAddOns state
   */
  const toggleAddOn = (addOnId: string) => {
    setPickedAddOns((prev) =>
      prev.includes(addOnId)
        ? prev.filter((addOn) => addOn !== addOnId)
        : [...prev, addOnId],
    );
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

      <form action="">
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
                toggle={toggleAddOn}
                isChecked={pickedAddOns.includes(addOn.id)}
              />
            ))}
          </div>
        </fieldset>
      </form>
    </div>
  );
}
