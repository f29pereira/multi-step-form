import type { PlanDetails } from "@/app/components/types";

/**
 * Returns the list of plans with yearly or montly pricing and discont
 * @param isYearly - if true returns the yearly plans, if false returns the montly plans
 */
export const getPlansList = (isYearly: boolean) => {
  return PLANS_LIST.map((plan) => ({
    id: plan.id,
    type: plan.type,
    price: {
      value: isYearly ? plan.yearlyPlan.value : plan.monthlyPlan.value,
      discount: isYearly ? plan.yearlyPlan.discount : plan.monthlyPlan.discount,
    },
  }));
};

/**
 * List of available subscription plans
 */
const PLANS_LIST: PlanDetails[] = [
  {
    id: "1",
    type: "Arcade",
    monthlyPlan: {
      value: 9,
    },
    yearlyPlan: {
      value: 90,
      discount: "2 months free",
    },
  },
  {
    id: "2",
    type: "Advanced",
    monthlyPlan: {
      value: 12,
    },
    yearlyPlan: {
      value: 120,
      discount: "2 months free",
    },
  },
  {
    id: "3",
    type: "Pro",
    monthlyPlan: {
      value: 15,
    },
    yearlyPlan: {
      value: 150,
      discount: "2 months free",
    },
  },
];
