import { render } from "@testing-library/react";
import ThankYou from "@/app/components/MultiStepForm/Forms/LastStep/ThankYou/ThankYou";
import { expectThankYouVisible } from "../../../../../../helpers/multiStepForm.helpers";

/**
 * Unit testing for the component: ThankYou
 */
describe("ThankYou component", () => {
  beforeEach(() => {
    render(<ThankYou />);
  });

  it("renders the main title and description", () => {
    expectThankYouVisible();
  });
});
