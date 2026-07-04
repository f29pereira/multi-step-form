import type { PlanProps, AddOnProps } from "@/app/components/types";

/**
 * Returns the subscription total
 * @param plan       - user's selected plan
 * @param addOnsList - user's selected add-on list
 */
export const getSubscriptionTotal = (
  plan: PlanProps,
  addOnsList: AddOnProps[],
) => {
  let addOnsTotal = 0;

  for (let i = 0; i < addOnsList.length; i++) {
    addOnsTotal += addOnsList[i].price;
  }

  const total = plan.price.value + addOnsTotal;

  return total;
};
