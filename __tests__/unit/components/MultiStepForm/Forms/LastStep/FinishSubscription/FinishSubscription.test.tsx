import { render } from "@testing-library/react";
import FinishSubscription from "@/app/components/MultiStepForm/Forms/LastStep/FinishSubscription/FinishSubscription";
import { createMultiStepFormContext } from "../../../../../../../fixtures/multiStepForm.fixtures";
import { expectFinishSubscriptionVisible } from "../../../../../../helpers/multiStepForm.helpers";

const context = createMultiStepFormContext();

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: () => context,
}));

/**
 * Unit testing for the component: FinishSubscription
 */
describe("FinishSubscription component", () => {
  beforeEach(() => {
    render(<FinishSubscription />);
  });

  it("renders the main title, description and subscription: plan, add-ons list and total", () => {
    const formData = context.formData;

    expectFinishSubscriptionVisible(
      formData.isYearly,
      formData.selectedPlanId,
      formData.selectedAddOns,
    );
  });
});
