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
 * Fills the Personal info form inputs: Name, Email Address and Phone Number
 * @param page         - Playwright page
 * @param name         - Name input value
 * @param emailAddress - Email Address input value
 * @param phoneNumber  - Phone Number input value
 */
export const fillPersonalInfo = async (
  page: Page,
  name: string,
  emailAddress: string,
  phoneNumber: string,
) => {
  await page.getByLabel(personalInfo.nameInputLabel).fill(name);
  await page.getByLabel(personalInfo.emailInputLabel).fill(emailAddress);
  await page.getByLabel(personalInfo.phoneInputLabel).fill(phoneNumber);
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
 * Submits the current form
 * @param page - Playwright page
 */
export const submitForm = async (page: Page) => {
  const btn = page.getByRole("button", {
    name: multiStepForm.nextBtn,
  });

  await btn.click();
};
