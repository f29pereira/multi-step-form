import { render } from "@testing-library/react";
import { createRef } from "react";
import PickAddOns from "@/app/components/MultiStepForm/Forms/PickAddOns/PickAddOns";
import { createEmptyMultiStepFormContext } from "../../../../../../fixtures/multiStepForm.fixtures";
import { FIXTURE_ADD_ONS_LIST } from "../../../../../../fixtures/multiStepForm.fixtures";
import { getAddOnsListBySubscription } from "@/app/components/MultiStepForm/Forms/PickAddOns/PickAddOns.utils";
import { expectPickAddOnsVisible } from "../../../../../helpers/multiStepForm.helpers";

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: () => createEmptyMultiStepFormContext(),
}));

// Mock getAddOnsListBySubscription function
jest.mock(
  "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan.utils",
  () => {
    const originalModule = jest.requireActual(
      "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan.utils",
    );

    return {
      ...originalModule,
      getAddOnsListBySubscription: jest.fn(() =>
        originalModule.getAddOnsListBySubscription(FIXTURE_ADD_ONS_LIST, true),
      ),
    };
  },
);

/**
 * Unit testing for the component: PickAddOns
 */
describe("PickAddOns component", () => {
  beforeEach(() => {
    const formRef = createRef<HTMLFormElement>();
    render(<PickAddOns formRef={formRef} />);
  });

  it("renders the main title, form description and list of add-ons", () => {
    const plansLength = getAddOnsListBySubscription(
      FIXTURE_ADD_ONS_LIST,
      true,
    ).length;

    expectPickAddOnsVisible(plansLength);
  });
});
