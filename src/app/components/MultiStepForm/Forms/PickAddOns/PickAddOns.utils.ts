import type { AddOnDetails, AddOnProps } from "@/app/components/types";

/**
 * Returns the list of add-ons with yearly or montly subscription
 * @param addOnsList - list of plans with yearly and montly pricing
 * @param isYearly   - if true returns the yearly add-ons, if false returns the montly add-ons
 */
export const getAddOnsListBySubscription = (
  addOnsList: AddOnDetails[],
  isYearly: boolean,
) => {
  return addOnsList.map((addOn) => ({
    id: addOn.id,
    type: addOn.type,
    description: addOn.description,
    price: isYearly ? addOn.yearlyPrice : addOn.monthlyPrice,
  }));
};

/**
 * Returns the list of selected add-ons
 * @param addOnsIds - list of selected add-ons ids
 * @param isYearly  - if true returns the yearly add-on price, if false returns the montly add-on price
 */
export const getSelectedAddOns = (
  addOnsIds: string[],
  isYearly: boolean,
): AddOnProps[] => {
  const selectedAddOns = addOnsIds
    .map((id) => getAddOnById(id, isYearly))
    .filter((addOn) => addOn != undefined);

  return selectedAddOns;
};

/**
 * Returns the add-on by a given id
 * @param id       - add-on id
 * @param isYearly - if true returns the yearly price, if false returns the montly price
 */
export const getAddOnById = (
  id: string,
  isYearly: boolean,
): AddOnProps | undefined => {
  const addOn = ADD_ONS_LIST.find((addOn) => addOn.id === id);

  if (addOn) {
    const addOnPrice = isYearly ? addOn.yearlyPrice : addOn.monthlyPrice;

    return {
      id: addOn.id,
      type: addOn.type,
      description: addOn.description,
      price: addOnPrice,
    };
  }

  return addOn;
};

/**
 * List of available add-ons
 */
export const ADD_ONS_LIST: AddOnDetails[] = [
  {
    id: "1",
    type: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: "2",
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: "3",
    type: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
