import AddOn from "@/app/components/MultiStepForm/Forms/PickAddOns/AddOn/AddOn";
import {
  createEmptyMultiStepFormContext,
  createAddOn,
} from "../../../../../../../fixtures/multiStepForm.fixtures";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import { renderWithReactFormHookProvider } from "../../../../../../helpers/multiStepForm.helpers";
import { expectAddOnVisible } from "../../../../../../helpers/multiStepForm.helpers";

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: jest.fn(),
}));

// Type cast to be able to call jest functions in useMultiStepForm
const useMultiStepFormMock = useMultiStepForm as jest.Mock;

const defaultContext = createEmptyMultiStepFormContext();

const addOn = createAddOn();
const reactFormDefaultValues = { selectedAddOns: [] };

/**
 * Unit testing for the component: AddOn
 */
describe("Plan component", () => {
  beforeEach(() => {
    useMultiStepFormMock.mockReturnValue(defaultContext);
  });

  it("renders the checkbox input and add-on: type, description and yearly price", () => {
    renderWithReactFormHookProvider(
      <AddOn
        id={addOn.id}
        type={addOn.type}
        description={addOn.description}
        price={addOn.yearlyPrice}
      />,
      reactFormDefaultValues,
    );
    expectAddOnVisible(
      defaultContext.formData.isYearly,
      addOn.type,
      addOn.description,
      addOn.yearlyPrice,
    );
  });

  it("renders the checkbox input and add-on: type, description and monthly price", () => {
    const updatedContext = {
      ...defaultContext,
      formData: { ...defaultContext, isYearly: false },
    };

    // Update useMultiStepForm to a monthly subscription
    useMultiStepFormMock.mockReturnValue(updatedContext);

    renderWithReactFormHookProvider(
      <AddOn
        id={addOn.id}
        type={addOn.type}
        description={addOn.description}
        price={addOn.monthlyPrice}
      />,
      reactFormDefaultValues,
    );

    expectAddOnVisible(
      updatedContext.formData.isYearly,
      addOn.type,
      addOn.description,
      addOn.monthlyPrice,
    );
  });
});
