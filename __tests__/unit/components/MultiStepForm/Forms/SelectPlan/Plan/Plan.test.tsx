import { renderWithProviders } from "../../../../../../helpers/reduxHelper";
import Plan from "@/app/components/MultiStepForm/Forms/SelectPlan/Plan/Plan";
import en from "@/app/[lang]/dictionaries/en.json";
import {
  createEmptyMultiStepFormContext,
  createPlan,
} from "../../../../../../../fixtures/multiStepForm.fixtures";
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

const localeCode = "en";
const dictionary = en;

/**
 * Unit testing for the component: Plan
 */
describe("Plan component", () => {
  beforeEach(() => {
    useMultiStepFormMock.mockReturnValue(defaultContext);
  });

  describe("when is yearly", () => {
    const yearlyPlanPrice = {
      value: plan.yearlyPlan.value,
      discount: plan.yearlyPlan.discount,
    };

    beforeEach(() => {
      renderWithProviders(
        <Plan
          id={plan.id}
          type={plan.type}
          price={yearlyPlanPrice}
          isInvalid={false}
        />,
        {
          withFormProvider: true,
          preloadedState: {
            localization: { localeCode: localeCode, dictionary: dictionary },
          },
        },
      );
    });

    it("renders the radio input", () => {
      expectPlanRadioInputInDocument();
    });

    it("renders the type, yearly price and discount", () => {
      expectPlanVisible(
        defaultContext.formData.isYearly,
        plan.type,
        yearlyPlanPrice.value,
        localeCode,
        dictionary,
        yearlyPlanPrice.discount,
      );
    });
  });

  describe("when is monthly", () => {
    const updatedContext = {
      ...defaultContext,
      formData: { ...defaultContext, isYearly: false },
    };

    const monthlyPlanPrice = {
      value: plan.monthlyPlan.value,
    };

    beforeEach(() => {
      // Update useMultiStepForm to a monthly subscription
      useMultiStepFormMock.mockReturnValue(updatedContext);

      renderWithProviders(
        <Plan
          id={plan.id}
          type={plan.type}
          price={monthlyPlanPrice}
          isInvalid={false}
        />,
        {
          withFormProvider: true,
          preloadedState: {
            localization: { localeCode: localeCode, dictionary: dictionary },
          },
        },
      );
    });

    it("renders the radio input", () => {
      expectPlanRadioInputInDocument();
    });

    it("renders the type and monthly price", () => {
      expectPlanVisible(
        updatedContext.formData.isYearly,
        plan.type,
        monthlyPlanPrice.value,
        localeCode,
        dictionary,
        undefined,
      );
    });
  });
});
