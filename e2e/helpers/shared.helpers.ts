// Reusable helper functions for mobile and desktop E2E tests

import { Page, expect } from "@playwright/test";
import {
  FIXTURE_MULTISTEPFORM,
  FIXTURE_FORM_STEPS,
} from "../../fixtures/multiStepForm.fixtures";

const multiStepForm = FIXTURE_MULTISTEPFORM;
const personalInfo = FIXTURE_FORM_STEPS.personalInfo;

/**
 * Asserts that the correct number of form steps is being displayed
 * @param page            - Playwright page
 * @param stepsListLength - number of steps being rendered
 */
export const expectNumberOfSteps = async (
  page: Page,
  stepsListLength: number,
) => {
  const steps = page.getByTestId("step");
  await expect(steps).toHaveCount(stepsListLength);

  for (const step of await steps.all()) {
    await expect(step).toBeVisible();
  }
};

/**
 * Asserts that only the current step has the selected style
 * @param page              - Playwright page
 * @param stepsListLength   - number of steps being rendered
 * @param selectedStepIndex - current selected step index
 */
export const expectSelectedStepStyle = async (
  page: Page,
  stepsListLength: number,
  currentStepIndex: number,
) => {
  const stepCircles = page.getByTestId("step-circle");

  for (let index = 0; index < stepsListLength; index++) {
    const stepCircle = stepCircles.nth(index);

    if (index === currentStepIndex) {
      // Step with selected class
      await expect(stepCircle).toHaveClass(/selected/);
    } else {
      // Step with no selected class
      await expect(stepCircle).not.toHaveClass(/selected/);
    }
  }
};

/**
 * Asserts that, the current form step is visible
 * @param page      - Playwright page
 * @param formTitle - Current form step main title
 */
export const expectCurrentStepVisible = async (
  page: Page,
  stepTitle: string,
) => {
  await expect(
    page.getByRole("heading", { level: 1, name: stepTitle }),
  ).toBeVisible();
};

/**
 * Fills the Personal info form inputs: Name, Email Address and Phone Number and submits the form
 * @param page         - Playwright page
 * @param name         - Name input value
 * @param emailAddress - Email Address input value
 * @param phoneNumber  - Phone Number input value
 */
export const submitPersonalInfo = async (
  page: Page,
  name: string,
  emailAddress: string,
  phoneNumber: string,
) => {
  const formContainer = page.getByTestId("personal-info-form");
  await expect(formContainer).toBeVisible();

  const nameInput = formContainer.getByLabel(personalInfo.nameInputLabel);
  const emailInput = formContainer.getByLabel(personalInfo.emailInputLabel);
  const phoneInput = formContainer.getByLabel(personalInfo.phoneInputLabel);

  await expect(nameInput).toBeVisible();
  await expect(emailInput).toBeVisible();
  await expect(phoneInput).toBeVisible();

  await nameInput.fill(name);
  await emailInput.fill(emailAddress);
  await phoneInput.fill(phoneNumber);

  await expectPersonalInfoInputValues(page, name, emailAddress, phoneNumber);

  await submitForm(page);
};

/**
 * Asserts that, the Personal Info inputs have the saved form data
 * @param page         - Playwright page
 * @param name         - Name input value
 * @param emailAddress - Email Address input value
 * @param phoneNumber  - Phone Number input value
 */
export const expectPersonalInfoInputValues = async (
  page: Page,
  name: string,
  emailAddress: string,
  phoneNumber: string,
) => {
  await expect(page.getByLabel(personalInfo.nameInputLabel)).toHaveValue(name);
  await expect(page.getByLabel(personalInfo.emailInputLabel)).toHaveValue(
    emailAddress,
  );
  await expect(page.getByLabel(personalInfo.phoneInputLabel)).toHaveValue(
    phoneNumber,
  );
};

/**
 * Submits the current form
 * @param page - Playwright page
 */
export const submitForm = async (page: Page) => {
  const submitBtn = page.getByRole("button", {
    name: multiStepForm.nextBtn,
  });

  // Prevents a potential error in the Safari browser, as the button is inside a fixed parent container
  await expect(submitBtn).toBeInViewport();

  await submitBtn.click();
};

/**
 * Goes to the previous form
 * @param page - Playwright page
 */
export const goBack = async (page: Page) => {
  const goBackBtn = page.getByRole("button", {
    name: multiStepForm.prevBtn,
  });

  // Prevents a potential error in the Safari browser, as the button is inside a fixed parent container
  await expect(goBackBtn).toBeInViewport();

  await goBackBtn.click();
};
