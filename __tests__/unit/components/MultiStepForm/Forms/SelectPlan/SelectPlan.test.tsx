import { createRef } from "react";
import { renderWithProviders } from "../../../../../helpers/reduxHelper";
import SelectPlan from "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan";
import en from "@/app/[lang]/dictionaries/en.json";
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
    const formRef = createRef<HTMLFormElement>();

    renderWithProviders(<SelectPlan formRef={formRef} />, {
      preloadedState: {
        localization: { localeCode: "en", dictionary: en },
      },
    });
  });

  it("renders the main title, form description and list of plans", () => {
    const plansLength = getPlansListBySubscription(
      FIXTURE_PLANS_LIST,
      true,
    ).length;

    expectSelectPlanVisible(plansLength);
  });
});
