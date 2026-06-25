import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MultiStepFormProvider from "@/app/components/context/MultiStepFormProvider";
import MultiStepForm from "@/app/components/MultiStepForm/MultiStepForm";
import { submitForm } from "../../../helpers/multiStepForm.helpers";
import {
  FIXTURE_MULTISTEPFORM,
  FIXTURE_FORM_STEPS,
} from "../../../../fixtures/multiStepForm.fixtures";
import { expectErrorMessageVisible } from "../../../helpers/multiStepForm.helpers";

const multiStepForm = FIXTURE_MULTISTEPFORM;
const personalInfo = FIXTURE_FORM_STEPS.personalInfo;

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
      await submitForm();

      const requiredMsgs = screen.getAllByText(
        multiStepForm.personalInfo.required,
      );

      expect(requiredMsgs).toHaveLength(3);
    });

    it("renders the error message `Must be at least 2 characters` for the Name field", async () => {
      const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);

      await userEvent.type(nameInput, "J");
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.name.minLength);
    });

    it("renders the error message `Must be under 50 characters` for the Name field", async () => {
      const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);

      await userEvent.type(
        nameInput,
        "John Doe John Doe John Doe John Doe John Doe John J",
      );
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.name.maxLength);
    });

    it("renders the error message `Can only contain letters or spaces` for the Name field", async () => {
      const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);

      await userEvent.type(nameInput, "John123 Doe");
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.name.invalid);
    });

    it("renders the error message `Invalid Email Address` for the Email field", async () => {
      const emailInput = screen.getByLabelText(personalInfo.emailInputLabel);

      await userEvent.type(emailInput, "johndoe@");
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.email.invalid);
    });

    it("renders the error message `Invalid Phone Number` for the Phone Number field", async () => {
      const phoneInput = screen.getByLabelText(personalInfo.phoneInputLabel);

      await userEvent.type(phoneInput, "1234");
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.phone.invalid);
    });
  });

  describe("SelectPlan component", () => {
    test.todo(
      "renders the error message `Select a plan to continue` when no plan is selected",
    );

    test.todo("allows to toggle between monthly or yearly subscription");
  });
});
