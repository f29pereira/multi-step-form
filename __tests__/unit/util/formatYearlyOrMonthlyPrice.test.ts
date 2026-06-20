import { formatYearlyOrMonthlyPrice } from "@/app/lib/utils";
import { createPlan } from "../../../fixtures/multiStepForm.fixture";

/**
 * Test for function: formatYearlyOrMonthlyPrice
 */
describe("formatYearlyOrMonthlyPrice function", () => {
  const plan = createPlan();

  it("returns the formatted yearly price", () => {
    expect(formatYearlyOrMonthlyPrice(true, plan.yearlyPlan.value)).toBe(
      `$${plan.yearlyPlan.value}/yr`,
    );
  });

  it("returns the formatted monthly price", () => {
    expect(formatYearlyOrMonthlyPrice(false, plan.monthlyPlan.value)).toBe(
      `$${plan.monthlyPlan.value}/mo`,
    );
  });
});
