import type { AddOnDetails, AddOnProps } from "@/app/components/types";
import type { PickAddOnsDictionary } from "@/app/components/types/localization";

/**
 * Returns the list of available add-ons with localization
 * @param pickAddOnsDict PickAddOns component dictionary
 */
export const getAddOnsWithLocalization = (
  pickAddOnsDict: PickAddOnsDictionary,
): AddOnDetails[] => {
  return ADD_ONS_LIST_PRICING.map((addOn, index) => ({
    id: addOn.id,
    type: pickAddOnsDict.addOns[index].type,
    description: pickAddOnsDict.addOns[index].description,
    monthlyPrice: addOn.monthlyPrice,
    yearlyPrice: addOn.yearlyPrice,
  }));
};

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
  addOnsList: AddOnDetails[],
  addOnsIds: string[],
  isYearly: boolean,
): AddOnProps[] => {
  const selectedAddOns = addOnsIds
    .map((id) => getAddOnById(addOnsList, id, isYearly))
    .filter((addOn) => addOn != undefined);

  return selectedAddOns;
};

/**
 * Returns the add-on by a given id
 * @param addOnsList list of add-ons
 * @param id         add-on id
 * @param isYearly   if true returns the yearly price, if false returns the montly price
 */
export const getAddOnById = (
  addOnsList: AddOnDetails[],
  id: string,
  isYearly: boolean,
): AddOnProps | undefined => {
  const addOn = addOnsList.find((addOn) => addOn.id === id);

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
 * List of available add-ons pricing
 */
export const ADD_ONS_LIST_PRICING = [
  {
    id: "1",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: "2",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: "3",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
