import type { AddOnDetails } from "@/app/components/types";

/**
 * Returns the list of add-ons with yearly or montly pricing
 * @param isYearly - if true returns the yearly price, if false returns the montly price
 */
export const getAddOnsList = (isYearly: boolean) => {
  return ADD_ONS_LIST.map((addOn) => ({
    id: addOn.id,
    type: addOn.type,
    description: addOn.description,
    price: isYearly ? addOn.yearlyPrice : addOn.monthlyPrice,
  }));
};

/**
 * List of available add-ons
 */
const ADD_ONS_LIST: AddOnDetails[] = [
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
