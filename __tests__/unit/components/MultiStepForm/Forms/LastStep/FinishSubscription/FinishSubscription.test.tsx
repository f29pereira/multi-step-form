import { renderWithProviders } from "../../../../../../helpers/reduxHelper";
import FinishSubscription from "@/app/components/MultiStepForm/Forms/LastStep/FinishSubscription/FinishSubscription";
import en from "@/app/[lang]/dictionaries/en.json";
import { createMultiStepFormContext } from "../../../../../../../fixtures/multiStepForm.fixtures";
import { expectFinishSubscriptionVisible } from "../../../../../../helpers/multiStepForm.helpers";

const context = createMultiStepFormContext();

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: () => context,
}));

// Localization
const localeCode = "en";
const dictionary = en;

/**
 * Unit testing for the component: FinishSubscription
 */
describe("FinishSubscription component", () => {
  beforeEach(() => {
    renderWithProviders(<FinishSubscription />, {
      preloadedState: {
        localization: { localeCode: "en", dictionary: en },
      },
    });
  });

  it("renders the main title, description and subscription: plan, add-ons list and total", () => {
    const formData = context.formData;

    expectFinishSubscriptionVisible(
      formData.isYearly,
      formData.selectedPlanId,
      formData.selectedAddOns,
      localeCode,
      dictionary,
    );
  });
});
