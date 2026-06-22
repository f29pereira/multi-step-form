import { render } from "@testing-library/react";
import SelectPlan from "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan";
import { createEmptyMultiStepFormContext } from "../../../../../../fixtures/multiStepForm.fixtures";
import { FIXTURE_PLANS_LIST } from "../../../../../../fixtures/multiStepForm.fixtures";
import { getPlansListBySubscription } from "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan.utils";
import { expectSelectPlanVisible } from "../../../../../helpers/multiStepForm.helpers";

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: () => createEmptyMultiStepFormContext(),
}));

// Mock getPlansListBySubscription function
jest.mock(
  "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan.utils",
  () => {
    const originalModule = jest.requireActual(
      "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan.utils",
    );

    return {
      ...originalModule,
      getPlansListBySubscription: jest.fn(() =>
        originalModule.getPlansListBySubscription(FIXTURE_PLANS_LIST, true),
      ),
    };
  },
);

/**
 * Unit testing for the component: SelectPlan
 */
describe("SelectPlan component", () => {
  beforeEach(() => {
    render(<SelectPlan />);
  });

  it("renders the main title, form description and list of plans", () => {
    const plansLength = getPlansListBySubscription.length;
    expectSelectPlanVisible(plansLength);
  });
});
