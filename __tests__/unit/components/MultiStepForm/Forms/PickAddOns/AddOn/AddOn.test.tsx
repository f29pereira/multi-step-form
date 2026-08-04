import { renderWithProviders } from "../../../../../../helpers/reduxHelper";
import AddOn from "@/app/components/MultiStepForm/Forms/PickAddOns/AddOn/AddOn";
import en from "@/app/[lang]/dictionaries/en.json";
import {
  createEmptyMultiStepFormContext,
  createAddOn,
} from "../../../../../../../fixtures/multiStepForm.fixtures";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import { expectAddOnVisible } from "../../../../../../helpers/multiStepForm.helpers";

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: jest.fn(),
}));

// Type cast to be able to call jest functions in useMultiStepForm
const useMultiStepFormMock = useMultiStepForm as jest.Mock;

const defaultContext = createEmptyMultiStepFormContext();

const addOn = createAddOn();

// React Hook Form default value
const reactFormDefaultValues = { selectedAddOns: [] };

// Localization
const localeCode = "en";
const dictionary = en;

/**
 * Unit testing for the component: AddOn
 */
describe("Plan component", () => {
  beforeEach(() => {
    useMultiStepFormMock.mockReturnValue(defaultContext);
  });

  describe("when is yearly", () => {
    beforeEach(() => {
      renderWithProviders(
        <AddOn
          id={addOn.id}
          type={addOn.type}
          description={addOn.description}
          price={addOn.yearlyPrice}
        />,
        {
          withFormProvider: true,
          formDefaultValues: reactFormDefaultValues,
          preloadedState: {
            localization: { localeCode: localeCode, dictionary: dictionary },
          },
        },
      );
    });

    it("renders the checkbox input and add-on: type, description and yearly price", () => {
      expectAddOnVisible(
        defaultContext.formData.isYearly,
        addOn.type,
        addOn.description,
        addOn.yearlyPrice,
        localeCode,
        dictionary,
      );
    });
  });

  describe("when is monthly", () => {
    const updatedContext = {
      ...defaultContext,
      formData: { ...defaultContext, isYearly: false },
    };

    beforeEach(() => {
      // Update useMultiStepForm to a monthly subscription
      useMultiStepFormMock.mockReturnValue(updatedContext);

      renderWithProviders(
        <AddOn
          id={addOn.id}
          type={addOn.type}
          description={addOn.description}
          price={addOn.monthlyPrice}
        />,
        {
          withFormProvider: true,
          formDefaultValues: reactFormDefaultValues,
          preloadedState: {
            localization: { localeCode: localeCode, dictionary: dictionary },
          },
        },
      );
    });

    it("renders the checkbox input and add-on: type, description and monthly price", () => {
      expectAddOnVisible(
        updatedContext.formData.isYearly,
        addOn.type,
        addOn.description,
        addOn.monthlyPrice,
        localeCode,
        dictionary,
      );
    });
  });
});
