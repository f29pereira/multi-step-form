import type { PlanDetails } from "@/app/components/types/data";
import type { PlanProps } from "@/app/components/types";
import type { SelectPlanDictionary } from "@/app/components/types/localization";

/**
 * Returns the list of available subscription plans with localization
 * @param selectPlanDict - SelectPlan component dictionary
 */
export const getPlansWithLocalization = (
  selectPlanDict: SelectPlanDictionary,
): PlanDetails[] => {
  return PLANS_LIST_PRICING.map((plan, index) => ({
    id: plan.id,
    type: selectPlanDict.plans[index].type,
    monthlyPlan: {
      value: plan.monthlyPlan.value,
    },
    yearlyPlan: {
      value: plan.yearlyPlan.value,
      discount: selectPlanDict.plans[index].discount,
    },
  }));
};

/**
 * Returns the list of plans with yearly or montly subscription
 * @param plansList - list of plans with yearly and montly pricing
 * @param isYearly  - if true returns the yearly plans, if false returns the montly plans
 */
export const getPlansListBySubscription = (
  plansList: PlanDetails[],
  isYearly: boolean,
) => {
  return plansList.map((plan) => ({
    id: plan.id,
    type: plan.type,
    price: {
      value: isYearly ? plan.yearlyPlan.value : plan.monthlyPlan.value,
      discount: isYearly ? plan.yearlyPlan.discount : plan.monthlyPlan.discount,
    },
  }));
};

/**
 * Returns the plan by a given id
 * @param plansList - list of plans
 * @param id        - plan id
 * @param isYearly  - if true returns the yearly price, if false returns the montly price
 */
export const getPlanById = (
  plansList: PlanDetails[],
  id: string,
  isYearly: boolean,
): PlanProps | undefined => {
  const plan = plansList.find((plan) => plan.id === id);

  if (plan) {
    const planPrice = isYearly ? plan.yearlyPlan : plan.monthlyPlan;

    return {
      id: plan.id,
      type: plan.type,
      price: { value: planPrice.value, discount: planPrice.discount },
      isInvalid: false,
    };
  }

  return plan;
};

/**
 * List of available subscription plans yearly or montly pricing
 */
export const PLANS_LIST_PRICING = [
  {
    id: "1",
    monthlyPlan: {
      value: 9,
    },
    yearlyPlan: {
      value: 90,
    },
  },
  {
    id: "2",
    monthlyPlan: {
      value: 12,
    },
    yearlyPlan: {
      value: 120,
    },
  },
  {
    id: "3",
    monthlyPlan: {
      value: 15,
    },
    yearlyPlan: {
      value: 150,
    },
  },
];
