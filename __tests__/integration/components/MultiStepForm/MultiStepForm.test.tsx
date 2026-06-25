import { render, screen } from "@testing-library/react";
import MultiStepFormProvider from "@/app/components/context/MultiStepFormProvider";
import MultiStepForm from "@/app/components/MultiStepForm/MultiStepForm";
import { submitForm } from "../../../helpers/multiStepForm.helpers";
import { FIXTURE_MULTISTEPFORM } from "../../../../fixtures/multiStepForm.fixtures";

/**
 * Integration testing for the component: MultiStepForm
 */
describe("MultiStepForm component", () => {
  beforeEach(() => {
    render(
      <MultiStepFormProvider>
        <MultiStepForm />
      </MultiStepFormProvider>,
    );
  });

  describe("PersonalInfo component", () => {
    it("renders the error message `This field is required` for empty Name, Email Address and Phone Number fields", async () => {
      const multiStepForm = FIXTURE_MULTISTEPFORM;

      await submitForm();

      const requiredMsgs = screen.getAllByText(
        multiStepForm.personalInfo.required,
      );

      expect(requiredMsgs).toHaveLength(3);
    });

    test.todo(
      "renders the error message `Must be at least 2 characters` for the Name field",
    );

    test.todo(
      "renders the error message `Must be under 50 characters` for the Name field",
    );

    test.todo(
      "renders the error message `Can only contain letters or spaces` for the Name field",
    );

    test.todo(
      "renders the error message `Invalid Email Address` for the Email field",
    );

    test.todo(
      "renders the error message `Invalid Phone Number` for the Phone Number field",
    );
  });

  describe("SelectPlan component", () => {
    test.todo(
      "renders the error message `Select a plan to continue` when no plan is selected",
    );

    test.todo("allows to toggle between monthly or yearly subscription");
  });
});
