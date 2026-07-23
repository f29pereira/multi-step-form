// Data related types

/**
 * Type for the subscription plan details
 * @property id          - plan id
 * @property type        - type of plan
 * @property monthlyPlan - monthly plan value and discont
 * @property yearlyPlan  - yearly plan value and discont
 */
export type PlanDetails = {
  id: string;
  type: string;
  monthlyPlan: PlanPricing;
  yearlyPlan: PlanPricing;
};

/**
 * Type for the subscription plan pricing
 * @property value    - plan value
 * @property discount - plan current discont
 */
export type PlanPricing = {
  value: number;
  discount?: string;
};

/**
 * Type for the add-on details
 * @property id           - add-on id
 * @property type         - type of add-on
 * @property monthlyPrice - monthly add-on price
 * @property yearlyPrice  - yearly add-on price
 */
export type AddOnDetails = {
  id: string;
  type: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};
