import { renderWithProviders } from "../../../../../../helpers/reduxHelper";
import ThankYou from "@/app/components/MultiStepForm/Forms/LastStep/ThankYou/ThankYou";
import en from "@/app/[lang]/dictionaries/en.json";
import { expectThankYouVisible } from "../../../../../../helpers/multiStepForm.helpers";

/**
 * Unit testing for the component: ThankYou
 */
describe("ThankYou component", () => {
  beforeEach(() => {
    renderWithProviders(<ThankYou />, {
      preloadedState: {
        localization: { localeCode: "en", dictionary: en },
      },
    });
  });

  it("renders the main title and description", () => {
    expectThankYouVisible();
  });
});
