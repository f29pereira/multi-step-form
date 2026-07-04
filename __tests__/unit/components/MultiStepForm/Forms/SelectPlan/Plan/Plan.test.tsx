import Plan from "@/app/components/MultiStepForm/Forms/SelectPlan/Plan/Plan";
import {
  createEmptyMultiStepFormContext,
  createPlan,
} from "../../../../../../../fixtures/multiStepForm.fixtures";
import { renderWithReactFormHookProvider } from "../../../../../../helpers/multiStepForm.helpers";
import {
  expectPlanRadioInputInDocument,
  expectPlanVisible,
} from "../../../../../../helpers/multiStepForm.helpers";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: jest.fn(),
}));

// Type cast to be able to call jest functions in useMultiStepForm
const useMultiStepFormMock = useMultiStepForm as jest.Mock;

const defaultContext = createEmptyMultiStepFormContext();

const plan = createPlan();

/**
 * Unit testing for the component: Plan
 */
describe("Plan component", () => {
  beforeEach(() => {
    useMultiStepFormMock.mockReturnValue(defaultContext);
  });

  it("renders the radio input", () => {
    const planPrice = {
      value: plan.yearlyPlan.value,
      discount: plan.yearlyPlan.discount,
    };

    renderWithReactFormHookProvider(
      <Plan
        id={plan.id}
        type={plan.type}
        price={planPrice}
        isInvalid={false}
      />,
    );
    expectPlanRadioInputInDocument();
  });

  it("renders the type, yearly price and discount", () => {
    const planPrice = {
      value: plan.yearlyPlan.value,
      discount: plan.yearlyPlan.discount,
    };

    renderWithReactFormHookProvider(
      <Plan
        id={plan.id}
        type={plan.type}
        price={planPrice}
        isInvalid={false}
      />,
    );
    expectPlanVisible(
      defaultContext.formData.isYearly,
      plan.type,
      planPrice.value,
      planPrice.discount,
    );
  });

  it("renders the type and monthly price", () => {
    const updatedContext = {
      ...defaultContext,
      formData: { ...defaultContext, isYearly: false },
    };

    // Update useMultiStepForm to a monthly subscription
    useMultiStepFormMock.mockReturnValue(updatedContext);

    const planPrice = {
      value: plan.monthlyPlan.value,
    };

    renderWithReactFormHookProvider(
      <Plan
        id={plan.id}
        type={plan.type}
        price={planPrice}
        isInvalid={false}
      />,
    );
    expectPlanVisible(
      updatedContext.formData.isYearly,
      plan.type,
      planPrice.value,
      undefined,
    );
  });
});
