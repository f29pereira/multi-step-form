import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../../../../helpers/reduxHelper";
import SubscriptionToggle from "@/app/components/MultiStepForm/Forms/SelectPlan/SubscriptionToggle/SubscriptionToggle";
import en from "@/app/[lang]/dictionaries/en.json";
import { createEmptyMultiStepFormContext } from "../../../../../../../fixtures/multiStepForm.fixtures";
import { expectSubscriptionToggleVisible } from "../../../../../../helpers/multiStepForm.helpers";

const context = createEmptyMultiStepFormContext();

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: () => context,
}));

/**
 * Unit testing for the component: SubscriptionToggle
 */
describe("SubscriptionToggle component", () => {
  beforeEach(() => {
    renderWithProviders(<SubscriptionToggle />, {
      preloadedState: {
        localization: { localeCode: "en", dictionary: en },
      },
    });
  });

  it("renders the monthly and yearly text and the toggle button", () => {
    expectSubscriptionToggleVisible(context.formData.isYearly);
  });

  it("calls the toggleSubscription function when clicking the toggle button", async () => {
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    expect(context.toggleSubscription).toHaveBeenCalledTimes(1);
  });
});
