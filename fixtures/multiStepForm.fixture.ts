import type { PlanDetails } from "@/app/components/types";

/**
 * Returns a mocked plan
 */
export const createPlan = (): PlanDetails => {
  return FIXTURE_PLANS_LIST[0];
};

/**
 * List of mocked subscription plans
 */
const FIXTURE_PLANS_LIST: PlanDetails[] = [
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
