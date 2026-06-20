import { screen } from "@testing-library/react";
import { FIXTURE_FORM_STEPS } from "../../fixtures/multiStepForm.fixtures";

/**
 * Expects the visibility of the following elements, in the PersonalInfo component:
 * - Main header
 * - Form description
 * - Form with the inputs: Name, Email Address and Phone Number
 */
export const expectPersonalInfoVisible = () => {
  const personalInfo = FIXTURE_FORM_STEPS.personalInfo;

  const title = screen.getByRole("heading", {
    level: 1,
    name: personalInfo.title,
  });

  const description = screen.getByText(personalInfo.description);

  const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);
  const emailInput = screen.getByLabelText(personalInfo.emailInputLabel);
  const phoneInput = screen.getByLabelText(personalInfo.phoneInputLabel);

  expect(title).toBeVisible();
  expect(description).toBeVisible();
  expect(nameInput).toBeVisible();
  expect(emailInput).toBeVisible();
  expect(phoneInput).toBeVisible();
};
